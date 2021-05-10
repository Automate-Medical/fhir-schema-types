import fs from "fs";

const OUTDIR = "./types"

enum IElementKind {
  TYPE,
  INTERFACE
}

enum IElementFieldKind {
  CONST,
  ENUM,
  TYPE,
  TYPE_LIST,
  ENUM_LIST
}

interface IElementSchema {
  properties?: { [key: string]: any };
  required?: string[],
  description: string;
  $ref?: string;
  type?: string;
  items?: {
    $ref: string;
  }
}

const scalars = ["number", "string", "boolean"];

class ElementFromDefinition {
  public kind: IElementKind;
  public name: string;
  public description: string;
  public type?: string;
  public fields?: {
    name: string,
    type: string | [],
    description: string,
    required: boolean,
    kind: IElementFieldKind
  }[];

  constructor(name: string, element: IElementSchema, refResolver: { [key: string]: string } ) {
    console.log(`** Building ${name}`)
    this.type = element.type;
    this.name = name;
    this.description = element.description;
    // If the definition has properties, collect fields becase it's an interface
    if (element.properties) {
      this.kind = IElementKind.INTERFACE;
      this.fields = [];

      Object.keys(element.properties).forEach(name => {
        // @ts-ignore
        const property = element.properties[name];
        let type;
        let kind = IElementFieldKind.TYPE;

        // Is it a constant?
        if (property.const) {
          kind = IElementFieldKind.CONST
          type = property.const
        // Is it an enum?
        } else if (property.enum) {
          kind = IElementFieldKind.ENUM
          type = property.enum.map((item: string) => item)
        } else if (property.$ref) {
          kind = IElementFieldKind.TYPE
          type = property.$ref.split("/")[2]
        } else if (property.type == "array") {
          // is it an enum array or a typed array
          if (property.items.$ref) {
            kind = IElementFieldKind.TYPE_LIST
            type = property.items.$ref.split("/")[2]
          } else if (property.items.enum) {
            kind = IElementFieldKind.ENUM_LIST
            type = property.items.enum.map((item: string) => item)
          }
        } else {
          kind = IElementFieldKind.TYPE
          type = property.type
        }

        this.fields?.push({
          name,
          type,
          kind,
          // @ts-ignore
          description: element.properties[name].description,
          required: !!element.required && (element.required.indexOf(name) >= 0)
        })
      });

    // Otherwise, treat it like a type alias
    } else {
      this.kind = IElementKind.TYPE
    }
  }

  public toString(): string | undefined {
    if (scalars.includes(this.name)) {
      return undefined;
    }

    switch (this.kind) {
      case IElementKind.TYPE:
        // @todo don't use any
        return `export type ${this.name} = ${this.type};\n`
      case IElementKind.INTERFACE:
        // Build fields into interfaces
        const fields = this.fields?.map((field) => {
          let s: string = "";
          s += "  /**\n"
          s += field.description.split("\n").map((line) => `  * ${line}`).join("\n")
          s += "\n  */\n"
          s += `  ${field.name}`
          s += (field.required ? ": " : "?: ")
          switch (field.kind) {
            case IElementFieldKind.CONST:
              s += `"${field.type}"`
              break;
            case IElementFieldKind.ENUM:
              // @ts-ignore
              s += field.type.map((item) => `"${item}"`).join(" | ")
              break;
            case IElementFieldKind.ENUM_LIST:
              // @ts-ignore
              s += `(${field.type.map((item: string) => `"${item}"`).join(" | ")})[]`
              break;
            case IElementFieldKind.TYPE_LIST:
              s += `${field.type}[]`;
              break;
            default:
              s += field.type;
          }

          s+= ";\n"
          return s;
        })

        // Build up imports
        const imports = this.fields?.filter((field) => field.type != this.name)
          .filter((value) => !scalars.includes(value.type.toString())) // Don't import JavaScript native types
          .filter((value) => value.kind == IElementFieldKind.TYPE || value.kind == IElementFieldKind.TYPE_LIST) // Don't import things that arent other types
          .map((field) => field.type)
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((type) => `import { ${type} } from "./${type}"`)
          .join("\n")

        return `${imports}\n/**\n${this.description.split("\n").map((line) => `* ${line}`).join("\n")}\n*/\nexport interface ${this.name} {\n${fields?.join("\n")}\n}\n`;
    }
  }
}

// Handles returning the schema JSON
function getSchema(schema: string) {
  return JSON.parse(fs.readFileSync(`./hl7/${schema}/fhir.schema.json`, "utf8"));
}

// Function to write version to disk
function writeVersion(name: string, version: ElementFromDefinition[]) {
  // Write each element to its seperate file
  version.forEach((element) => {
    const file = `${OUTDIR}/${name}/${element.name}.ts`
    if (!fs.existsSync(`${OUTDIR}/${name}`)) { fs.mkdirSync(`${OUTDIR}/${name}`); }
    const string = element.toString()
    // If it returns undefined, don't write a file
    if (!!string) {
      fs.writeFileSync(file, string);
    }

  })

  // Write the index for all element definitoins
  const index = version.filter((element) => !scalars.includes(element.type || "")).map((element) => {
    return `export { ${element.name} } from './${element.name}';`
  }).join("\n");

  const file = `${OUTDIR}/${name}/index.ts`;
  fs.writeFileSync(file, index);
}

// Function to build the version of FHIR
function buildVersion(version: string): ElementFromDefinition[] {
  const schema = getSchema(version);

  const definitions = schema.definitions;
  const refToType: { [key: string]: string }  = {}

  // [#/defintions/...] = Name
  Object.keys(schema.discriminator.mapping).forEach((key) => {
    const val = schema.discriminator.mapping[key];
    refToType[val] = key;
  });

  return Object.keys(definitions).map((element) => {
    return new ElementFromDefinition(element, definitions[element], refToType)
  })
}

// Function to build up a list of versions we need to build by looking at what's in a directory
function getDirectories(source: string) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter((dirent: fs.Dirent) => dirent.isDirectory())
    .map((dirent: fs.Dirent) => dirent.name)
}

const versions = getDirectories("./hl7");
let index;

versions.forEach((version: string) => {
  console.log(`* Building ${version}`)
  const versionToWrite = buildVersion(version);
  console.log(`* Writing ${version}`)
  writeVersion(version, versionToWrite)
});



import { Extension } from "./Extension"
import { id } from "./id"
import { Element } from "./Element"
import { StructureMap_Input } from "./StructureMap_Input"
import { StructureMap_Rule } from "./StructureMap_Rule"
/**
* A Map of relationships between 2 structures that can be used to transform data.
*/
export interface StructureMap_Group {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
  * 
  * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
  */
  modifierExtension?: Extension[];

  /**
  * A unique name for the group for the convenience of human readers.
  */
  name?: id;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * Another group that this group adds rules to.
  */
  extends?: id;

  /**
  * Extensions for extends
  */
  _extends?: Element;

  /**
  * If this is the default rule set to apply for the source type or this combination of types.
  */
  typeMode?: "none" | "types" | "type-and-types";

  /**
  * Extensions for typeMode
  */
  _typeMode?: Element;

  /**
  * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
  */
  documentation?: string;

  /**
  * Extensions for documentation
  */
  _documentation?: Element;

  /**
  * A name assigned to an instance of data. The instance must be provided when the mapping is invoked.
  */
  input: StructureMap_Input[];

  /**
  * Transform Rule from source to target.
  */
  rule: StructureMap_Rule[];

}

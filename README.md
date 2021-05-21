# fhir-schema-types

An npm-published set of TypeScript definitions for Fast Healthcare Interoperability Resources (FHIR).

## Installation and use

Install this into an existing TypeScript project with:

`npm install @automate-medical/fhir-schema-types`

The definitions are exported in the root level of the module, by version. You can import the latest _stable_ version by default. You can also import named versions.

```
import FHIR from '@automate-medical/fhir-schema-types'

import { R4 as FHIR } from '@automate-medical/fhir-schema-types'
```

You can also import specific versions.

`import { v4_6_0 as FHIR } from '@automate-medical/fhir-schema-types'`

This library exposes type and interface definitions in TypeScript for all of the elements and resources in FHIR. You can use it in your TypeScript projects to bring type-safety guarantees to your programs that manipulate FHIR documents. We wrote a custom JSON schema parser to achieve this, and to ensure maximum flexibility so that the project can be maintained into the future.

## Features & Roadmap

*Note* This project is semantically versioned. We make no commitments about the stability of our interfaces until 1.0.0.

- [X] Simple translation of JSON Schema definitions to `type` and `interface` definitions
- [X] Support for `const` values
- [ ] Support for using named `enum` types instead of `union` types that enumerate field options
- [ ] Support for `class` definitions instead of interfaces
- [ ] Public test suite/CICD
- [X] Support for version 4.0.1 (R4) and latest published 4.6.0
- [ ] Programatically download JSON Schema definitions for every version of FHIR and export schema
- [ ] Support definitions for the Graphql definitions provided in 4.6.0+
- [ ] Define a contributor license agreement
- [X] Publish NPM module
- [ ] NPM build should include a bundle + sourcemaps instead of the raw build

## Contributing

Building the project can be done with:

`npm run build`

At present, you must create a directory in the root of the project called `hl7`, inside of which you must create specific fhir.schema.json files for each of the versions you need to build. In the future, the project will download the assets itself.

## License and notice

Copyright Automate Medical Inc.

FHIR® is the registered trademark of HL7 and is used with the permission of HL7.

The use of the term FHIR is in no way endorsed, or sponsored by, or part of the trademark steward. Automate Medical Inc. truthfully asserts that this project complies with version 4.0.1 and 4.6.0 of the FHIR standard as a matter of fair use.
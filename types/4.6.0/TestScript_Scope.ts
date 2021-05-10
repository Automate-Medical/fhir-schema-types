import { Extension } from "./Extension"
import { canonical } from "./canonical"
import { CodeableConcept } from "./CodeableConcept"
/**
* A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
*/
export interface TestScript_Scope {
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
  * The specific conformance artifact being tested. The canonical reference can be version-specific.
  */
  artifact: canonical;

  /**
  * The expectation of whether the test must pass for the system to be considered conformant with the artifact: required - all tests must pass, optional - all test are expected to pass but non-pass status may be allowed.
  */
  conformance?: CodeableConcept;

  /**
  * The phase of testing for this artifact: unit - development / implementation phase, integration - internal system to system phase, production - live system to system phase (Note, this may involve pii/phi data).
  */
  phase?: CodeableConcept;

}

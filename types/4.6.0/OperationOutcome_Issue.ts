import { Extension } from "./Extension"
import { code } from "./code"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
/**
* A collection of error, warning, or information messages that result from a system action.
*/
export interface OperationOutcome_Issue {
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
  * Indicates whether the issue indicates a variation from successful processing.
  */
  severity?: code;

  /**
  * Extensions for severity
  */
  _severity?: Element;

  /**
  * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
  */
  code?: code;

  /**
  * Extensions for code
  */
  _code?: Element;

  /**
  * Additional details about the error. This may be a text description of the error or a system code that identifies the error.
  */
  details?: CodeableConcept;

  /**
  * Additional diagnostic information about the issue.
  */
  diagnostics?: string;

  /**
  * Extensions for diagnostics
  */
  _diagnostics?: Element;

  /**
  * This element is deprecated because it is XML specific. It is replaced by issue.expression, which is format independent, and simpler to parse. 
  * 
  * For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be "http." + the parameter name.
  */
  location?: string[];

  /**
  * Extensions for location
  */
  _location?: Element[];

  /**
  * A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.
  */
  expression?: string[];

  /**
  * Extensions for expression
  */
  _expression?: Element[];

}

import { Extension } from "./Extension"
import { code } from "./code"
import { Element } from "./Element"
import { ValueSet_Designation } from "./ValueSet_Designation"
/**
* A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
*/
export interface ValueSet_Concept {
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
  * Specifies a code for the concept to be included or excluded.
  */
  code?: code;

  /**
  * Extensions for code
  */
  _code?: Element;

  /**
  * The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
  */
  display?: string;

  /**
  * Extensions for display
  */
  _display?: Element;

  /**
  * Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
  */
  designation?: ValueSet_Designation[];

}

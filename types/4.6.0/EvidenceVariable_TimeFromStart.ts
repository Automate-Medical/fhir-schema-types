import { Extension } from "./Extension"
import { Element } from "./Element"
import { Quantity } from "./Quantity"
import { Range } from "./Range"
import { Annotation } from "./Annotation"
/**
* The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
*/
export interface EvidenceVariable_TimeFromStart {
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
  * A short, natural language description.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * Used to express the observation at a defined amount of time after the study start.
  */
  quantity?: Quantity;

  /**
  * Used to express the observation within a period after the study start.
  */
  range?: Range;

  /**
  * A human-readable string to clarify or explain concepts about the resource.
  */
  note?: Annotation[];

}

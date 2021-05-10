import { Extension } from "./Extension"
import { Element } from "./Element"
import { Annotation } from "./Annotation"
import { CodeableConcept } from "./CodeableConcept"
import { Quantity } from "./Quantity"
import { decimal } from "./decimal"
import { Range } from "./Range"
/**
* A fact or piece of data from a  study of a large quantity of numerical data.  A mathematical or quantified characteristic of a group of observations.
*/
export interface Statistic_AttributeEstimate1 {
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
  * Human-readable summary of the estimate.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * Footnote or explanatory note about the estimate.
  */
  note?: Annotation[];

  /**
  * The type of attribute estimate, eg confidence interval or p value.
  */
  type?: CodeableConcept;

  /**
  * The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure.
  */
  quantity?: Quantity;

  /**
  * Use 95 for a 95% confidence interval.
  */
  level?: decimal;

  /**
  * Extensions for level
  */
  _level?: Element;

  /**
  * Lower bound of confidence interval.
  */
  range?: Range;

}

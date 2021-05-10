import { Extension } from "./Extension"
import { Element } from "./Element"
import { Annotation } from "./Annotation"
import { integer } from "./integer"
import { Quantity } from "./Quantity"
import { OrderedDistribution_Interval } from "./OrderedDistribution_Interval"
/**
* An ordered list (distribution) of statistics.
*/
export interface OrderedDistribution {
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
  * A description of the content and value of the statistic.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * Footnotes and/or explanatory notes.
  */
  note?: Annotation[];

  /**
  * Number of intervals in an array, eg 4 for quartiles.
  */
  numberOfIntervals?: integer;

  /**
  * Extensions for numberOfIntervals
  */
  _numberOfIntervals?: Element;

  /**
  * Bottom of first interval.
  */
  bottomOfFirstInterval?: Quantity;

  /**
  * Interval.
  */
  interval: OrderedDistribution_Interval[];

  /**
  * Singular value of the statistic at the upper bound of the interval.
  */
  topOfInterval?: Quantity;

}

import { Extension } from "./Extension"
import { Quantity } from "./Quantity"
/**
* A range of ratios expressed as a low and high numerator and a denominator.
*/
export interface RatioRange {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * The value of the low limit numerator.
  */
  lowNumerator?: Quantity;

  /**
  * The value of the high limit numerator.
  */
  highNumerator?: Quantity;

  /**
  * The value of the denominator.
  */
  denominator?: Quantity;

}

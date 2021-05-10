import { Extension } from "./Extension"
import { CodeableReference } from "./CodeableReference"
import { Ratio } from "./Ratio"
import { Quantity } from "./Quantity"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
/**
* An ingredient of a manufactured item or pharmaceutical product.
*/
export interface Ingredient_ReferenceStrength {
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
  * Relevant reference substance.
  */
  substance?: CodeableReference;

  /**
  * Strength expressed in terms of a reference substance. When there is a range of strengths, this represents the lower limit.
  */
  strengthRatio?: Ratio;

  /**
  * Strength expressed in terms of a reference substance. When there is a range of strengths, this represents the lower limit.
  */
  strengthQuantity?: Quantity;

  /**
  * Strength expressed in terms of a reference substance. When there is a range of strengths, this represents the upper limit.
  */
  strengthHighLimitRatio?: Ratio;

  /**
  * Strength expressed in terms of a reference substance. When there is a range of strengths, this represents the upper limit.
  */
  strengthHighLimitQuantity?: Quantity;

  /**
  * For when strength is measured at a particular point or distance.
  */
  measurementPoint?: string;

  /**
  * Extensions for measurementPoint
  */
  _measurementPoint?: Element;

  /**
  * The country or countries for which the strength range applies.
  */
  country?: CodeableConcept[];

}

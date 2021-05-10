import { Extension } from "./Extension"
import { Ratio } from "./Ratio"
import { CodeableConcept } from "./CodeableConcept"
import { Quantity } from "./Quantity"
import { Element } from "./Element"
import { Ingredient_ReferenceStrength } from "./Ingredient_ReferenceStrength"
/**
* An ingredient of a manufactured item or pharmaceutical product.
*/
export interface Ingredient_Strength {
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
  * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
  */
  presentationRatio?: Ratio;

  /**
  * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
  */
  presentationCodeableConcept?: CodeableConcept;

  /**
  * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
  */
  presentationQuantity?: Quantity;

  /**
  * An upper limit for the quantity of substance in the unit of presentation. When there is a range of strengths, this represents the upper limit.
  */
  presentationHighLimitRatio?: Ratio;

  /**
  * An upper limit for the quantity of substance in the unit of presentation. When there is a range of strengths, this represents the upper limit.
  */
  presentationHighLimitQuantity?: Quantity;

  /**
  * A textual represention of either the whole of the presentation strength or a part of it - with the rest being in Strength.presentation as a ratio.
  */
  presentationText?: string;

  /**
  * Extensions for presentationText
  */
  _presentationText?: Element;

  /**
  * The strength per unitary volume (or mass).
  */
  concentrationRatio?: Ratio;

  /**
  * The strength per unitary volume (or mass).
  */
  concentrationCodeableConcept?: CodeableConcept;

  /**
  * The strength per unitary volume (or mass).
  */
  concentrationQuantity?: Quantity;

  /**
  * An upper limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the lower limit.
  */
  concentrationHighLimitRatio?: Ratio;

  /**
  * An upper limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the lower limit.
  */
  concentrationHighLimitQuantity?: Quantity;

  /**
  * A textual represention of either the whole of the concentration strength or a part of it - with the rest being in Strength.concentration as a ratio.
  */
  concentrationText?: string;

  /**
  * Extensions for concentrationText
  */
  _concentrationText?: Element;

  /**
  * A code that indicates if the strength is, for example, based on the ingredient substance as stated or on the substance base (when the ingredient is a salt).
  */
  basis?: CodeableConcept;

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

  /**
  * Strength expressed in terms of a reference substance.
  */
  referenceStrength?: Ingredient_ReferenceStrength[];

}

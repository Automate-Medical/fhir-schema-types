import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { CodeableReference } from "./CodeableReference"
import { Timing } from "./Timing"
import { Quantity } from "./Quantity"
import { Element } from "./Element"
/**
* A record of food or fluid that is being consumed by a patient.   A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient's memory, from a nutrition label,  or from a clinician documenting observed intake.
*/
export interface NutritionIntake_ConsumedItem {
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
  * Indicates what a category of item that was consumed: eg., food, fluid, enteral, etc.
  */
  type: CodeableConcept;

  /**
  * Identifies the food or fluid product that was consumed. This is potentially a link to a resource representing the details of the food product (TBD) or a simple attribute carrying a code that identifies the food from a known list of foods.
  */
  nutritionProduct: CodeableReference;

  /**
  * Scheduled frequency of consumption.
  */
  schedule?: Timing;

  /**
  * Quantity of the specified food.
  */
  amount?: Quantity;

  /**
  * Rate at which enteral feeding was administered.
  */
  rate?: Quantity;

  /**
  * Indicator when a patient is in a setting where it is helpful to know if food was not consumed, such as it was refused, held (as in tube feedings), or otherwise not provided. If a consumption is being recorded from an app, such as MyFitnessPal, this indicator will likely not be used.
  */
  notConsumed?: boolean;

  /**
  * Extensions for notConsumed
  */
  _notConsumed?: Element;

  /**
  * Document the reason the food or fluid was not consumed, such as refused, held, etc.
  */
  notConsumedReason?: CodeableConcept;

}

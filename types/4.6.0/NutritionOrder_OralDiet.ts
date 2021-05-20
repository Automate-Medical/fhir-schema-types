import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Timing } from "./Timing"
import { NutritionOrder_Nutrient } from "./NutritionOrder_Nutrient"
import { NutritionOrder_Texture } from "./NutritionOrder_Texture"
import { Element } from "./Element"
/**
* A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
*/
export interface NutritionOrder_OralDiet {
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
  * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
  */
  type?: CodeableConcept[];

  /**
  * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
  */
  schedule?: Timing[];

  /**
  * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
  */
  nutrient?: NutritionOrder_Nutrient[];

  /**
  * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
  */
  texture?: NutritionOrder_Texture[];

  /**
  * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
  */
  fluidConsistencyType?: CodeableConcept[];

  /**
  * Free text or additional instructions or information pertaining to the oral diet.
  */
  instruction?: string;

  /**
  * Extensions for instruction
  */
  _instruction?: Element;

}

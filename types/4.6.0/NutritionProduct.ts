import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
import { NutritionProduct_Nutrient } from "./NutritionProduct_Nutrient"
import { NutritionProduct_Ingredient } from "./NutritionProduct_Ingredient"
import { CodeableReference } from "./CodeableReference"
import { NutritionProduct_ProductCharacteristic } from "./NutritionProduct_ProductCharacteristic"
import { NutritionProduct_Instance } from "./NutritionProduct_Instance"
import { Annotation } from "./Annotation"
/**
* A food or fluid product that is consumed by patients.
*/
export interface NutritionProduct {
  /**
  * This is a NutritionProduct resource
  */
  resourceType: "NutritionProduct";

  /**
  * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
  */
  id?: id;

  /**
  * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
  */
  meta?: Meta;

  /**
  * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
  */
  implicitRules?: uri;

  /**
  * Extensions for implicitRules
  */
  _implicitRules?: Element;

  /**
  * The base language in which the resource is written.
  */
  language?: code;

  /**
  * Extensions for language
  */
  _language?: Element;

  /**
  * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
  */
  text?: Narrative;

  /**
  * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope.
  */
  contained?: ResourceList[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
  * 
  * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
  */
  modifierExtension?: Extension[];

  /**
  * The current state of the product.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * Nutrition products can have different classifications - according to its nutritional properties, preparation methods, etc.
  */
  category?: CodeableConcept[];

  /**
  * The code assigned to the product, for example a manufacturer number or other terminology.
  */
  code?: CodeableConcept;

  /**
  * The organisation (manufacturer, representative or legal authorisation holder) that is responsible for the device.
  */
  manufacturer?: Reference[];

  /**
  * The product's nutritional information expressed by the nutrients.
  */
  nutrient?: NutritionProduct_Nutrient[];

  /**
  * Ingredients contained in this product.
  */
  ingredient?: NutritionProduct_Ingredient[];

  /**
  * Allergens that are known or suspected to be a part of this nutrition product.
  */
  knownAllergen?: CodeableReference[];

  /**
  * Specifies descriptive properties of the nutrition product.
  */
  productCharacteristic?: NutritionProduct_ProductCharacteristic[];

  /**
  * Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
  */
  instance?: NutritionProduct_Instance;

  /**
  * Comments made about the product.
  */
  note?: Annotation[];

}

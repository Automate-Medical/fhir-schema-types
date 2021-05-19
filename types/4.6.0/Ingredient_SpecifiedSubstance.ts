import { Extension } from "./Extension"
import { CodeableReference } from "./CodeableReference"
import { CodeableConcept } from "./CodeableConcept"
import { Ingredient_Strength } from "./Ingredient_Strength"
/**
* An ingredient of a manufactured item or pharmaceutical product.
*/
export interface Ingredient_SpecifiedSubstance {
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
  * Substance as a 'specified substance', implying extra substance related characteristics.
  */
  code: CodeableReference;

  /**
  * The group of specified substance, e.g. group 1 to 4, where the group categorises the level of 
  * description of the substance according to standardised sets of properties.
  */
  group: CodeableConcept;

  /**
  * Confidentiality level of the specified substance as the ingredient.
  */
  confidentiality?: CodeableConcept;

  /**
  * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
  */
  strength?: Ingredient_Strength[];

}

import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { MedicationKnowledge_Cost } from "./MedicationKnowledge_Cost"
import { CodeableConcept } from "./CodeableConcept"
import { Quantity } from "./Quantity"
import { Reference } from "./Reference"
/**
* Information about a medication that is used to support knowledge.
*/
export interface MedicationKnowledge_Packaging {
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
  * The business identifier of the packaged medication.
  */
  identifier?: Identifier;

  /**
  * The cost of the packaged medication.
  */
  cost?: MedicationKnowledge_Cost;

  /**
  * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
  */
  type?: CodeableConcept;

  /**
  * The number of product units the package would contain if fully loaded.
  */
  quantity?: Quantity;

  /**
  * The device used to administer the medication (e.g. scoop, applicator, syringe).
  */
  device?: Reference;

  /**
  * Material type of the package item.
  */
  material?: CodeableConcept;

  /**
  * Allows packages within packages (e.g. blister packages within a box or vials of medications within a box).
  */
  packaging?: MedicationKnowledge_Packaging[];

}

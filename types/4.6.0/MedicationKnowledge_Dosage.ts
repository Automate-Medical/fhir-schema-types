import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Dosage } from "./Dosage"
/**
* Information about a medication that is used to support knowledge.
*/
export interface MedicationKnowledge_Dosage {
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
  * The type or category of dosage for a given medication (for example, prophylaxis, maintenance, therapeutic, etc.).
  */
  type: CodeableConcept;

  /**
  * Dosage for the medication for the specific guidelines.
  */
  dosage: Dosage[];

}

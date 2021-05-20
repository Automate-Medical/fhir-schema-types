import { Extension } from "./Extension"
import { MedicationKnowledge_Dosage } from "./MedicationKnowledge_Dosage"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
import { MedicationKnowledge_PatientCharacteristics } from "./MedicationKnowledge_PatientCharacteristics"
/**
* Information about a medication that is used to support knowledge.
*/
export interface MedicationKnowledge_AdministrationGuidelines {
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
  * Dosage for the medication for the specific guidelines.
  */
  dosage?: MedicationKnowledge_Dosage[];

  /**
  * Indication for use that apply to the specific administration guidelines.
  */
  indicationCodeableConcept?: CodeableConcept;

  /**
  * Indication for use that apply to the specific administration guidelines.
  */
  indicationReference?: Reference;

  /**
  * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
  */
  patientCharacteristics?: MedicationKnowledge_PatientCharacteristics[];

}

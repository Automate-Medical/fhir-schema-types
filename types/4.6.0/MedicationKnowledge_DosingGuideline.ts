import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { MedicationKnowledge_Dosage } from "./MedicationKnowledge_Dosage"
import { MedicationKnowledge_PatientCharacteristic } from "./MedicationKnowledge_PatientCharacteristic"
/**
* Information about a medication that is used to support knowledge.
*/
export interface MedicationKnowledge_DosingGuideline {
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
  * The overall intention of the treatment, for example, prophylactic, supporative, curative, etc.
  */
  treatmentIntent?: CodeableConcept;

  /**
  * Dosage for the medication for the specific guidelines.
  */
  dosage?: MedicationKnowledge_Dosage[];

  /**
  * The type of the treatment that the guideline applies to, for example, long term therapy, first line treatment, etc.
  */
  administrationTreatment?: CodeableConcept;

  /**
  * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
  */
  patientCharacteristic?: MedicationKnowledge_PatientCharacteristic[];

}

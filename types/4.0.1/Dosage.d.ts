import { Extension } from "./Extension";
import { integer } from "./integer";
import { Element } from "./Element";
import { CodeableConcept } from "./CodeableConcept";
import { Timing } from "./Timing";
import { Dosage_DoseAndRate } from "./Dosage_DoseAndRate";
import { Ratio } from "./Ratio";
import { Quantity } from "./Quantity";
/**
* Indicates how the medication is/was taken or should be taken by the patient.
*/
export interface Dosage {
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
    * Indicates the order in which the dosage instructions should be applied or interpreted.
    */
    sequence?: integer;
    /**
    * Extensions for sequence
    */
    _sequence?: Element;
    /**
    * Free text dosage instructions e.g. SIG.
    */
    text?: string;
    /**
    * Extensions for text
    */
    _text?: Element;
    /**
    * Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps").
    */
    additionalInstruction?: CodeableConcept[];
    /**
    * Instructions in terms that are understood by the patient or consumer.
    */
    patientInstruction?: string;
    /**
    * Extensions for patientInstruction
    */
    _patientInstruction?: Element;
    /**
    * When medication should be administered.
    */
    timing?: Timing;
    /**
    * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
    */
    asNeededBoolean?: boolean;
    /**
    * Extensions for asNeededBoolean
    */
    _asNeededBoolean?: Element;
    /**
    * Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
    */
    asNeededCodeableConcept?: CodeableConcept;
    /**
    * Body site to administer to.
    */
    site?: CodeableConcept;
    /**
    * How drug should enter body.
    */
    route?: CodeableConcept;
    /**
    * Technique for administering medication.
    */
    method?: CodeableConcept;
    /**
    * The amount of medication administered.
    */
    doseAndRate?: Dosage_DoseAndRate[];
    /**
    * Upper limit on medication per unit of time.
    */
    maxDosePerPeriod?: Ratio;
    /**
    * Upper limit on medication per administration.
    */
    maxDosePerAdministration?: Quantity;
    /**
    * Upper limit on medication per lifetime of the patient.
    */
    maxDosePerLifetime?: Quantity;
}

import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Reference } from "./Reference";
import { Period } from "./Period";
import { Timing } from "./Timing";
/**
* The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care.
*/
export interface CareTeam_Participant {
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
    * Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc.
    */
    role?: CodeableConcept;
    /**
    * The specific person or organization who is participating/expected to participate in the care team.
    */
    member?: Reference;
    /**
    * The organization of the practitioner.
    */
    onBehalfOf?: Reference;
    /**
    * When the member is generally available within this care team.
    */
    coveragePeriod?: Period;
    /**
    * When the member is generally available within this care team.
    */
    coverageTiming?: Timing;
}

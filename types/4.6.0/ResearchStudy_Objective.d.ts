import { Extension } from "./Extension";
import { Element } from "./Element";
import { CodeableConcept } from "./CodeableConcept";
import { markdown } from "./markdown";
/**
* A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques. A ResearchStudy involves the gathering of information about human or animal subjects or stability data about drug products or drug substances.
*/
export interface ResearchStudy_Objective {
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
    * Unique, human-readable label for this objective of the study.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * The kind of study objective.
    */
    type?: CodeableConcept;
    /**
    * Free text description of the objective of the study.  This is what the study is trying to achieve rather than how it is going to achieve it (see ResearchStudy.description).
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
}

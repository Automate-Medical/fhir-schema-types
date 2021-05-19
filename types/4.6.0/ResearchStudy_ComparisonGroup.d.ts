import { Extension } from "./Extension";
import { Element } from "./Element";
import { Identifier } from "./Identifier";
import { CodeableConcept } from "./CodeableConcept";
import { markdown } from "./markdown";
import { Reference } from "./Reference";
/**
* A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques. A ResearchStudy involves the gathering of information about human or animal subjects or stability data about drug products or drug substances.
*/
export interface ResearchStudy_ComparisonGroup {
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
    * Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily.
    */
    identifierUri?: string;
    /**
    * Extensions for identifierUri
    */
    _identifierUri?: Element;
    /**
    * Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily.
    */
    identifierIdentifier?: Identifier;
    /**
    * Unique, human-readable label for this comparisonGroup of the study.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * Categorization of study comparisonGroup, e.g. experimental, active comparator, placebo comparater.
    */
    type?: CodeableConcept;
    /**
    * A succinct description of the path through the study that would be followed by a subject adhering to this comparisonGroup.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * Interventions or exposures in this comparisonGroup or cohort.
    */
    intendedExposure?: Reference[];
    /**
    * Group of participants who were enrolled in study comparisonGroup.
    */
    observedGroup?: Reference;
}
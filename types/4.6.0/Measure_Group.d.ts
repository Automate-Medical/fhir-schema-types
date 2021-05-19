import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { code } from "./code";
import { Measure_Population } from "./Measure_Population";
import { Measure_Stratifier } from "./Measure_Stratifier";
/**
* The Measure resource provides the definition of a quality measure.
*/
export interface Measure_Group {
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
    * Indicates a meaning for the group. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing groups to be correlated across measures.
    */
    code?: CodeableConcept;
    /**
    * The human readable description of this population group.
    */
    description?: string;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.
    */
    type?: CodeableConcept[];
    /**
    * The population basis specifies the type of elements in the population. For a subject-based measure, this is boolean (because the subject and the population basis are the same, and the population criteria define yes/no values for each individual in the population). For measures that have a population basis that is different than the subject, this element specifies the type of the population basis. For example, an encounter-based measure has a subject of Patient and a population basis of Encounter, and the population criteria all return lists of Encounters.
    */
    basis?: code;
    /**
    * Extensions for basis
    */
    _basis?: Element;
    /**
    * Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented.
    */
    scoring?: CodeableConcept;
    /**
    * Defines the expected units of measure for the measure score. This element SHOULD be specified as a UCUM unit.
    */
    scoringUnit?: CodeableConcept;
    /**
    * Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range).
    */
    improvementNotation?: CodeableConcept;
    /**
    * A population criteria for the measure.
    */
    population?: Measure_Population[];
    /**
    * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
    */
    stratifier?: Measure_Stratifier[];
}

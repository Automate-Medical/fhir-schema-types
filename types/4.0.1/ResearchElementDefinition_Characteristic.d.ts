import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Expression } from "./Expression";
import { DataRequirement } from "./DataRequirement";
import { UsageContext } from "./UsageContext";
import { Period } from "./Period";
import { Duration } from "./Duration";
import { Timing } from "./Timing";
/**
* The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
*/
export interface ResearchElementDefinition_Characteristic {
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
    * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
    */
    definitionCodeableConcept?: CodeableConcept;
    /**
    * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
    */
    definitionCanonical?: string;
    /**
    * Extensions for definitionCanonical
    */
    _definitionCanonical?: Element;
    /**
    * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
    */
    definitionExpression?: Expression;
    /**
    * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
    */
    definitionDataRequirement?: DataRequirement;
    /**
    * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
    */
    usageContext?: UsageContext[];
    /**
    * When true, members with this characteristic are excluded from the element.
    */
    exclude?: boolean;
    /**
    * Extensions for exclude
    */
    _exclude?: Element;
    /**
    * Specifies the UCUM unit for the outcome.
    */
    unitOfMeasure?: CodeableConcept;
    /**
    * A narrative description of the time period the study covers.
    */
    studyEffectiveDescription?: string;
    /**
    * Extensions for studyEffectiveDescription
    */
    _studyEffectiveDescription?: Element;
    /**
    * Indicates what effective period the study covers.
    */
    studyEffectiveDateTime?: string;
    /**
    * Extensions for studyEffectiveDateTime
    */
    _studyEffectiveDateTime?: Element;
    /**
    * Indicates what effective period the study covers.
    */
    studyEffectivePeriod?: Period;
    /**
    * Indicates what effective period the study covers.
    */
    studyEffectiveDuration?: Duration;
    /**
    * Indicates what effective period the study covers.
    */
    studyEffectiveTiming?: Timing;
    /**
    * Indicates duration from the study initiation.
    */
    studyEffectiveTimeFromStart?: Duration;
    /**
    * Indicates how elements are aggregated within the study effective period.
    */
    studyEffectiveGroupMeasure?: "mean" | "median" | "mean-of-mean" | "mean-of-median" | "median-of-mean" | "median-of-median";
    /**
    * Extensions for studyEffectiveGroupMeasure
    */
    _studyEffectiveGroupMeasure?: Element;
    /**
    * A narrative description of the time period the study covers.
    */
    participantEffectiveDescription?: string;
    /**
    * Extensions for participantEffectiveDescription
    */
    _participantEffectiveDescription?: Element;
    /**
    * Indicates what effective period the study covers.
    */
    participantEffectiveDateTime?: string;
    /**
    * Extensions for participantEffectiveDateTime
    */
    _participantEffectiveDateTime?: Element;
    /**
    * Indicates what effective period the study covers.
    */
    participantEffectivePeriod?: Period;
    /**
    * Indicates what effective period the study covers.
    */
    participantEffectiveDuration?: Duration;
    /**
    * Indicates what effective period the study covers.
    */
    participantEffectiveTiming?: Timing;
    /**
    * Indicates duration from the participant's study entry.
    */
    participantEffectiveTimeFromStart?: Duration;
    /**
    * Indicates how elements are aggregated within the study effective period.
    */
    participantEffectiveGroupMeasure?: "mean" | "median" | "mean-of-mean" | "mean-of-median" | "median-of-mean" | "median-of-median";
    /**
    * Extensions for participantEffectiveGroupMeasure
    */
    _participantEffectiveGroupMeasure?: Element;
}

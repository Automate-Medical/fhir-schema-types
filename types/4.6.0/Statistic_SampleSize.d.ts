import { Extension } from "./Extension";
import { Element } from "./Element";
import { Annotation } from "./Annotation";
import { unsignedInt } from "./unsignedInt";
/**
* A fact or piece of data from a  study of a large quantity of numerical data.  A mathematical or quantified characteristic of a group of observations.
*/
export interface Statistic_SampleSize {
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
    * Human-readable summary of population sample size.
    */
    description?: string;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * Footnote or explanatory note about the sample size.
    */
    note?: Annotation[];
    /**
    * Number of participants in the population.
    */
    numberOfStudies?: unsignedInt;
    /**
    * Extensions for numberOfStudies
    */
    _numberOfStudies?: Element;
    /**
    * A human-readable string to clarify or explain concepts about the sample size.
    */
    numberOfParticipants?: unsignedInt;
    /**
    * Extensions for numberOfParticipants
    */
    _numberOfParticipants?: Element;
    /**
    * Number of participants with known results for measured variables.
    */
    knownDataCount?: unsignedInt;
    /**
    * Extensions for knownDataCount
    */
    _knownDataCount?: Element;
}

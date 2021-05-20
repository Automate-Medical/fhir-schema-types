import { Extension } from "./Extension";
import { Element } from "./Element";
import { Coding } from "./Coding";
import { Reference } from "./Reference";
/**
* A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
*/
export interface Questionnaire_AnswerOption {
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
    * A potential answer that's allowed as the answer to this question.
    */
    valueInteger?: number;
    /**
    * Extensions for valueInteger
    */
    _valueInteger?: Element;
    /**
    * A potential answer that's allowed as the answer to this question.
    */
    valueDate?: string;
    /**
    * Extensions for valueDate
    */
    _valueDate?: Element;
    /**
    * A potential answer that's allowed as the answer to this question.
    */
    valueTime?: string;
    /**
    * Extensions for valueTime
    */
    _valueTime?: Element;
    /**
    * A potential answer that's allowed as the answer to this question.
    */
    valueString?: string;
    /**
    * Extensions for valueString
    */
    _valueString?: Element;
    /**
    * A potential answer that's allowed as the answer to this question.
    */
    valueCoding?: Coding;
    /**
    * A potential answer that's allowed as the answer to this question.
    */
    valueReference?: Reference;
    /**
    * Indicates whether the answer value is selected when the list of possible answers is initially shown.
    */
    initialSelected?: boolean;
    /**
    * Extensions for initialSelected
    */
    _initialSelected?: Element;
}

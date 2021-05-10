import { Extension } from "./Extension";
import { unsignedInt } from "./unsignedInt";
import { Element } from "./Element";
import { Coding } from "./Coding";
/**
* Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
*/
export interface Contract_SecurityLabel {
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
    * Number used to link this term or term element to the applicable Security Label.
    */
    number?: unsignedInt[];
    /**
    * Extensions for number
    */
    _number?: Element[];
    /**
    * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
    */
    classification: Coding;
    /**
    * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
    */
    category?: Coding[];
    /**
    * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
    */
    control?: Coding[];
}

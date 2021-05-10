import { Extension } from "./Extension";
import { Element } from "./Element";
import { CodeableConcept } from "./CodeableConcept";
import { Reference } from "./Reference";
import { dateTime } from "./dateTime";
/**
* A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
*/
export interface Consent_Verification {
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
    * Has the instruction been verified.
    */
    verified?: boolean;
    /**
    * Extensions for verified
    */
    _verified?: Element;
    /**
    * Extensible list of verification type starting with verification and re-validation.
    */
    verificationType?: CodeableConcept;
    /**
    * The person who conducted the verification/validation of the Grantee decision.
    */
    verifiedBy?: Reference;
    /**
    * Who verified the instruction (Patient, Relative or other Authorized Person).
    */
    verifiedWith?: Reference;
    /**
    * Date(s) verification was collected.
    */
    verificationDate?: dateTime[];
    /**
    * Extensions for verificationDate
    */
    _verificationDate?: Element[];
}

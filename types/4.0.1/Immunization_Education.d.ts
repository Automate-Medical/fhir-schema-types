import { Extension } from "./Extension";
import { Element } from "./Element";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
/**
* Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
*/
export interface Immunization_Education {
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
    * Identifier of the material presented to the patient.
    */
    documentType?: string;
    /**
    * Extensions for documentType
    */
    _documentType?: Element;
    /**
    * Reference pointer to the educational material given to the patient if the information was on line.
    */
    reference?: uri;
    /**
    * Extensions for reference
    */
    _reference?: Element;
    /**
    * Date the educational material was published.
    */
    publicationDate?: dateTime;
    /**
    * Extensions for publicationDate
    */
    _publicationDate?: Element;
    /**
    * Date the educational material was given to the patient.
    */
    presentationDate?: dateTime;
    /**
    * Extensions for presentationDate
    */
    _presentationDate?: Element;
}

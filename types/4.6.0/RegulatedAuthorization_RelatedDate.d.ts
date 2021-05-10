import { Extension } from "./Extension";
import { Period } from "./Period";
import { Element } from "./Element";
import { CodeableConcept } from "./CodeableConcept";
/**
* Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
*/
export interface RegulatedAuthorization_RelatedDate {
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
    * Another date associated with the authorization.
    */
    datePeriod?: Period;
    /**
    * Another date associated with the authorization.
    */
    dateDateTime?: string;
    /**
    * Extensions for dateDateTime
    */
    _dateDateTime?: Element;
    /**
    * The meaning of the related date for a regulated product, treatment, facility or activity.  As an example, the data exclusivity period for a regulated product.
    */
    type: CodeableConcept;
}

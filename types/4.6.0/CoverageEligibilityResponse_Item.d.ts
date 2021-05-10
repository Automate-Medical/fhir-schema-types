import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Reference } from "./Reference";
import { Element } from "./Element";
import { CoverageEligibilityResponse_Benefit } from "./CoverageEligibilityResponse_Benefit";
import { uri } from "./uri";
/**
* This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
*/
export interface CoverageEligibilityResponse_Item {
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
    * Code to identify the general type of benefits under which products and services are provided.
    */
    category?: CodeableConcept;
    /**
    * This contains the product, service, drug or other billing code for the item.
    */
    productOrService?: CodeableConcept;
    /**
    * Item typification or modifiers codes to convey additional context for the product or service.
    */
    modifier?: CodeableConcept[];
    /**
    * The practitioner who is eligible for the provision of the product or service.
    */
    provider?: Reference;
    /**
    * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
    */
    excluded?: boolean;
    /**
    * Extensions for excluded
    */
    _excluded?: Element;
    /**
    * A short name or tag for the benefit.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * A richer description of the benefit or services covered.
    */
    description?: string;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
    */
    network?: CodeableConcept;
    /**
    * Indicates if the benefits apply to an individual or to the family.
    */
    unit?: CodeableConcept;
    /**
    * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
    */
    term?: CodeableConcept;
    /**
    * Benefits used to date.
    */
    benefit?: CoverageEligibilityResponse_Benefit[];
    /**
    * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
    */
    authorizationRequired?: boolean;
    /**
    * Extensions for authorizationRequired
    */
    _authorizationRequired?: Element;
    /**
    * Codes or comments regarding information or actions associated with the preauthorization.
    */
    authorizationSupporting?: CodeableConcept[];
    /**
    * A web location for obtaining requirements or descriptive information regarding the preauthorization.
    */
    authorizationUrl?: uri;
    /**
    * Extensions for authorizationUrl
    */
    _authorizationUrl?: Element;
}

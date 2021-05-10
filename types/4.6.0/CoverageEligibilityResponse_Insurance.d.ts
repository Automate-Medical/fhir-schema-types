import { Extension } from "./Extension";
import { Reference } from "./Reference";
import { Element } from "./Element";
import { Period } from "./Period";
import { CoverageEligibilityResponse_Item } from "./CoverageEligibilityResponse_Item";
/**
* This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
*/
export interface CoverageEligibilityResponse_Insurance {
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
    * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
    */
    coverage: Reference;
    /**
    * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
    */
    inforce?: boolean;
    /**
    * Extensions for inforce
    */
    _inforce?: Element;
    /**
    * The term of the benefits documented in this response.
    */
    benefitPeriod?: Period;
    /**
    * Benefits and optionally current balances, and authorization details by category or service.
    */
    item?: CoverageEligibilityResponse_Item[];
}

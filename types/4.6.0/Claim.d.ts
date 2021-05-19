import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { CodeableConcept } from "./CodeableConcept";
import { Reference } from "./Reference";
import { Period } from "./Period";
import { dateTime } from "./dateTime";
import { Claim_Related } from "./Claim_Related";
import { Claim_Payee } from "./Claim_Payee";
import { Claim_CareTeam } from "./Claim_CareTeam";
import { Claim_SupportingInfo } from "./Claim_SupportingInfo";
import { Claim_Diagnosis } from "./Claim_Diagnosis";
import { Claim_Procedure } from "./Claim_Procedure";
import { Claim_Insurance } from "./Claim_Insurance";
import { Claim_Accident } from "./Claim_Accident";
import { Claim_Item } from "./Claim_Item";
import { Money } from "./Money";
/**
* A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
*/
export interface Claim {
    /**
    * This is a Claim resource
    */
    resourceType: "Claim";
    /**
    * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
    */
    id?: id;
    /**
    * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
    */
    meta?: Meta;
    /**
    * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
    */
    implicitRules?: uri;
    /**
    * Extensions for implicitRules
    */
    _implicitRules?: Element;
    /**
    * The base language in which the resource is written.
    */
    language?: code;
    /**
    * Extensions for language
    */
    _language?: Element;
    /**
    * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
    */
    text?: Narrative;
    /**
    * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope.
    */
    contained?: ResourceList[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
    */
    extension?: Extension[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
    *
    * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
    */
    modifierExtension?: Extension[];
    /**
    * A unique identifier assigned to this claim.
    */
    identifier?: Identifier[];
    /**
    * The status of the resource instance.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
    */
    type: CodeableConcept;
    /**
    * A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
    */
    subType?: CodeableConcept;
    /**
    * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
    */
    use?: code;
    /**
    * Extensions for use
    */
    _use?: Element;
    /**
    * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
    */
    patient: Reference;
    /**
    * The period for which charges are being submitted.
    */
    billablePeriod?: Period;
    /**
    * The date this resource was created.
    */
    created?: dateTime;
    /**
    * Extensions for created
    */
    _created?: Element;
    /**
    * Individual who created the claim, predetermination or preauthorization.
    */
    enterer?: Reference;
    /**
    * The Insurer who is target of the request.
    */
    insurer?: Reference;
    /**
    * The provider which is responsible for the claim, predetermination or preauthorization.
    */
    provider: Reference;
    /**
    * The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
    */
    priority: CodeableConcept;
    /**
    * A code to indicate whether and for whom funds are to be reserved for future claims.
    */
    fundsReserve?: CodeableConcept;
    /**
    * Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
    */
    related?: Claim_Related[];
    /**
    * Prescription to support the dispensing of pharmacy, device or vision products.
    */
    prescription?: Reference;
    /**
    * Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products.
    */
    originalPrescription?: Reference;
    /**
    * The party to be reimbursed for cost of the products and services according to the terms of the policy.
    */
    payee?: Claim_Payee;
    /**
    * A reference to a referral resource.
    */
    referral?: Reference;
    /**
    * Facility where the services were provided.
    */
    facility?: Reference;
    /**
    * The members of the team who provided the products and services.
    */
    careTeam?: Claim_CareTeam[];
    /**
    * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
    */
    supportingInfo?: Claim_SupportingInfo[];
    /**
    * Information about diagnoses relevant to the claim items.
    */
    diagnosis?: Claim_Diagnosis[];
    /**
    * Procedures performed on the patient relevant to the billing items with the claim.
    */
    procedure?: Claim_Procedure[];
    /**
    * Financial instruments for reimbursement for the health care products and services specified on the claim.
    */
    insurance: Claim_Insurance[];
    /**
    * Details of an accident which resulted in injuries which required the products and services listed in the claim.
    */
    accident?: Claim_Accident;
    /**
    * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
    */
    item?: Claim_Item[];
    /**
    * The total value of the all the items in the claim.
    */
    total?: Money;
}

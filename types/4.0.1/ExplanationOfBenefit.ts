import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
import { Period } from "./Period"
import { dateTime } from "./dateTime"
import { ExplanationOfBenefit_Related } from "./ExplanationOfBenefit_Related"
import { ExplanationOfBenefit_Payee } from "./ExplanationOfBenefit_Payee"
import { ExplanationOfBenefit_CareTeam } from "./ExplanationOfBenefit_CareTeam"
import { ExplanationOfBenefit_SupportingInfo } from "./ExplanationOfBenefit_SupportingInfo"
import { ExplanationOfBenefit_Diagnosis } from "./ExplanationOfBenefit_Diagnosis"
import { ExplanationOfBenefit_Procedure } from "./ExplanationOfBenefit_Procedure"
import { positiveInt } from "./positiveInt"
import { ExplanationOfBenefit_Insurance } from "./ExplanationOfBenefit_Insurance"
import { ExplanationOfBenefit_Accident } from "./ExplanationOfBenefit_Accident"
import { ExplanationOfBenefit_Item } from "./ExplanationOfBenefit_Item"
import { ExplanationOfBenefit_AddItem } from "./ExplanationOfBenefit_AddItem"
import { ExplanationOfBenefit_Adjudication } from "./ExplanationOfBenefit_Adjudication"
import { ExplanationOfBenefit_Total } from "./ExplanationOfBenefit_Total"
import { ExplanationOfBenefit_Payment } from "./ExplanationOfBenefit_Payment"
import { Attachment } from "./Attachment"
import { ExplanationOfBenefit_ProcessNote } from "./ExplanationOfBenefit_ProcessNote"
import { ExplanationOfBenefit_BenefitBalance } from "./ExplanationOfBenefit_BenefitBalance"
/**
* This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
*/
export interface ExplanationOfBenefit {
  /**
  * This is a ExplanationOfBenefit resource
  */
  resourceType: "ExplanationOfBenefit";

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
  * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
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
  * A unique identifier assigned to this explanation of benefit.
  */
  identifier?: Identifier[];

  /**
  * The status of the resource instance.
  */
  status?: "active" | "cancelled" | "draft" | "entered-in-error";

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
  * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
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
  * The party responsible for authorization, adjudication and reimbursement.
  */
  insurer: Reference;

  /**
  * The provider which is responsible for the claim, predetermination or preauthorization.
  */
  provider: Reference;

  /**
  * The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
  */
  priority?: CodeableConcept;

  /**
  * A code to indicate whether and for whom funds are to be reserved for future claims.
  */
  fundsReserveRequested?: CodeableConcept;

  /**
  * A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.
  */
  fundsReserve?: CodeableConcept;

  /**
  * Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
  */
  related?: ExplanationOfBenefit_Related[];

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
  payee?: ExplanationOfBenefit_Payee;

  /**
  * A reference to a referral resource.
  */
  referral?: Reference;

  /**
  * Facility where the services were provided.
  */
  facility?: Reference;

  /**
  * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
  */
  claim?: Reference;

  /**
  * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
  */
  claimResponse?: Reference;

  /**
  * The outcome of the claim, predetermination, or preauthorization processing.
  */
  outcome?: code;

  /**
  * Extensions for outcome
  */
  _outcome?: Element;

  /**
  * A human readable description of the status of the adjudication.
  */
  disposition?: string;

  /**
  * Extensions for disposition
  */
  _disposition?: Element;

  /**
  * Reference from the Insurer which is used in later communications which refers to this adjudication.
  */
  preAuthRef?: string[];

  /**
  * Extensions for preAuthRef
  */
  _preAuthRef?: Element[];

  /**
  * The timeframe during which the supplied preauthorization reference may be quoted on claims to obtain the adjudication as provided.
  */
  preAuthRefPeriod?: Period[];

  /**
  * The members of the team who provided the products and services.
  */
  careTeam?: ExplanationOfBenefit_CareTeam[];

  /**
  * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
  */
  supportingInfo?: ExplanationOfBenefit_SupportingInfo[];

  /**
  * Information about diagnoses relevant to the claim items.
  */
  diagnosis?: ExplanationOfBenefit_Diagnosis[];

  /**
  * Procedures performed on the patient relevant to the billing items with the claim.
  */
  procedure?: ExplanationOfBenefit_Procedure[];

  /**
  * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
  */
  precedence?: positiveInt;

  /**
  * Extensions for precedence
  */
  _precedence?: Element;

  /**
  * Financial instruments for reimbursement for the health care products and services specified on the claim.
  */
  insurance: ExplanationOfBenefit_Insurance[];

  /**
  * Details of a accident which resulted in injuries which required the products and services listed in the claim.
  */
  accident?: ExplanationOfBenefit_Accident;

  /**
  * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
  */
  item?: ExplanationOfBenefit_Item[];

  /**
  * The first-tier service adjudications for payor added product or service lines.
  */
  addItem?: ExplanationOfBenefit_AddItem[];

  /**
  * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
  */
  adjudication?: ExplanationOfBenefit_Adjudication[];

  /**
  * Categorized monetary totals for the adjudication.
  */
  total?: ExplanationOfBenefit_Total[];

  /**
  * Payment details for the adjudication of the claim.
  */
  payment?: ExplanationOfBenefit_Payment;

  /**
  * A code for the form to be used for printing the content.
  */
  formCode?: CodeableConcept;

  /**
  * The actual form, by reference or inclusion, for printing the content or an EOB.
  */
  form?: Attachment;

  /**
  * A note that describes or explains adjudication results in a human readable form.
  */
  processNote?: ExplanationOfBenefit_ProcessNote[];

  /**
  * The term of the benefits documented in this response.
  */
  benefitPeriod?: Period;

  /**
  * Balance by Benefit Category.
  */
  benefitBalance?: ExplanationOfBenefit_BenefitBalance[];

}

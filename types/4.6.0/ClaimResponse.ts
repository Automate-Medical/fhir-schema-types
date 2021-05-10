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
import { dateTime } from "./dateTime"
import { Period } from "./Period"
import { ClaimResponse_Item } from "./ClaimResponse_Item"
import { ClaimResponse_AddItem } from "./ClaimResponse_AddItem"
import { ClaimResponse_Adjudication } from "./ClaimResponse_Adjudication"
import { ClaimResponse_Total } from "./ClaimResponse_Total"
import { ClaimResponse_Payment } from "./ClaimResponse_Payment"
import { Attachment } from "./Attachment"
import { ClaimResponse_ProcessNote } from "./ClaimResponse_ProcessNote"
import { ClaimResponse_Insurance } from "./ClaimResponse_Insurance"
import { ClaimResponse_Error } from "./ClaimResponse_Error"
/**
* This resource provides the adjudication details from the processing of a Claim resource.
*/
export interface ClaimResponse {
  /**
  * This is a ClaimResponse resource
  */
  resourceType: "ClaimResponse";

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
  * A unique identifier assigned to this claim response.
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
  * A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
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
  * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
  */
  patient: Reference;

  /**
  * The date this resource was created.
  */
  created?: dateTime;

  /**
  * Extensions for created
  */
  _created?: Element;

  /**
  * The party responsible for authorization, adjudication and reimbursement.
  */
  insurer: Reference;

  /**
  * The provider which is responsible for the claim, predetermination or preauthorization.
  */
  requestor?: Reference;

  /**
  * Original request resource reference.
  */
  request?: Reference;

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
  preAuthRef?: string;

  /**
  * Extensions for preAuthRef
  */
  _preAuthRef?: Element;

  /**
  * The time frame during which this authorization is effective.
  */
  preAuthPeriod?: Period;

  /**
  * Type of Party to be reimbursed: subscriber, provider, other.
  */
  payeeType?: CodeableConcept;

  /**
  * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
  */
  item?: ClaimResponse_Item[];

  /**
  * The first-tier service adjudications for payor added product or service lines.
  */
  addItem?: ClaimResponse_AddItem[];

  /**
  * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
  */
  adjudication?: ClaimResponse_Adjudication[];

  /**
  * Categorized monetary totals for the adjudication.
  */
  total?: ClaimResponse_Total[];

  /**
  * Payment details for the adjudication of the claim.
  */
  payment?: ClaimResponse_Payment;

  /**
  * A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.
  */
  fundsReserve?: CodeableConcept;

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
  processNote?: ClaimResponse_ProcessNote[];

  /**
  * Request for additional supporting or authorizing information.
  */
  communicationRequest?: Reference[];

  /**
  * Financial instruments for reimbursement for the health care products and services specified on the claim.
  */
  insurance?: ClaimResponse_Insurance[];

  /**
  * Errors encountered during the processing of the adjudication.
  */
  error?: ClaimResponse_Error[];

}

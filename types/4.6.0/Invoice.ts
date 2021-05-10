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
import { Invoice_Participant } from "./Invoice_Participant"
import { Invoice_LineItem } from "./Invoice_LineItem"
import { Invoice_PriceComponent } from "./Invoice_PriceComponent"
import { Money } from "./Money"
import { markdown } from "./markdown"
import { Annotation } from "./Annotation"
/**
* Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
*/
export interface Invoice {
  /**
  * This is a Invoice resource
  */
  resourceType: "Invoice";

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
  * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
  */
  identifier?: Identifier[];

  /**
  * The current state of the Invoice.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.).
  */
  cancelledReason?: string;

  /**
  * Extensions for cancelledReason
  */
  _cancelledReason?: Element;

  /**
  * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
  */
  type?: CodeableConcept;

  /**
  * The individual or set of individuals receiving the goods and services billed in this invoice.
  */
  subject?: Reference;

  /**
  * The individual or Organization responsible for balancing of this invoice.
  */
  recipient?: Reference;

  /**
  * Date/time(s) of when this Invoice was posted.
  */
  date?: dateTime;

  /**
  * Extensions for date
  */
  _date?: Element;

  /**
  * Indicates who or what performed or participated in the charged service.
  */
  participant?: Invoice_Participant[];

  /**
  * The organizationissuing the Invoice.
  */
  issuer?: Reference;

  /**
  * Account which is supposed to be balanced with this Invoice.
  */
  account?: Reference;

  /**
  * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
  */
  lineItem?: Invoice_LineItem[];

  /**
  * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
  */
  totalPriceComponent?: Invoice_PriceComponent[];

  /**
  * Invoice total , taxes excluded.
  */
  totalNet?: Money;

  /**
  * Invoice total, tax included.
  */
  totalGross?: Money;

  /**
  * Payment details such as banking details, period of payment, deductibles, methods of payment.
  */
  paymentTerms?: markdown;

  /**
  * Extensions for paymentTerms
  */
  _paymentTerms?: Element;

  /**
  * Comments made about the invoice by the issuer, subject, or other participants.
  */
  note?: Annotation[];

}

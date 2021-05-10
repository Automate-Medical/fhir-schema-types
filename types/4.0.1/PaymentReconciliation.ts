import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { Period } from "./Period"
import { dateTime } from "./dateTime"
import { Reference } from "./Reference"
import { date } from "./date"
import { Money } from "./Money"
import { PaymentReconciliation_Detail } from "./PaymentReconciliation_Detail"
import { CodeableConcept } from "./CodeableConcept"
import { PaymentReconciliation_ProcessNote } from "./PaymentReconciliation_ProcessNote"
/**
* This resource provides the details including amount of a payment and allocates the payment items being paid.
*/
export interface PaymentReconciliation {
  /**
  * This is a PaymentReconciliation resource
  */
  resourceType: "PaymentReconciliation";

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
  * A unique identifier assigned to this payment reconciliation.
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
  * The period of time for which payments have been gathered into this bulk payment for settlement.
  */
  period?: Period;

  /**
  * The date when the resource was created.
  */
  created?: dateTime;

  /**
  * Extensions for created
  */
  _created?: Element;

  /**
  * The party who generated the payment.
  */
  paymentIssuer?: Reference;

  /**
  * Original request resource reference.
  */
  request?: Reference;

  /**
  * The practitioner who is responsible for the services rendered to the patient.
  */
  requestor?: Reference;

  /**
  * The outcome of a request for a reconciliation.
  */
  outcome?: "queued" | "complete" | "error" | "partial";

  /**
  * Extensions for outcome
  */
  _outcome?: Element;

  /**
  * A human readable description of the status of the request for the reconciliation.
  */
  disposition?: string;

  /**
  * Extensions for disposition
  */
  _disposition?: Element;

  /**
  * The date of payment as indicated on the financial instrument.
  */
  paymentDate?: date;

  /**
  * Extensions for paymentDate
  */
  _paymentDate?: Element;

  /**
  * Total payment amount as indicated on the financial instrument.
  */
  paymentAmount: Money;

  /**
  * Issuer's unique identifier for the payment instrument.
  */
  paymentIdentifier?: Identifier;

  /**
  * Distribution of the payment amount for a previously acknowledged payable.
  */
  detail?: PaymentReconciliation_Detail[];

  /**
  * A code for the form to be used for printing the content.
  */
  formCode?: CodeableConcept;

  /**
  * A note that describes or explains the processing in a human readable form.
  */
  processNote?: PaymentReconciliation_ProcessNote[];

}

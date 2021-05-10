import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
import { date } from "./date"
import { Element } from "./Element"
import { Money } from "./Money"
/**
* This resource provides the details including amount of a payment and allocates the payment items being paid.
*/
export interface PaymentReconciliation_Detail {
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
  * Unique identifier for the current payment item for the referenced payable.
  */
  identifier?: Identifier;

  /**
  * Unique identifier for the prior payment item for the referenced payable.
  */
  predecessor?: Identifier;

  /**
  * Code to indicate the nature of the payment.
  */
  type: CodeableConcept;

  /**
  * A resource, such as a Claim, the evaluation of which could lead to payment.
  */
  request?: Reference;

  /**
  * The party which submitted the claim or financial transaction.
  */
  submitter?: Reference;

  /**
  * A resource, such as a ClaimResponse, which contains a commitment to payment.
  */
  response?: Reference;

  /**
  * The date from the response resource containing a commitment to pay.
  */
  date?: date;

  /**
  * Extensions for date
  */
  _date?: Element;

  /**
  * A reference to the individual who is responsible for inquiries regarding the response and its payment.
  */
  responsible?: Reference;

  /**
  * The party which is receiving the payment.
  */
  payee?: Reference;

  /**
  * The monetary amount allocated from the total payment to the payable.
  */
  amount?: Money;

}

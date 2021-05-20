import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
import { Identifier } from "./Identifier"
import { dateTime } from "./dateTime"
import { Element } from "./Element"
import { Quantity } from "./Quantity"
import { Money } from "./Money"
import { decimal } from "./decimal"
import { unsignedInt } from "./unsignedInt"
/**
* Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
*/
export interface Contract_ValuedItem {
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
  * Specific type of Contract Valued Item that may be priced.
  */
  entityCodeableConcept?: CodeableConcept;

  /**
  * Specific type of Contract Valued Item that may be priced.
  */
  entityReference?: Reference;

  /**
  * Identifies a Contract Valued Item instance.
  */
  identifier?: Identifier;

  /**
  * Indicates the time during which this Contract ValuedItem information is effective.
  */
  effectiveTime?: dateTime;

  /**
  * Extensions for effectiveTime
  */
  _effectiveTime?: Element;

  /**
  * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
  */
  quantity?: Quantity;

  /**
  * A Contract Valued Item unit valuation measure.
  */
  unitPrice?: Money;

  /**
  * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
  */
  factor?: decimal;

  /**
  * Extensions for factor
  */
  _factor?: Element;

  /**
  * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
  */
  points?: decimal;

  /**
  * Extensions for points
  */
  _points?: Element;

  /**
  * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
  */
  net?: Money;

  /**
  * Terms of valuation.
  */
  payment?: string;

  /**
  * Extensions for payment
  */
  _payment?: Element;

  /**
  * When payment is due.
  */
  paymentDate?: dateTime;

  /**
  * Extensions for paymentDate
  */
  _paymentDate?: Element;

  /**
  * Who will make payment.
  */
  responsible?: Reference;

  /**
  * Who will receive payment.
  */
  recipient?: Reference;

  /**
  * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
  */
  linkId?: string[];

  /**
  * Extensions for linkId
  */
  _linkId?: Element[];

  /**
  * A set of security labels that define which terms are controlled by this condition.
  */
  securityLabelNumber?: unsignedInt[];

  /**
  * Extensions for securityLabelNumber
  */
  _securityLabelNumber?: Element[];

}

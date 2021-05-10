import { Extension } from "./Extension"
import { positiveInt } from "./positiveInt"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
import { Quantity } from "./Quantity"
import { Money } from "./Money"
import { decimal } from "./decimal"
import { Reference } from "./Reference"
import { ExplanationOfBenefit_Adjudication } from "./ExplanationOfBenefit_Adjudication"
import { ExplanationOfBenefit_SubDetail } from "./ExplanationOfBenefit_SubDetail"
/**
* This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
*/
export interface ExplanationOfBenefit_Detail {
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
  * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
  */
  sequence?: positiveInt;

  /**
  * Extensions for sequence
  */
  _sequence?: Element;

  /**
  * The type of revenue or cost center providing the product and/or service.
  */
  revenue?: CodeableConcept;

  /**
  * Code to identify the general type of benefits under which products and services are provided.
  */
  category?: CodeableConcept;

  /**
  * When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
  */
  productOrService: CodeableConcept;

  /**
  * Item typification or modifiers codes to convey additional context for the product or service.
  */
  modifier?: CodeableConcept[];

  /**
  * Identifies the program under which this may be recovered.
  */
  programCode?: CodeableConcept[];

  /**
  * The number of repetitions of a service or product.
  */
  quantity?: Quantity;

  /**
  * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
  */
  unitPrice?: Money;

  /**
  * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
  */
  factor?: decimal;

  /**
  * Extensions for factor
  */
  _factor?: Element;

  /**
  * The quantity times the unit price for an additional service or product or charge.
  */
  net?: Money;

  /**
  * Unique Device Identifiers associated with this line item.
  */
  udi?: Reference[];

  /**
  * The numbers associated with notes below which apply to the adjudication of this item.
  */
  noteNumber?: positiveInt[];

  /**
  * Extensions for noteNumber
  */
  _noteNumber?: Element[];

  /**
  * The adjudication results.
  */
  adjudication?: ExplanationOfBenefit_Adjudication[];

  /**
  * Third-tier of goods and services.
  */
  subDetail?: ExplanationOfBenefit_SubDetail[];

}

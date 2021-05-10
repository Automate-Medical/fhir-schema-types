import { Extension } from "./Extension"
import { positiveInt } from "./positiveInt"
import { Element } from "./Element"
import { ClaimResponse_Adjudication } from "./ClaimResponse_Adjudication"
import { ClaimResponse_Detail } from "./ClaimResponse_Detail"
/**
* This resource provides the adjudication details from the processing of a Claim resource.
*/
export interface ClaimResponse_Item {
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
  * A number to uniquely reference the claim item entries.
  */
  itemSequence?: positiveInt;

  /**
  * Extensions for itemSequence
  */
  _itemSequence?: Element;

  /**
  * The numbers associated with notes below which apply to the adjudication of this item.
  */
  noteNumber?: positiveInt[];

  /**
  * Extensions for noteNumber
  */
  _noteNumber?: Element[];

  /**
  * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
  */
  adjudication: ClaimResponse_Adjudication[];

  /**
  * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
  */
  detail?: ClaimResponse_Detail[];

}

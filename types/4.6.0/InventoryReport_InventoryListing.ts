import { Extension } from "./Extension"
import { Reference } from "./Reference"
import { CodeableConcept } from "./CodeableConcept"
import { dateTime } from "./dateTime"
import { Element } from "./Element"
import { InventoryReport_Items } from "./InventoryReport_Items"
/**
* A report of inventory or stock items.
*/
export interface InventoryReport_InventoryListing {
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
  * Location of the inventory items.
  */
  location?: Reference;

  /**
  * The status of the items.
  */
  itemStatus?: CodeableConcept;

  /**
  * The date and time when the items were counted.
  */
  countingDateTime?: dateTime;

  /**
  * Extensions for countingDateTime
  */
  _countingDateTime?: Element;

  /**
  * The item or items in this listing.
  */
  items?: InventoryReport_Items[];

}

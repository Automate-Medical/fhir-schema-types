import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Quantity } from "./Quantity"
import { CodeableReference } from "./CodeableReference"
import { Element } from "./Element"
import { dateTime } from "./dateTime"
/**
* A report of inventory or stock items.
*/
export interface InventoryReport_Items {
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
  * The category of the item or items.
  */
  category?: CodeableConcept;

  /**
  * The quantity of the item or items.
  */
  quantity: Quantity;

  /**
  * The code or reference to the item type.
  */
  item: CodeableReference;

  /**
  * The lot number of the item or items.
  */
  lot?: string;

  /**
  * Extensions for lot
  */
  _lot?: Element;

  /**
  * The serial number of the item.
  */
  serial?: string;

  /**
  * Extensions for serial
  */
  _serial?: Element;

  /**
  * The expiry date of the item or items.
  */
  expiry?: dateTime;

  /**
  * Extensions for expiry
  */
  _expiry?: Element;

  /**
  * The manufacturingDate of the item or items.
  */
  manufacturingDate?: dateTime;

  /**
  * Extensions for manufacturingDate
  */
  _manufacturingDate?: Element;

}

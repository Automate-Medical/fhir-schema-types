import { Extension } from "./Extension"
import { Quantity } from "./Quantity"
import { Identifier } from "./Identifier"
import { Element } from "./Element"
import { dateTime } from "./dateTime"
/**
* A food or fluid product that is consumed by patients.
*/
export interface NutritionProduct_Instance {
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
  * The amount of items or instances that the resource considers, for instance when referring to 2 identical units together.
  */
  quantity?: Quantity;

  /**
  * The identifier for the physical instance, typically a serial number.
  */
  identifier?: Identifier[];

  /**
  * The identification of the batch or lot of the product.
  */
  lotNumber?: string;

  /**
  * Extensions for lotNumber
  */
  _lotNumber?: Element;

  /**
  * The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
  */
  expiry?: dateTime;

  /**
  * Extensions for expiry
  */
  _expiry?: Element;

  /**
  * The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
  */
  useBy?: dateTime;

  /**
  * Extensions for useBy
  */
  _useBy?: Element;

}

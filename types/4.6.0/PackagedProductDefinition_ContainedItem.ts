import { Extension } from "./Extension"
import { CodeableReference } from "./CodeableReference"
import { Quantity } from "./Quantity"
import { Element } from "./Element"
/**
* A medically related item or items, in a container or package.
*/
export interface PackagedProductDefinition_ContainedItem {
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
  * The actual item(s) of medication, as manufactured, or a device (typically, but not necessarily, a co-packaged one), or other medically related item (such as food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package. This also allows another packaged product to be included, which is solely for the case where a package of other entire packages is wanted - such as a wholesale or distribution pack.
  */
  item?: CodeableReference[];

  /**
  * The number of this type of item within this packaging.
  */
  amountQuantity?: Quantity;

  /**
  * The number of this type of item within this packaging.
  */
  amountInteger?: number;

  /**
  * Extensions for amountInteger
  */
  _amountInteger?: Element;

}

import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Element } from "./Element"
import { Quantity } from "./Quantity"
import { Attachment } from "./Attachment"
/**
* A food or fluid product that is consumed by patients.
*/
export interface NutritionProduct_ProductCharacteristic {
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
  * A code specifying which characteristic of the product is being described (for example, colour, shape).
  */
  type: CodeableConcept;

  /**
  * The actual characteristic value corresponding to the type.
  */
  valueCodeableConcept?: CodeableConcept;

  /**
  * The actual characteristic value corresponding to the type.
  */
  valueString?: string;

  /**
  * Extensions for valueString
  */
  _valueString?: Element;

  /**
  * The actual characteristic value corresponding to the type.
  */
  valueQuantity?: Quantity;

  /**
  * The actual characteristic value corresponding to the type.
  */
  valueBase64Binary?: string;

  /**
  * Extensions for valueBase64Binary
  */
  _valueBase64Binary?: Element;

  /**
  * The actual characteristic value corresponding to the type.
  */
  valueAttachment?: Attachment;

  /**
  * The actual characteristic value corresponding to the type.
  */
  valueBoolean?: boolean;

  /**
  * Extensions for valueBoolean
  */
  _valueBoolean?: Element;

}

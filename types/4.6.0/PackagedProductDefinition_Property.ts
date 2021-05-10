import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Quantity } from "./Quantity"
import { Element } from "./Element"
import { Attachment } from "./Attachment"
/**
* A medically related item or items, in a container or package.
*/
export interface PackagedProductDefinition_Property {
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
  * A code expressing the type of characteristic.
  */
  type: CodeableConcept;

  /**
  * A value for the characteristic.
  */
  valueCodeableConcept?: CodeableConcept;

  /**
  * A value for the characteristic.
  */
  valueQuantity?: Quantity;

  /**
  * A value for the characteristic.
  */
  valueDate?: string;

  /**
  * Extensions for valueDate
  */
  _valueDate?: Element;

  /**
  * A value for the characteristic.
  */
  valueBoolean?: boolean;

  /**
  * Extensions for valueBoolean
  */
  _valueBoolean?: Element;

  /**
  * A value for the characteristic.
  */
  valueAttachment?: Attachment;

}

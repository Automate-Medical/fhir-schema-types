import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Identifier } from "./Identifier"
import { Element } from "./Element"
/**
* The characteristics, operational status and capabilities of a medical-related component of a medical device.
*/
export interface DeviceDefinition_Version {
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
  * The type of the device version, e.g. manufacturer, approved, internal.
  */
  type?: CodeableConcept;

  /**
  * The hardware or software module of the device to which the version applies.
  */
  component?: Identifier;

  /**
  * The version text.
  */
  value?: string;

  /**
  * Extensions for value
  */
  _value?: Element;

}

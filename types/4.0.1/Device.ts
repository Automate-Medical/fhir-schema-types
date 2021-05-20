import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { Reference } from "./Reference"
import { Device_UdiCarrier } from "./Device_UdiCarrier"
import { CodeableConcept } from "./CodeableConcept"
import { dateTime } from "./dateTime"
import { Device_DeviceName } from "./Device_DeviceName"
import { Device_Specialization } from "./Device_Specialization"
import { Device_Version } from "./Device_Version"
import { Device_Property } from "./Device_Property"
import { ContactPoint } from "./ContactPoint"
import { Annotation } from "./Annotation"
/**
* A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
*/
export interface Device {
  /**
  * This is a Device resource
  */
  resourceType: "Device";

  /**
  * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
  */
  id?: id;

  /**
  * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
  */
  meta?: Meta;

  /**
  * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
  */
  implicitRules?: uri;

  /**
  * Extensions for implicitRules
  */
  _implicitRules?: Element;

  /**
  * The base language in which the resource is written.
  */
  language?: code;

  /**
  * Extensions for language
  */
  _language?: Element;

  /**
  * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
  */
  text?: Narrative;

  /**
  * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
  */
  contained?: ResourceList[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
  * 
  * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
  */
  modifierExtension?: Extension[];

  /**
  * Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
  */
  identifier?: Identifier[];

  /**
  * The reference to the definition for the device.
  */
  definition?: Reference;

  /**
  * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
  */
  udiCarrier?: Device_UdiCarrier[];

  /**
  * Status of the Device availability.
  */
  status?: "active" | "inactive" | "entered-in-error" | "unknown";

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * Reason for the dtatus of the Device availability.
  */
  statusReason?: CodeableConcept[];

  /**
  * The distinct identification string as required by regulation for a human cell, tissue, or cellular and tissue-based product.
  */
  distinctIdentifier?: string;

  /**
  * Extensions for distinctIdentifier
  */
  _distinctIdentifier?: Element;

  /**
  * A name of the manufacturer.
  */
  manufacturer?: string;

  /**
  * Extensions for manufacturer
  */
  _manufacturer?: Element;

  /**
  * The date and time when the device was manufactured.
  */
  manufactureDate?: dateTime;

  /**
  * Extensions for manufactureDate
  */
  _manufactureDate?: Element;

  /**
  * The date and time beyond which this device is no longer valid or should not be used (if applicable).
  */
  expirationDate?: dateTime;

  /**
  * Extensions for expirationDate
  */
  _expirationDate?: Element;

  /**
  * Lot number assigned by the manufacturer.
  */
  lotNumber?: string;

  /**
  * Extensions for lotNumber
  */
  _lotNumber?: Element;

  /**
  * The serial number assigned by the organization when the device was manufactured.
  */
  serialNumber?: string;

  /**
  * Extensions for serialNumber
  */
  _serialNumber?: Element;

  /**
  * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
  */
  deviceName?: Device_DeviceName[];

  /**
  * The model number for the device.
  */
  modelNumber?: string;

  /**
  * Extensions for modelNumber
  */
  _modelNumber?: Element;

  /**
  * The part number of the device.
  */
  partNumber?: string;

  /**
  * Extensions for partNumber
  */
  _partNumber?: Element;

  /**
  * The kind or type of device.
  */
  type?: CodeableConcept;

  /**
  * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
  */
  specialization?: Device_Specialization[];

  /**
  * The actual design of the device or software version running on the device.
  */
  version?: Device_Version[];

  /**
  * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
  */
  property?: Device_Property[];

  /**
  * Patient information, If the device is affixed to a person.
  */
  patient?: Reference;

  /**
  * An organization that is responsible for the provision and ongoing maintenance of the device.
  */
  owner?: Reference;

  /**
  * Contact details for an organization or a particular human that is responsible for the device.
  */
  contact?: ContactPoint[];

  /**
  * The place where the device can be found.
  */
  location?: Reference;

  /**
  * A network address on which the device may be contacted directly.
  */
  url?: uri;

  /**
  * Extensions for url
  */
  _url?: Element;

  /**
  * Descriptive information, usage information or implantation information that is not captured in an existing element.
  */
  note?: Annotation[];

  /**
  * Provides additional safety characteristics about a medical device.  For example devices containing latex.
  */
  safety?: CodeableConcept[];

  /**
  * The parent device.
  */
  parent?: Reference;

}

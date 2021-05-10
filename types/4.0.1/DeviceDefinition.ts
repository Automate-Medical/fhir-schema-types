import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { DeviceDefinition_UdiDeviceIdentifier } from "./DeviceDefinition_UdiDeviceIdentifier"
import { Reference } from "./Reference"
import { DeviceDefinition_DeviceName } from "./DeviceDefinition_DeviceName"
import { CodeableConcept } from "./CodeableConcept"
import { DeviceDefinition_Specialization } from "./DeviceDefinition_Specialization"
import { ProductShelfLife } from "./ProductShelfLife"
import { ProdCharacteristic } from "./ProdCharacteristic"
import { DeviceDefinition_Capability } from "./DeviceDefinition_Capability"
import { DeviceDefinition_Property } from "./DeviceDefinition_Property"
import { ContactPoint } from "./ContactPoint"
import { Annotation } from "./Annotation"
import { Quantity } from "./Quantity"
import { DeviceDefinition_Material } from "./DeviceDefinition_Material"
/**
* The characteristics, operational status and capabilities of a medical-related component of a medical device.
*/
export interface DeviceDefinition {
  /**
  * This is a DeviceDefinition resource
  */
  resourceType: "DeviceDefinition";

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
  * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
  */
  identifier?: Identifier[];

  /**
  * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
  */
  udiDeviceIdentifier?: DeviceDefinition_UdiDeviceIdentifier[];

  /**
  * A name of the manufacturer.
  */
  manufacturerString?: string;

  /**
  * Extensions for manufacturerString
  */
  _manufacturerString?: Element;

  /**
  * A name of the manufacturer.
  */
  manufacturerReference?: Reference;

  /**
  * A name given to the device to identify it.
  */
  deviceName?: DeviceDefinition_DeviceName[];

  /**
  * The model number for the device.
  */
  modelNumber?: string;

  /**
  * Extensions for modelNumber
  */
  _modelNumber?: Element;

  /**
  * What kind of device or device system this is.
  */
  type?: CodeableConcept;

  /**
  * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
  */
  specialization?: DeviceDefinition_Specialization[];

  /**
  * The available versions of the device, e.g., software versions.
  */
  version?: string[];

  /**
  * Extensions for version
  */
  _version?: Element[];

  /**
  * Safety characteristics of the device.
  */
  safety?: CodeableConcept[];

  /**
  * Shelf Life and storage information.
  */
  shelfLifeStorage?: ProductShelfLife[];

  /**
  * Dimensions, color etc.
  */
  physicalCharacteristics?: ProdCharacteristic;

  /**
  * Language code for the human-readable text strings produced by the device (all supported).
  */
  languageCode?: CodeableConcept[];

  /**
  * Device capabilities.
  */
  capability?: DeviceDefinition_Capability[];

  /**
  * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
  */
  property?: DeviceDefinition_Property[];

  /**
  * An organization that is responsible for the provision and ongoing maintenance of the device.
  */
  owner?: Reference;

  /**
  * Contact details for an organization or a particular human that is responsible for the device.
  */
  contact?: ContactPoint[];

  /**
  * A network address on which the device may be contacted directly.
  */
  url?: uri;

  /**
  * Extensions for url
  */
  _url?: Element;

  /**
  * Access to on-line information about the device.
  */
  onlineInformation?: uri;

  /**
  * Extensions for onlineInformation
  */
  _onlineInformation?: Element;

  /**
  * Descriptive information, usage information or implantation information that is not captured in an existing element.
  */
  note?: Annotation[];

  /**
  * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
  */
  quantity?: Quantity;

  /**
  * The parent device it can be part of.
  */
  parentDevice?: Reference;

  /**
  * A substance used to create the material(s) of which the device is made.
  */
  material?: DeviceDefinition_Material[];

}

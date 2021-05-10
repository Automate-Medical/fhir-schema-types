import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { HumanName } from "./HumanName"
import { ContactPoint } from "./ContactPoint"
import { date } from "./date"
import { Address } from "./Address"
import { CodeableConcept } from "./CodeableConcept"
import { Attachment } from "./Attachment"
import { Patient_Contact } from "./Patient_Contact"
import { Patient_Communication } from "./Patient_Communication"
import { Reference } from "./Reference"
import { Patient_Link } from "./Patient_Link"
/**
* Demographics and other administrative information about an individual or animal receiving care or other health-related services.
*/
export interface Patient {
  /**
  * This is a Patient resource
  */
  resourceType: "Patient";

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
  * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope.
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
  * An identifier for this patient.
  */
  identifier?: Identifier[];

  /**
  * Whether this patient record is in active use. 
  * Many systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.
  * 
  * It is often used to filter patient lists to exclude inactive patients
  * 
  * Deceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.
  */
  active?: boolean;

  /**
  * Extensions for active
  */
  _active?: Element;

  /**
  * A name associated with the individual.
  */
  name?: HumanName[];

  /**
  * A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
  */
  telecom?: ContactPoint[];

  /**
  * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
  */
  gender?: code;

  /**
  * Extensions for gender
  */
  _gender?: Element;

  /**
  * The date of birth for the individual.
  */
  birthDate?: date;

  /**
  * Extensions for birthDate
  */
  _birthDate?: Element;

  /**
  * Indicates if the individual is deceased or not.
  */
  deceasedBoolean?: boolean;

  /**
  * Extensions for deceasedBoolean
  */
  _deceasedBoolean?: Element;

  /**
  * Indicates if the individual is deceased or not.
  */
  deceasedDateTime?: string;

  /**
  * Extensions for deceasedDateTime
  */
  _deceasedDateTime?: Element;

  /**
  * An address for the individual.
  */
  address?: Address[];

  /**
  * This field contains a patient's most recent marital (civil) status.
  */
  maritalStatus?: CodeableConcept;

  /**
  * Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
  */
  multipleBirthBoolean?: boolean;

  /**
  * Extensions for multipleBirthBoolean
  */
  _multipleBirthBoolean?: Element;

  /**
  * Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).
  */
  multipleBirthInteger?: number;

  /**
  * Extensions for multipleBirthInteger
  */
  _multipleBirthInteger?: Element;

  /**
  * Image of the patient.
  */
  photo?: Attachment[];

  /**
  * A contact party (e.g. guardian, partner, friend) for the patient.
  */
  contact?: Patient_Contact[];

  /**
  * A language which may be used to communicate with the patient about his or her health.
  */
  communication?: Patient_Communication[];

  /**
  * Patient's nominated care provider.
  */
  generalPractitioner?: Reference[];

  /**
  * Organization that is the custodian of the patient record.
  */
  managingOrganization?: Reference;

  /**
  * Link to another patient resource that concerns the same actual patient.
  */
  link?: Patient_Link[];

}

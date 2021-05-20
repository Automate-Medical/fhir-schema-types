import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { canonical } from "./canonical"
import { Reference } from "./Reference"
import { CodeableConcept } from "./CodeableConcept"
import { Period } from "./Period"
import { Age } from "./Age"
import { Range } from "./Range"
import { Timing } from "./Timing"
import { dateTime } from "./dateTime"
import { Procedure_Performer } from "./Procedure_Performer"
import { CodeableReference } from "./CodeableReference"
import { Annotation } from "./Annotation"
import { Procedure_FocalDevice } from "./Procedure_FocalDevice"
/**
* An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy.  This can be a quality or safety inspection for a location, organization, or device.  This can be an accreditation procedure on a practitioner for licensing.
*/
export interface Procedure {
  /**
  * This is a Procedure resource
  */
  resourceType: "Procedure";

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
  * Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and is propagated from server to server.
  */
  identifier?: Identifier[];

  /**
  * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
  */
  instantiatesCanonical?: canonical[];

  /**
  * The URL pointing to an externally maintained protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
  */
  instantiatesUri?: uri[];

  /**
  * Extensions for instantiatesUri
  */
  _instantiatesUri?: Element[];

  /**
  * A reference to a resource that contains details of the request for this procedure.
  */
  basedOn?: Reference[];

  /**
  * A larger event of which this particular procedure is a component or step.
  */
  partOf?: Reference[];

  /**
  * A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * Captures the reason for the current state of the procedure.
  */
  statusReason?: CodeableConcept;

  /**
  * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
  */
  category?: CodeableConcept[];

  /**
  * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
  */
  code?: CodeableConcept;

  /**
  * On whom or what the procedure was performed. This is usually an individual human, but can also be performed on animals, groups of humans or animals, organizations or practitioners (for licensing), locations or devices (for safety inspections or regulatory authorizations).
  */
  subject: Reference;

  /**
  * The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
  */
  encounter?: Reference;

  /**
  * Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
  */
  occurrenceDateTime?: string;

  /**
  * Extensions for occurrenceDateTime
  */
  _occurrenceDateTime?: Element;

  /**
  * Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
  */
  occurrencePeriod?: Period;

  /**
  * Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
  */
  occurrenceString?: string;

  /**
  * Extensions for occurrenceString
  */
  _occurrenceString?: Element;

  /**
  * Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
  */
  occurrenceAge?: Age;

  /**
  * Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
  */
  occurrenceRange?: Range;

  /**
  * Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
  */
  occurrenceTiming?: Timing;

  /**
  * The date the occurrence of the procedure was first captured in the record regardless of Procedure.status (potentially after the occurrence of the event).
  */
  recorded?: dateTime;

  /**
  * Extensions for recorded
  */
  _recorded?: Element;

  /**
  * Individual who recorded the record and takes responsibility for its content.
  */
  recorder?: Reference;

  /**
  * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
  */
  reportedBoolean?: boolean;

  /**
  * Extensions for reportedBoolean
  */
  _reportedBoolean?: Element;

  /**
  * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
  */
  reportedReference?: Reference;

  /**
  * Limited to "real" people rather than equipment.
  */
  performer?: Procedure_Performer[];

  /**
  * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
  */
  location?: Reference;

  /**
  * The coded reason or reference why the procedure was performed. This may be a coded entity of some type, or may simply be present as text, or may be a reference to one of several resources that justify the procedure.
  */
  reason?: CodeableReference[];

  /**
  * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
  */
  bodySite?: CodeableConcept[];

  /**
  * The outcome of the procedure - did it resolve the reasons for the procedure being performed?
  */
  outcome?: CodeableConcept;

  /**
  * This could be a histology result, pathology report, surgical report, etc.
  */
  report?: Reference[];

  /**
  * Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
  */
  complication?: CodeableConcept[];

  /**
  * Any complications that occurred during the procedure, or in the immediate post-performance period.
  */
  complicationDetail?: Reference[];

  /**
  * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
  */
  followUp?: CodeableConcept[];

  /**
  * Any other notes and comments about the procedure.
  */
  note?: Annotation[];

  /**
  * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
  */
  focalDevice?: Procedure_FocalDevice[];

  /**
  * Identifies medications, devices and any other substance used as part of the procedure.
  */
  used?: CodeableReference[];

  /**
  * Other resources from the patient record that may be relevant to the procedure.  The information from these resources was either used to create the instance or is provided to help with its interpretation. This extension should not be used if more specific inline elements or extensions are available.
  */
  supportingInfo?: Reference[];

}

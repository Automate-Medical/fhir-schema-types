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
import { CodeableConcept } from "./CodeableConcept"
import { CommunicationRequest_Payload } from "./CommunicationRequest_Payload"
import { Period } from "./Period"
import { dateTime } from "./dateTime"
import { CodeableReference } from "./CodeableReference"
import { Annotation } from "./Annotation"
/**
* A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
*/
export interface CommunicationRequest {
  /**
  * This is a CommunicationRequest resource
  */
  resourceType: "CommunicationRequest";

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
  * Business identifiers assigned to this communication request by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
  */
  identifier?: Identifier[];

  /**
  * A plan or proposal that is fulfilled in whole or in part by this request.
  */
  basedOn?: Reference[];

  /**
  * Completed or terminated request(s) whose function is taken by this new request.
  */
  replaces?: Reference[];

  /**
  * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.
  */
  groupIdentifier?: Identifier;

  /**
  * The status of the proposal or order.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * Captures the reason for the current state of the CommunicationRequest.
  */
  statusReason?: CodeableConcept;

  /**
  * Indicates the level of authority/intentionality associated with the CommunicationRequest and where the request fits into the workflow chain.
  */
  intent?: code;

  /**
  * Extensions for intent
  */
  _intent?: Element;

  /**
  * The type of message to be sent such as alert, notification, reminder, instruction, etc.
  */
  category?: CodeableConcept[];

  /**
  * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
  */
  priority?: code;

  /**
  * Extensions for priority
  */
  _priority?: Element;

  /**
  * If true indicates that the CommunicationRequest is asking for the specified action to *not* occur.
  */
  doNotPerform?: boolean;

  /**
  * Extensions for doNotPerform
  */
  _doNotPerform?: Element;

  /**
  * A channel that was used for this communication (e.g. email, fax).
  */
  medium?: CodeableConcept[];

  /**
  * The patient or group that is the focus of this communication request.
  */
  subject?: Reference;

  /**
  * Other resources that pertain to this communication request and to which this communication request should be associated.
  */
  about?: Reference[];

  /**
  * The Encounter during which this CommunicationRequest was created or to which the creation of this record is tightly associated.
  */
  encounter?: Reference;

  /**
  * Text, attachment(s), or resource(s) to be communicated to the recipient.
  */
  payload?: CommunicationRequest_Payload[];

  /**
  * The time when this communication is to occur.
  */
  occurrenceDateTime?: string;

  /**
  * Extensions for occurrenceDateTime
  */
  _occurrenceDateTime?: Element;

  /**
  * The time when this communication is to occur.
  */
  occurrencePeriod?: Period;

  /**
  * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
  */
  authoredOn?: dateTime;

  /**
  * Extensions for authoredOn
  */
  _authoredOn?: Element;

  /**
  * The device, individual, or organization who asks for the information to be shared.
  */
  requester?: Reference;

  /**
  * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
  */
  recipient?: Reference[];

  /**
  * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
  */
  informationProvider?: Reference[];

  /**
  * Describes why the request is being made in coded or textual form.
  */
  reason?: CodeableReference[];

  /**
  * Comments made about the request by the requester, sender, recipient, subject or other participants.
  */
  note?: Annotation[];

}

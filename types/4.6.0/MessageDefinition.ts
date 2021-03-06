import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { dateTime } from "./dateTime"
import { ContactDetail } from "./ContactDetail"
import { markdown } from "./markdown"
import { UsageContext } from "./UsageContext"
import { CodeableConcept } from "./CodeableConcept"
import { canonical } from "./canonical"
import { Coding } from "./Coding"
import { MessageDefinition_Focus } from "./MessageDefinition_Focus"
import { MessageDefinition_AllowedResponse } from "./MessageDefinition_AllowedResponse"
/**
* Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
*/
export interface MessageDefinition {
  /**
  * This is a MessageDefinition resource
  */
  resourceType: "MessageDefinition";

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
  * The business identifier that is used to reference the MessageDefinition and *is* expected to be consistent from server to server.
  */
  url?: uri;

  /**
  * Extensions for url
  */
  _url?: Element;

  /**
  * A formal identifier that is used to identify this message definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
  */
  identifier?: Identifier[];

  /**
  * The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
  */
  version?: string;

  /**
  * Extensions for version
  */
  _version?: Element;

  /**
  * A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * A short, descriptive, user-friendly title for the message definition.
  */
  title?: string;

  /**
  * Extensions for title
  */
  _title?: Element;

  /**
  * The status of this message definition. Enables tracking the life-cycle of the content.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * A Boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
  */
  experimental?: boolean;

  /**
  * Extensions for experimental
  */
  _experimental?: Element;

  /**
  * The date  (and optionally time) when the message definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes.
  */
  date?: dateTime;

  /**
  * Extensions for date
  */
  _date?: Element;

  /**
  * The name of the organization or individual that published the message definition.
  */
  publisher?: string;

  /**
  * Extensions for publisher
  */
  _publisher?: Element;

  /**
  * Contact details to assist a user in finding and communicating with the publisher.
  */
  contact?: ContactDetail[];

  /**
  * A free text natural language description of the message definition from a consumer's perspective.
  */
  description?: markdown;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate message definition instances.
  */
  useContext?: UsageContext[];

  /**
  * A legal or geographic region in which the message definition is intended to be used.
  */
  jurisdiction?: CodeableConcept[];

  /**
  * Explanation of why this message definition is needed and why it has been designed as it has.
  */
  purpose?: markdown;

  /**
  * Extensions for purpose
  */
  _purpose?: Element;

  /**
  * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
  */
  copyright?: markdown;

  /**
  * Extensions for copyright
  */
  _copyright?: Element;

  /**
  * A MessageDefinition that is superseded by this definition.
  */
  replaces?: canonical[];

  /**
  * The MessageDefinition that is the basis for the contents of this resource.
  */
  base?: canonical;

  /**
  * Identifies a protocol or workflow that this MessageDefinition represents a step in.
  */
  parent?: canonical[];

  /**
  * Event code or link to the EventDefinition.
  */
  eventCoding?: Coding;

  /**
  * Event code or link to the EventDefinition.
  */
  eventUri?: string;

  /**
  * Extensions for eventUri
  */
  _eventUri?: Element;

  /**
  * The impact of the content of the message.
  */
  category?: code;

  /**
  * Extensions for category
  */
  _category?: Element;

  /**
  * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
  */
  focus?: MessageDefinition_Focus[];

  /**
  * Declare at a message definition level whether a response is required or only upon error or success, or never.
  */
  responseRequired?: code;

  /**
  * Extensions for responseRequired
  */
  _responseRequired?: Element;

  /**
  * Indicates what types of messages may be sent as an application-level response to this message.
  */
  allowedResponse?: MessageDefinition_AllowedResponse[];

  /**
  * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
  */
  graph?: canonical[];

}

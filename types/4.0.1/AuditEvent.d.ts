import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Coding } from "./Coding";
import { Period } from "./Period";
import { instant } from "./instant";
import { CodeableConcept } from "./CodeableConcept";
import { AuditEvent_Agent } from "./AuditEvent_Agent";
import { AuditEvent_Source } from "./AuditEvent_Source";
import { AuditEvent_Entity } from "./AuditEvent_Entity";
/**
* A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
*/
export interface AuditEvent {
    /**
    * This is a AuditEvent resource
    */
    resourceType: "AuditEvent";
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
    * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
    */
    type: Coding;
    /**
    * Identifier for the category of event.
    */
    subtype?: Coding[];
    /**
    * Indicator for type of action performed during the event that generated the audit.
    */
    action?: "C" | "R" | "U" | "D" | "E";
    /**
    * Extensions for action
    */
    _action?: Element;
    /**
    * The period during which the activity occurred.
    */
    period?: Period;
    /**
    * The time when the event was recorded.
    */
    recorded?: instant;
    /**
    * Extensions for recorded
    */
    _recorded?: Element;
    /**
    * Indicates whether the event succeeded or failed.
    */
    outcome?: "0" | "4" | "8" | "12";
    /**
    * Extensions for outcome
    */
    _outcome?: Element;
    /**
    * A free text description of the outcome of the event.
    */
    outcomeDesc?: string;
    /**
    * Extensions for outcomeDesc
    */
    _outcomeDesc?: Element;
    /**
    * The purposeOfUse (reason) that was used during the event being recorded.
    */
    purposeOfEvent?: CodeableConcept[];
    /**
    * An actor taking an active role in the event or activity that is logged.
    */
    agent: AuditEvent_Agent[];
    /**
    * The system that is reporting the event.
    */
    source: AuditEvent_Source;
    /**
    * Specific instances of data or objects that have been accessed.
    */
    entity?: AuditEvent_Entity[];
}

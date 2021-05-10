import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { integer64 } from "./integer64";
import { integer } from "./integer";
import { Reference } from "./Reference";
import { canonical } from "./canonical";
import { CodeableConcept } from "./CodeableConcept";
/**
* The SubscriptionStatus resource describes the state of a Subscription during notifications.
*/
export interface SubscriptionStatus {
    /**
    * This is a SubscriptionStatus resource
    */
    resourceType: "SubscriptionStatus";
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
    * The status of the subscription, which marks the server state for managing the subscription.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * The type of event being conveyed with this notificaiton.
    */
    type?: code;
    /**
    * Extensions for type
    */
    _type?: Element;
    /**
    * The total number of actual events which have been generated since the Subscription was created (inclusive of this notification) - regardless of how many have been successfully communicated.  This number is NOT incremented for handshake and heartbeat notifications.
    */
    eventsSinceSubscriptionStart?: integer64;
    /**
    * Extensions for eventsSinceSubscriptionStart
    */
    _eventsSinceSubscriptionStart?: Element;
    /**
    * The total number of actual events represented within this notification.  For handshake and heartbeat notifications, this will be zero or not present.  For event-notifications, this number may be one or more, depending on server batching.
    */
    eventsInNotification?: integer;
    /**
    * Extensions for eventsInNotification
    */
    _eventsInNotification?: Element;
    /**
    * The reference to the Subscription which generated this notification.
    */
    subscription: Reference;
    /**
    * The reference to the SubscriptionTopic for the Subscription which generated this notification.
    */
    topic: canonical;
    /**
    * A record of errors that occurred when the server processed a notification.
    */
    error?: CodeableConcept[];
}

import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { canonical } from "./canonical";
import { ContactPoint } from "./ContactPoint";
import { instant } from "./instant";
import { Subscription_FilterBy } from "./Subscription_FilterBy";
import { Coding } from "./Coding";
import { url } from "./url";
import { unsignedInt } from "./unsignedInt";
import { positiveInt } from "./positiveInt";
/**
* The subscription resource describes a particular client's request to be notified about a SubscriptionTopic.
*/
export interface Subscription {
    /**
    * This is a Subscription resource
    */
    resourceType: "Subscription";
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
    * A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.
    */
    identifier?: Identifier[];
    /**
    * A natural language name identifying the subscription.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * The status of the subscription, which marks the server state for managing the subscription.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * The reference to the subscription topic to be notified about.
    */
    topic: canonical;
    /**
    * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
    */
    contact?: ContactPoint[];
    /**
    * The time for the server to turn the subscription off.
    */
    end?: instant;
    /**
    * Extensions for end
    */
    _end?: Element;
    /**
    * A description of why this subscription is defined.
    */
    reason?: string;
    /**
    * Extensions for reason
    */
    _reason?: Element;
    /**
    * The filter properties to be applied to narrow the subscription topic stream.  When multiple filters are applied, evaluates to true if all the conditions are met; otherwise it returns false.   (i.e., logical AND).
    */
    filterBy?: Subscription_FilterBy[];
    /**
    * The type of channel to send notifications on.
    */
    channelType: Coding;
    /**
    * The url that describes the actual end-point to send messages to.
    */
    endpoint?: url;
    /**
    * Extensions for endpoint
    */
    _endpoint?: Element;
    /**
    * Additional headers / information to send as part of the notification.
    */
    header?: string[];
    /**
    * Extensions for header
    */
    _header?: Element[];
    /**
    * If present,  a 'hearbeat" notification (keepalive) is sent via this channel with an the interval period equal to this elements integer value in seconds.    If not present, a heartbeat notification is not sent.
    */
    heartbeatPeriod?: unsignedInt;
    /**
    * Extensions for heartbeatPeriod
    */
    _heartbeatPeriod?: Element;
    /**
    * If present, the maximum amount of time a server will allow before failing a notification attempt.
    */
    timeout?: unsignedInt;
    /**
    * Extensions for timeout
    */
    _timeout?: Element;
    /**
    * The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. The MIME types "text/plain" and "text/html" may also be used for Email subscriptions.
    */
    contentType?: code;
    /**
    * Extensions for contentType
    */
    _contentType?: Element;
    /**
    * How much of the resource content to deliver in the notification payload. The choices are an empty payload, only the resource id, or the full resource content.
    */
    content?: code;
    /**
    * Extensions for content
    */
    _content?: Element;
    /**
    * If present, where to place URLs of resources in notifications.
    */
    notificationUrlLocation?: code;
    /**
    * Extensions for notificationUrlLocation
    */
    _notificationUrlLocation?: Element;
    /**
    * If present, the maximum number of triggering resources that will be included in a notification bundle (e.g., a server will not include more than this number of trigger resources in a single notification).  Note that this is not a strict limit on the number of entries in a bundle, as dependent resources can be included.
    */
    maxCount?: positiveInt;
    /**
    * Extensions for maxCount
    */
    _maxCount?: Element;
}

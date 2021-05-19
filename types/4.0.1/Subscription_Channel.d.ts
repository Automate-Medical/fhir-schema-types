import { Extension } from "./Extension";
import { Element } from "./Element";
import { url } from "./url";
import { code } from "./code";
/**
* The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
*/
export interface Subscription_Channel {
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
    * The type of channel to send notifications on.
    */
    type?: "rest-hook" | "websocket" | "email" | "sms" | "message";
    /**
    * Extensions for type
    */
    _type?: Element;
    /**
    * The url that describes the actual end-point to send messages to.
    */
    endpoint?: url;
    /**
    * Extensions for endpoint
    */
    _endpoint?: Element;
    /**
    * The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification. The mime type "text/plain" may also be used for Email and SMS subscriptions.
    */
    payload?: code;
    /**
    * Extensions for payload
    */
    _payload?: Element;
    /**
    * Additional headers / information to send as part of the notification.
    */
    header?: string[];
    /**
    * Extensions for header
    */
    _header?: Element[];
}

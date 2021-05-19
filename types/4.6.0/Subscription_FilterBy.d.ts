import { Extension } from "./Extension";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
/**
* The subscription resource describes a particular client's request to be notified about a SubscriptionTopic.
*/
export interface Subscription_FilterBy {
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
    * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
    */
    resourceType?: uri;
    /**
    * Extensions for resourceType
    */
    _resourceType?: Element;
    /**
    * The filter label (=key) as defined in the `SubscriptionTopic.canfilterBy.searchParamName`  element.
    */
    searchParamName?: string;
    /**
    * Extensions for searchParamName
    */
    _searchParamName?: Element;
    /**
    * The operator to apply to the filter value when determining matches (Search modifiers).
    */
    searchModifier?: code;
    /**
    * Extensions for searchModifier
    */
    _searchModifier?: Element;
    /**
    * The literal value or resource path as is legal in search - for example, "Patient/123" or "le1950".
    */
    value?: string;
    /**
    * Extensions for value
    */
    _value?: Element;
}

import { Extension } from "./Extension"
import { Element } from "./Element"
import { code } from "./code"
/**
* Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.
*/
export interface SubscriptionTopic_QueryCriteria {
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
  * The FHIR query based rules are applied to the previous resource state.
  */
  previous?: string;

  /**
  * Extensions for previous
  */
  _previous?: Element;

  /**
  * What behavior a server will exhibit if the previous state of a resource does NOT exist (e.g., during a CREATE).
  */
  resultForCreate?: code;

  /**
  * Extensions for resultForCreate
  */
  _resultForCreate?: Element;

  /**
  * The FHIR query based rules are applied to the current resource state.
  */
  current?: string;

  /**
  * Extensions for current
  */
  _current?: Element;

  /**
  * What behavior a server will exhibit if the current state of a resource does NOT exist (e.g., during a DELETE).
  */
  resultForDelete?: code;

  /**
  * Extensions for resultForDelete
  */
  _resultForDelete?: Element;

  /**
  * If set to true, both current and previous criteria must evaluate true to  trigger a notification for this topic.  Otherwise a notification for this topic will be triggered if either one evaluates to true.
  */
  requireBoth?: boolean;

  /**
  * Extensions for requireBoth
  */
  _requireBoth?: Element;

}

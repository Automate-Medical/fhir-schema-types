import { Extension } from "./Extension"
import { Element } from "./Element"
import { uri } from "./uri"
import { code } from "./code"
import { SubscriptionTopic_QueryCriteria } from "./SubscriptionTopic_QueryCriteria"
import { SubscriptionTopic_CanFilterBy } from "./SubscriptionTopic_CanFilterBy"
/**
* Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.
*/
export interface SubscriptionTopic_ResourceTrigger {
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
  * The human readable description of what triggers inclusion into this subscription topic -  for example, "Beginning of a clinical encounter".
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * URL of the Resource that is the type used in this trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see <a href="elementdefinition-definitions.html#ElementDefinition.type.code">ElementDefinition.type.code</a>.
  */
  resourceType?: uri;

  /**
  * Extensions for resourceType
  */
  _resourceType?: Element;

  /**
  * The REST interaction based rules that the server should use to determine when to trigger a notification for this topic.
  */
  methodCriteria?: code[];

  /**
  * Extensions for methodCriteria
  */
  _methodCriteria?: Element[];

  /**
  * The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.
  */
  queryCriteria?: SubscriptionTopic_QueryCriteria;

  /**
  * The FHIRPath based rules that the server should use to determine when to trigger a notification for this topic.  If there are multiple, FHIRPath filters are joined with AND.
  */
  fhirPathCriteria?: string[];

  /**
  * Extensions for fhirPathCriteria
  */
  _fhirPathCriteria?: Element[];

  /**
  * List of properties by which Subscriptions on the subscription topic can be filtered.
  */
  canFilterBy?: SubscriptionTopic_CanFilterBy[];

}

import { Extension } from "./Extension"
import { code } from "./code"
import { Element } from "./Element"
import { canonical } from "./canonical"
import { markdown } from "./markdown"
import { CapabilityStatement2_Feature } from "./CapabilityStatement2_Feature"
import { CapabilityStatement2_Interaction } from "./CapabilityStatement2_Interaction"
import { CapabilityStatement2_SearchParam } from "./CapabilityStatement2_SearchParam"
import { CapabilityStatement2_Operation } from "./CapabilityStatement2_Operation"
/**
* A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
*/
export interface CapabilityStatement2_Resource {
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
  * A type of resource exposed via the restful interface.
  */
  type?: code;

  /**
  * Extensions for type
  */
  _type?: Element;

  /**
  * A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses).
  */
  profile?: canonical;

  /**
  * A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](profiling.html#profile-uses).
  */
  supportedProfile?: canonical[];

  /**
  * Additional information about the resource type used by the system.
  */
  documentation?: markdown;

  /**
  * Extensions for documentation
  */
  _documentation?: Element;

  /**
  * A statement that affirms support for a feature, in this context.
  */
  feature?: CapabilityStatement2_Feature[];

  /**
  * Identifies a restful operation supported by the solution.
  */
  interaction?: CapabilityStatement2_Interaction[];

  /**
  * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
  */
  searchParam?: CapabilityStatement2_SearchParam[];

  /**
  * Definition of an operation or a named query together with its parameters and their meaning and type. Consult the definition of the operation for details about how to invoke the operation, and the parameters.
  */
  operation?: CapabilityStatement2_Operation[];

}

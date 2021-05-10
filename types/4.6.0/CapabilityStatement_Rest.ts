import { Extension } from "./Extension"
import { code } from "./code"
import { Element } from "./Element"
import { markdown } from "./markdown"
import { CapabilityStatement_Security } from "./CapabilityStatement_Security"
import { CapabilityStatement_Resource } from "./CapabilityStatement_Resource"
import { CapabilityStatement_Interaction1 } from "./CapabilityStatement_Interaction1"
import { CapabilityStatement_SearchParam } from "./CapabilityStatement_SearchParam"
import { CapabilityStatement_Operation } from "./CapabilityStatement_Operation"
import { canonical } from "./canonical"
/**
* A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
*/
export interface CapabilityStatement_Rest {
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
  * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
  */
  mode?: code;

  /**
  * Extensions for mode
  */
  _mode?: Element;

  /**
  * Information about the system's restful capabilities that apply across all applications, such as security.
  */
  documentation?: markdown;

  /**
  * Extensions for documentation
  */
  _documentation?: Element;

  /**
  * Information about security implementation from an interface perspective - what a client needs to know.
  */
  security?: CapabilityStatement_Security;

  /**
  * A specification of the restful capabilities of the solution for a specific resource type.
  */
  resource?: CapabilityStatement_Resource[];

  /**
  * A specification of restful operations supported by the system.
  */
  interaction?: CapabilityStatement_Interaction1[];

  /**
  * Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
  */
  searchParam?: CapabilityStatement_SearchParam[];

  /**
  * Definition of an operation or a named query together with its parameters and their meaning and type.
  */
  operation?: CapabilityStatement_Operation[];

  /**
  * An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .
  */
  compartment?: canonical[];

}

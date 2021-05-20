import { Extension } from "./Extension"
import { Element } from "./Element"
import { integer } from "./integer"
import { uri } from "./uri"
import { canonical } from "./canonical"
/**
* A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
*/
export interface TestScript_Capability {
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
  * Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
  */
  required?: boolean;

  /**
  * Extensions for required
  */
  _required?: Element;

  /**
  * Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
  */
  validated?: boolean;

  /**
  * Extensions for validated
  */
  _validated?: Element;

  /**
  * Description of the capabilities that this test script is requiring the server to support.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * Which origin server these requirements apply to.
  */
  origin?: integer[];

  /**
  * Extensions for origin
  */
  _origin?: Element[];

  /**
  * Which server these requirements apply to.
  */
  destination?: integer;

  /**
  * Extensions for destination
  */
  _destination?: Element;

  /**
  * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
  */
  link?: uri[];

  /**
  * Extensions for link
  */
  _link?: Element[];

  /**
  * Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped.
  */
  capabilities: canonical;

}

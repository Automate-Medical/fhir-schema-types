import { Extension } from "./Extension"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
/**
* A reference to a code defined by a terminology system.
*/
export interface Coding {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * The identification of the code system that defines the meaning of the symbol in the code.
  */
  system?: uri;

  /**
  * Extensions for system
  */
  _system?: Element;

  /**
  * The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
  */
  version?: string;

  /**
  * Extensions for version
  */
  _version?: Element;

  /**
  * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
  */
  code?: code;

  /**
  * Extensions for code
  */
  _code?: Element;

  /**
  * A representation of the meaning of the code in the system, following the rules of the system.
  */
  display?: string;

  /**
  * Extensions for display
  */
  _display?: Element;

  /**
  * Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).
  */
  userSelected?: boolean;

  /**
  * Extensions for userSelected
  */
  _userSelected?: Element;

}

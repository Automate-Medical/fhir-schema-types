import { Extension } from "./Extension"
import { uri } from "./uri"
import { Element } from "./Element"
import { dateTime } from "./dateTime"
import { integer } from "./integer"
import { ValueSet_Parameter } from "./ValueSet_Parameter"
import { ValueSet_Property } from "./ValueSet_Property"
import { ValueSet_Contains } from "./ValueSet_Contains"
/**
* A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
*/
export interface ValueSet_Expansion {
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
  * An identifier that uniquely identifies this expansion of the valueset, based on a unique combination of the provided parameters, the system default parameters, and the underlying system code system versions etc. Systems may re-use the same identifier as long as those factors remain the same, and the expansion is the same, but are not required to do so. This is a business identifier.
  */
  identifier?: uri;

  /**
  * Extensions for identifier
  */
  _identifier?: Element;

  /**
  * The time at which the expansion was produced by the expanding system.
  */
  timestamp?: dateTime;

  /**
  * Extensions for timestamp
  */
  _timestamp?: Element;

  /**
  * The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
  */
  total?: integer;

  /**
  * Extensions for total
  */
  _total?: Element;

  /**
  * If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL NOT be present.
  */
  offset?: integer;

  /**
  * Extensions for offset
  */
  _offset?: Element;

  /**
  * A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
  */
  parameter?: ValueSet_Parameter[];

  /**
  * A property defines an additional slot through which additional information can be provided about a concept.
  */
  property?: ValueSet_Property[];

  /**
  * The codes that are contained in the value set expansion.
  */
  contains?: ValueSet_Contains[];

}

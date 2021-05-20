import { Extension } from "./Extension"
import { Element } from "./Element"
import { code } from "./code"
import { markdown } from "./markdown"
/**
* Example of workflow instance.
*/
export interface ExampleScenario_Actor {
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
  * ID or acronym of actor.
  */
  actorId?: string;

  /**
  * Extensions for actorId
  */
  _actorId?: Element;

  /**
  * The type of actor - person or system.
  */
  type?: code;

  /**
  * Extensions for type
  */
  _type?: Element;

  /**
  * The name of the actor as shown in the page.
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * The description of the actor.
  */
  description?: markdown;

  /**
  * Extensions for description
  */
  _description?: Element;

}

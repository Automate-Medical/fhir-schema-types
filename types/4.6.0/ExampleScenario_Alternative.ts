import { Extension } from "./Extension"
import { Element } from "./Element"
import { markdown } from "./markdown"
import { ExampleScenario_Step } from "./ExampleScenario_Step"
/**
* Example of workflow instance.
*/
export interface ExampleScenario_Alternative {
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
  * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
  */
  title?: string;

  /**
  * Extensions for title
  */
  _title?: Element;

  /**
  * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
  */
  description?: markdown;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * What happens in each alternative option.
  */
  step?: ExampleScenario_Step[];

}

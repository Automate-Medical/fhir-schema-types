import { Extension } from "./Extension"
import { code } from "./code"
import { Element } from "./Element"
import { time } from "./time"
/**
* Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
*/
export interface Location_HoursOfOperation {
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
  * Indicates which days of the week are available between the start and end Times.
  */
  daysOfWeek?: code[];

  /**
  * Extensions for daysOfWeek
  */
  _daysOfWeek?: Element[];

  /**
  * The Location is open all day.
  */
  allDay?: boolean;

  /**
  * Extensions for allDay
  */
  _allDay?: Element;

  /**
  * Time that the Location opens.
  */
  openingTime?: time;

  /**
  * Extensions for openingTime
  */
  _openingTime?: Element;

  /**
  * Time that the Location closes.
  */
  closingTime?: time;

  /**
  * Extensions for closingTime
  */
  _closingTime?: Element;

}

import { Extension } from "./Extension";
import { Element } from "./Element";
import { time } from "./time";
/**
* The details of a healthcare service available at a location.
*/
export interface HealthcareService_AvailableTime {
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
    daysOfWeek?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[];
    /**
    * Extensions for daysOfWeek
    */
    _daysOfWeek?: Element[];
    /**
    * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
    */
    allDay?: boolean;
    /**
    * Extensions for allDay
    */
    _allDay?: Element;
    /**
    * The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
    */
    availableStartTime?: time;
    /**
    * Extensions for availableStartTime
    */
    _availableStartTime?: Element;
    /**
    * The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
    */
    availableEndTime?: time;
    /**
    * Extensions for availableEndTime
    */
    _availableEndTime?: Element;
}

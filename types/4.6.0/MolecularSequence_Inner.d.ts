import { Extension } from "./Extension";
import { integer } from "./integer";
import { Element } from "./Element";
/**
* Raw data describing a biological sequence.
*/
export interface MolecularSequence_Inner {
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
    * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
    */
    start?: integer;
    /**
    * Extensions for start
    */
    _start?: Element;
    /**
    * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
    */
    end?: integer;
    /**
    * Extensions for end
    */
    _end?: Element;
}

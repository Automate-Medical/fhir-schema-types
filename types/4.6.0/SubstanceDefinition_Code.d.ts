import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { Element } from "./Element";
import { Annotation } from "./Annotation";
import { Reference } from "./Reference";
/**
* The detailed description of a substance, typically at a level beyond what is used for prescribing.
*/
export interface SubstanceDefinition_Code {
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
    * The specific code.
    */
    code?: CodeableConcept;
    /**
    * Status of the code assignment, for example 'provisional', 'approved'.
    */
    status?: CodeableConcept;
    /**
    * The date at which the code status is changed as part of the terminology maintenance.
    */
    statusDate?: dateTime;
    /**
    * Extensions for statusDate
    */
    _statusDate?: Element;
    /**
    * Any comment can be provided in this field, if necessary.
    */
    note?: Annotation[];
    /**
    * Supporting literature.
    */
    source?: Reference[];
}

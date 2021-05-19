import { Extension } from "./Extension";
import { code } from "./code";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { CodeableConcept } from "./CodeableConcept";
/**
* A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
*/
export interface RequestGroup_Participant {
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
    * The type of participant in the action.
    */
    type?: code;
    /**
    * Extensions for type
    */
    _type?: Element;
    /**
    * The type of participant in the action.
    */
    typeReference?: Reference;
    /**
    * The role the participant should play in performing the described action.
    */
    role?: CodeableConcept;
    /**
    * Indicates how the actor will be involved in the action - author, reviewer, witness, etc.
    */
    function?: CodeableConcept;
    /**
    * A reference to the actual participant.
    */
    actor?: Reference;
}

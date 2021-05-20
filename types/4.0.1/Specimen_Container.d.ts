import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Element } from "./Element";
import { CodeableConcept } from "./CodeableConcept";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
/**
* A sample to be used for analysis.
*/
export interface Specimen_Container {
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
    * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
    */
    identifier?: Identifier[];
    /**
    * Textual description of the container.
    */
    description?: string;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
    */
    type?: CodeableConcept;
    /**
    * The capacity (volume or other measure) the container may contain.
    */
    capacity?: Quantity;
    /**
    * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
    */
    specimenQuantity?: Quantity;
    /**
    * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
    */
    additiveCodeableConcept?: CodeableConcept;
    /**
    * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
    */
    additiveReference?: Reference;
}

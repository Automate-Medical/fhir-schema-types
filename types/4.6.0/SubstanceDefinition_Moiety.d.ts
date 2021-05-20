import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Identifier } from "./Identifier";
import { Element } from "./Element";
import { Quantity } from "./Quantity";
/**
* The detailed description of a substance, typically at a level beyond what is used for prescribing.
*/
export interface SubstanceDefinition_Moiety {
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
    * Role that the moiety is playing.
    */
    role?: CodeableConcept;
    /**
    * Identifier by which this moiety substance is known.
    */
    identifier?: Identifier;
    /**
    * Textual name for this moiety substance.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * Stereochemistry type.
    */
    stereochemistry?: CodeableConcept;
    /**
    * Optical activity type.
    */
    opticalActivity?: CodeableConcept;
    /**
    * Molecular formula for this moiety of this substance, typically using the Hill system.
    */
    molecularFormula?: string;
    /**
    * Extensions for molecularFormula
    */
    _molecularFormula?: Element;
    /**
    * Quantitative value for this moiety.
    */
    amountQuantity?: Quantity;
    /**
    * Quantitative value for this moiety.
    */
    amountString?: string;
    /**
    * Extensions for amountString
    */
    _amountString?: Element;
    /**
    * The measurement type of the quantitative value.
    */
    amountType?: CodeableConcept;
}

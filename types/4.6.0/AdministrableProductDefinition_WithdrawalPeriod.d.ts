import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Quantity } from "./Quantity";
import { Element } from "./Element";
/**
* A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
*/
export interface AdministrableProductDefinition_WithdrawalPeriod {
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
    * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
    */
    tissue: CodeableConcept;
    /**
    * A value for the time.
    */
    value: Quantity;
    /**
    * Extra information about the withdrawal period.
    */
    supportingInformation?: string;
    /**
    * Extensions for supportingInformation
    */
    _supportingInformation?: Element;
}
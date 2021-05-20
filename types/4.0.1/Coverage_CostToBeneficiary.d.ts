import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Quantity } from "./Quantity";
import { Money } from "./Money";
import { Coverage_Exception } from "./Coverage_Exception";
/**
* Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
*/
export interface Coverage_CostToBeneficiary {
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
    * The category of patient centric costs associated with treatment.
    */
    type?: CodeableConcept;
    /**
    * The amount due from the patient for the cost category.
    */
    valueQuantity?: Quantity;
    /**
    * The amount due from the patient for the cost category.
    */
    valueMoney?: Money;
    /**
    * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
    */
    exception?: Coverage_Exception[];
}

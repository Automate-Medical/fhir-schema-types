import { Extension } from "./Extension";
import { code } from "./code";
import { Element } from "./Element";
import { CodeableConcept } from "./CodeableConcept";
import { decimal } from "./decimal";
import { Money } from "./Money";
/**
* The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
*/
export interface ChargeItemDefinition_PriceComponent {
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
    * This code identifies the type of the component.
    */
    type?: code;
    /**
    * Extensions for type
    */
    _type?: Element;
    /**
    * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
    */
    code?: CodeableConcept;
    /**
    * The factor that has been applied on the base price for calculating this component.
    */
    factor?: decimal;
    /**
    * Extensions for factor
    */
    _factor?: Element;
    /**
    * The amount calculated for this component.
    */
    amount?: Money;
}

import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Timing } from "./Timing";
import { Quantity } from "./Quantity";
/**
* A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
*/
export interface NutritionOrder_Supplement {
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
    * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
    */
    type?: CodeableConcept;
    /**
    * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
    */
    productName?: string;
    /**
    * Extensions for productName
    */
    _productName?: Element;
    /**
    * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
    */
    schedule?: Timing[];
    /**
    * The amount of the nutritional supplement to be given.
    */
    quantity?: Quantity;
    /**
    * Free text or additional instructions or information pertaining to the oral supplement.
    */
    instruction?: string;
    /**
    * Extensions for instruction
    */
    _instruction?: Element;
}

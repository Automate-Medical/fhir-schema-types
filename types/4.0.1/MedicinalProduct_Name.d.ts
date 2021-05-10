import { Extension } from "./Extension";
import { Element } from "./Element";
import { MedicinalProduct_NamePart } from "./MedicinalProduct_NamePart";
import { MedicinalProduct_CountryLanguage } from "./MedicinalProduct_CountryLanguage";
/**
* Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
*/
export interface MedicinalProduct_Name {
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
    * The full product name.
    */
    productName?: string;
    /**
    * Extensions for productName
    */
    _productName?: Element;
    /**
    * Coding words or phrases of the name.
    */
    namePart?: MedicinalProduct_NamePart[];
    /**
    * Country where the name applies.
    */
    countryLanguage?: MedicinalProduct_CountryLanguage[];
}

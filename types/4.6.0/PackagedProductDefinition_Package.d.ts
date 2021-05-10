import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { CodeableConcept } from "./CodeableConcept";
import { integer } from "./integer";
import { Element } from "./Element";
import { ProductShelfLife } from "./ProductShelfLife";
import { Reference } from "./Reference";
import { PackagedProductDefinition_Property } from "./PackagedProductDefinition_Property";
import { PackagedProductDefinition_ContainedItem } from "./PackagedProductDefinition_ContainedItem";
/**
* A medically related item or items, in a container or package.
*/
export interface PackagedProductDefinition_Package {
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
    * Including possibly Data Carrier Identifier.
    */
    identifier?: Identifier[];
    /**
    * The physical type of the container of the items.
    */
    type?: CodeableConcept;
    /**
    * The quantity of this level of packaging in the package that contains it. If specified, the outermost level is always 1.
    */
    quantity?: integer;
    /**
    * Extensions for quantity
    */
    _quantity?: Element;
    /**
    * Material type of the package item.
    */
    material?: CodeableConcept[];
    /**
    * A possible alternate material for the packaging.
    */
    alternateMaterial?: CodeableConcept[];
    /**
    * Shelf Life and storage information.
    */
    shelfLifeStorage?: ProductShelfLife[];
    /**
    * Manufacturer of this package Item. When there are multiple it means these are all possible manufacturers.
    */
    manufacturer?: Reference[];
    /**
    * General characteristics of this item.
    */
    property?: PackagedProductDefinition_Property[];
    /**
    * The item(s) within the packaging.
    */
    containedItem?: PackagedProductDefinition_ContainedItem[];
    /**
    * Allows containers within containers.
    */
    package?: PackagedProductDefinition_Package[];
}

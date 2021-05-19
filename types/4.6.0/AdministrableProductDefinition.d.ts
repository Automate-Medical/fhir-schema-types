import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Reference } from "./Reference";
import { CodeableConcept } from "./CodeableConcept";
import { AdministrableProductDefinition_Property } from "./AdministrableProductDefinition_Property";
import { AdministrableProductDefinition_RouteOfAdministration } from "./AdministrableProductDefinition_RouteOfAdministration";
/**
* A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
*/
export interface AdministrableProductDefinition {
    /**
    * This is a AdministrableProductDefinition resource
    */
    resourceType: "AdministrableProductDefinition";
    /**
    * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
    */
    id?: id;
    /**
    * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
    */
    meta?: Meta;
    /**
    * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
    */
    implicitRules?: uri;
    /**
    * Extensions for implicitRules
    */
    _implicitRules?: Element;
    /**
    * The base language in which the resource is written.
    */
    language?: code;
    /**
    * Extensions for language
    */
    _language?: Element;
    /**
    * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
    */
    text?: Narrative;
    /**
    * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope.
    */
    contained?: ResourceList[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
    */
    extension?: Extension[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
    *
    * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
    */
    modifierExtension?: Extension[];
    /**
    * An identifier for the administrable product.
    */
    identifier?: Identifier[];
    /**
    * The medicinal product that this is an administrable form of. This is not a reference to the item(s) that make up this administrable form - it is the whole product.
    */
    subject?: Reference[];
    /**
    * The administrable dose form, i.e. the dose form of the final product after necessary reconstitution or processing.
    */
    administrableDoseForm?: CodeableConcept;
    /**
    * The units of presentation for the administrable product, for example 'tablet'.
    */
    unitOfPresentation?: CodeableConcept;
    /**
    * The manufactured item(s) that this administrable product is produced from. Either a single item, or several that are mixed before administration (e.g. a power item and a solution item). Note that these are not raw ingredients.
    */
    producedFrom?: Reference[];
    /**
    * The ingredients of this administrable medicinal product. Sometimes it may be appropriate to specify these via the associated manufactured item(s).
    */
    ingredient?: Reference[];
    /**
    * A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product. This is not intended for devices that are just co-packaged.
    */
    device?: Reference[];
    /**
    * Characteristics e.g. a products onset of action.
    */
    property?: AdministrableProductDefinition_Property[];
    /**
    * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route.
    */
    routeOfAdministration: AdministrableProductDefinition_RouteOfAdministration[];
}

import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { CatalogEntry_RelatedEntry } from "./CatalogEntry_RelatedEntry";
import { Annotation } from "./Annotation";
import { Duration } from "./Duration";
import { CodeableConcept } from "./CodeableConcept";
/**
* Catalog entries are wrappers that contextualize items included in a catalog.
*/
export interface CatalogEntry {
    /**
    * This is a CatalogEntry resource
    */
    resourceType: "CatalogEntry";
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
    * Business identifier uniquely assigned to the catalog entry.
    */
    identifier?: Identifier[];
    /**
    * The name of this catalog entry announces the item that is represented by the entry.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * The type of resource that is represented by this catalog entry.
    */
    type?: code;
    /**
    * Extensions for type
    */
    _type?: Element;
    /**
    * Indicates whether this catalog entry is open to public usage (active) or not (draft or retired).
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * Period of usability of the catalog entry.
    */
    effectivePeriod?: Period;
    /**
    * Indicates whether or not the entry represents an item that is orderable.
    */
    orderable?: boolean;
    /**
    * Extensions for orderable
    */
    _orderable?: Element;
    /**
    * The item (resource) that this entry of the catalog represents.
    */
    referencedItem: Reference;
    /**
    * Used for example, to point to a substance, or to a device used to administer a medication.
    */
    relatedEntry?: CatalogEntry_RelatedEntry[];
    /**
    * Last actor who recorded (created or updated) this catalog entry.
    */
    updatedBy?: Reference;
    /**
    * Notes and comments about this catalog entry.
    */
    note?: Annotation[];
    /**
    * Estimated duration of the orderable item of this  entry of the catalog.
    */
    estimatedDuration?: Duration;
    /**
    * Billing code associated to the  item in the context of this  entry of the catalog.
    */
    billingCode?: CodeableConcept[];
    /**
    * Billing summary attached to the  item in the context of this  entry of the catalog.
    */
    billingSummary?: string;
    /**
    * Extensions for billingSummary
    */
    _billingSummary?: Element;
    /**
    * Schedule summary for the  item in the context of this  entry of the catalog.
    */
    scheduleSummary?: string;
    /**
    * Extensions for scheduleSummary
    */
    _scheduleSummary?: Element;
    /**
    * Summary of limitations for the  item in the context of this  entry of the catalog.
    */
    limitationSummary?: string;
    /**
    * Extensions for limitationSummary
    */
    _limitationSummary?: Element;
    /**
    * Regulatory summary for the  item in the context of this  entry of the catalog.
    */
    regulatorySummary?: string;
    /**
    * Extensions for regulatorySummary
    */
    _regulatorySummary?: Element;
}

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
import { markdown } from "./markdown";
import { dateTime } from "./dateTime";
import { Period } from "./Period";
import { CodeableReference } from "./CodeableReference";
import { RegulatedAuthorization_RelatedDate } from "./RegulatedAuthorization_RelatedDate";
import { RegulatedAuthorization_Case } from "./RegulatedAuthorization_Case";
/**
* Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
*/
export interface RegulatedAuthorization {
    /**
    * This is a RegulatedAuthorization resource
    */
    resourceType: "RegulatedAuthorization";
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
    * Business identifier for the authorization, typically this is assigned by the authorizing body.
    */
    identifier?: Identifier[];
    /**
    * The type of regulated product, treatment, facility or activity that is being authorized.
    */
    subject?: Reference;
    /**
    * Overall type of this authorization, for example drug marketing approval, orphan drug designation.
    */
    type?: CodeableConcept;
    /**
    * General textual supporting information.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted.
    */
    region?: CodeableConcept[];
    /**
    * The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications.
    */
    status?: CodeableConcept;
    /**
    * The date at which the current status was assigned.
    */
    statusDate?: dateTime;
    /**
    * Extensions for statusDate
    */
    _statusDate?: Element;
    /**
    * The time period in which the regulatory approval, clearance or licencing is in effect. As an example, a Marketing Authorization includes the date of authorization and/or an expiration date.
    */
    validityPeriod?: Period;
    /**
    * Condition for which the use of the regulated product applies.
    */
    indication?: CodeableReference;
    /**
    * The intended use of the product, e.g. prevention, treatment.
    */
    intendedUse?: CodeableConcept;
    /**
    * The legal or regulatory framework against which this authorization is granted, or other reasons for it.
    */
    basis?: CodeableConcept[];
    /**
    * Other dates associated with the authorization. It is common for an authorization to have renewal dates, initial time limited phases and so on.
    */
    relatedDate?: RegulatedAuthorization_RelatedDate[];
    /**
    * Authorization in areas within a country.
    */
    jurisdictionalAuthorization?: Reference[];
    /**
    * The organization that holds the granted authorization.
    */
    holder?: Reference;
    /**
    * The regulatory authority or authorizing body granting the authorization. For example, European Medicines Agency (EMA), Food and Drug Administration (FDA), Health Canada (HC), etc.
    */
    regulator?: Reference;
    /**
    * Additional information or supporting documentation about the authorization.
    */
    attachedDocument?: Reference[];
    /**
    * The case or regulatory procedure for granting or amending a marketing authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page).
    */
    case?: RegulatedAuthorization_Case;
}

import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { dateTime } from "./dateTime"
import { ContactDetail } from "./ContactDetail"
import { markdown } from "./markdown"
import { UsageContext } from "./UsageContext"
import { CodeableConcept } from "./CodeableConcept"
import { ValueSet_Compose } from "./ValueSet_Compose"
import { ValueSet_Expansion } from "./ValueSet_Expansion"
import { ValueSet_Scope } from "./ValueSet_Scope"
/**
* A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
*/
export interface ValueSet {
  /**
  * This is a ValueSet resource
  */
  resourceType: "ValueSet";

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
  * An absolute URI that is used to identify this value set when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this value set is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the value set is stored on different servers.
  */
  url?: uri;

  /**
  * Extensions for url
  */
  _url?: Element;

  /**
  * A formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
  */
  identifier?: Identifier[];

  /**
  * The identifier that is used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
  */
  version?: string;

  /**
  * Extensions for version
  */
  _version?: Element;

  /**
  * A natural language name identifying the value set. This name should be usable as an identifier for the module by machine processing applications such as code generation.
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * A short, descriptive, user-friendly title for the value set.
  */
  title?: string;

  /**
  * Extensions for title
  */
  _title?: Element;

  /**
  * The status of this value set. Enables tracking the life-cycle of the content. The status of the value set applies to the value set definition (ValueSet.compose) and the associated ValueSet metadata. Expansions do not have a state.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * A Boolean value to indicate that this value set is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
  */
  experimental?: boolean;

  /**
  * Extensions for experimental
  */
  _experimental?: Element;

  /**
  * The date (and optionally time) when the value set was created or revised (e.g. the 'content logical definition').
  */
  date?: dateTime;

  /**
  * Extensions for date
  */
  _date?: Element;

  /**
  * The name of the organization or individual that published the value set.
  */
  publisher?: string;

  /**
  * Extensions for publisher
  */
  _publisher?: Element;

  /**
  * Contact details to assist a user in finding and communicating with the publisher.
  */
  contact?: ContactDetail[];

  /**
  * A free text natural language description of the value set from a consumer's perspective. The textual description specifies the span of meanings for concepts to be included within the Value Set Expansion, and also may specify the intended use and limitations of the Value Set.
  */
  description?: markdown;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate value set instances.
  */
  useContext?: UsageContext[];

  /**
  * A legal or geographic region in which the value set is intended to be used.
  */
  jurisdiction?: CodeableConcept[];

  /**
  * Explanation of why this value set is needed and why it has been designed as it has.
  */
  purpose?: markdown;

  /**
  * Extensions for purpose
  */
  _purpose?: Element;

  /**
  * A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
  */
  copyright?: markdown;

  /**
  * Extensions for copyright
  */
  _copyright?: Element;

  /**
  * If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
  */
  immutable?: boolean;

  /**
  * Extensions for immutable
  */
  _immutable?: Element;

  /**
  * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
  */
  compose?: ValueSet_Compose;

  /**
  * A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
  */
  expansion?: ValueSet_Expansion;

  /**
  * Description of the semantic space the Value Set Expansion is intended to cover.
  */
  scope?: ValueSet_Scope;

}

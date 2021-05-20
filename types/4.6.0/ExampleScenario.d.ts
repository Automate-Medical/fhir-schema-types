import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { dateTime } from "./dateTime";
import { ContactDetail } from "./ContactDetail";
import { markdown } from "./markdown";
import { UsageContext } from "./UsageContext";
import { CodeableConcept } from "./CodeableConcept";
import { ExampleScenario_Actor } from "./ExampleScenario_Actor";
import { ExampleScenario_Instance } from "./ExampleScenario_Instance";
import { ExampleScenario_Process } from "./ExampleScenario_Process";
import { canonical } from "./canonical";
/**
* Example of workflow instance.
*/
export interface ExampleScenario {
    /**
    * This is a ExampleScenario resource
    */
    resourceType: "ExampleScenario";
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
    * An absolute URI that is used to identify this example scenario when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this example scenario is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the example scenario is stored on different servers.
    */
    url?: uri;
    /**
    * Extensions for url
    */
    _url?: Element;
    /**
    * A formal identifier that is used to identify this example scenario when it is represented in other formats, or referenced in a specification, model, design or an instance.
    */
    identifier?: Identifier[];
    /**
    * The identifier that is used to identify this version of the example scenario when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the example scenario author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
    */
    version?: string;
    /**
    * Extensions for version
    */
    _version?: Element;
    /**
    * A natural language name identifying the example scenario. This name should be usable as an identifier for the module by machine processing applications such as code generation.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * A short, descriptive, user-friendly title for the {{title}}.
    */
    title?: string;
    /**
    * Extensions for title
    */
    _title?: Element;
    /**
    * The status of this example scenario. Enables tracking the life-cycle of the content.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * A Boolean value to indicate that this example scenario is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
    */
    experimental?: boolean;
    /**
    * Extensions for experimental
    */
    _experimental?: Element;
    /**
    * The date  (and optionally time) when the example scenario was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the example scenario changes. (e.g. the 'content logical definition').
    */
    date?: dateTime;
    /**
    * Extensions for date
    */
    _date?: Element;
    /**
    * The name of the organization or individual that published the example scenario.
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
    * A free text natural language description of the {{title}} from a consumer's perspective.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate example scenario instances.
    */
    useContext?: UsageContext[];
    /**
    * A legal or geographic region in which the example scenario is intended to be used.
    */
    jurisdiction?: CodeableConcept[];
    /**
    * What the example scenario resource is created for. This should not be used to show the business purpose of the scenario itself, but the purpose of documenting a scenario.
    */
    purpose?: markdown;
    /**
    * Extensions for purpose
    */
    _purpose?: Element;
    /**
    * A copyright statement relating to the example scenario and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the example scenario.
    */
    copyright?: markdown;
    /**
    * Extensions for copyright
    */
    _copyright?: Element;
    /**
    * Actor participating in the resource.
    */
    actor?: ExampleScenario_Actor[];
    /**
    * Each resource and each version that is present in the workflow.
    */
    instance?: ExampleScenario_Instance[];
    /**
    * Each major process - a group of operations.
    */
    process?: ExampleScenario_Process[];
    /**
    * Another nested workflow.
    */
    workflow?: canonical[];
}

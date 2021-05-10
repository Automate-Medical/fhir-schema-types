import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { canonical } from "./canonical";
import { Reference } from "./Reference";
import { CodeableConcept } from "./CodeableConcept";
import { Period } from "./Period";
import { dateTime } from "./dateTime";
import { NutritionIntake_ConsumedItem } from "./NutritionIntake_ConsumedItem";
import { NutritionIntake_IngredientLabel } from "./NutritionIntake_IngredientLabel";
import { NutritionIntake_Performer } from "./NutritionIntake_Performer";
import { CodeableReference } from "./CodeableReference";
import { Annotation } from "./Annotation";
/**
* A record of food or fluid that is being consumed by a patient.   A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient's memory, from a nutrition label,  or from a clinician documenting observed intake.
*/
export interface NutritionIntake {
    /**
    * This is a NutritionIntake resource
    */
    resourceType: "NutritionIntake";
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
    * Identifiers associated with this Nutrition Intake that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.
    */
    identifier?: Identifier[];
    /**
    * Instantiates FHIR protocol or definition.
    */
    instantiatesCanonical?: canonical[];
    /**
    * Instantiates external protocol or definition.
    */
    instantiatesUri?: uri[];
    /**
    * Extensions for instantiatesUri
    */
    _instantiatesUri?: Element[];
    /**
    * A plan, proposal or order that is fulfilled in whole or in part by this event.
    */
    basedOn?: Reference[];
    /**
    * A larger event of which this particular event is a component or step.
    */
    partOf?: Reference[];
    /**
    * A code representing the patient or other source's judgment about the state of the intake that this assertion is about.  Generally, this will be active or completed.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * Captures the reason for the current state of the NutritionIntake.
    */
    statusReason?: CodeableConcept[];
    /**
    * Type of nutrition intake setting/reporting.
    */
    code?: CodeableConcept;
    /**
    * The person, animal or group who is/was consuming the food or fluid.
    */
    subject: Reference;
    /**
    * The encounter that establishes the context for this NutritionIntake.
    */
    encounter?: Reference;
    /**
    * The interval of time during which it is being asserted that the patient is/was consuming the food or fluid.
    */
    occurrenceDateTime?: string;
    /**
    * Extensions for occurrenceDateTime
    */
    _occurrenceDateTime?: Element;
    /**
    * The interval of time during which it is being asserted that the patient is/was consuming the food or fluid.
    */
    occurrencePeriod?: Period;
    /**
    * The date when the Nutrition Intake was asserted by the information source.
    */
    recorded?: dateTime;
    /**
    * Extensions for recorded
    */
    _recorded?: Element;
    /**
    * The person or organization that provided the information about the consumption of this food or fluid. Note: Use derivedFrom when a NutritionIntake is derived from other resources.
    */
    reportedBoolean?: boolean;
    /**
    * Extensions for reportedBoolean
    */
    _reportedBoolean?: Element;
    /**
    * The person or organization that provided the information about the consumption of this food or fluid. Note: Use derivedFrom when a NutritionIntake is derived from other resources.
    */
    reportedReference?: Reference;
    /**
    * What food or fluid product or item was consumed.
    */
    consumedItem: NutritionIntake_ConsumedItem[];
    /**
    * Total nutrient amounts for the whole meal, product, serving, etc.
    */
    ingredientLabel?: NutritionIntake_IngredientLabel[];
    /**
    * Who performed the intake and how they were involved.
    */
    performer?: NutritionIntake_Performer[];
    /**
    * Where the intake occurred.
    */
    location?: Reference;
    /**
    * Allows linking the NutritionIntake to the underlying NutritionOrder, or to other information, such as AllergyIntolerance, that supports or is used to derive the NutritionIntake.
    */
    derivedFrom?: Reference[];
    /**
    * A reason, Condition or observation for why the food or fluid is /was consumed.
    */
    reason?: CodeableReference[];
    /**
    * Provides extra information about the Nutrition Intake that is not conveyed by the other attributes.
    */
    note?: Annotation[];
}

import { Extension } from "./Extension";
import { Element } from "./Element";
import { code } from "./code";
import { CodeableConcept } from "./CodeableConcept";
import { RelatedArtifact } from "./RelatedArtifact";
import { id } from "./id";
import { Reference } from "./Reference";
import { TriggerDefinition } from "./TriggerDefinition";
import { PlanDefinition_Condition } from "./PlanDefinition_Condition";
import { DataRequirement } from "./DataRequirement";
import { PlanDefinition_RelatedAction } from "./PlanDefinition_RelatedAction";
import { Age } from "./Age";
import { Period } from "./Period";
import { Duration } from "./Duration";
import { Range } from "./Range";
import { Timing } from "./Timing";
import { PlanDefinition_Participant } from "./PlanDefinition_Participant";
import { canonical } from "./canonical";
import { PlanDefinition_DynamicValue } from "./PlanDefinition_DynamicValue";
/**
* This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
*/
export interface PlanDefinition_Action {
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
    * A user-visible prefix for the action.
    */
    prefix?: string;
    /**
    * Extensions for prefix
    */
    _prefix?: Element;
    /**
    * The title of the action displayed to a user.
    */
    title?: string;
    /**
    * Extensions for title
    */
    _title?: Element;
    /**
    * A brief description of the action used to provide a summary to display to the user.
    */
    description?: string;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
    */
    textEquivalent?: string;
    /**
    * Extensions for textEquivalent
    */
    _textEquivalent?: Element;
    /**
    * Indicates how quickly the action should be addressed with respect to other actions.
    */
    priority?: code;
    /**
    * Extensions for priority
    */
    _priority?: Element;
    /**
    * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
    */
    code?: CodeableConcept[];
    /**
    * A description of why this action is necessary or appropriate.
    */
    reason?: CodeableConcept[];
    /**
    * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
    */
    documentation?: RelatedArtifact[];
    /**
    * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
    */
    goalId?: id[];
    /**
    * Extensions for goalId
    */
    _goalId?: Element[];
    /**
    * A code or group definition that describes the intended subject of the action and its children, if any.
    */
    subjectCodeableConcept?: CodeableConcept;
    /**
    * A code or group definition that describes the intended subject of the action and its children, if any.
    */
    subjectReference?: Reference;
    /**
    * A description of when the action should be triggered.
    */
    trigger?: TriggerDefinition[];
    /**
    * An expression that describes applicability criteria or start/stop conditions for the action.
    */
    condition?: PlanDefinition_Condition[];
    /**
    * Defines input data requirements for the action.
    */
    input?: DataRequirement[];
    /**
    * Defines the outputs of the action, if any.
    */
    output?: DataRequirement[];
    /**
    * A relationship to another action such as "before" or "30-60 minutes after start of".
    */
    relatedAction?: PlanDefinition_RelatedAction[];
    /**
    * An optional value describing when the action should be performed.
    */
    timingDateTime?: string;
    /**
    * Extensions for timingDateTime
    */
    _timingDateTime?: Element;
    /**
    * An optional value describing when the action should be performed.
    */
    timingAge?: Age;
    /**
    * An optional value describing when the action should be performed.
    */
    timingPeriod?: Period;
    /**
    * An optional value describing when the action should be performed.
    */
    timingDuration?: Duration;
    /**
    * An optional value describing when the action should be performed.
    */
    timingRange?: Range;
    /**
    * An optional value describing when the action should be performed.
    */
    timingTiming?: Timing;
    /**
    * Indicates who should participate in performing the action described.
    */
    participant?: PlanDefinition_Participant[];
    /**
    * The type of action to perform (create, update, remove).
    */
    type?: CodeableConcept;
    /**
    * Defines the grouping behavior for the action and its children.
    */
    groupingBehavior?: "visual-group" | "logical-group" | "sentence-group";
    /**
    * Extensions for groupingBehavior
    */
    _groupingBehavior?: Element;
    /**
    * Defines the selection behavior for the action and its children.
    */
    selectionBehavior?: "any" | "all" | "all-or-none" | "exactly-one" | "at-most-one" | "one-or-more";
    /**
    * Extensions for selectionBehavior
    */
    _selectionBehavior?: Element;
    /**
    * Defines the required behavior for the action.
    */
    requiredBehavior?: "must" | "could" | "must-unless-documented";
    /**
    * Extensions for requiredBehavior
    */
    _requiredBehavior?: Element;
    /**
    * Defines whether the action should usually be preselected.
    */
    precheckBehavior?: "yes" | "no";
    /**
    * Extensions for precheckBehavior
    */
    _precheckBehavior?: Element;
    /**
    * Defines whether the action can be selected multiple times.
    */
    cardinalityBehavior?: "single" | "multiple";
    /**
    * Extensions for cardinalityBehavior
    */
    _cardinalityBehavior?: Element;
    /**
    * A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
    */
    definitionCanonical?: string;
    /**
    * Extensions for definitionCanonical
    */
    _definitionCanonical?: Element;
    /**
    * A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
    */
    definitionUri?: string;
    /**
    * Extensions for definitionUri
    */
    _definitionUri?: Element;
    /**
    * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
    */
    transform?: canonical;
    /**
    * Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
    */
    dynamicValue?: PlanDefinition_DynamicValue[];
    /**
    * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
    */
    action?: PlanDefinition_Action[];
}

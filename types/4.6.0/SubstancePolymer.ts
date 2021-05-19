import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { CodeableConcept } from "./CodeableConcept"
import { SubstancePolymer_MonomerSet } from "./SubstancePolymer_MonomerSet"
import { SubstancePolymer_Repeat } from "./SubstancePolymer_Repeat"
/**
* Properties of a substance specific to it being a polymer.
*/
export interface SubstancePolymer {
  /**
  * This is a SubstancePolymer resource
  */
  resourceType: "SubstancePolymer";

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
  * A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier.
  */
  identifier?: Identifier;

  /**
  * Overall type of the polymer.
  */
  class?: CodeableConcept;

  /**
  * Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic.
  */
  geometry?: CodeableConcept;

  /**
  * Descrtibes the copolymer sequence type (polymer connectivity).
  */
  copolymerConnectivity?: CodeableConcept[];

  /**
  * Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder.
  */
  modification?: string;

  /**
  * Extensions for modification
  */
  _modification?: Element;

  /**
  * Todo.
  */
  monomerSet?: SubstancePolymer_MonomerSet[];

  /**
  * Specifies and quantifies the repeated units and their configuration.
  */
  repeat?: SubstancePolymer_Repeat[];

}
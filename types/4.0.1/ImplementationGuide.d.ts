import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { dateTime } from "./dateTime";
import { ContactDetail } from "./ContactDetail";
import { markdown } from "./markdown";
import { UsageContext } from "./UsageContext";
import { CodeableConcept } from "./CodeableConcept";
import { ImplementationGuide_DependsOn } from "./ImplementationGuide_DependsOn";
import { ImplementationGuide_Global } from "./ImplementationGuide_Global";
import { ImplementationGuide_Definition } from "./ImplementationGuide_Definition";
import { ImplementationGuide_Manifest } from "./ImplementationGuide_Manifest";
/**
* A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
*/
export interface ImplementationGuide {
    /**
    * This is a ImplementationGuide resource
    */
    resourceType: "ImplementationGuide";
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
    * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
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
    * An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this implementation guide is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the implementation guide is stored on different servers.
    */
    url?: uri;
    /**
    * Extensions for url
    */
    _url?: Element;
    /**
    * The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
    */
    version?: string;
    /**
    * Extensions for version
    */
    _version?: Element;
    /**
    * A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * A short, descriptive, user-friendly title for the implementation guide.
    */
    title?: string;
    /**
    * Extensions for title
    */
    _title?: Element;
    /**
    * The status of this implementation guide. Enables tracking the life-cycle of the content.
    */
    status?: "draft" | "active" | "retired" | "unknown";
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * A Boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
    */
    experimental?: boolean;
    /**
    * Extensions for experimental
    */
    _experimental?: Element;
    /**
    * The date  (and optionally time) when the implementation guide was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
    */
    date?: dateTime;
    /**
    * Extensions for date
    */
    _date?: Element;
    /**
    * The name of the organization or individual that published the implementation guide.
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
    * A free text natural language description of the implementation guide from a consumer's perspective.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate implementation guide instances.
    */
    useContext?: UsageContext[];
    /**
    * A legal or geographic region in which the implementation guide is intended to be used.
    */
    jurisdiction?: CodeableConcept[];
    /**
    * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
    */
    copyright?: markdown;
    /**
    * Extensions for copyright
    */
    _copyright?: Element;
    /**
    * The NPM package name for this Implementation Guide, used in the NPM package distribution, which is the primary mechanism by which FHIR based tooling manages IG dependencies. This value must be globally unique, and should be assigned with care.
    */
    packageId?: id;
    /**
    * Extensions for packageId
    */
    _packageId?: Element;
    /**
    * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
    */
    license?: "not-open-source" | "0BSD" | "AAL" | "Abstyles" | "Adobe-2006" | "Adobe-Glyph" | "ADSL" | "AFL-1.1" | "AFL-1.2" | "AFL-2.0" | "AFL-2.1" | "AFL-3.0" | "Afmparse" | "AGPL-1.0-only" | "AGPL-1.0-or-later" | "AGPL-3.0-only" | "AGPL-3.0-or-later" | "Aladdin" | "AMDPLPA" | "AML" | "AMPAS" | "ANTLR-PD" | "Apache-1.0" | "Apache-1.1" | "Apache-2.0" | "APAFML" | "APL-1.0" | "APSL-1.0" | "APSL-1.1" | "APSL-1.2" | "APSL-2.0" | "Artistic-1.0-cl8" | "Artistic-1.0-Perl" | "Artistic-1.0" | "Artistic-2.0" | "Bahyph" | "Barr" | "Beerware" | "BitTorrent-1.0" | "BitTorrent-1.1" | "Borceux" | "BSD-1-Clause" | "BSD-2-Clause-FreeBSD" | "BSD-2-Clause-NetBSD" | "BSD-2-Clause-Patent" | "BSD-2-Clause" | "BSD-3-Clause-Attribution" | "BSD-3-Clause-Clear" | "BSD-3-Clause-LBNL" | "BSD-3-Clause-No-Nuclear-License-2014" | "BSD-3-Clause-No-Nuclear-License" | "BSD-3-Clause-No-Nuclear-Warranty" | "BSD-3-Clause" | "BSD-4-Clause-UC" | "BSD-4-Clause" | "BSD-Protection" | "BSD-Source-Code" | "BSL-1.0" | "bzip2-1.0.5" | "bzip2-1.0.6" | "Caldera" | "CATOSL-1.1" | "CC-BY-1.0" | "CC-BY-2.0" | "CC-BY-2.5" | "CC-BY-3.0" | "CC-BY-4.0" | "CC-BY-NC-1.0" | "CC-BY-NC-2.0" | "CC-BY-NC-2.5" | "CC-BY-NC-3.0" | "CC-BY-NC-4.0" | "CC-BY-NC-ND-1.0" | "CC-BY-NC-ND-2.0" | "CC-BY-NC-ND-2.5" | "CC-BY-NC-ND-3.0" | "CC-BY-NC-ND-4.0" | "CC-BY-NC-SA-1.0" | "CC-BY-NC-SA-2.0" | "CC-BY-NC-SA-2.5" | "CC-BY-NC-SA-3.0" | "CC-BY-NC-SA-4.0" | "CC-BY-ND-1.0" | "CC-BY-ND-2.0" | "CC-BY-ND-2.5" | "CC-BY-ND-3.0" | "CC-BY-ND-4.0" | "CC-BY-SA-1.0" | "CC-BY-SA-2.0" | "CC-BY-SA-2.5" | "CC-BY-SA-3.0" | "CC-BY-SA-4.0" | "CC0-1.0" | "CDDL-1.0" | "CDDL-1.1" | "CDLA-Permissive-1.0" | "CDLA-Sharing-1.0" | "CECILL-1.0" | "CECILL-1.1" | "CECILL-2.0" | "CECILL-2.1" | "CECILL-B" | "CECILL-C" | "ClArtistic" | "CNRI-Jython" | "CNRI-Python-GPL-Compatible" | "CNRI-Python" | "Condor-1.1" | "CPAL-1.0" | "CPL-1.0" | "CPOL-1.02" | "Crossword" | "CrystalStacker" | "CUA-OPL-1.0" | "Cube" | "curl" | "D-FSL-1.0" | "diffmark" | "DOC" | "Dotseqn" | "DSDP" | "dvipdfm" | "ECL-1.0" | "ECL-2.0" | "EFL-1.0" | "EFL-2.0" | "eGenix" | "Entessa" | "EPL-1.0" | "EPL-2.0" | "ErlPL-1.1" | "EUDatagrid" | "EUPL-1.0" | "EUPL-1.1" | "EUPL-1.2" | "Eurosym" | "Fair" | "Frameworx-1.0" | "FreeImage" | "FSFAP" | "FSFUL" | "FSFULLR" | "FTL" | "GFDL-1.1-only" | "GFDL-1.1-or-later" | "GFDL-1.2-only" | "GFDL-1.2-or-later" | "GFDL-1.3-only" | "GFDL-1.3-or-later" | "Giftware" | "GL2PS" | "Glide" | "Glulxe" | "gnuplot" | "GPL-1.0-only" | "GPL-1.0-or-later" | "GPL-2.0-only" | "GPL-2.0-or-later" | "GPL-3.0-only" | "GPL-3.0-or-later" | "gSOAP-1.3b" | "HaskellReport" | "HPND" | "IBM-pibs" | "ICU" | "IJG" | "ImageMagick" | "iMatix" | "Imlib2" | "Info-ZIP" | "Intel-ACPI" | "Intel" | "Interbase-1.0" | "IPA" | "IPL-1.0" | "ISC" | "JasPer-2.0" | "JSON" | "LAL-1.2" | "LAL-1.3" | "Latex2e" | "Leptonica" | "LGPL-2.0-only" | "LGPL-2.0-or-later" | "LGPL-2.1-only" | "LGPL-2.1-or-later" | "LGPL-3.0-only" | "LGPL-3.0-or-later" | "LGPLLR" | "Libpng" | "libtiff" | "LiLiQ-P-1.1" | "LiLiQ-R-1.1" | "LiLiQ-Rplus-1.1" | "Linux-OpenIB" | "LPL-1.0" | "LPL-1.02" | "LPPL-1.0" | "LPPL-1.1" | "LPPL-1.2" | "LPPL-1.3a" | "LPPL-1.3c" | "MakeIndex" | "MirOS" | "MIT-0" | "MIT-advertising" | "MIT-CMU" | "MIT-enna" | "MIT-feh" | "MIT" | "MITNFA" | "Motosoto" | "mpich2" | "MPL-1.0" | "MPL-1.1" | "MPL-2.0-no-copyleft-exception" | "MPL-2.0" | "MS-PL" | "MS-RL" | "MTLL" | "Multics" | "Mup" | "NASA-1.3" | "Naumen" | "NBPL-1.0" | "NCSA" | "Net-SNMP" | "NetCDF" | "Newsletr" | "NGPL" | "NLOD-1.0" | "NLPL" | "Nokia" | "NOSL" | "Noweb" | "NPL-1.0" | "NPL-1.1" | "NPOSL-3.0" | "NRL" | "NTP" | "OCCT-PL" | "OCLC-2.0" | "ODbL-1.0" | "OFL-1.0" | "OFL-1.1" | "OGTSL" | "OLDAP-1.1" | "OLDAP-1.2" | "OLDAP-1.3" | "OLDAP-1.4" | "OLDAP-2.0.1" | "OLDAP-2.0" | "OLDAP-2.1" | "OLDAP-2.2.1" | "OLDAP-2.2.2" | "OLDAP-2.2" | "OLDAP-2.3" | "OLDAP-2.4" | "OLDAP-2.5" | "OLDAP-2.6" | "OLDAP-2.7" | "OLDAP-2.8" | "OML" | "OpenSSL" | "OPL-1.0" | "OSET-PL-2.1" | "OSL-1.0" | "OSL-1.1" | "OSL-2.0" | "OSL-2.1" | "OSL-3.0" | "PDDL-1.0" | "PHP-3.0" | "PHP-3.01" | "Plexus" | "PostgreSQL" | "psfrag" | "psutils" | "Python-2.0" | "Qhull" | "QPL-1.0" | "Rdisc" | "RHeCos-1.1" | "RPL-1.1" | "RPL-1.5" | "RPSL-1.0" | "RSA-MD" | "RSCPL" | "Ruby" | "SAX-PD" | "Saxpath" | "SCEA" | "Sendmail" | "SGI-B-1.0" | "SGI-B-1.1" | "SGI-B-2.0" | "SimPL-2.0" | "SISSL-1.2" | "SISSL" | "Sleepycat" | "SMLNJ" | "SMPPL" | "SNIA" | "Spencer-86" | "Spencer-94" | "Spencer-99" | "SPL-1.0" | "SugarCRM-1.1.3" | "SWL" | "TCL" | "TCP-wrappers" | "TMate" | "TORQUE-1.1" | "TOSL" | "Unicode-DFS-2015" | "Unicode-DFS-2016" | "Unicode-TOU" | "Unlicense" | "UPL-1.0" | "Vim" | "VOSTROM" | "VSL-1.0" | "W3C-19980720" | "W3C-20150513" | "W3C" | "Watcom-1.0" | "Wsuipa" | "WTFPL" | "X11" | "Xerox" | "XFree86-1.1" | "xinetd" | "Xnet" | "xpp" | "XSkat" | "YPL-1.0" | "YPL-1.1" | "Zed" | "Zend-2.0" | "Zimbra-1.3" | "Zimbra-1.4" | "zlib-acknowledgement" | "Zlib" | "ZPL-1.1" | "ZPL-2.0" | "ZPL-2.1";
    /**
    * Extensions for license
    */
    _license?: Element;
    /**
    * The version(s) of the FHIR specification that this ImplementationGuide targets - e.g. describes how to use. The value of this element is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.1. for this version.
    */
    fhirVersion?: ("0.01" | "0.05" | "0.06" | "0.11" | "0.0.80" | "0.0.81" | "0.0.82" | "0.4.0" | "0.5.0" | "1.0.0" | "1.0.1" | "1.0.2" | "1.1.0" | "1.4.0" | "1.6.0" | "1.8.0" | "3.0.0" | "3.0.1" | "3.3.0" | "3.5.0" | "4.0.0" | "4.0.1")[];
    /**
    * Extensions for fhirVersion
    */
    _fhirVersion?: Element[];
    /**
    * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
    */
    dependsOn?: ImplementationGuide_DependsOn[];
    /**
    * A set of profiles that all resources covered by this implementation guide must conform to.
    */
    global?: ImplementationGuide_Global[];
    /**
    * The information needed by an IG publisher tool to publish the whole implementation guide.
    */
    definition?: ImplementationGuide_Definition;
    /**
    * Information about an assembled implementation guide, created by the publication tooling.
    */
    manifest?: ImplementationGuide_Manifest;
}

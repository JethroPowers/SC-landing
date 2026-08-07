export const siteUrl = "https://sovereigntycontrol.com";

export const llmsText = `# Sovereignty Control

> Sovereignty Control is an early-stage managed matter-readiness method for professional firms handling citizenship, residence, relocation and investment-migration matters.

Sovereignty Control helps specialist firms reconstruct matter state, track readiness, control blockers and dependencies, assign operational ownership, prepare advisor-review questions and surface programme changes affecting active work. It is designed for professional firms, not individual applicants.

Sovereignty Intelligence is the programme-information component. It records countries, programmes, qualifying routes, government fees, dependant rules, physical-presence requirements, processing ranges, sources, effective dates and review states. Sovereignty Control applies that reviewed information to active client matters.

Sovereignty Control does not provide legal, tax, immigration or investment advice. Professional firms retain client relationships, professional judgement, programme assumptions, source-of-funds decisions, final decisions and submissions. The operating method is being validated and is not presented as a mature software platform or already-scaled managed service.

## Understand the service

- [How Matter Control Works](${siteUrl}/how-matter-control-works): The canonical interactive explanation, following fictional matter SC-024 from minimised intake through readiness, review, change impact and closeout.
- [Intelligence](${siteUrl}/intelligence): Programme routes, fees, dependant rules, official sources, effective dates, draft updates and release history.

## Current offer

- [Complimentary Matter Control Diagnostic](${siteUrl}/diagnostic): One active, recent or anonymised matter over seven to ten working days, with no obligation to continue.

## Company and contact

- [About](${siteUrl}/about): Founder background, project history and professional boundaries.
- [Discuss a Complimentary Matter-Control Diagnostic](${siteUrl}/contact): Suitability enquiry form. Do not submit client-identifiable information or matter data.

## Policies

- [Disclaimer](${siteUrl}/disclaimer): Professional-advice and programme-information limitations.
- [Privacy](${siteUrl}/privacy): Information collected through diagnostic enquiries.

## Extended reference

- [Full LLM-readable reference](${siteUrl}/llms-full.txt): Detailed product, offer, audience and terminology information.
`;

export const llmsFullText = `# Sovereignty Control: Full Reference

> A factual reference for AI assistants, search systems and research agents describing Sovereignty Control, its audience, product scope, offers and professional boundaries.

## What Sovereignty Control is

Sovereignty Control is a founder-led matter-readiness operating method being validated with firms handling complex citizenship, residence, relocation and investment-migration matters. It turns scattered operational information into a controlled record for the professional team.

The product is intended for boutique citizenship-by-investment and residence-by-investment advisors, authorised agents, UAE relocation and company-formation firms, immigration practices, tax-relocation teams and other private-client firms coordinating multi-country matters.

It is not a consumer country-comparison website, a public fee calculator, a generic CRM, an established managed service or a substitute for professional judgement.

## The problem it addresses

Cross-border private-client matters commonly involve a principal applicant, spouse, children or other dependants; several programme or relocation routes; government and professional fees; due-diligence questions; source-of-funds evidence; application documents; external providers; deadlines; and changing programme rules.

The information often sits across email, spreadsheets, PDF proposals, messages, document folders, website pages and advisor notes. That fragmentation can leave the firm unable to answer basic operational questions quickly: which assumption is current, what is missing, what prevents progress, who owns the next action, what changed and what the client should be told.

## Intelligence and Control

Sovereignty Intelligence is the programme-information component. It records countries, programmes, qualifying investment routes, government fees, family and dependant rules, physical-presence requirements, processing ranges, official sources, effective dates, policy notes, draft updates and published releases.

Sovereignty Control is the proposed managed matter-readiness desk. Its Readiness Workspace organises matter state, evidence readiness, blockers, dependencies, owners, deadlines, advisor-review points and change impact. Its Briefing Workspace supports household scenarios, comparisons and proposal snapshots where needed.

The relationship is: Intelligence records the programme information; Control shows how that information is being used in a live matter.

## What the firm can see

- Matter stage, responsible advisor, target date and next action.
- Applicant and dependant structure, including unresolved age or eligibility questions.
- Programme routes under consideration and assumptions requiring review.
- Indicative family-cost comparisons that separate route capital, government fees, due diligence and other charges.
- Required application documents by person, with complete, missing, needs-review and not-started states.
- Blockers showing what cannot proceed, why, who must act and what evidence is required.
- Programme changes showing the previous value, proposed value, source, effective date, reviewer and affected matters or reports.
- Internal advisor notes separated from a concise client-facing status and next milestone.

## Validation approach

The current offer is a complimentary Matter Control Diagnostic for one active, recent or anonymised matter over seven to ten working days. It reconstructs the current state, registers document readiness and dependencies, exposes blockers and ownership gaps, prepares advisor-review questions and closes with an immediate action plan. There is no obligation to continue, and Sovereignty Control does not contact the firm's client, provider or authority during this stage.

## Current offer

### Complimentary Matter Control Diagnostic

Fee: complimentary. Scope: one active, recent or anonymised matter. Timing: seven to ten working days. Commitment: no obligation to continue.

Outputs include a matter map, document-readiness register, blocker and dependency register, advisor-review questions, programme-assumption register, immediate action plan and closeout summary.

### Later stages

A 30-day co-managed readiness pilot may be discussed privately only after a successful diagnostic closeout. Any paid sprint or future managed desk must be justified by controlled delivery, repeatable matter patterns, safe authority boundaries and demonstrated operational value. No public recurring price is presented during validation.

## Main use cases

- CBI/RBI advisory: family pricing, dependant eligibility, application documents, programme comparisons and proposal review.
- UAE relocation and company formation: company setup, residence visa, dependant visas, banking and tax-residency evidence with visible dependencies.
- Caribbean authorised agents: applicant and family maps, document completeness, due diligence, submission readiness and case status.
- Private-client practices: coordination across immigration, tax, company, banking and family work while keeping responsibilities and client communication clear.

## Demonstration matter

The public demonstration uses the single fictional reference SC-024. It follows a principal applicant, spouse and two children through four route contexts, evidence readiness, source-of-funds review, a programme change, advisor review and closeout. All values are demonstration data and require professional review.

## Professional boundaries

Sovereignty Control supports operational matter reconstruction, readiness, blocker control and advisor-review preparation. It does not provide legal, tax, immigration or investment advice. It does not determine eligibility, approve source of funds, recommend an investment, make a regulated filing or guarantee an approval. Programme rules, costs, requirements and client decisions must be confirmed by the firm's qualified professionals.

Do not submit client-identifiable or sensitive matter information through the public enquiry form.

## Terminology

- Applicant: the principal person making an application.
- Dependant: a spouse, child, parent or other eligible family member included under a programme's rules.
- Programme route: a qualifying contribution, property, bond, fund, business, deposit or other route within a citizenship or residence programme.
- Family-cost model: an indicative calculation that applies route and fee assumptions to the actual household structure.
- Document readiness: the status of required documents and evidence by person.
- Blocker: an unresolved item that prevents a recommendation, submission or later dependency from proceeding.
- Review state: whether information is confirmed, proposed, draft, source-required or awaiting advisor review.
- Client status: the external summary of the current stage, requested action and next milestone, excluding internal professional notes.

## Canonical pages

- ${siteUrl}/
- ${siteUrl}/how-matter-control-works
- ${siteUrl}/intelligence
- ${siteUrl}/diagnostic
- ${siteUrl}/about
- ${siteUrl}/contact
- ${siteUrl}/privacy
- ${siteUrl}/disclaimer
`;

export const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Sovereignty Control",
      url: siteUrl,
      description:
        "Early-stage managed matter-readiness method for professional firms handling citizenship, residence and relocation matters.",
      founder: {
        "@type": "Person",
        name: "Jethro Powers"
      },
      knowsAbout: [
        "Citizenship by investment case management",
        "Residence by investment case management",
        "Tax relocation operations",
        "Programme information",
        "Family-cost modelling",
        "Application document readiness"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Sovereignty Control",
      description:
        "Matter readiness and programme intelligence for citizenship, residence and relocation firms.",
      inLanguage: "en-GB",
      publisher: { "@id": `${siteUrl}/#organization` }
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Sovereignty Control",
      url: `${siteUrl}/how-matter-control-works`,
      serviceType:
        "Managed matter-readiness diagnostic for specialist cross-border advisory firms",
      description:
        "Reconstructs matter state, records readiness, blockers, dependencies, owners, advisor-review questions and programme-change impact.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType:
          "Professional citizenship, residence, relocation, immigration and private-client advisory firms"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Current offer",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Complimentary Matter Control Diagnostic",
            url: `${siteUrl}/diagnostic`,
            description: "One active, recent or anonymised matter reconstructed into a controlled diagnostic record."
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Sovereignty Control | Managed readiness for complex cross-border matters",
      description:
        "Structure citizenship, residence and relocation matters around programme routes, family costs, application documents, due diligence, responsibilities and client status.",
      inLanguage: "en-GB",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#service` }
    }
  ]
};

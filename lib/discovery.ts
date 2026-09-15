import { juris } from "./partners";
// Existing configured canonical; founders should confirm the final trading domain before publication.
export const siteUrl = "https://sovereigntycontrol.com";
export const llmsText = `# Juris Partners

> ${juris.description}

Juris Partners is the professional-facing entry point to Juris. The public programme platform is at ${juris.publicUrl}. Public pages and interface coverage do not imply a verified partner network, guaranteed referrals or continuous maintenance of every programme.

Three professional entry points connect through Juris: Intelligence and research, an adviser relationship through the Juris Adviser Network, and separately scoped operational support through Juris Control. Published programme knowledge supplies context across the work; a specific research briefing has its own scope. Other providers may discuss collaboration without an adviser designation. Introductions require suitable relationships, permissions and terms. Operational work does not buy preferential referrals or editorial treatment.

The Juris Adviser Network is an application-led relationship for suitable independent advisers and advisory firms. The interest form starts a founder conversation; it does not grant acceptance, accreditation or an adviser designation. Benefits, responsibilities, any commercial terms, profile or brand use and information-sharing boundaries need agreement before activity. The profile layout is illustrative, not a directory. Introducers and other providers have a separate collaboration route. Public client enquiries remain at ${juris.adviceUrl}.

Juris Control is an operational method being validated, not an established autonomous SaaS service. Displayed workspaces use fictional matter JP-024; interaction is local simulation and sends no messages, checks no government systems and completes no professional review.

The complimentary Matter Control Diagnostic covers one active, recent or anonymised matter over 7–10 working days with no obligation to continue. Juris does not contact the firm's client, provider or authority during this stage. A 30-day co-managed pilot may be discussed after closeout; scope and commercial terms are agreed separately. The future managed desk is a future possibility.

Jethro and Alberto are co-founders. Jethro contributes product, architecture and commercial systems. Alberto contributes domain knowledge, programme interpretation, content and professional relationships.

Professional firms retain advice, suitability, evidence sufficiency, client communication and submissions. Live work requires appropriate access, confidentiality, processing and authority arrangements. Do not submit client-identifiable or sensitive information through the public business enquiry form.

## Pages
- ${siteUrl}/
- ${siteUrl}/what-we-do
- ${siteUrl}/advisers
- ${siteUrl}/use-cases
- ${siteUrl}/offers
- ${siteUrl}/demo-case
- ${siteUrl}/how-matter-control-works
- ${siteUrl}/intelligence
- ${siteUrl}/diagnostic
- ${siteUrl}/about
- ${siteUrl}/contact
- ${siteUrl}/privacy
- ${siteUrl}/disclaimer
`;
export const llmsFullText = `${llmsText}

## Workflow patterns and possible outputs
- Existing enquiry and consultation: structured brief and follow-up queue.
- Adviser-led comparison and proposal: household context, route comparisons, fee assumptions and professional-review questions.
- Engagement and matter setup: agreed scope, access, responsibility and handover record.
- Document readiness and dependencies: evidence states, missing items, external responses, owners and dates.
- Communication: separate internal notes and client-update draft, approved and sent by the firm.
- Programme change, milestone and renewal review: dated source context and an affected-work review queue where scoped.
These are candidate patterns for introducers, advisers and delivery teams, not a universal immigration process or evidence of willingness to pay. Investor residence and citizenship applications have different procedures. Government portals remain filing systems where required.

## Diagnostic outputs
Current-state matter map; document-readiness register; blocker and dependency register; adviser-review questions; programme-assumption register; immediate action plan; closeout summary. Pseudonymous operational status is used where possible. Raw passports, bank statements and source-of-wealth files are not required. Pseudonymous information may still be personal data.

## Intelligence method
Source or candidate update → evidence and applicability review → approved version → public programme information or professional briefing → affected-work review where scoped. This is an illustrative method, not a verified automated pipeline. Proposed reforms stay separate from effective rules, and correction history stays separate from current values. Private client evidence must not enter public content or another firm's workspace.

## Current demonstration
JP-024: principal applicant, spouse and two children; mobility and long-term residence objectives; four fictional route contexts; 18 of 21 evidence items recorded; three missing; four dependencies; two professional-review questions. The example is fixed at 10 August 2026. A provider response due 4 August is six days overdue; next review is 12 August. Assigning a follow-up owner and preparing a draft do not resolve the evidence gaps or professional questions.
`;
export const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: juris.name,
      url: siteUrl,
      description: juris.description,
      founder: [
        { "@type": "Person", name: "Jethro" },
        { "@type": "Person", name: "Alberto" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: juris.name,
      description: juris.description,
      inLanguage: "en-GB",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Juris Partners | Intelligence, expertise and client work.",
      description: juris.description,
      inLanguage: "en-GB",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

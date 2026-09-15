# Juris Adviser Network — implementation and publication review

**Latest design rebuild:** see [the institutional design and content map](juris-institutional-rebuild.md) for the current architecture, implementation, 75-test verification and screenshots. The earlier stage below is retained as history.

**Current whole-site follow-up:** see [whole-site cohesion](juris-partners-cohesion.md) for the final page connections, shared navigation and latest checks/screenshots. Earlier layout and verification descriptions below record their respective implementation stage.
15 September 2026. Additive work in the current Juris Partners repository and branch. The older deployed Control homepage was inspected as a reference, not used as the implementation baseline. No production deployment or public Atlas source change was made.

## What changed

- Added `/advisers`: independent relationship definition, one brand relationship map, three editorial benefit groups, four expandable stages, client introduction journey, FAQ and a dedicated expression-of-interest form.
- Added a primary navigation route and an early homepage invitation. Operational support remains an obvious separate choice. All 13 principal pages remain accessible through primary navigation, contextual links and the grouped footer. The subsequent cohesion pass replaced the former secondary navigation row with hierarchical breadcrumbs.
- Connected the What we do and Working together pages to the adviser relationship. Introducers and other providers retain their distinct professional-collaboration enquiry.
- Refined the shared design: warm ivory, ink, restrained brass, real Juris wordmark, existing Inter and Source Serif 4 families including the proper italic face, a 1,264 px content grid, editorial rows and split layouts, readable operational tables and stronger form hierarchy. Actual public-product captures remain linked to their real destinations. The single profile composition is explicitly illustrative.
- Retained six workflow stages, the full Control method, five record views, seven process steps, intelligence register and before/after simulation. The missing evidence, overdue dependency and unresolved professional questions stay unresolved when an owner or draft is prepared.
- Preserved the complimentary one-matter diagnostic, 7–10 working days and no obligation to continue. The conditional pilot and future desk retain their previous scope/status.

## Benefits and implementation status

The page invites a discussion. None of the conditional items below is presented as a mature programme entitlement.

| Element | Status supported by this implementation | Concrete expression and boundary |
| --- | --- | --- |
| Published programme knowledge | **Live public resource** | Links to real Juris programme pages, directory and insights. Further briefing needs can be discussed; bespoke or recurring research is separately scoped. No unlimited research, alert or response-time promise. |
| Adviser interest | **Implemented using existing enquiry handler** | Dedicated `adviser-network` intent and founder-review receipt. Local delivery remains unconfigured. Application does not approve membership or activate a listing. |
| Professional presence | **Illustrative only; publication not supported here** | One generic profile layout shows services, jurisdictions, languages and credentials without fabricating a firm. Any real profile requires acceptance, terms, checked claims where applicable and actual publishing functionality. |
| Editorial contribution | **Discussion invitation; editorial review required** | Local insight, corrections or bylined commentary can be proposed through the enquiry. No contributor portal, automatic publication or paid factual conclusion. Contribution expectations are not preset. |
| Professional connections | **Conditional relationship to discuss** | An introduction must rely on an appropriate relationship that actually exists, with permission and capacity. No worldwide network, instant matching or automatic sharing is implemented. |
| Potential client introductions | **Conditional, under separate agreed terms** | Need, fit, permissions, availability and professional acceptance must be established. No traffic, quota, exclusivity, clients or revenue promise. Any associated fees need their own agreement. |
| Operational support | **Separately scoped** | Existing demonstrations and diagnostic invitation cover preparation, handovers, readiness and follow-up. Control is not included in affiliation and is not compulsory for referral consideration. |
| Product and professional dialogue | **Founder conversation invitation** | A professional can explain workflow needs and give product feedback. No community, events, certification, priority support or roadmap rights are promised. |
| Acceptance and onboarding | **Proposed human journey; no automated membership system** | Express interest → review mutual fit → agree relationship → onboard and collaborate. Applicable checks, responsibilities, commercial terms, brand/profile use and information boundaries precede activity. |

## Enquiry handling and information boundaries

The existing `/api/demo-requests` endpoint and Supabase destination are reused. Name, firm and business email are required; the dedicated form fixes the interest to `adviser-network`. Website, role, jurisdictions, service type, a relevant professional-register/credential URL and a short collaboration description are optional. A licence is not required of every role. Existing research, workflow, introduction, collaboration and unsure intents remain available.

No new storage column was introduced. `firmType` carries service type; an optional credential URL is appended to the existing founder-readable `message` field, with validation keeping the combined value inside the existing limit. Unknown fields are discarded. A credential URL is supplied context, not a verified professional credential.

The form uses labels, native required/email/URL checks, shared client/server validation, associated help text, preserved values on error, focused error/receipt messages, and disabled controls during pending or acknowledged submission. Only an acknowledged storage response displays receipt. Missing configuration, network failures and malformed acknowledgements cannot grant success. The receipt expressly denies acceptance or adviser designation.

There are no client-document uploads, accounts, document vaults or added newsletter subscriptions. No test submission was sent to a real recipient or storage destination. Any future newsletter enrolment must remain separate and optional.

## Public Juris inspection and proposed upstream change

The browser inspection on 15 September 2026 covered:

- [Public Juris homepage](https://sovereignty-atlas.vercel.app/): real wordmark and editorial visual language; navigation includes Programmes, Compare, Strategy, Insights, Pricing, About and Contact. No adviser-application CTA was found in the inspected navigation.
- [Public advisory journey](https://sovereignty-atlas.vercel.app/advisory): the actual “Request an advisory briefing” action is an email link to `hello@sovereigntyatlas.com`, with the subject “Sovereignty Atlas advisor briefing”. This action was inspected, not sent. Individuals are linked to this page, not to the professional interest form.
- [An existing programme page](https://sovereignty-atlas.vercel.app/programs/hungary-rbi): actual programme-detail interface, comparison route and shared advisory navigation. Its programme claims were not adopted as new professional-site promises.
- [Referenced professional deployment](https://sc-landing-phi.vercel.app/): still showed the older Sovereignty Control positioning when inspected. Current repository work was preserved as the source of truth.

**Exact proposed main-site navigation change — not installed:** after an approved Partners deployment makes `/advisers` available on the professional host, add **For professionals** to the public Juris desktop navigation, mobile menu and footer, pointing to `https://sc-landing-phi.vercel.app/advisers`. Keep **Contact** and **Book a call** pointing to the existing `/advisory` journey. If founders choose a different professional production origin, substitute that confirmed origin before installing the link. The proposed adviser URL must not be treated as a currently published route on the older deployment.

Proposed supporting public-site copy: **“For independent advisers and advisory firms. Explore the Juris Adviser Network and register interest in a professional relationship.”** CTA: **“Become a Juris adviser.”** Introducers and other providers can follow the separate collaboration route on Partners.

This repository installs the Partners → public Juris links and the professional interest journey. It does not install the reciprocal public-site navigation, a directory, matching, profile publication or cross-site data sharing. The client introduction sequence is clearly labelled as the intended process when an introduction is appropriate.

## Founder decisions before publication or activity

1. Confirm who reviews network interest, the suitability discussion and applicable credential/authorisation checks. Establish the actual acceptance and status-change process before granting designations.
2. Agree the benefits available to each relationship, contribution responsibilities, permitted brand/profile use, any commercial or referral terms, and information-sharing permissions. Do not publish membership prices, commissions or quotas without an approved policy.
3. Confirm whether and where a real approved profile can be published. The current composition remains an illustration until suitable functionality and permissions exist.
4. Configure and verify the existing enquiry destination and operational ownership of incoming records. Confirm the deployed table accepts `adviser-network`; the actual database schema/constraints were not available locally. A real delivery check still requires authorised test details.
5. Confirm the professional production origin, public-site navigation change, legal/privacy controller details and retention process, and publication of the revised copy/assets. Existing canonical configuration was preserved pending that decision.

These are publication/operational decisions, not approval gates imposed on the completed local implementation.

## Verification and screenshots

`npm run build`, `npm run typecheck` and `git diff --check` passed. The command `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3101 npm run test:e2e -- --project=desktop-chromium --project=mobile-chromium --project=reduced-motion-chromium --workers=3` completed with **66 passed, 0 failed** across desktop, mobile Chromium and reduced-motion Chromium. Coverage includes adviser interest, required/optional context, URL validation, preserved input and focus on failure, acknowledged receipt without acceptance, double-submit suppression, ordinary enquiry intents, full navigation and legacy aliases, diagnostic commitments, workflow and record tabs, Reset, intelligence filters/dismissal, skip link and menu keyboard behaviour.

The render/link scan covered all **13 principal pages** at **1440 × 1000** and **390 × 844**: HTTP 200, one h1 each, no document overflow or browser page errors. All **55 distinct internal destinations**, including anchors, resolved. Home, adviser, service, firm-role and offer pages also passed at 360 px with 200% root text size. A further layout check covered home, adviser, contact and Control at 320, 768, 1024 and 1280 px, with no document overflow or clipped inspected text/form fields. These are automated Chromium checks, not a Safari/Firefox or screen-reader certification.

The final static wording change to the intelligence flow was followed by another successful build and three targeted intelligence checks (desktop, mobile and reduced motion). The final page capture/link scan was then refreshed.

Actual captures are in `.audit/juris-partners/adviser-refinement/`, with route results in `checks.json`. The main deliverable views are `home-1440.png`, `home-390.png`, `advisers-1440.png` and `advisers-390.png`; full-page captures and detailed record/application views provide deeper review. Any illustrated success/error capture uses a mocked response, never a real enquiry.

Live storage delivery, email receipt, formal approval, profile publication, real introductions and the reciprocal public navigation remain untested or unimplemented as described above. No production deployment occurred.

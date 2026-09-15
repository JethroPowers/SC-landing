# Juris Partners — institutional design and content map

## Design thesis

One Juris identity: an editorial intelligence environment with precise operational interfaces. Ivory carries the explanation, ink carries the working record, and brass marks sources and structure. Product evidence, professional participation and responsibility remain visibly connected.

## Current problems

- The opening makes Intelligence secondary and offers little visual evidence of the system.
- Supporting pages retain useful detail but similar section treatments flatten the reading hierarchy.
- Related routes exist, yet the relationship between public research, professional expertise and operational preparation needs to be shown directly.

## Revised architecture / preservation map

| Existing information | Revised homepage location | Full supporting location retained |
| --- | --- | --- |
| Juris definition and public connection | Hero + three professional needs | What we do / About |
| Public map and directory captures | Selectable product evidence | Intelligence; real public URLs |
| Programme knowledge, sources, change context | Interactive Intelligence sequence | Intelligence register and programme-change example |
| Adviser invitation and benefits | Major adviser section; grouped benefits | Adviser network, illustrative profile, FAQ |
| Application / review / terms / onboarding | Four-stage expandable process | Adviser network #apply |
| Collaboration and appropriate introductions | Compact relationship composition | Adviser network and Working together #collaboration |
| Control and managed readiness | Dark product statement + three-state fictional record | Full Control method, five workspace views and seven steps |
| Workflow patterns and professional roles | Nine-point friction selector | For your firm, existing six-stage explorer |
| Complimentary diagnostic and optional continuation | Operational section and engagement choices | Diagnostic and Working together, unchanged commitments |
| Professional boundaries | Concise responsibility statement | About / Disclaimer / method |
| Data minimisation | FAQ and scoped enquiry guidance | Privacy / diagnostic / existing forms |
| Founders | Company note and About links | Full founder context on About |
| General FAQs | Curated homepage FAQ | Existing Working together FAQ retained |
| Contact intents | Adviser, operational and intelligence choices | Existing handler and enquiry validation |
| Existing aliases and supporting routes | Shared grouped navigation/footer and contextual links | All 13 principal routes + existing redirects |

All 102 source/content files were inventoried and copied before this pass to `.audit/juris-partners/institutional-rebuild/before/`; hashes are in `source-inventory.json`. No existing working form, demo or useful supporting page is slated for removal.

## Reference observations

- [Linear](https://linear.app/): actual interface objects carry product evidence, with clear section hierarchy and compact context. Use composed Juris records and progressive detail, without copying brand assets, wording or dark SaaS styling.
- [Arton Capital](https://www.artoncapital.com/): audience and programme routes make different professional intentions legible. Use distinct Juris journeys; its designation and programme claims do not transfer to Juris.
- [Vertus](https://www.vertus.ai/): large statement moments and surface transitions create pacing. Use original ivory/ink composition and product surfaces, without its imagery, claims, colours or animation.

The named founder deck, operating model, data standard and feedback document were not found in the available repository/attachments. The implementation uses current code and the user's stated boundaries; it does not claim to have reviewed those documents.

## Status boundaries

Public programme pages and insights: real external resources. Adviser participation: expression of interest followed by human review/agreement. Profiles: explicitly illustrative and dependent on supported publication. Introductions: conditional on actual fit, permission and capacity. Control: scoped operational support with simulated interfaces. Intelligence branches/alerts: explanatory workflow, no automatic publication or subscribed alert service. Local enquiry storage remains unconfigured. No live test submission or production deployment.

## Implemented experience

- Original layered hero combines a real public capture with clearly illustrative change, professional and matter objects. No new adviser, credential or resolved case is fabricated.
- Three editorial pathways establish Intelligence, the Adviser Network and Operations as parts of the same company.
- Four keyboard-operable product views show the actual public map, directory, programme detail and insights. Programme-detail and insights captures were added from the real published pages, each verified HTTP 200.
- A substantial adviser section groups proposed presence, contributions, relationships and practical support. Four expandable stages reuse the same content as the detailed adviser page.
- The Intelligence sequence keeps proposed changes separate from approved records and labels downstream publication, briefings, possible alerts and scoped operational review accurately.
- A three-stage Control presentation uses the existing fictional matter JP-024. Owner assignment and draft preparation leave all three evidence gaps and professional review open; Reset returns to the initial state.
- Nine selectable friction points connect to the existing operational enquiry intent and supported workflow context. The original six-stage, audience-specific explorer remains on For your firm.
- A compact collaboration model, professional boundaries, three distinct contact intents, commercial FAQ and final invitation complete the homepage story.
- The shared header has What we do, Intelligence, For advisers, Operations and About, plus public Juris and adviser application actions. Supporting-page disclosures are keyboard operable, restore focus on Escape and close after navigation. Insights links to the real public resource. No new empty Insights page was invented.
- Supporting page typography, opening composition, related reading and adviser profile presentation share the revised design system. Existing page URLs, terms, contact handler, forms and detailed demonstrations remain intact.
- No runtime dependency or package manifest/lockfile change was needed. The homepage is server rendered; only the selected product states, workflow selector and navigation are interactive client components.

## Reciprocal public-site navigation — proposed separately

The local public Atlas project was discovered serving port 3100. It was not modified by this professional-site pass. Juris Partners now previews separately at `http://localhost:3102/`.

After the professional build is approved and deployed to the agreed domain, add **For professionals** to public Juris desktop navigation, mobile navigation and footer. Destination: the approved Partners origin plus `/advisers` (for example `https://sc-landing-phi.vercel.app/advisers` only after that host actually serves this build). Suggested support copy: **“For independent advisers and specialist firms. Explore professional participation, programme intelligence and scoped support for client work.”** Keep the public **Contact / Book a call** journey at its existing `/advisory` destination.

No reciprocal link or cross-site data integration is claimed as installed.

## Benefits and publication decisions

See the [benefits/status register](juris-adviser-network-review.md#benefits-and-implementation-status) and [remaining founder decisions](juris-adviser-network-review.md#founder-decisions-before-publication-or-activity). They remain applicable: approval ownership, relationship terms, supported profile publication, real enquiry delivery, final domain and privacy/retention arrangements require operational decisions. The new Intelligence sequence adds no live alerts, automated publishing or client-data sharing entitlement.

## Final spacing refinement

Following the approved design review, increased breathing room around the hero and major sections. After the spacing review, restored the original internal padding and gaps in content blocks, editorial rows, benefit groups, headings and workflow panels. Font sizes and content widths are unchanged. Supporting and adviser pages retain the same outer spacing rhythm; mobile increases are restrained. Content, navigation, interface states and commitments are unchanged.

Correction verification: production build and diff check passed; **27 existing tests passed** across desktop, mobile and reduced-motion Chromium. All 13 pages rendered at desktop/mobile widths with no overflow or browser errors; all 56 internal destinations resolved. Homepage checks also passed at 1280, 1024 and 768 px, plus 360 px with 200% text. Typography and content-width declarations are unchanged across all three edited stylesheets.

## Full rebuild verification (before the spacing correction)

- `npm run build`, `npm run typecheck` and `git diff --check` passed.
- Full Playwright suite: **75 passed, 0 failed** across desktop, mobile and reduced-motion Chromium (30.5 seconds).
- The suite covers all existing important routes/aliases, ordinary and adviser enquiry validation, preserved values and focus after failure, mocked acknowledged receipt, duplicate-submit prevention, the original operational demonstrations, workflow context, new product/Intelligence/Control selections, header disclosures, Escape/focus restoration and 200% text sizing.
- All **13 principal pages** rendered at **1440, 1280, 1024, 768 and 390 px** widths: 65 route/width checks, HTTP 200, no document overflow and no recorded browser page errors.
- All **56 distinct internal destinations**, including anchors, resolved. Published programme-detail and insights URLs used for new captures returned HTTP 200.
- Additional element-bound checks at 360 px / 200% root text size passed after allowing the Control status label to wrap. This checked visible text and controls, including status spans, rather than document width alone.
- Desktop and mobile visuals were inspected for the hero, navigation, professional pathways, adviser invitation/profile, Intelligence sequence, Control record and contact flow. Fixed a hero-caption overlap and improved small-screen object composition and status-label wrapping.
- Image-loading checks now wait for the requested lazy-loaded image to finish rather than asserting immediately after visibility. The first run had three timing failures; all final checks pass.

No real enquiry, client record, email or external message was submitted. Success/error form tests use mocked responses; production storage compatibility and actual receipt remain unverified. No Safari/Firefox or screen-reader certification is claimed. No production deployment occurred.

## Actual screenshots and audit files

- [Desktop opening](../.audit/juris-partners/institutional-rebuild/home-1440.png)
- [Full desktop page](../.audit/juris-partners/institutional-rebuild/home-1440-full.png)
- [Mobile opening](../.audit/juris-partners/institutional-rebuild/home-390.png)
- [Full mobile page](../.audit/juris-partners/institutional-rebuild/home-390-full.png)
- [Adviser page](../.audit/juris-partners/institutional-rebuild/advisers-1440.png)
- [Intelligence sequence](../.audit/juris-partners/institutional-rebuild/intelligence-detail.png)
- [Control demonstration](../.audit/juris-partners/institutional-rebuild/worked-example-detail.png)
- [Mobile Control demonstration](../.audit/juris-partners/institutional-rebuild/control-mobile-detail.png)

The audit folder includes all principal-page captures, `checks.json`, `breakpoints.json`, the original-content inventory and preserved source snapshot. Detail-only captures suppress the sticky header so it does not obscure the exported section; route screenshots retain the real header.

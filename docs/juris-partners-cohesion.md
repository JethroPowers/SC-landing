# Juris Partners — whole-site cohesion

**Latest design rebuild:** see [the institutional design and content map](juris-institutional-rebuild.md) for the current architecture, implementation, 75-test verification and screenshots. The earlier stage below is retained as history.

15 September 2026. Current local implementation; no production deployment.

## Result

The website uses one professional story: Juris is the public programme platform; Juris Partners brings together the application-led Adviser Network and separately scoped Juris Control work. Published programme research supports both. Introducers and other providers retain their own collaboration route.

All 13 principal pages remain available. The shared navigation, breadcrumb hierarchy, typography, buttons, footer and related-page links now work together. Supporting pages are connected where their content is relevant, with short explanations of what to read next.

## Where the content fits

| Page | Purpose and connection |
| --- | --- |
| Home | Introduces the professional offering and links directly within its content to the adviser, Control, firm-role, example, diagnostic, engagement, research, founder and contact pages. |
| What we do | Explains the two professional relationships to explore and the programme knowledge supporting them. |
| Adviser network | Defines the independent relationship, concrete proposed benefits, four-stage journey, FAQ and dedicated interest form. |
| For your firm | Covers introducers, advisers, delivery and relocation teams; retains all six interactive workflow stages and connects suitable advisers to the network. |
| Juris Control | Explains the operational method and retains the full phases, steps and record views. |
| Worked example | Keeps the interactive fictional matter, owner assignment, separate update draft and Reset. |
| Complimentary diagnostic | Explains outputs, inputs and the first conversation; retains one matter, 7–10 working days and no obligation to continue. |
| Working together | Explains scope, responsibilities, conditional continuation, research and collaboration terms. The original general FAQs remain here. |
| Research | Connects real public resources to the existing intelligence demonstration and the preserved fictional programme-change example. |
| About | Explains the founders and their work in the same Adviser Network / Control context. |
| Contact | Keeps ordinary workflow, research and collaboration intents; diagnostic links preserve their context. Adviser interest also has its own specific form. |
| Privacy / Disclaimer | Retain the information-handling and professional-responsibility details through shared footer links. |

The homepage no longer repeats every full demonstration and FAQ. Those substantive sections remain accessible on their relevant pages. The relationship invitation, operational preview, diagnostic commitments and research remain on the homepage itself.

## Verification

- `npm run build` passed, including TypeScript checking.
- `git diff --check` passed.
- The full Playwright run passed **66 tests, 0 failed** across desktop, mobile and reduced-motion Chromium (26.1 seconds).
- Coverage includes primary/supporting navigation, old route aliases, adviser and ordinary enquiry validation, preserved input/error focus, mocked acknowledged receipt, contextual enquiry intents, workflow tabs, operational simulation, intelligence controls, keyboard navigation and 200% text sizing at narrow widths.
- All **13 principal pages** rendered at **1440 × 1000** and **390 × 844** with HTTP 200, one h1, no document overflow and no recorded browser page errors.
- All **54 distinct internal destinations**, including anchors, resolved.
- Actual rendered screenshots were reviewed for desktop composition and mobile layout. The full scan is `.audit/juris-partners/cohesion/checks.json`.

Screenshots: [Desktop homepage](../.audit/juris-partners/cohesion/home-1440-full.png), [mobile homepage](../.audit/juris-partners/cohesion/home-390.png), [desktop overview](../.audit/juris-partners/cohesion/what-we-do-1440-full.png), [mobile overview](../.audit/juris-partners/cohesion/what-we-do-390.png). The same folder contains captures for every principal page at both widths.

## Operational status and remaining decisions

The [adviser benefits/status register and founder decisions](juris-adviser-network-review.md#benefits-and-implementation-status) remain applicable. Local enquiry delivery is unconfigured; successful form states were tested with mocked acknowledgements only. No real submission, recipient message or database write was sent. Production storage compatibility and delivery still need verification.

Formal acceptance policies, relationship terms, real profile publication, information-sharing permissions and the final professional domain remain founder decisions. The [exact proposed public-site navigation change](juris-adviser-network-review.md#public-juris-inspection-and-proposed-upstream-change) is documented separately and has not been installed on the unavailable public-site repository.

No Safari/Firefox run, screen-reader session, live delivery test or production deployment is claimed.

# Juris Partners — implementation review

**Latest design rebuild:** see [the institutional design and content map](juris-institutional-rebuild.md) for the current architecture, implementation, 75-test verification and screenshots. The earlier stage below is retained as history.

**Current whole-site follow-up:** see [whole-site cohesion](juris-partners-cohesion.md) for the final page connections, shared navigation and latest checks/screenshots. Earlier layout and verification descriptions below record their respective implementation stage.
**Latest follow-up:** see [Juris Adviser Network implementation and publication review](juris-adviser-network-review.md) for the adviser route, current design, benefit status and updated verification. The sections below record the earlier implementation.

Review date: 15 September 2026. Scope: this Control-site repository only. Publication requires founder approval.

**Website update:** The supporting pages have since been expanded into a full website. See [the current architecture and route treatment](juris-partners-website.md). The migration table below records the initial repositioning; the follow-up document supersedes its redirect and navigation treatments.

## Audit and architecture

The existing homepage foregrounded managed matter readiness and routed every enquiry into the diagnostic. The public Juris platform is a separate, functioning discovery interface. The redesign connects it to three independent professional conversations: research, client operations and collaboration. No marketplace, accounts, payments or government integrations are introduced.

Page order: proposition and example record → public-product previews → three ways to work together → six-stage workflow explorer → worked matter example → intelligence method → engagement stages → founders and responsibilities → FAQ → shared contextual enquiry.

The working tree contained earlier changes before this work. They were saved in `.audit/juris-partners/pre-existing-changes.patch`; the complete pre-edit source of 77 files is in `.audit/juris-partners/original-source-inventory.json`. These private local audit files are excluded from Git. The new branch is `codex/juris-partners`.

## Content migration table

| Original location | Meaning / substantive information | Destination | Treatment and reason |
| --- | --- | --- | --- |
| `/`, LiveMatterHero | Six fragmented records; household; four routes; evidence gaps; adviser message; structured record; owner and next action | Home worked example; `/demo-case`; retained method route | Reuse the existing fictional matter fixture; explicit controls replace homepage scroll stages. |
| `/`, OutcomeLedger (live) | Blockers, reviewed fee assumptions, separate client updates, repeated reconstruction | Workflow stages 2, 4, 5; worked example | Preserve tasks; remove unmeasured efficiency assertions. |
| `/`, OutcomeLedger (local edits) | Missing information, ownership, ageing dependencies, buried decisions, client-status drift, change impact | Six workflow stages; detailed method | Present possible friction, not a diagnosis of every firm. |
| `/`, HomeCanonicalPath (live) | Method, intelligence, complimentary diagnostic | Working Together; Intelligence; links to supporting routes | Expand entry points to include research and collaboration. |
| `/`, HomeCanonicalPath (local edits) | Responsibility split; observe, structure, assign, chase, escalate, prepare, record, repeat; illustrative weekly indicators | `/how-matter-control-works` operating-cycle detail | Retain recurring method and sample metrics as an illustration requiring separate scope. No scaled desk claim. |
| `/`, closing CTA | One matter; 7–10 working days; complimentary; no obligation | Working Together; `/diagnostic`; contextual enquiry | Preserve existing commitment; broaden primary CTA. |
| `/diagnostic` | One active/recent/anonymised matter; six output groups; minimised status; no raw passports/bank/source-of-wealth files; no external contact | Same route and Working Together | Preserve timing, fee, outputs and boundary. Clarify pseudonymous data can remain personal data. |
| `/offers`, `/pricing` | Both currently redirect to `/diagnostic` | Preserve redirects; diagnostic continuation detail | Keep actual routes; preserve historical three-stage proposition without inventing price or availability. |
| Unmounted offerPaths / OfferJourney | 30-day pilot, 5–10 matters, four weekly cycles; future managed desk | Diagnostic expandable historical scope detail | Describe as a scope example to discuss after closeout, not current contractual entitlement. Founding-price language removed. |
| `/how-matter-control-works#opening` | Household, objective, state, review date | Same route and shared example | Reference becomes JP-024. Historical personal-looking names replaced with role labels. |
| `#transformation` | Reconstruct, control, prepare; facts, evidence, dependencies, review pack | Same anchor | Preserve stages; remove need for scrolling to operate narrative. |
| `#outputs` | Matter map, readiness/dependency/assumption registers, questions, action plan, closeout | Same anchor; diagnostic and home summary | Retain detail in disclosures. |
| `#workspace` | Matter, readiness, adviser review, change, closeout views and seven-step method | Same anchor | Retain keyboard-operable working record. All records remain simulated. |
| `#change` | Source, dates, previous/current condition, affected route, professional effect pending | Same anchor and Intelligence | Fictional programme and notice; simulated method, no verified detection claim. |
| `#offer` | Diagnostic terms, no client/provider/authority contact, data boundaries | Same anchor | Preserve terms and full boundary details. |
| `/demo-case` | Redirect to method | Dedicated shared worked example with method links | Compatible destination, clearer Reset and before/after state; reuse JP-024 fixture. |
| `/intelligence` | Route records, fees, dependants, presence, processing ranges, source/review state, source lifecycle, affected work | Same route; concise home method | Fictionalise unsourced real-country records and fee changes; distinguish proposed/effective/correction history. |
| programmeOptions / changeEvents | Real-country names with unsourced GBP fees, timelines and invented fee changes | Retained teaching data with fictional jurisdictions | Original exact values retained in private source inventory; no longer presented as current legal facts. |
| `/about` | Product-builder contribution; professional ownership; current record, household assumptions, change, distinct views | Same route; home founders | Represent both Jethro and Alberto using only brief-approved contributions; no inferred credentials. |
| `/contact`, ContactForm | Business contact and optional qualifying information; diagnostic intent | Shared enquiry on home and contact | Five required intent choices, optional business context; legacy diagnostic URL mapped; no client intake. |
| `/api/demo-requests` | Supabase contact storage; development mode previously pretended success | Same endpoint | Validate client/server; success only after storage accepts; explicit unavailable/failure response. No schema migration. |
| `/privacy`, `/disclaimer` | Enquiry data use; professional boundaries | Same routes | Update trading brand and actual fields. No genuine contracting entity was identified or renamed. |
| `/method`, `/control-system`, `/atlas-intelligence` | Redirects to transformation, workspace, intelligence | Preserve exact redirect destinations and anchors | Backward compatibility. |
| `/use-cases`, `/solutions`, `/what-we-do`, `/product`, `/how-it-works` | Redirects to method | Preserve routes; link workflows from method | Existing detailed access remains. |
| Nav, footer, JSON-LD, metadata, llms routes, sitemap, icon | Brand and discovery claims | Juris Partners shared configuration | Remove unsupported mature-service claims, preserve verified host until founder selects canonical domain. |
| Unmounted legacy visuals and responsive markup | Alternative renderings and historical components | Source retained and brand/data sanitised | Do not confuse duplicated desktop/mobile markup with repeated user-visible content. |

## Offer reconciliation

The live homepage and local diagnostic agree on complimentary, one matter, 7–10 working days and no obligation. `/offers` currently redirects to that diagnostic. Local `offerPaths` also describes a 30-day co-managed pilot for 5–10 matters/four weekly cycles and a future desk. These are retained as conditional scope illustrations. No assumption that the pilot is paid or free; later commercial terms must be agreed. The August decks/PRDs listed in the brief were not supplied in this repository or attachment; their exact contents were not inferred.

## Publication decisions

1. Configure and verify the existing Supabase enquiry destination, its column/intent compatibility, and the founder who reviews it. No destination credentials or verified fallback contact were supplied locally. No real test lead was sent.
2. Confirm pilot availability and the 5–10-matter/four-cycle historical scope; decide its commercial terms privately. Confirm current diagnostic capacity before publication.
3. Approve the final canonical domain, legal controller/contact details, retention period and required privacy wording. The repository does not identify a contracting entity; none was invented.
4. Agree intelligence review coverage/cadence and any bespoke or recurring research scope before selling it. Public interface visibility is not evidence of exhaustive accuracy or continuous maintenance.
5. Approve publication and the reused Juris brand assets/product captures. Confirm responsibilities, access, processing, confidentiality and communication authority before live matter work.

## Proposed public-platform navigation change (not installed)

Add “For professionals” to the public Juris navigation, linking to the approved production URL of this Partners site after publication. No Atlas source files or backend have been changed.

## Implementation and preservation notes

- The new homepage is approximately 1,207 visible words in its default state (including labels and form guidance, excluding closed detail panels), within the requested primary-copy range. `juris-partners-visible-copy.txt` is an extraction of the actual rendered page; full revised copy, FAQ and workflow variants live in the source components.
- Existing scripts, dependencies, lockfile and Supabase storage column names are retained. No database, account, payment or government integration was added. New interest values must be checked against any production table constraints before publication.
- `lib/partners.ts` holds the shared brand, URLs, enquiry intents, workflow content and offer status. The existing matter fixture remains the source for fictional reference and detailed method.
- The existing tests were updated for the intentionally changed positioning and explicit controls; their earlier versions are retained in the pre-edit source inventory. The old scroll-driven test assertions were replaced with direct phase-navigation coverage, while seven-step and five-view coverage remains.
- A fictional family-assumption comparison was restored inside the full working record. It distinguishes capital, family charges, due-diligence charges and a subtotal, with unspecified professional/ancillary costs excluded. Original invented real-country figures were preserved in the private migration inventory and relabelled as fiction in teaching data.
- Source and reference captures are local. No site was published and no real enquiry, email, client message or payment was sent.

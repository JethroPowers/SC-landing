# Juris Partners — full website

**Latest design rebuild:** see [the institutional design and content map](juris-institutional-rebuild.md) for the current architecture, implementation, 75-test verification and screenshots. The earlier stage below is retained as history.

**Current whole-site follow-up:** see [whole-site cohesion](juris-partners-cohesion.md) for the final page connections, shared navigation and latest checks/screenshots. Earlier layout and verification descriptions below record their respective implementation stage.
**Latest follow-up:** see [Juris Adviser Network implementation and publication review](juris-adviser-network-review.md) for the adviser route, current design, benefit status and updated verification. The sections below record the earlier implementation.

15 September 2026. Follow-up to the initial landing-page implementation, extending the same branch and repository.

## Navigation and architecture

The primary navigation links directly to What we do, For your firm, Juris Control, Intelligence, Working together, About and Contact. Worked example and Complimentary diagnostic appear in a second navigation row on every page. Breadcrumbs, current-page states, section indexes, related-page links and a complete footer connect the pages.

| Page | Adapted purpose |
| --- | --- |
| `/` | Concise overview with direct paths into the supporting pages; original homepage anchors retained. |
| `/what-we-do` | Replaces a method redirect with research, client operations and professional collaboration; tangible proposed outputs and real public-product links. |
| `/use-cases` | Replaces a method redirect with distinct introducer, adviser, authorised delivery and relocation roles; reuses the six-stage workflow explorer and contextual enquiry. |
| `/offers` | Replaces a diagnostic redirect with the complete engagement path, preserved complimentary diagnostic, conditional pilot, future desk, research and collaboration. |
| `/how-matter-control-works` | Retains the detailed method; opens the five-view record and seven-step process by default; adds a section index and onward links. |
| `/intelligence` | Connects real public discovery to the illustrative source register, review process, bespoke research enquiry and scoped maintenance. |
| `/demo-case` | Dedicated before/after interaction, owner assignment, update draft, history and Reset; connects to the full record and diagnostic. |
| `/diagnostic` | Preserves the complimentary offer, one-matter scope, 7–10 working days, outputs, no-obligation and professional boundaries. |
| `/about` | Both founders, their contributions, retained professional responsibilities and routes into the work. |
| `/contact` | Shared contextual enquiry, accurate delivery state and useful pre-conversation reading. |
| `/privacy`, `/disclaimer` | Editorial styling and appropriate onward links; enquiry-data and professional boundaries retained. |

## Compatibility and shared content

- `/pricing` now leads to `/offers`, `/product` to `/what-we-do`, and `/solutions` to `/use-cases`. Other method/intelligence aliases retain their destinations. These are purposeful aliases; the three substantive pages above are no longer redirects.
- Original homepage and method anchors remain available. The new sitemap and machine-readable page lists include the full website.
- The homepage is approximately 1,222 visible words in its default state. Operational and intelligence examples are reused; no independent duplicate simulator was introduced.
- Navigation and sitemap share the page registry. CTAs, enquiry intents, diagnostic terms and offer status use the existing shared configuration.
- The prior source inventory, migration record, source notes and claim register remain applicable. Statements in the initial audit about routes redirecting describe the initial implementation; the table above is the current route treatment.
- No new service, price, referral promise or working-platform capability is established by the expanded website. Founder publication decisions remain in `juris-partners-review.md`.

## Verification

The final production build passed, including TypeScript compilation. `git diff --check` passed. The command `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3101 npm run test:e2e -- --project=desktop-chromium --project=mobile-chromium --project=reduced-motion-chromium` completed with **57 passed, 0 failed** in 18.3 seconds. This extends the initial coverage recorded in `juris-partners-testing.md` with direct navigation and current-page context, role-specific enquiry routing, collaboration enquiries, engagement status and narrow layouts with doubled text size.

The capture/link check covered all 12 pages at 1440 × 1000 and 390 × 844: HTTP 200, one h1 per page, no document overflow and no browser page errors. All 52 distinct internal destinations resolved, including checked anchor targets. The new service, firm-role and engagement pages also passed at 360 pixels with 200% root text size. Initial failures exposed an enlarged-text footer overflow and a test selector that did not include the correctly closed mobile menu; both were corrected before the final passing run.

Actual desktop and mobile captures for all 12 pages are saved in `.audit/juris-partners/full-website/`. `checks.json` records page status, title, heading count, overflow, internal destinations and browser errors. Existing backend delivery is still not configured locally; no real enquiries or third-party communications were sent. Nothing was published.

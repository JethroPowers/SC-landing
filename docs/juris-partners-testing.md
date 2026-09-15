# Verification — Juris Partners

**Latest design rebuild:** see [the institutional design and content map](juris-institutional-rebuild.md) for the current architecture, implementation, 75-test verification and screenshots. The earlier stage below is retained as history.

**Current whole-site follow-up:** see [whole-site cohesion](juris-partners-cohesion.md) for the final page connections, shared navigation and latest checks/screenshots. Earlier layout and verification descriptions below record their respective implementation stage.
**Latest follow-up:** see [Juris Adviser Network implementation and publication review](juris-adviser-network-review.md) for the adviser route, current design, benefit status and updated verification. The sections below record the earlier implementation.

15 September 2026. Tested against the local production build; no deployment was made.

**Latest full-website run:** 57 passed, 0 failed across desktop, mobile and reduced-motion Chromium, after the supporting pages were expanded. Build, TypeScript and whitespace checks passed. See [the full-website verification](juris-partners-website.md#verification) for the added coverage and current captures. The results below record the earlier 48-check landing-page stage.

## Results

- `npm run typecheck` — passed.
- `npm run build` — passed; 27 static-generation entries completed, with the existing dynamic contact/API routes retained.
- `git diff --check` — passed.
- `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3101 npm run test:e2e -- --project=desktop-chromium --project=mobile-chromium --project=reduced-motion-chromium` — **48 passed, 0 failed** (15.9 seconds).
- Desktop: 1440 × 1000. Mobile: Chromium with iPhone 13 viewport/device emulation. Reduced motion: Chromium, 1440 × 1000 with `prefers-reduced-motion: reduce`.
- Additional rendered layout checks: 1280, 1024, 768, 390 and 360 pixels wide; no document overflow. At 360 pixels with 200% root text sizing, the test also checks the actual bounds of headings, body text, labels, links, buttons and form controls, not just the document width.
- Eight supporting routes rendered with HTTP 200, one h1 each and no desktop overflow: demo, diagnostic, intelligence, about, contact, privacy, disclaimer and detailed method.
- No browser page errors were recorded during the capture/route check.
- Default homepage visible copy: **1,207 words**, including UI labels and form guidance; closed disclosure text is excluded.

## What the tests cover

1. Professional proposition, independent engagement routes, both founders and preserved diagnostic/pilot/future-desk status.
2. Real public-product previews load and link to inspected public destinations; structured-data brand is Juris Partners.
3. All six workflow stages show tasks, friction and outputs. Three audience filters change emphasis; introducer handover is shown only when relevant. Keyboard arrows/Home work and selected stage/intent carry into the shared enquiry.
4. Header navigation, valid homepage anchors, mobile menu, Escape/focus restoration, skip link and reduced-motion transition behaviour.
5. Narrow layout and 200% text enlargement without clipped interactive/text elements on the homepage.
6. Shared simulated matter before/after, owner assignment, draft creation, event order, fixed dates, unchanged evidence gaps and Reset. Internal professional notes do not appear in the client draft.
7. Three explicit method phases, seven detailed steps, five workspace views, seven outputs and the fictional family-assumption comparison.
8. Fictional intelligence filter, detail drawer, Escape and restored trigger focus.
9. Ten existing route aliases resolve to the retained destinations; diagnostic fee/timing/no-obligation and conditional pilot detail remain accessible.
10. Legacy diagnostic enquiry URL mapping, five intent choices, conditional optional workload, and absence of upload fields.
11. Required-field browser validation, input preservation on failure, network failure, malformed acceptance response, acknowledged mock success, pending-state disablement and accidental double-submission suppression.
12. Direct server-handler validation: malformed JSON/types, missing/blank required fields, bad email/intent/website/context, field/body limits, cross-origin rejection, absent destination, storage rejection, network exception and acknowledged storage success.

## Delivery boundary

Successful enquiry acceptance was tested using browser interception and a mocked storage response to the real server handler. **No real Supabase record, founder email, test lead or third-party message was sent.** The existing destination is not configured locally. The page clearly marks that limitation and the endpoint returns 503 when unconfigured. Production credentials, table constraints/intent compatibility and the founder review owner require verification before publication.

No analytics integration was present, so no new tracker was added. Test interactions are not customer traction. No screen-reader session, Safari/Firefox run, exhaustive accessibility audit, load test or live delivery-service validation is claimed. Contrast and hierarchy were visually reviewed; the retained method’s low-contrast rendering and the initial enlarged-text clipping were corrected before final captures/tests.

## Captures

Actual implementation captures (local files, excluded from deployment):

- `.audit/juris-partners/desktop.png` — desktop first viewport.
- `.audit/juris-partners/desktop-full.png` — full desktop page.
- `.audit/juris-partners/mobile.png` — mobile first viewport.
- `.audit/juris-partners/mobile-full.png` — full mobile page.
- `.audit/juris-partners/workflows.png` — six-stage explorer.
- `.audit/juris-partners/worked-example.png` — simulated operational record.
- `.audit/juris-partners/method.png` — retained method with explicit controls.
- `.audit/juris-partners/mobile-200-percent.png` — enlarged-text stress capture.
- `.audit/juris-partners/render-checks.json` — widths, route statuses, copy count and browser errors.

The first run had six test-selector failures because Next.js includes a second alert for route announcements. The selectors were scoped to the enquiry form. All final production-build checks pass.

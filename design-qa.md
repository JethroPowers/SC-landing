# Design QA — 2026 Scroll-Led Matter Control Showcase

## Visual source of truth

- Current website capture: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/current-live-desktop.png`
- Existing explainer capture at the matched desktop viewport: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/local-desktop-top.png`
- Founding diagnostic presentation renders:
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-6.png`
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-8.png`
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-9.png`
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-10.png`
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-11.png`

The existing explainer and implementation were compared at the same 1440 × 1000 viewport and state type. Presentation slides are 1600 × 900 and were used as brand, typography, process-language and workspace-density references rather than treated as pixel-identical web layouts.

## Browser-rendered implementation evidence

- Local route: `http://127.0.0.1:3000/how-matter-control-works`
- Desktop chapters 01–10: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/narrative-desktop-chapter-01.png` through `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/narrative-desktop-chapter-10.png`
- Mobile first screen: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/narrative-mobile-top.png`
- Mobile representative chapters: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/narrative-mobile-chapter-01.png`, `-04.png`, `-08.png` and `-10.png`
- Short-height desktop: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/narrative-short-chapter-04.png`
- Reduced motion: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/narrative-reduced-chapter-04.png`

## Viewport and density normalization

- Desktop implementation: 1440 × 1000 CSS px, 1440 × 1000 source pixels, device scale factor 1.
- Short-height implementation: 1366 × 650 CSS px, 1366 × 650 source pixels, device scale factor 1.
- Mobile implementation: 390 × 664 CSS px, 390 × 664 source pixels, device scale factor 1 for normalized QA captures. The Playwright mobile project separately runs the iPhone 13 profile at device scale factor 3.
- Reduced-motion implementation: 1440 × 1000 CSS px, 1440 × 1000 source pixels, device scale factor 1.
- Presentation sources: 1600 × 900 source pixels. The montage tooling normalized tile scale while retaining each complete frame; no density-only differences were filed as findings.

## Combined comparison evidence

- Full-view comparison opened and inspected: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/design-qa-narrative-comparison.png`
- Focused Readiness comparison opened and inspected: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/design-qa-readiness-focus.png`
- Ten-chapter desktop montage opened and inspected: `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/narrative-desktop-chapters-montage.png`

The full-view pass checked composition, hierarchy, density, theme changes and responsive structure. The focused pass checked the Readiness metrics, status colors, table rhythm, text contrast and operational-workspace treatment at readable scale.

## Required fidelity surfaces

- **Fonts and typography:** Source Serif 4 remains the editorial display face and Inter remains the interface face. Heading weights, tight display leading, uppercase gold kickers, small operational labels and number hierarchy remain consistent with the website and deck. No clipping or unintended truncation remains in the inspected states.
- **Spacing and layout rhythm:** Desktop holds one stable full-viewport canvas beneath the 74px site header. Thin rules, square surfaces, compact tables and precise two-column balance preserve the source language without introducing oversized rounded cards. Mobile and short-height modes place chapters in normal document flow.
- **Colors and visual tokens:** Ink `#071526`, ivory `#FBFAF6`, parchment `#F0E3C8`, gold `#A9813A`, green, steel blue and semantic attention/dependency/blocked colors match the supplied system. No gradients or purple were introduced.
- **Image and asset fidelity:** The source direction is typographic and operational rather than photographic. No target image assets were omitted or replaced. Existing brand marks are preserved and Lucide line icons are used consistently; no custom SVG, emoji, CSS illustration or fake product imagery was introduced.
- **Copy and content:** SC-024 is visibly fictional. The lead facts, process explanations, professional boundary, change-impact language, diagnostic offer, exact CTA and data-handling limits are coherent and consistent with the supplied source material and early-stage positioning.
- **Interactions and accessibility:** All ten chapter controls, previous/next navigation, five workspace tabs, keyboard arrow navigation, disclosure, CTA, mobile touch layouts and reduced-motion fallback were tested. Focus states remain visible, the workspace tabs retain ARIA semantics, and no global wheel or keyboard hijacking was introduced.

## Findings and comparison history

1. **P2 — short-height controls consumed and obscured the narrative viewport.**
   - Evidence: the first short-height capture kept a 276px header/progress block sticky and left the chapter content clipped beneath it.
   - Fix: returned fallback header, progress and long chapter details to normal document flow; retained the compact matter bar as the contextual sticky element.
   - Post-fix evidence: `narrative-short-chapter-04.png` shows the chapter aligned immediately beneath the site header with no overlay.

2. **P2 — fallback previous/next actions overlapped the chapter rail at 1366 × 650 and reduced-motion desktop.**
   - Evidence: the 78px action column was narrower than the labelled controls and the previous button was intercepted by the rail.
   - Fix: expanded the fallback action track to 190px while retaining compact icon-only actions at narrower breakpoints.
   - Post-fix evidence: Playwright backward/forward navigation passes in short-height and reduced-motion projects; the page has no horizontal overflow.

3. **P2 — the mobile first screen did not expose the complete SC-024 context immediately.**
   - Evidence: the initial mobile capture showed the title, fictional label and process control but household, objective, route count, status and review date appeared below the fold in the first workspace.
   - Fix: added a compact, rule-based fictional matter summary before the chapter rail, sourced from the single typed fixture.
   - Post-fix evidence: `narrative-mobile-top.png` shows SC-024, four possible routes, household, objective, attention status and next review date in the first viewport.

4. **P2 — reduced-motion hydration output differed from server-rendered motion styles.**
   - Evidence: the browser console reported a React hydration mismatch when the client reduced-motion preference changed inline animation values.
   - Fix: made server/client motion markup deterministic and delegated the reduced-motion presentation to CSS plus the static fallback.
   - Post-fix evidence: the reduced-motion console-error assertion and production build both pass.

No actionable P0, P1 or P2 findings remain. Horizontal workspace/tab rails on mobile are deliberate, touch-scrollable controls; the page itself does not overflow.

## Primary interactions and console checks

- Ten chapters reached by scroll and direct chapter controls.
- Previous and next navigation tested in both directions.
- Matter, Readiness, Review Queue, Change Impact and Closeout tabs tested, including per-chapter manual overrides and mapped-view restoration.
- CTA destination and all data-handling disclosure items verified.
- Desktop, iPhone 13, 1366 × 650 and reduced-motion configurations verified.
- Browser console and page errors checked after reload: none.

## Final result

final result: passed

# Design QA — Flowing Matter Control Showcase

**Source visual truth path:** `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/oura-reference-1280x720.png` and `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/oura-scroll-1280x720.png`

**Implementation screenshot path:** `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/matter-control-opening-1280x720-v2.png` and `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/matter-control-scroll-1280x720.png`

**Combined comparison evidence:** `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/comparison-opening.png` and `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/comparison-scroll.png`

**Responsive evidence:** `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/compact-tablet-contact.png`, `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/mobile-contact.png`, and `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/matter-control-design-qa/mobile-sections-contact.png`

**Viewport:** 1280 × 720 CSS px for the source/implementation comparison; responsive checks at 1440 × 1000, 1024 × 768, 916 × 994, and 390 × 844.

**Pixels and density:** source and implementation comparison captures are both 1280 × 720 pixels at device scale factor 1; no density normalization was required.
**State:** opening experience and first pinned transformation stage.

## Full-view comparison evidence

The Oura reference establishes the intended pacing rather than a literal visual clone: an immediate high-impact object, very short copy, generous whitespace, one focused scroll transformation, then conventional flowing sections. The implementation matches that hierarchy using the fictional SC-024 operating record as the central object and preserves Sovereignty Control's existing navy, ivory, parchment, gold, green and blue brand system.

## Focused-region comparison evidence

The focused scroll comparison shows both experiences using one dominant central object, a restrained sticky context bar and a small amount of supporting copy. The Matter Control version deliberately uses structured operational UI instead of Oura's product photography. Workspace, offer and responsive regions were checked separately because the reference does not contain equivalent case-control interfaces.

## Required fidelity surfaces

- **Fonts and typography:** Source Serif 4 and Inter remain consistent with the existing site and presentation. Display headings use restrained editorial weights, short line lengths and deliberate wrapping; interface copy remains legible at the compact breakpoints.
- **Spacing and layout rhythm:** The implementation uses one pinned transformation followed by normal-flow editorial sections. Major regions have clear separation, the detailed workspace appears only after the proposition is understood, and no internal text scrollers or unintended horizontal page overflow were found.
- **Colors and visual tokens:** Existing Sovereignty Control tokens are preserved without gradients. Contrast and semantic readiness states remain distinguishable on ink and ivory surfaces.
- **Image quality and asset fidelity:** No new raster imagery is required or appropriate. The experience uses the real brand mark, Lucide line icons and data-driven interface surfaces; Oura's lifestyle/product imagery is intentionally not copied.
- **Copy and content:** The opening explains what the service does in one sentence, the three phases stay concise, and detailed process, output, data-handling and professional-boundary information is available progressively.

## Comparison history

### Pass 1

- **[P2] Scroll cue fell below the 1280 × 720 opening viewport.**
  - Evidence: the first 1280 × 720 opening capture showed the SC-024 surface but not the planned scroll instruction.
  - Fix: moved the cue directly below the service explanation so it participates in the opening hierarchy instead of relying on the section bottom.

### Pass 2

- Post-fix evidence: the revised 1280 × 720 opening capture shows the service statement, concise explanation, visible scroll cue, fictional label and SC-024 record together without overlap.
- No actionable P0, P1 or P2 findings remain.

## Primary interactions checked

- Scroll-driven reconstruct, control and prepare stages, including backward scrolling.
- Direct phase controls and keyboard focus.
- All five workspace tabs.
- All seven method steps with previous and next controls.
- Output, responsibility and data-handling disclosures.
- Diagnostic CTA route.
- Reduced-motion and sequential responsive fallbacks.
- Browser console and page errors: none.

## Follow-up polish

- **P3:** The overall page is intentionally longer than a conventional service explainer because the detailed workspace and evidence remain available on-page. This is acceptable for the exploration-led brief and does not reintroduce global pinning.

**final result: passed**

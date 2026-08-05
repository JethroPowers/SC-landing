# Design QA — How Matter Control Works

## Visual source of truth

- Current website desktop and mobile captures:
  - `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/current-live-desktop.png`
  - `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/current-live-mobile.png`
- Founding diagnostic presentation renders, especially slides 6, 8, 9, 10 and 11:
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-6.png`
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-8.png`
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-9.png`
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-10.png`
  - `/Users/Jethr/Desktop/Desktop/Sovereignty_Control_Presentation/Sovereignty_Control_Founding_Matter_Control_Diagnostic/slide-11.png`

## Implementation captures

- Desktop viewport: 1440 × 1000 CSS px at 1× density.
- Mobile viewport: 390 × 664 CSS px at 3× density (1170 × 1992 capture).
- Desktop full page: 1440 × 4171 px.
- Mobile full page: 1170 × 20994 px.
- Workspace captures cover Matter, Readiness, Review Queue, Change Impact and Closeout at both viewport sizes.
- Full comparison input opened and inspected:
  `/Users/Jethr/Documents/Codex/2026-08-05/act-as-a-senior-product-designer/work/site-captures/design-qa-comparison.png`

## Comparison evidence

The combined comparison places presentation slides 6, 8 and 9 beside the implemented first screen, Readiness view and Change Impact view. It confirms the inherited editorial hierarchy, ink/ivory/gold palette, Source Serif/Inter typography, thin-rule process language and dense operational workspace treatment. The web implementation adds persistent matter context, accessible interaction states and the exact fictional detail required for the explainer without changing the visual character of the source.

Focused checks covered process-tab alignment, all four step-detail fields, workspace segmented control, readiness metrics and dependency rows, the five-stage change sequence, change-record facts, offer block, disclosure and mobile stacking.

## Findings and iteration history

1. **P2 — mobile min-content clipping:** the page grid initially inherited the process rail's minimum width, clipping the first-screen heading. Fixed with explicit `minmax(0, 1fr)` tracks and zero minimum widths.
2. **P2 — workspace view movement:** switching views initially changed the workspace height. Fixed by placing all panels on one stable grid track and hiding inactive panels without removing their layout contribution.
3. **P2 — mobile workspace clipping:** the stable panel grid initially inherited the widest hidden panel's minimum content size. Fixed by constraining the workspace and panel track to `minmax(0, 1fr)` and adding a regression assertion for panel and heading bounds.

Final desktop and mobile inspection found no remaining P0, P1 or P2 issues. Horizontal rails are deliberate swipeable controls for process, segmented views, the compact matter bar and the change sequence; the page itself does not overflow horizontally.

## Final result

final result: passed

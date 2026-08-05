"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileOutput,
  RefreshCw,
  ShieldCheck
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useScrollNarrative } from "@/components/scroll/useScrollNarrative";
import {
  fictionalMatter,
  type MatterControlNarrativeChapter,
  type WorkspaceViewId
} from "@/lib/matter-control-fixture";
import { MatterEvolutionView } from "./MatterEvolutionView";
import { NarrativeProgress } from "./NarrativeProgress";
import { WorkspaceSurface } from "./WorkspaceViews";
import styles from "./MatterControl.module.css";

const responsibilityRows = [
  {
    firm: "Client relationships, professional judgement and legal or regulatory advice",
    control:
      "Matter reconstruction, readiness tracking and advisor-review preparation"
  },
  {
    firm: "Approval of programme assumptions and source-of-funds sufficiency",
    control:
      "Programme-assumption records, source dates and confirmation queues"
  },
  {
    firm: "Final decisions, client wording, filings and submissions",
    control:
      "Blocker ownership, dependency control and practical next-action planning"
  }
];

const detailFields = [
  {
    key: "sovereigntyControl" as const,
    label: "What Sovereignty Control does",
    icon: RefreshCw
  },
  {
    key: "firmResponsibility" as const,
    label: "What the firm remains responsible for",
    icon: Building2
  },
  {
    key: "recordChange" as const,
    label: "What changes in the matter record",
    icon: ShieldCheck
  },
  {
    key: "output" as const,
    label: "Practical output",
    icon: FileOutput
  }
];

function ChapterDetails({
  chapter,
  progress,
  reducedMotion
}: {
  chapter: MatterControlNarrativeChapter;
  progress: number;
  reducedMotion: boolean;
}) {
  const matter = fictionalMatter;
  const step =
    chapter.processStepIndex === undefined
      ? null
      : matter.steps[chapter.processStepIndex];

  if (!step) {
    const notes =
      chapter.kind === "change"
        ? [
            ["System action", "Surface the source change, effective date, route and active-matter exposure."],
            ["Firm decision", "Confirm the professional effect before any assumption or client position changes."]
          ]
        : chapter.kind === "boundary"
          ? [
              ["The firm", "Retains the client, the advice, programme assumptions and all final decisions."],
              ["Sovereignty Control", "Maintains operational clarity, ownership, dependencies and review preparation."]
            ]
          : [
              ["Current offer", "Complimentary · one active, recent or anonymised matter."],
              ["Entry boundary", "Seven to ten working days · no external contact · no obligation to continue."]
            ];

    return (
      <div className={styles.narrativeNotes}>
        {notes.map(([label, value], index) => (
          <motion.div
            animate={{
              opacity: reducedMotion || progress >= 0.08 + index * 0.17 ? 1 : 0.22,
              x: reducedMotion || progress >= 0.08 + index * 0.17 ? 0 : -10
            }}
            key={label}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <span>{label}</span>
            <p>{value}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.narrativeDetails}>
      {detailFields.map(({ key, label, icon: Icon }, index) => {
        const revealed = reducedMotion || progress >= index * 0.11;
        return (
          <motion.div
            animate={{ opacity: revealed ? 1 : 0.2, x: revealed ? 0 : -12 }}
            className={styles.narrativeDetail}
            key={key}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div>
              <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
              <span>{label}</span>
            </div>
            <p>{step[key]}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function BoundarySurface() {
  return (
    <div className={styles.boundarySurface} data-testid="boundary-surface">
      <div className={styles.boundarySurfaceHead}>
        <span>Operating authority</span>
        <strong>Clear support. Clear professional ownership.</strong>
        <p>
          Sovereignty Control is an early-stage operating method being validated—not
          a mature platform, regulated service or substitute for the firm's team.
        </p>
      </div>
      <div className={styles.boundarySurfaceTable}>
        <div className={styles.boundarySurfaceLabels}>
          <span>The firm retains</span>
          <span>Sovereignty Control supports</span>
        </div>
        {responsibilityRows.map((row) => (
          <div className={styles.boundarySurfaceRow} key={row.firm}>
            <strong>{row.firm}</strong>
            <span>{row.control}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfferSurface({ instanceId }: { instanceId: string }) {
  const matter = fictionalMatter;

  return (
    <div className={styles.offerSurface} data-testid={`offer-surface-${instanceId}`}>
      <div className={styles.offerSurfaceHead}>
        <div>
          <span>Current validation offer</span>
          <strong>Start with one matter, not a software purchase.</strong>
        </div>
        <ShieldCheck size={24} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <dl className={styles.offerSurfaceFacts}>
        <div><dt>Fee</dt><dd>{matter.diagnostic.fee}</dd></div>
        <div><dt>Scope</dt><dd>{matter.diagnostic.scope}</dd></div>
        <div><dt>Timing</dt><dd>{matter.diagnostic.timing}</dd></div>
        <div><dt>Commitment</dt><dd>{matter.diagnostic.obligation}</dd></div>
      </dl>
      <div className={styles.offerSurfaceAction}>
        <p>
          {matter.diagnostic.communicationBoundary}. Participation and data handling
          are agreed before intake.
        </p>
        <Link
          className="button button-gold"
          data-testid={`primary-cta-${instanceId}`}
          href="/contact?interest=matter-control-diagnostic"
        >
          Discuss a complimentary matter-control diagnostic
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
      <details
        className={styles.offerDisclosure}
        data-testid={`data-handling-disclosure-${instanceId}`}
      >
        <summary>
          <span><ShieldCheck size={17} aria-hidden="true" />Data handling during the diagnostic</span>
          <ChevronDown size={17} aria-hidden="true" />
        </summary>
        <div>
          <p>Minimised operational states and existing location references only.</p>
          <ul>
            {matter.dataBoundaries.map((boundary) => (
              <li key={boundary}><CheckCircle2 size={14} aria-hidden="true" />{boundary}</li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}

function ChapterSurface({
  chapter,
  chapterIndex,
  activeView,
  onViewChange,
  instanceId
}: {
  chapter: MatterControlNarrativeChapter;
  chapterIndex: number;
  activeView: WorkspaceViewId;
  onViewChange: (view: WorkspaceViewId) => void;
  instanceId: string;
}) {
  const matter = fictionalMatter;

  if (chapter.kind === "boundary") return <BoundarySurface />;
  if (chapter.kind === "offer") return <OfferSurface instanceId={instanceId} />;

  const evolutionState =
    chapter.visualState === "selected" ||
    chapter.visualState === "minimised" ||
    chapter.visualState === "mapped"
      ? chapter.visualState
      : null;
  const panelOverride =
    evolutionState && activeView === "matter" ? (
      <MatterEvolutionView matter={matter} state={evolutionState} />
    ) : undefined;
  const focus =
    chapter.visualState === "evidence"
      ? "evidence"
      : chapter.visualState === "blockers"
        ? "blockers"
        : undefined;

  return (
    <WorkspaceSurface
      activeView={activeView}
      compact
      focus={focus}
      instanceId={instanceId}
      matter={matter}
      onViewChange={onViewChange}
      panelOverride={panelOverride}
      panelTestId={
        panelOverride
          ? `matter-evolution-panel-${chapterIndex}-${instanceId}`
          : `workspace-view-${activeView}-${instanceId}`
      }
      testId={`workspace-${instanceId}`}
    />
  );
}

function NarrativeHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={compact ? styles.narrativeHeaderCompact : styles.narrativeHeader}>
      <div>
        <span>Interactive operating explainer</span>
        <h1>How Matter Control Works</h1>
      </div>
      <div className={styles.narrativeFictional}>
        <ShieldCheck size={17} strokeWidth={1.7} aria-hidden="true" />
        <span><strong>Fictional demonstration matter</strong>No real client or confidential information.</span>
      </div>
    </header>
  );
}

function FallbackMatterSummary() {
  const matter = fictionalMatter;
  const fields = [
    ["Matter", matter.reference],
    ["Household", matter.household],
    ["Objective", matter.objective],
    ["Routes", `${matter.routeCount} possible routes`],
    ["Status", matter.status],
    ["Next review", matter.nextReviewDate]
  ];

  return (
    <dl className={styles.fallbackMatterSummary} aria-label="Fictional matter summary">
      {fields.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function MatterControlExplainer() {
  const matter = fictionalMatter;
  const chapters = matter.narrativeChapters;
  const {
    activeChapter,
    chapterProgress,
    overallProgress,
    scrollToChapter,
    trackRef
  } = useScrollNarrative(chapters.length);
  const [viewOverrides, setViewOverrides] = useState<
    Partial<Record<number, WorkspaceViewId>>
  >({});
  const chapter = chapters[activeChapter];

  function viewFor(index: number) {
    return viewOverrides[index] ?? chapters[index].defaultView ?? "matter";
  }

  function changeView(index: number, view: WorkspaceViewId) {
    setViewOverrides((current) => ({ ...current, [index]: view }));
  }

  return (
    <main className={styles.narrativePage}>
      <section
        aria-label="How Matter Control Works scroll narrative"
        className={styles.narrativeExperience}
        ref={trackRef}
      >
        <div
          className={`${styles.narrativeSticky} ${styles[`narrativeTheme_${chapter.theme}`]}`}
          data-active-chapter={activeChapter}
          data-testid="narrative-canvas"
        >
          <div className={`container ${styles.narrativeCanvas}`}>
            <NarrativeHeader />
            <div className={styles.narrativeBody}>
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  className={styles.narrativeCopy}
                  key={chapter.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.34, ease: "easeOut" }}
                >
                  <span className={styles.narrativeChapterLabel}>
                    Chapter {chapter.label} · {chapter.shortLabel}
                  </span>
                  <h2>{chapter.title}</h2>
                  <p className={styles.narrativeSummary}>{chapter.summary}</p>
                  <ChapterDetails
                    chapter={chapter}
                    progress={chapterProgress}
                    reducedMotion={false}
                  />
                </motion.div>
              </AnimatePresence>

              <div className={styles.narrativeVisual}>
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    className={styles.narrativeVisualInner}
                    key={`${chapter.id}-${viewFor(activeChapter)}`}
                    initial={{ opacity: 0, scale: 0.985, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.99, y: -8 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                  >
                    <ChapterSurface
                      activeView={viewFor(activeChapter)}
                      chapter={chapter}
                      chapterIndex={activeChapter}
                      instanceId="cinematic"
                      onViewChange={(view) => changeView(activeChapter, view)}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <NarrativeProgress
              activeChapter={activeChapter}
              chapters={chapters}
              onChapterChange={scrollToChapter}
              overallProgress={overallProgress}
            />
          </div>
        </div>

        <div className={styles.narrativeFallback}>
          <div className="container">
            <NarrativeHeader compact />
            <FallbackMatterSummary />
            <NarrativeProgress
              activeChapter={activeChapter}
              chapters={chapters}
              onChapterChange={scrollToChapter}
              overallProgress={overallProgress}
            />
          </div>
          {chapters.map((item, index) => (
            <article
              className={`${styles.fallbackChapter} ${styles[`fallbackTheme_${item.theme}`]}`}
              data-testid={`mobile-chapter-${index}`}
              id={`matter-chapter-${index}`}
              key={item.id}
            >
              <div className={`container ${styles.fallbackChapterInner}`}>
                <div className={styles.fallbackChapterCopy}>
                  <span>Chapter {item.label} · {item.shortLabel}</span>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  <ChapterDetails chapter={item} progress={1} reducedMotion />
                </div>
                <div className={styles.fallbackChapterSurface}>
                  <ChapterSurface
                    activeView={viewFor(index)}
                    chapter={item}
                    chapterIndex={index}
                    instanceId={`fallback-${index}`}
                    onViewChange={(view) => changeView(index, view)}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

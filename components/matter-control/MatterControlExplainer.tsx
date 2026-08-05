"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  FileOutput,
  FolderKanban,
  History,
  ListChecks,
  Scale,
  ShieldCheck,
  UserRoundCheck
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { useScrollNarrative } from "@/components/scroll/useScrollNarrative";
import {
  fictionalMatter,
  type MatterControlOperatingPhase,
  type WorkspaceViewId
} from "@/lib/matter-control-fixture";
import { StatusLanguage } from "./StatusLanguage";
import { WorkspaceSurface } from "./WorkspaceViews";
import styles from "./MatterControl.module.css";

const deliverableIcons = [FolderKanban, ClipboardCheck, FileOutput];

const responsibilityRows = [
  {
    firm: "Client relationships, professional judgement and legal or regulatory advice",
    control: "Matter reconstruction, readiness tracking and review preparation"
  },
  {
    firm: "Programme assumptions, source-of-funds sufficiency and professional effect",
    control: "Assumption records, source dates and confirmation queues"
  },
  {
    firm: "Final decisions, client wording, filings and submissions",
    control: "Ownership, dependency control and practical next-action planning"
  }
];

function FictionalLabel() {
  return (
    <div className={styles.flowFictionalLabel}>
      <ShieldCheck size={16} strokeWidth={1.7} aria-hidden="true" />
      <span><strong>Fictional demonstration matter</strong>No real client or confidential information.</span>
    </div>
  );
}

function MatterIdentityStrip({ compact = false }: { compact?: boolean }) {
  const matter = fictionalMatter;

  return (
    <div
      aria-label="Fictional matter summary"
      className={`${styles.flowMatterStrip} ${compact ? styles.flowMatterStripCompact : ""}`}
    >
      <strong>{matter.reference}</strong>
      <span>{matter.household}</span>
      <span>{matter.objective}</span>
      <span>{matter.status}</span>
      <span>Review {matter.nextReviewDate}</span>
    </div>
  );
}

function OpeningMatter() {
  const matter = fictionalMatter;

  return (
    <div className={styles.openingRecord} data-testid="opening-matter-record">
      <div className={styles.openingRecordHead}>
        <div>
          <span>Active diagnostic record</span>
          <strong>{matter.reference}</strong>
        </div>
        <StatusLanguage status="attention" />
      </div>
      <div className={styles.openingRecordCore}>
        <div>
          <span>Household</span>
          <strong>{matter.household}</strong>
        </div>
        <div>
          <span>Objective</span>
          <strong>{matter.objective}</strong>
        </div>
      </div>
      <div className={styles.openingRecordSignal}>
        <span>Current operating signal</span>
        <strong>3 missing evidence items · 1 overdue dependency · 2 questions for review</strong>
      </div>
    </div>
  );
}

function OpeningSection() {
  const intro = fictionalMatter.serviceIntro;

  return (
    <section className={styles.flowOpening} data-testid="story-opening" id="opening">
      <div className={`container ${styles.flowOpeningInner}`}>
        <div className={styles.flowOpeningTop}>
          <div>
            <span className={styles.flowEyebrow}>{intro.eyebrow}</span>
            <span className={styles.flowAudience}>{intro.audience}</span>
            <h1>{intro.title}</h1>
            <p>{intro.summary}</p>
            <p className={styles.openingBoundary}><Scale size={15} aria-hidden="true" />{intro.boundary}</p>
            <a className={styles.flowScrollCue} href="#transformation">
              <span>{intro.scrollLabel}</span>
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <FictionalLabel />
        </div>
        <OpeningMatter />
      </div>
    </section>
  );
}

function ReconstructVisual() {
  const matter = fictionalMatter;
  const routes = ["Route A", "Route B", "Route C", "Route D"];

  return (
    <div className={styles.phaseReconstruct} data-testid="phase-visual-reconstruct">
      <div className={styles.phaseRecordHeading}>
        <span>Current-state matter map</span>
        <strong>{matter.reference}</strong>
      </div>
      <div className={styles.phaseContextGrid}>
        <div><span>Household</span><strong>Principal, spouse and two children</strong></div>
        <div><span>Objective</span><strong>Mobility plus long-term residence</strong></div>
        <div><span>Current stage</span><strong>Matter reconstructed</strong></div>
        <div><span>Firm sponsor</span><strong>Priya Shah · Firm advisor</strong></div>
      </div>
      <div className={styles.phaseRouteRail}>
        {routes.map((route, index) => (
          <div key={route}>
            <span>{route}</span>
            <strong>{index === 2 ? "Change flagged" : "Under consideration"}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function ControlVisual() {
  const matter = fictionalMatter;

  return (
    <div className={styles.phaseControl} data-testid="phase-visual-control">
      <div className={styles.phaseMetrics}>
        {matter.readinessMetrics.map((metric) => (
          <div key={metric.label}>
            <StatusLanguage status={metric.status} />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.phaseDependencyList}>
        {matter.dependencies.slice(0, 3).map((dependency) => (
          <div key={dependency.item}>
            <span>{dependency.item}</span>
            <strong>{dependency.owner}</strong>
            <small>{dependency.timing}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrepareVisual() {
  const matter = fictionalMatter;

  return (
    <div className={styles.phasePrepare} data-testid="phase-visual-prepare">
      <div className={styles.phaseReviewHead}>
        <div>
          <span>Advisor review queue</span>
          <strong>Two decisions prepared</strong>
        </div>
        <UserRoundCheck size={20} aria-hidden="true" />
      </div>
      <div className={styles.phaseQuestions}>
        {matter.reviewQuestions.map((question, index) => (
          <div key={question.question}>
            <span>0{index + 1}</span>
            <strong>{question.question}</strong>
            <small>{question.owner}</small>
          </div>
        ))}
      </div>
      <div className={styles.phaseActionBar}>
        <span>Immediate action plan</span>
        <strong>Six dated actions · named owners · next 30 days</strong>
        <StatusLanguage status="ready" />
      </div>
    </div>
  );
}

function PhaseVisual({ phase }: { phase: MatterControlOperatingPhase }) {
  if (phase.visualState === "reconstruct") return <ReconstructVisual />;
  if (phase.visualState === "control") return <ControlVisual />;
  return <PrepareVisual />;
}

function PhaseCopy({ phase }: { phase: MatterControlOperatingPhase }) {
  return (
    <div className={styles.phaseCopy}>
      <span>{phase.number} · {phase.action}</span>
      <h2>{phase.title}</h2>
      <p>{phase.summary}</p>
      <div className={styles.phaseChange}>
        <span>Record change</span>
        <strong>{phase.recordChange}</strong>
      </div>
      <div className={styles.phaseFirmBoundary}>
        <Building2 size={15} aria-hidden="true" />
        <span>{phase.firmRetains}</span>
      </div>
    </div>
  );
}

function TransformationSection() {
  const phases = fictionalMatter.operatingPhases;
  const {
    activeChapter,
    overallProgress,
    scrollToChapter,
    trackRef
  } = useScrollNarrative(phases.length);
  const activePhase = phases[activeChapter];

  return (
    <section
      aria-label="Three-stage matter-control transformation"
      className={styles.flowTransformation}
      data-testid="transformation-track"
      id="transformation"
      ref={trackRef}
    >
      <div className={styles.transformationSticky} data-active-phase={activeChapter} data-testid="transformation-canvas">
        <div className={`container ${styles.transformationCanvas}`}>
          <div className={styles.transformationIntro}>
            <span className={styles.flowEyebrow}>One matter · three operating moves</span>
            <p>Scroll to watch SC-024 move from fragmented status to controlled review.</p>
          </div>
          <p className={styles.stageAnnouncement} aria-live="polite">
            Stage {activeChapter + 1} of {phases.length}: {activePhase.action}
          </p>
          <div className={styles.transformationBody}>
            <div className={styles.transformationCopyStack}>
              {phases.map((phase, index) => (
                <motion.div
                  className={styles.transformationCopy}
                  aria-hidden={index !== activeChapter}
                  key={`copy-${phase.id}`}
                  initial={false}
                  animate={{ opacity: index === activeChapter ? 1 : 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <PhaseCopy phase={phase} />
                </motion.div>
              ))}
            </div>
            <div className={styles.transformationRecord}>
              <MatterIdentityStrip compact />
              <div className={styles.transformationVisualStack}>
                {phases.map((phase, index) => (
                  <motion.div
                    className={styles.transformationRecordPanel}
                    aria-hidden={index !== activeChapter}
                    data-testid={`phase-layer-${phase.id}`}
                    key={`visual-${phase.id}`}
                    initial={false}
                    animate={{ opacity: index === activeChapter ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <PhaseVisual phase={phase} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.phaseProgress}>
            <span>How it works</span>
            <div aria-label="Matter-control operating phases" role="tablist">
              {phases.map((phase, index) => (
                <button
                  aria-label={`${phase.number}. ${phase.action}`}
                  aria-selected={index === activeChapter}
                  className={index === activeChapter ? styles.phaseDotActive : styles.phaseDot}
                  key={phase.id}
                  onClick={() => scrollToChapter(index)}
                  role="tab"
                  type="button"
                >
                  {phase.number}
                </button>
              ))}
              <span aria-hidden="true" style={{ transform: `scaleX(${overallProgress})` }} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.transformationFallback}>
        <div className="container">
          <div className={styles.transformationFallbackIntro}>
            <span className={styles.flowEyebrow}>One matter · three operating moves</span>
            <h2>From fragmented status to controlled review.</h2>
          </div>
          {phases.map((phase) => (
            <article className={styles.transformationFallbackPhase} data-testid={`mobile-phase-${phase.id}`} id={`matter-chapter-${Number(phase.number) - 1}`} key={phase.id}>
              <PhaseCopy phase={phase} />
              <div className={styles.transformationRecord}>
                <MatterIdentityStrip compact />
                <div className={styles.transformationRecordPanel}><PhaseVisual phase={phase} /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  const matter = fictionalMatter;

  return (
    <section className={styles.deliverablesSection} data-testid="story-deliverables" id="outputs">
      <div className={`container ${styles.flowSectionHeading}`}>
        <span className={styles.flowEyebrow}>What the firm receives</span>
        <h2>A controlled record your team can use.</h2>
      </div>
      <div className={styles.deliverableBands}>
        {matter.deliverableGroups.map((group, index) => {
          const Icon = deliverableIcons[index];
          return (
            <article className={`${styles.deliverableBand} ${styles[`deliverableBand_${group.theme}`]}`} key={group.id}>
              <div className={`container ${styles.deliverableBandInner}`}>
                <span>{group.number}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.intendedBenefit}</p>
                </div>
                <div className={styles.deliverableOutput}>
                  <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  <span>Representative output</span>
                  <strong>{group.representativeOutput}</strong>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className={`container ${styles.allOutputsWrap}`}>
        <details className={styles.allOutputs} data-testid="all-outputs-disclosure">
          <summary>
            <span><FileCheck2 size={17} aria-hidden="true" />See everything included</span>
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <div>
            {matter.closeoutOutputs.map((output, index) => (
              <div key={output.title}>
                <span>0{index + 1}</span>
                <strong>{output.title}</strong>
                <p>{output.sample}</p>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function SevenStepMethod() {
  const steps = fictionalMatter.steps;
  const [activeStep, setActiveStep] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const step = steps[activeStep];

  function selectStep(index: number, focus = false) {
    const next = Math.max(0, Math.min(steps.length - 1, index));
    setActiveStep(next);
    if (focus) buttons.current[next]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectStep((index + 1) % steps.length, true);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectStep((index - 1 + steps.length) % steps.length, true);
    }
    if (event.key === "Home") {
      event.preventDefault();
      selectStep(0, true);
    }
    if (event.key === "End") {
      event.preventDefault();
      selectStep(steps.length - 1, true);
    }
  }

  return (
    <details className={styles.methodDisclosure} data-testid="seven-step-method">
      <summary>
        <span><ListChecks size={17} aria-hidden="true" />Explore the seven-step method</span>
        <ChevronDown size={17} aria-hidden="true" />
      </summary>
      <div className={styles.methodDisclosureBody}>
        <div aria-label="Seven-step matter-control method" className={styles.methodTabs} role="tablist">
          {steps.map((item, index) => (
            <button
              aria-label={`${index + 1}. ${item.shortTitle}`}
              aria-selected={activeStep === index}
              className={activeStep === index ? styles.methodTabActive : styles.methodTab}
              key={item.id}
              onClick={() => selectStep(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(node) => { buttons.current[index] = node; }}
              role="tab"
              tabIndex={activeStep === index ? 0 : -1}
              type="button"
            >
              <span>0{index + 1}</span>
              <strong>{item.shortTitle}</strong>
            </button>
          ))}
        </div>
        <div aria-live="polite" className={styles.methodPanel} role="tabpanel">
          <span>Step 0{activeStep + 1}</span>
          <h3>{step.title}</h3>
          <dl>
            <div><dt>Sovereignty Control</dt><dd>{step.sovereigntyControl}</dd></div>
            <div><dt>The firm remains responsible for</dt><dd>{step.firmResponsibility}</dd></div>
            <div><dt>Matter record change</dt><dd>{step.recordChange}</dd></div>
            <div><dt>Practical output</dt><dd>{step.output}</dd></div>
          </dl>
          <div className={styles.methodActions}>
            <button aria-label="Previous method step" disabled={activeStep === 0} onClick={() => selectStep(activeStep - 1)} type="button"><ChevronLeft size={16} aria-hidden="true" />Previous</button>
            <button aria-label="Next method step" disabled={activeStep === steps.length - 1} onClick={() => selectStep(activeStep + 1)} type="button">Next<ChevronRight size={16} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </details>
  );
}

function WorkspaceExploreSection() {
  const [activeView, setActiveView] = useState<WorkspaceViewId>("readiness");

  return (
    <section className={styles.workspaceExploreSection} data-testid="story-workspace" id="workspace">
      <div className="container">
        <div className={styles.workspaceExploreHeading}>
          <div>
            <span className={styles.flowEyebrow}>Optional detail</span>
            <h2>Go deeper when you need to.</h2>
          </div>
          <p>Open the fictional working record or the complete seven-step method.</p>
        </div>
        <details className={styles.workspaceDisclosure} data-testid="workspace-disclosure">
          <summary>
            <span className={styles.workspaceDisclosureTitle}><FolderKanban size={18} aria-hidden="true" /><strong>Explore the SC-024 working record</strong></span>
            <span className={styles.workspaceDisclosureMetrics} aria-hidden="true">
              {fictionalMatter.readinessMetrics.map((metric) => (
                <span key={metric.label}><strong>{metric.value}</strong>{metric.label}</span>
              ))}
            </span>
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <div className={styles.workspaceExploreSurface}>
            <WorkspaceSurface
              activeView={activeView}
              instanceId="explore"
              matter={fictionalMatter}
              onViewChange={setActiveView}
              testId="workspace-explore"
            />
          </div>
        </details>
        <SevenStepMethod />
      </div>
    </section>
  );
}

function ChangeAndBoundarySection() {
  const change = fictionalMatter.changeImpact;

  return (
    <section className={styles.changeBoundarySection} data-testid="story-change" id="change">
      <div className="container">
        <div className={styles.changeStoryHeading}>
          <span className={styles.flowEyebrow}>Programme change and professional judgement</span>
          <h2>What Control surfaces. What the firm decides.</h2>
        </div>
        <ol className={styles.changeStorySequence} aria-label="Programme-change impact sequence">
          {change.sequence.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ol>
        <div className={styles.boundaryStoryColumns}>
          <div>
            <Scale size={21} aria-hidden="true" />
            <span>The firm</span>
            <strong>Advises, judges, approves and decides.</strong>
          </div>
          <div>
            <ClipboardCheck size={21} aria-hidden="true" />
            <span>Sovereignty Control</span>
            <strong>Reconstructs, tracks, prepares and surfaces.</strong>
          </div>
        </div>
        <details className={styles.changeRecordDisclosure} data-testid="change-record-disclosure">
          <summary><span><History size={17} aria-hidden="true" />See the fictional change record</span><ChevronDown size={17} aria-hidden="true" /></summary>
          <div className={styles.changeStoryRecord}>
            <div>
              <span>Fictional change event</span>
              <strong>{change.change}</strong>
            </div>
            <dl>
              <div><dt>Source</dt><dd>{change.source}</dd></div>
              <div><dt>Published</dt><dd>{change.publicationDate}</dd></div>
              <div><dt>Effective</dt><dd>{change.effectiveDate}</dd></div>
              <div><dt>Affected route</dt><dd>{change.route}</dd></div>
              <div><dt>Previous</dt><dd>{change.previousValue}</dd></div>
              <div><dt>Current</dt><dd>{change.currentValue}</dd></div>
            </dl>
            <p><History size={16} aria-hidden="true" />{change.verificationStatus}</p>
          </div>
        </details>
        <details className={styles.boundaryDetails}>
          <summary><span>See the responsibility split</span><ChevronDown size={17} aria-hidden="true" /></summary>
          <div>
            {responsibilityRows.map((row) => (
              <div key={row.firm}>
                <strong>{row.firm}</strong>
                <span>{row.control}</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function OfferSection() {
  const matter = fictionalMatter;

  return (
    <section className={styles.flowOfferSection} data-testid="story-offer" id="offer">
      <div className="container">
        <div className={styles.flowOfferHeading}>
          <span className={styles.flowEyebrow}>Start with one matter</span>
          <h2>Start with one matter. Decide what comes next.</h2>
          <p>A complimentary seven-to-ten-working-day diagnostic shows how the method handles one active, recent or anonymised matter. Sovereignty Control remains an early-stage operating method being validated.</p>
        </div>
        <dl className={styles.flowOfferFacts}>
          <div><dt>Fee</dt><dd>{matter.diagnostic.fee}</dd></div>
          <div><dt>Scope</dt><dd>{matter.diagnostic.scope}</dd></div>
          <div><dt>Timing</dt><dd>{matter.diagnostic.timing}</dd></div>
          <div><dt>Commitment</dt><dd>{matter.diagnostic.obligation}</dd></div>
        </dl>
        <div className={styles.flowOfferAction}>
          <p>{matter.diagnostic.communicationBoundary}. Participation and data handling are agreed before intake.</p>
          <Link className="button button-gold" data-testid="primary-cta" href="/contact?interest=matter-control-diagnostic">
            Discuss a complimentary matter-control diagnostic
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <details className={styles.flowDataDisclosure} data-testid="data-handling-disclosure">
          <summary>
            <span><ShieldCheck size={17} aria-hidden="true" />Data handling during the diagnostic</span>
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <ul>
            {matter.dataBoundaries.map((boundary) => (
              <li key={boundary}><CheckCircle2 size={14} aria-hidden="true" />{boundary}</li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

export function MatterControlExplainer() {
  return (
    <main className={styles.flowPage}>
      <OpeningSection />
      <TransformationSection />
      <DeliverablesSection />
      <WorkspaceExploreSection />
      <ChangeAndBoundarySection />
      <OfferSection />
    </main>
  );
}

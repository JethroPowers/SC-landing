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
  UserRoundCheck,
} from "lucide-react";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import {
  fictionalMatter,
  type MatterControlOperatingPhase,
  type WorkspaceViewId,
} from "@/lib/matter-control-fixture";
import { StatusLanguage } from "./StatusLanguage";
import { WorkspaceSurface } from "./WorkspaceViews";
import styles from "./MatterControl.module.css";
import { juris, enquiryHref } from "@/lib/partners";
import { NextPages } from "@/components/partners/Website";

const deliverableIcons = [FolderKanban, ClipboardCheck, FileOutput];

const responsibilityRows = [
  {
    firm: "Client relationships, professional judgement and legal or regulatory advice",
    control: "Matter reconstruction, readiness tracking and review preparation",
  },
  {
    firm: "Programme assumptions, source-of-funds sufficiency and professional effect",
    control: "Assumption records, source dates and confirmation queues",
  },
  {
    firm: "Final decisions, client wording, filings and submissions",
    control: "Ownership, dependency control and practical next-action planning",
  },
];

function FictionalLabel() {
  return (
    <div className={styles.flowFictionalLabel}>
      <ShieldCheck size={16} strokeWidth={1.7} aria-hidden="true" />
      <span>
        <strong>Fictional demonstration matter</strong>Simulated data and
        method. No messages, filings or professional decisions.
      </span>
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
          <span>Illustrative matter</span>
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
        <strong>
          3 missing evidence items · 1 overdue dependency · 2 questions for
          review
        </strong>
      </div>
    </div>
  );
}

function OpeningSection() {
  return (
    <section
      className={styles.flowOpening}
      data-testid="story-opening"
      id="opening"
    >
      <div className={`container ${styles.flowOpeningInner}`}>
        <div className={styles.flowOpeningTop}>
          <div>
            <span className={styles.flowEyebrow}>
              JURIS CONTROL / OPERATIONAL SUPPORT
            </span>
            <h1>Practical support for your client work.</h1>
            <p>
              Bring enquiries, document status, handovers and follow-up into a
              clearer working record. Agree the piece of work you need; your
              firm keeps the client relationship and every professional
              decision.
            </p>
            <a className={styles.flowScrollCue} href="#transformation">
              <span>See how it works with one fictional matter</span>
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
    <div
      className={styles.phaseReconstruct}
      data-testid="phase-visual-reconstruct"
    >
      <div className={styles.phaseRecordHeading}>
        <span>Current-state matter map</span>
        <strong>{matter.reference}</strong>
      </div>
      <div className={styles.phaseContextGrid}>
        <div>
          <span>Household</span>
          <strong>Principal, spouse and two children</strong>
        </div>
        <div>
          <span>Objective</span>
          <strong>Mobility plus long-term residence</strong>
        </div>
        <div>
          <span>Current stage</span>
          <strong>Matter reconstructed</strong>
        </div>
        <div>
          <span>Firm sponsor</span>
          <strong>Firm adviser</strong>
        </div>
      </div>
      <div className={styles.phaseRouteRail}>
        {routes.map((route, index) => (
          <div key={route}>
            <span>{route}</span>
            <strong>
              {index === 2 ? "Change flagged" : "Under consideration"}
            </strong>
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
          <span>Adviser review queue</span>
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
      <span>
        {phase.number} · {phase.action}
      </span>
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
  const [active, setActive] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % 3
        : event.key === "ArrowLeft"
          ? (index + 2) % 3
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? 2
              : -1;
    if (next < 0) return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return (
    <section
      id="transformation"
      className={styles.manualTransformation}
      aria-label="Three-stage matter-control transformation"
    >
      <div className="container">
        <p className={styles.flowEyebrow}>
          One fictional matter · three operating moves
        </p>
        <div
          role="tablist"
          aria-label="Matter-control operating phases"
          className={styles.manualTabs}
        >
          {phases.map((phase, index) => (
            <button
              type="button"
              role="tab"
              key={phase.id}
              id={`phase-${phase.id}`}
              aria-selected={active === index}
              aria-controls="phase-panel"
              tabIndex={active === index ? 0 : -1}
              ref={(node) => {
                buttons.current[index] = node;
              }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKey(event, index)}
            >
              {phase.number}. {phase.action}
            </button>
          ))}
        </div>
        <div
          className={styles.manualGrid}
          id="phase-panel"
          role="tabpanel"
          aria-labelledby={`phase-${phases[active].id}`}
          tabIndex={0}
        >
          <PhaseCopy phase={phases[active]} />
          <div className={styles.transformationRecord}>
            <MatterIdentityStrip compact />
            <div className={styles.transformationRecordPanel}>
              <PhaseVisual phase={phases[active]} />
            </div>
          </div>
        </div>
        <details className={styles.methodDisclosure}>
          <summary>Explore the recurring operating cycle</summary>
          <div className={styles.methodDisclosureBody}>
            <p>
              Where recurring work is agreed, the proposed cycle is: observe,
              structure, assign, chase, escalate, prepare for review, record the
              decision and repeat. The firm approves communication and all
              professional decisions.
            </p>
            <p>
              An illustrative weekly brief might show 7 matters moved, 3
              stalled, an oldest blocker of 11 days, 5 blockers by owner, 2
              adviser reviews ready, 4 overdue chasers, 1 change-exposed matter
              and 2 escalations. These are fictional management indicators, not
              results from customers.
            </p>
            <p>
              Ongoing service needs a separately agreed scope, cadence, owner,
              limits and commercial terms.
            </p>
          </div>
        </details>
        <Link href="/use-cases#workflows" className="text-link">
          Explore workflows for your firm{" "}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  const matter = fictionalMatter;

  return (
    <section
      className={styles.deliverablesSection}
      data-testid="story-deliverables"
      id="outputs"
    >
      <div className={`container ${styles.flowSectionHeading}`}>
        <span className={styles.flowEyebrow}>What the firm receives</span>
        <h2>A controlled record your team can use.</h2>
      </div>
      <div className={styles.deliverableBands}>
        {matter.deliverableGroups.map((group, index) => {
          const Icon = deliverableIcons[index];
          return (
            <article
              className={`${styles.deliverableBand} ${styles[`deliverableBand_${group.theme}`]}`}
              key={group.id}
            >
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
        <details
          className={styles.allOutputs}
          data-testid="all-outputs-disclosure"
        >
          <summary>
            <span>
              <FileCheck2 size={17} aria-hidden="true" />
              See everything included
            </span>
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

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
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
    <details
      className={styles.methodDisclosure}
      data-testid="seven-step-method"
      open
    >
      <summary>
        <span>
          <ListChecks size={17} aria-hidden="true" />
          Explore the seven-step method
        </span>
        <ChevronDown size={17} aria-hidden="true" />
      </summary>
      <div className={styles.methodDisclosureBody}>
        <div
          aria-label="Seven-step matter-control method"
          className={styles.methodTabs}
          role="tablist"
        >
          {steps.map((item, index) => (
            <button
              aria-label={`${index + 1}. ${item.shortTitle}`}
              aria-selected={activeStep === index}
              className={
                activeStep === index ? styles.methodTabActive : styles.methodTab
              }
              key={item.id}
              onClick={() => selectStep(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(node) => {
                buttons.current[index] = node;
              }}
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
            <div>
              <dt>Juris Control</dt>
              <dd>{step.sovereigntyControl}</dd>
            </div>
            <div>
              <dt>The firm remains responsible for</dt>
              <dd>{step.firmResponsibility}</dd>
            </div>
            <div>
              <dt>Matter record change</dt>
              <dd>{step.recordChange}</dd>
            </div>
            <div>
              <dt>Practical output</dt>
              <dd>{step.output}</dd>
            </div>
          </dl>
          <div className={styles.methodActions}>
            <button
              aria-label="Previous method step"
              disabled={activeStep === 0}
              onClick={() => selectStep(activeStep - 1)}
              type="button"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              Previous
            </button>
            <button
              aria-label="Next method step"
              disabled={activeStep === steps.length - 1}
              onClick={() => selectStep(activeStep + 1)}
              type="button"
            >
              Next
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </details>
  );
}

function WorkspaceExploreSection() {
  const [activeView, setActiveView] = useState<WorkspaceViewId>("readiness");

  return (
    <section
      className={styles.workspaceExploreSection}
      data-testid="story-workspace"
      id="workspace"
    >
      <div className="container">
        <div className={styles.workspaceExploreHeading}>
          <div>
            <span className={styles.flowEyebrow}>
              Inside the working record
            </span>
            <h2>Five views. One connected matter.</h2>
          </div>
          <p>
            Explore the fictional record, then follow the seven steps from
            intake to closeout.
          </p>
        </div>
        <details
          className={styles.workspaceDisclosure}
          data-testid="workspace-disclosure"
          open
        >
          <summary>
            <span className={styles.workspaceDisclosureTitle}>
              <FolderKanban size={18} aria-hidden="true" />
              <strong>Explore the JP-024 working record</strong>
            </span>
            <span
              className={styles.workspaceDisclosureMetrics}
              aria-hidden="true"
            >
              {fictionalMatter.readinessMetrics.map((metric) => (
                <span key={metric.label}>
                  <strong>{metric.value}</strong>
                  {metric.label}
                </span>
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
    <section
      className={styles.changeBoundarySection}
      data-testid="story-change"
      id="change"
    >
      <div className="container">
        <div className={styles.changeStoryHeading}>
          <span className={styles.flowEyebrow}>
            Programme change and professional judgement
          </span>
          <h2>What Control surfaces. What the firm decides.</h2>
        </div>
        <ol
          className={styles.changeStorySequence}
          aria-label="Programme-change impact sequence"
        >
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
            <span>Juris Control</span>
            <strong>Reconstructs, tracks, prepares and surfaces.</strong>
          </div>
        </div>
        <details
          className={styles.changeRecordDisclosure}
          data-testid="change-record-disclosure"
        >
          <summary>
            <span>
              <History size={17} aria-hidden="true" />
              See the fictional change record
            </span>
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <div className={styles.changeStoryRecord}>
            <div>
              <span>Fictional change event</span>
              <strong>{change.change}</strong>
            </div>
            <dl>
              <div>
                <dt>Source</dt>
                <dd>{change.source}</dd>
              </div>
              <div>
                <dt>Published</dt>
                <dd>{change.publicationDate}</dd>
              </div>
              <div>
                <dt>Effective</dt>
                <dd>{change.effectiveDate}</dd>
              </div>
              <div>
                <dt>Affected route</dt>
                <dd>{change.route}</dd>
              </div>
              <div>
                <dt>Previous</dt>
                <dd>{change.previousValue}</dd>
              </div>
              <div>
                <dt>Future value at effective date</dt>
                <dd>{change.currentValue}</dd>
              </div>
            </dl>
            <p>
              <History size={16} aria-hidden="true" />
              {change.verificationStatus}
            </p>
          </div>
        </details>
        <details className={styles.boundaryDetails}>
          <summary>
            <span>See the responsibility split</span>
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
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
    <section
      className={styles.flowOfferSection}
      data-testid="story-offer"
      id="offer"
    >
      <div className="container">
        <div className={styles.flowOfferHeading}>
          <span className={styles.flowEyebrow}>Start with one matter</span>
          <h2>Start with one matter. Decide what comes next.</h2>
          <p>
            A complimentary seven-to-ten-working-day diagnostic shows how the
            method handles one active, recent or anonymised matter. Juris
            Control remains an early-stage operating method being validated.
          </p>
        </div>
        <dl className={styles.flowOfferFacts}>
          <div>
            <dt>Fee</dt>
            <dd>{matter.diagnostic.fee}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>{matter.diagnostic.scope}</dd>
          </div>
          <div>
            <dt>Timing</dt>
            <dd>{matter.diagnostic.timing}</dd>
          </div>
          <div>
            <dt>Commitment</dt>
            <dd>{matter.diagnostic.obligation}</dd>
          </div>
        </dl>
        <div className={styles.flowOfferAction}>
          <p>
            {matter.diagnostic.communicationBoundary}. Participation and data
            handling are agreed before intake.
          </p>
          <Link
            className="button button-gold"
            data-testid="primary-cta"
            href={enquiryHref("operational-workflow", "diagnostic")}
          >
            Discuss a complimentary matter-control diagnostic
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <details
          className={styles.flowDataDisclosure}
          data-testid="data-handling-disclosure"
        >
          <summary>
            <span>
              <ShieldCheck size={17} aria-hidden="true" />
              Data handling during the diagnostic
            </span>
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <ul>
            {matter.dataBoundaries.map((boundary) => (
              <li key={boundary}>
                <CheckCircle2 size={14} aria-hidden="true" />
                {boundary}
              </li>
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
      <nav
        className="container juris-section-index"
        aria-label="Juris Control page sections"
      >
        <a href="#transformation">Operating phases</a>
        <a href="#outputs">Outputs</a>
        <a href="#workspace">Working record</a>
        <a href="#change">Change & responsibility</a>
        <a href="#offer">Diagnostic</a>
      </nav>
      <TransformationSection />
      <DeliverablesSection />
      <WorkspaceExploreSection />
      <ChangeAndBoundarySection />
      <OfferSection />
      <NextPages
        pages={[
          {
            href: "/demo-case",
            label: "Try the worked example",
            description:
              "Assign an owner and prepare a separate client-update draft. Reset at any point.",
          },
          {
            href: "/diagnostic",
            label: "The complimentary diagnostic",
            description:
              "One matter, 7–10 working days and no obligation to continue.",
          },
          {
            href: "/offers",
            label: "Working together",
            description:
              "Scope, handover, acceptance and possible further engagement.",
          },
        ]}
      />
    </main>
  );
}

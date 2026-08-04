"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  caseBlockers,
  caseDocuments,
  changeEvents,
  clientStatus,
  demoCase,
  programmeOptions
} from "@/lib/control-room-data";
import { useScrollStage } from "@/components/scroll/useScrollStage";
import styles from "./ControlRoom.module.css";

const steps = [
  "Client situation",
  "Why it is difficult",
  "Programme model",
  "Document readiness",
  "Fee-change impact",
  "Advisor and client views"
];

function tone(status: string) {
  if (status === "Complete") return "good";
  if (status === "Missing" || status === "Blocked") return "risk";
  return "warn";
}

function DemoStepContent({
  step,
  change
}: {
  step: number;
  change: (typeof changeEvents)[number];
}) {
  if (step === 0) return <Situation />;
  if (step === 1) return <Difficulty />;
  if (step === 2) return <ProgrammeModel />;
  if (step === 3) return <Readiness />;
  if (step === 4) return <ChangeImpact change={change} />;
  return <Outputs />;
}

export function GuidedDemoCase() {
  const { active: step, reducedMotion, scrollToStage, trackRef } = useScrollStage(
    steps.length
  );
  const change = changeEvents[0];

  function move(next: number) {
    scrollToStage(Math.max(0, Math.min(steps.length - 1, next)));
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") move(step + 1);
    if (event.key === "ArrowLeft") move(step - 1);
  }

  return (
    <>
      <div className={styles.demoTrack} ref={trackRef}>
        <div className={styles.demoSticky}>
          <div className={`${styles.demo} ${styles.shell}`} onKeyDown={onKeyDown}>
            <div className={styles.demoHeader}>
              <div className={styles.windowIdentity}>
                <span className={styles.liveDot} />
                <strong>{demoCase.title}</strong>
                <span>{step + 1} of {steps.length} · {demoCase.reference}</span>
              </div>
              <div className={styles.demoStepNav}>
                <button className={styles.iconButton} type="button" onClick={() => move(step - 1)} disabled={step === 0} aria-label="Previous demo step">
                  <ArrowLeft size={17} aria-hidden="true" />
                </button>
                <button className={styles.iconButton} type="button" onClick={() => move(step + 1)} disabled={step === steps.length - 1} aria-label="Next demo step">
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className={styles.progressLine}><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
            <div className={styles.demoBody}>
              <nav className={styles.demoRail} aria-label="Demo case steps">
                {steps.map((label, index) => (
                  <button type="button" data-active={index === step} aria-current={index === step ? "step" : undefined} onClick={() => move(index)} key={label}>
                    <span>0{index + 1}</span><strong>{label}</strong>
                  </button>
                ))}
              </nav>
              <div className={styles.demoContent} aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={step}
                    initial={reducedMotion ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.22 }}
                  >
                    <DemoStepContent step={step} change={change} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.demoMobile}>
        {steps.map((label, index) => (
          <article className={`${styles.demoMobileStage} ${styles.shell}`} key={label}>
            <div className={styles.demoMobileHeading}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
            </div>
            <div className={styles.demoContent}>
              <DemoStepContent step={index} change={change} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function Situation() {
  return (
    <>
      <p className={styles.kicker}>Matter details</p>
      <h2 className={styles.viewTitle}>{demoCase.title} comparing Caribbean citizenship programmes.</h2>
      <div className={styles.fieldGrid}>
        {[
          ["Objective", demoCase.objective],
          ["Family", demoCase.family],
          ["Budget", demoCase.budget],
          ["Timeline", demoCase.timeline],
          ["Preference", "Contribution or property route"],
          ["Programmes", "St Kitts, Grenada, Dominica, St Lucia"]
        ].map(([label, value]) => <div className={styles.field} key={label}><span className={styles.fieldLabel}>{label}</span><strong>{value}</strong></div>)}
      </div>
    </>
  );
}

function Difficulty() {
  return (
    <>
      <p className={styles.kicker}>Points requiring review</p>
      <h2 className={styles.viewTitle}>Finding four countries is the easy part.</h2>
      <div className={styles.list}>
        {[
          "Confirm dependant eligibility before family fees are relied upon.",
          "Separate contribution and property routes with different capital treatment.",
          "Review source-of-funds evidence before the recommendation is final.",
          "Keep proposed programme changes out of client-facing figures."
        ].map((item) => <div className={styles.listRow} key={item}><span>{item}</span><span className={styles.badge} data-tone="warn">Requires review</span></div>)}
      </div>
    </>
  );
}

function ProgrammeModel() {
  return (
    <>
      <p className={styles.kicker}>Indicative demo data · professional review required</p>
      <h2 className={styles.viewTitle}>Family-cost model</h2>
      <table className={styles.dataTable}>
        <thead><tr><th>Programme</th><th>Route</th><th>Minimum</th><th>Family</th><th>Estimated total</th><th>Review</th></tr></thead>
        <tbody>{programmeOptions.map((item) => (
          <tr key={item.id}>
            <td data-label="Programme"><strong>{item.programme}</strong></td>
            <td data-label="Route">{item.route}</td>
            <td data-label="Minimum">{item.indicativeMinimum}</td>
            <td data-label="Family fees">{item.familyFees}</td>
            <td data-label="Estimated total">{item.estimatedTotal}</td>
            <td data-label="Review">{item.reviewRequired}</td>
          </tr>
        ))}</tbody>
      </table>
    </>
  );
}

function Readiness() {
  return (
    <>
      <p className={styles.kicker}>Application documents</p>
      <h2 className={styles.viewTitle}>Three missing or review-required items prevent the advisor recommendation.</h2>
      <div className={`${styles.list} ${styles.documentGrid}`}>
        {caseDocuments.map((item) => <div className={styles.listRow} key={item.id}><div><strong>{item.name}</strong><span className={styles.subtle}>{item.person}</span></div><span className={styles.badge} data-tone={tone(item.status)}>{item.status}</span></div>)}
      </div>
    </>
  );
}

function ChangeImpact({ change }: { change: (typeof changeEvents)[number] }) {
  return (
    <>
      <p className={styles.kicker}>Simulated programme update</p>
      <h2 className={styles.viewTitle}>A draft fee change creates an advisor review task before any client figure changes.</h2>
      <div className={styles.changeCompare}>
        <div className={styles.changeValue}><span className={styles.subtle}>Published</span><strong>{change.oldValue}</strong></div>
        <ArrowRight size={20} aria-hidden="true" />
        <div className={styles.changeValue}><span className={styles.subtle}>{change.effectiveDate}</span><strong>{change.proposedValue}</strong></div>
      </div>
      <div className={styles.stageOutcome}>{change.affectedCases} active cases and {change.affectedReports} advisor report now require review.</div>
    </>
  );
}

function Outputs() {
  return (
    <>
      <p className={styles.kicker}>Advisor and client views</p>
      <h2 className={styles.viewTitle}>The advisor sees the review points. The client sees what happens next.</h2>
      <div className={styles.clientPanel}>
        <CheckCircle2 size={22} aria-hidden="true" />
        <h3>{clientStatus.stage}</h3>
        <p>{clientStatus.message}</p>
        <strong>Next milestone</strong>
        <p>{clientStatus.nextMilestone}</p>
      </div>
      <div className={styles.list}>
        {caseBlockers.slice(0, 2).map((item) => <div className={styles.listRow} key={item.id}><strong>Advisor report · {item.title}</strong><span className={styles.badge} data-tone={tone(item.status)}>{item.status}</span></div>)}
      </div>
    </>
  );
}

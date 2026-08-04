"use client";

import {
  Calculator,
  Database,
  FileClock,
  FileSearch,
  FolderSearch2,
  ShieldCheck
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { changeEvents, programmeChangeSteps } from "@/lib/control-room-data";
import { useScrollStage } from "@/components/scroll/useScrollStage";
import styles from "./HomeExperience.module.css";

const icons = [FileSearch, ShieldCheck, Database, Calculator, FolderSearch2, FileClock];

function ChangeIntro() {
  return (
    <div className={styles.changeIntro}>
      <h2>
        When a programme rule changes, know which comparison, active matter and
        advisor report it affects.
      </h2>
      <p>
        Intelligence holds programme routes, government fees, dependant rules,
        sources and effective dates. Control shows where those facts are being used.
      </p>
    </div>
  );
}

export function ProgrammeChangeJourney() {
  const { active, reducedMotion, scrollToStage, trackRef } = useScrollStage(
    programmeChangeSteps.length
  );
  const change = changeEvents[0];
  const current = programmeChangeSteps[active];

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? programmeChangeSteps.length - 1
          : event.key === "ArrowRight"
            ? (active + 1) % programmeChangeSteps.length
            : (active - 1 + programmeChangeSteps.length) % programmeChangeSteps.length;
    scrollToStage(next);
    document.getElementById(`change-step-${next}`)?.focus();
  }

  return (
    <section className={styles.changeSection}>
      <div className={styles.changeTrack} ref={trackRef}>
        <div className={styles.changeSticky}>
          <div className={`container ${styles.changeCanvas}`}>
            <ChangeIntro />
            <div className={styles.changeConsole}>
              <div className={styles.changeTopbar}>
                <div>
                  <span className={styles.liveMark} aria-hidden="true" />
                  <strong>{change.programme}</strong>
                  <span>{change.field}</span>
                </div>
                <span className={styles.reviewBadge}>{change.status}</span>
              </div>

              <div
                className={styles.changeSteps}
                role="tablist"
                aria-label="Programme change journey"
                onKeyDown={onKeyDown}
              >
                {programmeChangeSteps.map((step, index) => {
                  const Icon = icons[index];
                  return (
                    <button
                      id={`change-step-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={index === active}
                      aria-controls="programme-change-detail"
                      tabIndex={index === active ? 0 : -1}
                      className={index === active ? styles.changeStepActive : styles.changeStep}
                      onClick={() => scrollToStage(index)}
                      key={step.id}
                    >
                      <span>{step.number}</span>
                      <Icon size={17} aria-hidden="true" />
                      <strong>{step.title}</strong>
                    </button>
                  );
                })}
              </div>

              <div
                className={styles.changeDetail}
                id="programme-change-detail"
                role="tabpanel"
                aria-live="polite"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.id}
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -7 }}
                    transition={{ duration: 0.24 }}
                  >
                    <span className={styles.changeDetailNumber}>{current.number}</span>
                    <h3>{current.title}</h3>
                    <p>{current.description}</p>
                    <div className={styles.changeResult}>{current.result}</div>
                  </motion.div>
                </AnimatePresence>

                <dl className={styles.changeFacts}>
                  <div><dt>Published</dt><dd>{change.oldValue}</dd></div>
                  <div><dt>Proposed</dt><dd>{change.proposedValue}</dd></div>
                  <div><dt>Effective date</dt><dd>{change.effectiveDate}</dd></div>
                  <div><dt>Affected work</dt><dd>{change.affectedCases} matters · {change.affectedReports} report</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.changeFallback}>
        <div className="container">
          <ChangeIntro />
          <dl className={`${styles.changeFacts} ${styles.changeFallbackFacts}`}>
            <div><dt>Published</dt><dd>{change.oldValue}</dd></div>
            <div><dt>Proposed</dt><dd>{change.proposedValue}</dd></div>
            <div><dt>Effective date</dt><dd>{change.effectiveDate}</dd></div>
            <div><dt>Affected work</dt><dd>{change.affectedCases} matters · {change.affectedReports} report</dd></div>
          </dl>
          <div className={styles.changeFallbackList}>
            {programmeChangeSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <article key={step.id}>
                  <div><span>{step.number}</span><Icon size={17} aria-hidden="true" /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <strong>{step.result}</strong>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

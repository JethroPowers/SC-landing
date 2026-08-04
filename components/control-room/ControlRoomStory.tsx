"use client";

import { AnimatePresence, motion } from "motion/react";
import { caseBlockers, caseStages, demoCase, programmeOptions } from "@/lib/control-room-data";
import { useScrollStage } from "@/components/scroll/useScrollStage";
import styles from "./ControlRoom.module.css";

const fields = [
  ["Household", demoCase.family],
  ["Objective", demoCase.objective],
  ["Budget", demoCase.budget],
  ["Timeline", demoCase.timeline]
];

function IntakeView() {
  return (
    <>
      <p className={styles.kicker}>First enquiry</p>
      <h3 className={styles.viewTitle}>The family details are spread across messages, files and advisor notes.</h3>
      <p className={styles.viewCopy}>
        Before routes can be compared, the advisor needs one record of the principal
        applicant, dependants, budget, target date and unanswered questions.
      </p>
      <div className={styles.fragmentGrid}>
        <div className={styles.fragment}>
          <span className={styles.fragmentLabel}>Email · Client</span>
          <p>“Two children. We would like options within twelve months.”</p>
        </div>
        <div className={styles.fragment}>
          <span className={styles.fragmentLabel}>Spreadsheet · Advisor</span>
          <p>Grenada / Dominica / St Kitts / St Lucia</p>
        </div>
        <div className={styles.fragment}>
          <span className={styles.fragmentLabel}>WhatsApp · Partner</span>
          <p>Budget may stretch to £500k. Source-of-funds detail still to follow.</p>
        </div>
      </div>
    </>
  );
}

function ModelView() {
  return (
    <>
      <p className={styles.kicker}>Programme comparison</p>
      <h3 className={styles.viewTitle}>Headline minimums become family-cost comparisons.</h3>
      <p className={styles.viewCopy}>
        Government fees, due-diligence costs, route requirements and assumptions are
        shown for the whole family before an advisor relies on the comparison.
      </p>
      <div className={styles.fieldGrid}>
        {fields.map(([label, value], index) => (
          <motion.div
            className={styles.field}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            key={label}
          >
            <span className={styles.fieldLabel}>{label}</span>
            <strong>{value}</strong>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function ControlView() {
  const blocker = caseBlockers[0];
  return (
    <>
      <p className={styles.kicker}>Submission preparation</p>
      <h3 className={styles.viewTitle}>The team can see exactly why the application cannot move.</h3>
      <p className={styles.viewCopy}>
        The source-of-funds question is assigned to an owner and linked to the
        recommendation it prevents.
      </p>
      <div className={styles.list}>
        <div className={styles.listRow}>
          <div>
            <strong>{blocker.title}</strong>
            <span className={styles.subtle}>{blocker.effect}</span>
          </div>
          <span className={styles.badge} data-tone="risk">{blocker.status}</span>
        </div>
        <div className={styles.listRow}>
          <div>
            <strong>Owner</strong>
            <span className={styles.subtle}>{blocker.owner}</span>
          </div>
          <span className={styles.badge} data-tone="warn">Next action</span>
        </div>
      </div>
    </>
  );
}

function CommunicateView() {
  return (
    <>
      <p className={styles.kicker}>Client update</p>
      <h3 className={styles.viewTitle}>Internal case notes become a clear request to the client.</h3>
      <p className={styles.viewCopy}>
        The client sees the current stage, documents required and next milestone.
        Due-diligence notes and unresolved programme assumptions stay with the advisor.
      </p>
      <div className={styles.clientPanel}>
        <span className={styles.fragmentLabel}>Client status · 27 July 2026</span>
        <h3>Programme comparison and document preparation</h3>
        <p>
          Confirm family details and complete source-of-funds review before the
          programme recommendation is finalised.
        </p>
        <span className={styles.badge} data-tone="warn">Client action required</span>
      </div>
    </>
  );
}

const views = [IntakeView, ModelView, ControlView, CommunicateView];

export function ControlRoomStory() {
  const { active, reducedMotion, scrollToStage, trackRef } = useScrollStage(
    caseStages.length
  );

  const ActiveView = views[active];
  const stage = caseStages[active];

  return (
    <section className={`${styles.story} ${styles.shell}`}>
      <div className="container">
        <div className={styles.storyIntro}>
          <h2>Follow one family matter from first enquiry to an advisor-ready case file.</h2>
          <p>
            One fictional family, four stages. Each stage answers a question the advisor
            must settle before the matter can progress.
          </p>
        </div>
        <div className={styles.storyTrack} ref={trackRef}>
          <div className={styles.storySticky}>
            <div className={styles.stageRail} role="tablist" aria-label="Case stages">
              {caseStages.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  className={`${styles.stageButton} ${active === index ? styles.stageButtonActive : ""}`}
                  onClick={() => scrollToStage(index)}
                  key={item.id}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>
            <div className={styles.caseWindow}>
              <div className={styles.windowBar}>
                <div className={styles.windowIdentity}>
                  <span className={styles.liveDot} />
                  <strong>{demoCase.title}</strong>
                  <span>{demoCase.reference}</span>
                </div>
                <span className={styles.badge} data-tone="warn">Demo data · review required</span>
              </div>
              <div className={styles.progressLine}>
                <span style={{ width: `${((active + 1) / caseStages.length) * 100}%` }} />
              </div>
              <div className={styles.caseBody}>
                <div className={styles.caseMain}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={stage.id}
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.28 }}
                    >
                      <ActiveView />
                      <div className={styles.stageOutcome}>{stage.outcome}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <aside className={styles.caseAside}>
                  <div className={styles.miniStack}>
                    <p className={styles.kicker}>Matter state</p>
                    <div className={styles.miniRow}><strong>Programmes</strong><span>{programmeOptions.length}</span></div>
                    <div className={styles.miniRow}><strong>Missing documents</strong><span>3</span></div>
                    <div className={styles.miniRow}><strong>Blockers</strong><span>1 active</span></div>
                    <div className={styles.miniRow}><strong>Owner</strong><span>{demoCase.owner}</span></div>
                    <div className={styles.miniRow}><strong>Next action</strong><span>Source-of-funds review</span></div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileStory}>
          {caseStages.map((mobileStage, index) => {
            const MobileView = views[index];
            return (
              <article className={styles.mobileStage} key={mobileStage.id}>
                <div className={styles.mobileStageHeader}>
                  <span>{mobileStage.number}</span>
                  <strong>{mobileStage.title}</strong>
                </div>
                <MobileView />
                <div className={styles.stageOutcome}>{mobileStage.outcome}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

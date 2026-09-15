"use client";

import { AnimatePresence, motion } from "motion/react";
import { matterConsequences } from "@/lib/control-room-data";
import { useScrollStage } from "@/components/scroll/useScrollStage";
import styles from "./HomeExperience.module.css";

export function ScrollConsequences() {
  const { active, reducedMotion, scrollToStage, trackRef } = useScrollStage(
    matterConsequences.length
  );
  const consequence = matterConsequences[active];

  return (
    <section className={styles.consequenceStory}>
      <div className={styles.consequenceTrack} ref={trackRef}>
        <div className={styles.consequenceSticky}>
          <div className={`container ${styles.consequenceCanvas}`}>
            <div className={styles.consequenceLead}>
              <h2>The difficult part is not finding countries. It is controlling the matter.</h2>
              <p>
                Most firms do not lose sight of a matter because they lack expertise.
                The facts are spread across programme files, email, messages,
                proposals, document folders and adviser notes.
              </p>
            </div>

            <div className={styles.consequenceFocus} aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={consequence.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.26 }}
                >
                  <span>0{active + 1}</span>
                  <h3>{consequence.problem}</h3>
                  <p>{consequence.effect}</p>
                </motion.div>
              </AnimatePresence>
              <div className={styles.maintainedRecord}>
                <strong>One maintained matter record</strong>
                <p>
                  The team sees which assumption is current, what prevents the next
                  stage, who must act and what the client needs to know.
                </p>
              </div>
            </div>

            <div className={styles.consequenceProgress} aria-label="Uncontrolled matter consequences">
              {matterConsequences.map((item, index) => (
                <button
                  type="button"
                  aria-label={`Go to ${item.problem}`}
                  aria-current={index === active ? "step" : undefined}
                  onClick={() => scrollToStage(index)}
                  key={item.id}
                >
                  <span>0{index + 1}</span>
                  <strong>{item.problem}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.consequenceFallback}>
        <div className={`container ${styles.consequenceGrid}`}>
          <div className={styles.consequenceLead}>
            <h2>The difficult part is not finding countries. It is controlling the matter.</h2>
            <p>
              Most firms do not lose sight of a matter because they lack expertise.
              The facts are spread across programme files, email, messages,
              proposals, document folders and adviser notes.
            </p>
          </div>
          <div>
            <div className={styles.consequenceRows}>
              {matterConsequences.map((item, index) => (
                <article className={styles.consequenceRow} key={item.id}>
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{item.problem}</strong>
                    <p>{item.effect}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.maintainedRecord}>
              <strong>One maintained matter record</strong>
              <p>
                The team sees which assumption is current, what prevents the next
                stage, who must act and what the client needs to know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

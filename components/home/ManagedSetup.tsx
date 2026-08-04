"use client";

import { ArrowDownRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { managedServiceStages } from "@/lib/control-room-data";
import { useScrollStage } from "@/components/scroll/useScrollStage";
import styles from "./HomeExperience.module.css";

function ManagedIntro() {
  return (
    <div className={styles.managedIntro}>
      <div>
        <h2>
          We do not hand your team an empty workspace.
        </h2>
      </div>
      <p>
        We begin with a real matter or programme set, prepare the records with
        your firm, configure the case views and agree how future changes should
        be reviewed.
      </p>
    </div>
  );
}

export function ManagedSetup() {
  const { active, reducedMotion, scrollToStage, trackRef } = useScrollStage(
    managedServiceStages.length
  );
  const current = managedServiceStages[active];

  return (
    <section className={styles.managed} aria-label="Managed setup">
      <div className={styles.managedTrack} ref={trackRef}>
        <div className={styles.managedSticky}>
          <div className={`container ${styles.managedCanvas}`}>
            <ManagedIntro />

            <div className={styles.managedFocus} aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={current.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                >
                  <span>{current.number}</span>
                  <h3>{current.title}</h3>
                  <p>{current.description}</p>
                  <div className={styles.managedEvidence}>
                    <Check size={14} aria-hidden="true" />
                    <span>{current.evidence}</span>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className={styles.managedProgress} aria-label="Managed setup stages">
              {managedServiceStages.map((stage, index) => (
                <button
                  type="button"
                  aria-current={index === active ? "step" : undefined}
                  onClick={() => scrollToStage(index)}
                  key={stage.id}
                >
                  <span>{stage.number}</span>
                  <strong>{stage.title}</strong>
                  {index < managedServiceStages.length - 1 ? (
                    <ArrowDownRight size={16} aria-hidden="true" />
                  ) : (
                    <Check size={16} aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.managedFallback}>
        <div className="container">
          <ManagedIntro />
          <div className={styles.managedSequence}>
            {managedServiceStages.map((stage, index) => (
              <article className={styles.managedStage} key={stage.id}>
                <div className={styles.managedStageTop}>
                  <span>{stage.number}</span>
                  {index < managedServiceStages.length - 1 ? (
                    <ArrowDownRight size={18} aria-hidden="true" />
                  ) : (
                    <Check size={18} aria-hidden="true" />
                  )}
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <div className={styles.managedEvidence}>
                  <Check size={14} aria-hidden="true" />
                  <span>{stage.evidence}</span>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.managedClose}>
            The software records the case and programme information. The setup and
            review work make it usable for the firm.
          </p>
        </div>
      </div>
    </section>
  );
}

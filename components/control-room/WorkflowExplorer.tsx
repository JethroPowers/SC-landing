"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { offerPaths, useCasePaths } from "@/lib/control-room-data";
import styles from "./ControlRoom.module.css";

export function WorkflowExplorer() {
  const [activeId, setActiveId] = useState(useCasePaths[0].id);
  const reducedMotion = useReducedMotion();
  const active = useCasePaths.find((item) => item.id === activeId) ?? useCasePaths[0];
  const offer = offerPaths.find((item) => item.id === active.recommendedOffer) ?? offerPaths[0];

  function select(index: number) {
    const next = useCasePaths[Math.max(0, Math.min(useCasePaths.length - 1, index))];
    setActiveId(next.id);
    document.getElementById(`firm-type-${next.id}`)?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const current = useCasePaths.findIndex((item) => item.id === activeId);
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? useCasePaths.length - 1
          : event.key === "ArrowRight"
            ? (current + 1) % useCasePaths.length
            : (current - 1 + useCasePaths.length) % useCasePaths.length;
    select(next);
  }

  return (
    <div className={styles.workflow}>
      <div
        className={styles.selector}
        role="tablist"
        aria-label="Firm type"
        onKeyDown={onKeyDown}
      >
        {useCasePaths.map((item) => (
          <button
            id={`firm-type-${item.id}`}
            type="button"
            role="tab"
            aria-selected={item.id === activeId}
            aria-controls="firm-type-panel"
            tabIndex={item.id === activeId ? 0 : -1}
            className={`${styles.selectorButton} ${item.id === activeId ? styles.selectorButtonActive : ""}`}
            onClick={() => setActiveId(item.id)}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        className={styles.workflowPanel}
        id="firm-type-panel"
        role="tabpanel"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <h2>{active.title}</h2>
            <p className="lead">{active.situation}</p>
            <div className={styles.workflowLine}>
              {active.workflow.map((step) => <div className={styles.workflowNode} key={step}>{step}</div>)}
            </div>
            <div className={styles.workflowResult}>
              <div>
                <p className={styles.kicker}>Typical blocker</p>
                <p>{active.blocker}</p>
              </div>
              <div>
                <p className={styles.kicker}>Recommended start</p>
                <h3>{offer.title}</h3>
                <p>{offer.firmOutcome}</p>
                <Link className="text-link" href={`/contact?interest=${offer.id}`}>
                  Discuss this use case <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

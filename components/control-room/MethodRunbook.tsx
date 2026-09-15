"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import { useRef } from "react";
import { workflowSteps } from "@/lib/control-room-data";
import styles from "./ControlRoom.module.css";

export function MethodRunbook() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  return (
    <div className={`container ${styles.method}`} ref={ref}>
      <aside className={styles.methodRail}>
        <p className="small">Complimentary diagnostic</p>
        <strong>From scattered matter state to adviser review</strong>
        <div className={styles.methodProgress}>
          <motion.span style={reducedMotion ? { height: "100%", width: "100%" } : { height: scrollYProgress }} />
        </div>
      </aside>
      <div className={styles.methodSteps}>
        {workflowSteps.map((step, index) => (
          <article className={styles.methodStep} key={step.id}>
            <span>0{index + 1}</span>
            <div>
              <h2>{step.title}</h2>
              <p className="lead">{step.description}</p>
              <div className={styles.methodRoles}>
                <div><strong>The firm</strong><p>{step.firmRole}</p></div>
                <div><strong>Juris Control</strong><p>{step.controlRole}</p></div>
              </div>
              <p className="output-stamp">{step.output}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

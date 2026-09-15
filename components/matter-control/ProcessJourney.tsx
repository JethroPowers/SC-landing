"use client";

import { ArrowLeft, ArrowRight, Building2, FileOutput, RefreshCw, ShieldCheck } from "lucide-react";
import { KeyboardEvent, useRef } from "react";
import type { MatterControlStep } from "@/lib/matter-control-fixture";
import styles from "./MatterControl.module.css";

type ProcessJourneyProps = {
  steps: MatterControlStep[];
  activeStep: number;
  onStepChange: (index: number) => void;
};

const detailFields = [
  {
    key: "sovereigntyControl" as const,
    label: "What Juris Control does",
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

export function ProcessJourney({ steps, activeStep, onStepChange }: ProcessJourneyProps) {
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const step = steps[activeStep];

  function moveFocus(index: number) {
    const nextIndex = (index + steps.length) % steps.length;
    onStepChange(nextIndex);
    buttons.current[nextIndex]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(index + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(index - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      moveFocus(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      moveFocus(steps.length - 1);
    }
  }

  return (
    <section className={styles.process} aria-labelledby="process-heading">
      <div className={styles.sectionHeading}>
        <div>
          <span className={styles.kicker}>The readiness process</span>
          <h2 id="process-heading">From intake to a controlled review queue.</h2>
        </div>
        <p>
          Move through all seven stages. Your selected workspace view remains in place
          while the matter record develops.
        </p>
      </div>

      <div
        className={styles.stepRail}
        role="tablist"
        aria-label="Matter-control process steps"
      >
        {steps.map((item, index) => (
          <button
            aria-controls={`process-panel-${item.id}`}
            aria-selected={activeStep === index}
            className={activeStep === index ? styles.stepActive : styles.step}
            id={`process-tab-${item.id}`}
            key={item.id}
            onClick={() => onStepChange(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            ref={(node) => {
              buttons.current[index] = node;
            }}
            role="tab"
            tabIndex={activeStep === index ? 0 : -1}
            type="button"
          >
            <span className={styles.stepNumber}>{index + 1}</span>
            <span>{item.shortTitle}</span>
          </button>
        ))}
      </div>

      <div
        aria-labelledby={`process-tab-${step.id}`}
        className={styles.processPanel}
        data-testid="process-panel"
        id={`process-panel-${step.id}`}
        role="tabpanel"
      >
        <div className={styles.processPanelIntro}>
          <span>Step {activeStep + 1} of {steps.length}</span>
          <h3>{step.title}</h3>
        </div>

        <div className={styles.processFields}>
          {detailFields.map(({ key, label, icon: Icon }) => (
            <div className={styles.processField} key={key}>
              <div className={styles.processFieldLabel}>
                <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                <span>{label}</span>
              </div>
              <p>{step[key]}</p>
            </div>
          ))}
        </div>

        <div className={styles.stepActions}>
          <button
            className={styles.stepAction}
            disabled={activeStep === 0}
            onClick={() => onStepChange(activeStep - 1)}
            type="button"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Previous step
          </button>
          <span aria-live="polite">{step.output}</span>
          <button
            className={styles.stepAction}
            disabled={activeStep === steps.length - 1}
            onClick={() => onStepChange(activeStep + 1)}
            type="button"
          >
            Next step
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

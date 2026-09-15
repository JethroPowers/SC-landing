"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Scale } from "lucide-react";
import {
  audiences,
  enquiryHref,
  workflowStages,
  type Audience,
} from "@/lib/partners";
import styles from "./Partners.module.css";

export function WorkflowExplorer() {
  const [audience, setAudience] = useState<Audience>("Advisers");
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const stage = workflowStages[active];
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = {
      ArrowDown: (index + 1) % 6,
      ArrowRight: (index + 1) % 6,
      ArrowUp: (index + 5) % 6,
      ArrowLeft: (index + 5) % 6,
      Home: 0,
      End: 5,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    setActive(keys[event.key]);
    tabs.current[keys[event.key]]?.focus();
  }
  return (
    <div className={styles.explorer}>
      <fieldset className={styles.audienceFilter}>
        <legend>Show the work from your perspective</legend>
        <div>
          {audiences.map((item) => (
            <label
              key={item}
              className={audience === item ? styles.selectedAudience : ""}
            >
              <input
                type="radio"
                name="audience"
                value={item}
                checked={audience === item}
                onChange={() => setAudience(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <div className={styles.explorerBody}>
        <div
          role="tablist"
          aria-label="Client workflow stages"
          aria-orientation="vertical"
          className={styles.stageList}
        >
          {workflowStages.map((item, index) => (
            <button
              type="button"
              key={item.id}
              role="tab"
              id={`stage-${item.id}`}
              aria-selected={active === index}
              aria-controls="workflow-panel"
              tabIndex={active === index ? 0 : -1}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKey(event, index)}
            >
              <span>0{index + 1}</span>
              <strong>{item.label}</strong>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id="workflow-panel"
          aria-labelledby={`stage-${stage.id}`}
          tabIndex={0}
          className={styles.stagePanel}
        >
          <span className={styles.kicker}>
            0{active + 1} / 06 · {audience}
          </span>
          <h3>{stage.title}</h3>
          <p className={styles.emphasis}>{stage.emphasis[audience]}</p>
          <dl className={styles.workflowDetails}>
            <div>
              <dt>The task</dt>
              <dd>{stage.task}</dd>
            </div>
            <div>
              <dt>Possible friction</dt>
              <dd>{stage.friction}</dd>
            </div>
          </dl>
          <div className={styles.outputBox}>
            <FileText size={20} aria-hidden="true" />
            <div>
              <span>A possible Juris output</span>
              <strong>{stage.output}</strong>
              <small>{stage.status}</small>
            </div>
          </div>
          <p className={styles.responsibility}>
            <Scale size={17} aria-hidden="true" />
            {stage.responsibility}
          </p>
          <Link
            href={enquiryHref("operational-workflow", stage.id)}
            className={styles.textLink}
          >
            Discuss this workflow <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      {audience === "Introducers" && (
        <div className={styles.introducerPath}>
          <strong>A lighter handover</strong>
          <ol>
            {[
              "Existing client request",
              "Scope & permission",
              "Professional accepts",
              "Handover & status",
              "Agreed referral milestone",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p>
            Illustrative coordination only. Introductions depend on a suitable
            relationship, permissions and agreed terms; tracking and commission
            protection are not implemented services.
          </p>
        </div>
      )}
      <p className={styles.caption}>
        These are candidate patterns for existing client work. An
        investor-residence route is distinct from a citizenship application;
        your firm determines the relevant process.
      </p>
    </div>
  );
}

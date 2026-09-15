import { Plus } from "lucide-react";
import styles from "./Partners.module.css";
export function ProgrammeChangeExample() {
  return (
    <details className={styles.lightDetails}>
      <summary>
        See a fictional programme-change record
        <Plus size={18} aria-hidden="true" />
      </summary>
      <div className={styles.changeExample}>
        <div>
          <span>PROPOSED / NOT EFFECTIVE</span>
          <h3>Fictional Programme C</h3>
          <p>
            A draft notice proposes changing the dependant condition.
            Publication of a proposal does not alter the approved working value.
          </p>
        </div>
        <dl>
          <div>
            <dt>Source</dt>
            <dd>Fictional Mobility Ministry draft · 29 July 2026</dd>
          </div>
          <div>
            <dt>Current approved value</dt>
            <dd>Retained pending evidence and applicability review</dd>
          </div>
          <div>
            <dt>Effective date</dt>
            <dd>Unconfirmed in this proposed example</dd>
          </div>
          <div>
            <dt>Correction history</dt>
            <dd>30 July: source title corrected; current value unchanged</dd>
          </div>
          <div>
            <dt>Professional effect</dt>
            <dd>Review required before any comparison or matter changes</dd>
          </div>
        </dl>
      </div>
    </details>
  );
}

import { CircleAlert, FileCheck2, MessageSquareText, RefreshCcw } from "lucide-react";
import { businessOutcomes } from "@/lib/control-room-data";
import styles from "./HomeExperience.module.css";

const icons = {
  blockers: CircleAlert,
  assumptions: FileCheck2,
  "client-status": MessageSquareText,
  reconstruction: RefreshCcw
};

export function OutcomeLedger() {
  return (
    <section className={styles.outcomes} aria-labelledby="outcomes-title">
      <div className="container">
        <div className={styles.outcomeHeading}>
          <h2 id="outcomes-title">What the firm can answer without rebuilding the matter.</h2>
          <p>
            Clear matter records reduce the time spent finding the current assumption,
            missing item or next responsible person.
          </p>
        </div>
        <div className={styles.outcomeLedger}>
          {businessOutcomes.map((outcome, index) => {
            const Icon = icons[outcome.id as keyof typeof icons];
            return (
              <article className={styles.outcomeRow} key={outcome.id}>
                <span className={styles.outcomeNumber}>0{index + 1}</span>
                <Icon size={19} aria-hidden="true" />
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

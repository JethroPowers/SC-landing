import {
  Clock3,
  FileWarning,
  MessageSquareText,
  RefreshCcw,
  UserRoundX
} from "lucide-react";
import { matterStallReasons } from "@/lib/control-room-data";
import styles from "./HomeExperience.module.css";

const icons = {
  "missing-information": FileWarning,
  ownership: UserRoundX,
  dependencies: Clock3,
  "adviser-decisions": MessageSquareText,
  "client-status": MessageSquareText,
  "programme-change": RefreshCcw
};

export function OutcomeLedger() {
  return (
    <section className={styles.outcomes} aria-labelledby="outcomes-title">
      <div className="container">
        <div className={styles.outcomeHeading}>
          <div>
            <span className={styles.outcomeKicker}>The operational problem</span>
            <h2 id="outcomes-title">What actually slows an active matter?</h2>
          </div>
          <p>
            Most matters do not stall because the advice is unclear. They stall because
            missing information, unresolved dependencies and next actions are not actively
            controlled.
          </p>
        </div>
        <div className={styles.outcomeLedger}>
          {matterStallReasons.map((outcome, index) => {
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

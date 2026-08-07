import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import styles from "./Diagnostic.module.css";

export const metadata: Metadata = {
  title: "Complimentary Matter Control Diagnostic",
  description:
    "One active, recent or anonymised matter reviewed over seven to ten working days, with no obligation to continue.",
  alternates: { canonical: "/diagnostic" }
};

const outputs = [
  "Current-state matter map",
  "Document-readiness register",
  "Blocker and dependency register",
  "Advisor-review questions",
  "Programme-assumption register",
  "Immediate action plan and closeout summary"
];

export default function DiagnosticPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className={styles.kicker}>Current offer</span>
            <h1>Start with one matter that is difficult to reconstruct or progress.</h1>
          </div>
          <div className={styles.introCopy}>
            <p>
              The complimentary Matter Control Diagnostic creates one controlled view
              of current status, gaps, blockers, responsibilities and next professional decisions.
            </p>
            <Link className="button button-gold" href="/contact?interest=matter-control-diagnostic">
              Discuss the diagnostic <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <dl className={`container ${styles.facts}`}>
          <div><dt>Fee</dt><dd>Complimentary</dd></div>
          <div><dt>Scope</dt><dd>One matter</dd></div>
          <div><dt>Timing</dt><dd>7-10 working days</dd></div>
          <div><dt>Commitment</dt><dd>No obligation</dd></div>
        </dl>
      </section>

      <section className={styles.outputs} aria-labelledby="diagnostic-outputs">
        <div className="container">
          <div className={styles.sectionHeading}>
            <h2 id="diagnostic-outputs">What the firm receives.</h2>
            <p>
              The diagnostic uses a pseudonymous reference and existing operational
              status. Raw passports, bank statements and source-of-wealth files are not required.
            </p>
          </div>
          <div className={styles.outputList}>
            {outputs.map((output, index) => (
              <div key={output}>
                <span>0{index + 1}</span>
                <Check size={18} aria-hidden="true" />
                <strong>{output}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.boundary}>
        <div className={`container ${styles.boundaryGrid}`}>
          <div>
            <ShieldCheck size={24} aria-hidden="true" />
            <h2>The firm keeps every professional judgement.</h2>
          </div>
          <div>
            <p>
              Sovereignty Control structures matter information and prepares review
              questions. It does not determine eligibility, approve source of funds,
              recommend a programme, submit an application or contact the firm&apos;s client,
              provider or authority.
            </p>
            <p className={styles.laterStage}>
              Any later pilot is discussed privately only after closeout evidence shows
              the method is useful. It is not a second public offer.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.close}>
        <div className={`container ${styles.closeGrid}`}>
          <div>
            <h2>See the method before discussing your matter.</h2>
            <p>Explore every stage using fictional matter SC-024.</p>
          </div>
          <Link className="button button-primary" href="/how-matter-control-works">
            Explore how it works <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

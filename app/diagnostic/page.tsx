import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import styles from "./Diagnostic.module.css";
import { juris, enquiryHref } from "@/lib/partners";
import { NextPages } from "@/components/partners/Website";

export const metadata: Metadata = {
  title: "Complimentary Matter Control Diagnostic",
  description:
    "One active, recent or anonymised matter reviewed over seven to ten working days, with no obligation to continue.",
  alternates: { canonical: "/diagnostic" },
};

const outputs = [
  "Current-state matter map",
  "Document-readiness register",
  "Blocker and dependency register",
  "Adviser Review Pack with prepared decision questions",
  "Programme-assumption register",
  "Immediate action plan and closeout summary",
];

export default function DiagnosticPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className={styles.kicker}>
              JURIS CONTROL / COMPLIMENTARY DIAGNOSTIC
            </span>
            <h1>A clearer picture of one client matter.</h1>
          </div>
          <div className={styles.introCopy}>
            <p>
              Apply the Juris Control method to one active, recent or anonymised
              matter. Reconstruct its status, gaps, blockers and
              responsibilities, then prepare the questions that need a
              professional decision.
            </p>
            <Link
              className="button button-gold"
              href={enquiryHref("operational-workflow", "diagnostic")}
            >
              Discuss the diagnostic <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <dl className={`container ${styles.facts}`}>
          <div>
            <dt>Fee</dt>
            <dd>{juris.diagnostic.fee}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>One matter</dd>
          </div>
          <div>
            <dt>Timing</dt>
            <dd>{juris.diagnostic.timing}</dd>
          </div>
          <div>
            <dt>Commitment</dt>
            <dd>{juris.diagnostic.obligation}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.outputs} aria-labelledby="diagnostic-outputs">
        <div className="container">
          <div className={styles.sectionHeading}>
            <h2 id="diagnostic-outputs">What the firm receives.</h2>
            <p>
              A reviewable record of the current status, missing information,
              accountable next steps and questions for your firm’s professional
              judgement.
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
          <details className={styles.continuationDetail}>
            <summary>Inputs and information handling</summary>
            <p>
              {" "}
              The diagnostic uses a pseudonymous reference and existing
              operational status. Raw passports, bank statements and
              source-of-wealth files are not required. Pseudonymous references
              may still be personal data; inputs, access and handling are agreed
              before intake.
            </p>
          </details>
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
              Juris Control structures matter information and prepares review
              questions. It does not determine eligibility, approve source of
              funds, recommend a programme, submit an application or contact the
              firm&apos;s client, provider or authority.
            </p>
          </div>
          <details className={styles.continuationDetail}>
            <summary>After the diagnostic: possible continuation</summary>
            <p>
              After closeout, a 30-Day Co-Managed Readiness Pilot may be
              discussed if recurring work is useful. Scope and commercial terms
              must be agreed separately. The Future Managed Readiness Desk
              remains a future possibility, not an established service.
            </p>
            <p>
              The historical pilot outline covers 30 days, five to ten named
              matters and four weekly readiness cycles, including dependency
              maintenance, review queues and closeout evidence. This is a
              starting point for a scope discussion, not a committed package or
              an agreed price. The pilot is not assumed to be paid or free.
            </p>
            <p>
              Ongoing work needs an agreed scope, cadence, named owner, limits,
              authority and commercial agreement. A future desk depends on
              useful, repeatable delivery. Professional collaboration is
              separate and does not require buying operational work.
            </p>
          </details>
        </div>
      </section>

      <section className={styles.close}>
        <div className={`container ${styles.closeGrid}`}>
          <div>
            <h2>Start with a conversation.</h2>
            <p>
              Tell us about one matter using non-confidential business context.
            </p>
          </div>
          <Link
            className="button button-primary"
            href={enquiryHref("operational-workflow", "diagnostic")}
          >
            Discuss the diagnostic <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <NextPages
        title="Choose your next step."
        pages={[
          {
            href: "/offers",
            label: "See the full engagement path",
            description:
              "The diagnostic, potential pilot, research and professional collaboration.",
          },
          {
            href: "/demo-case",
            label: "Try the worked example",
            description:
              "Explore a fictional record before discussing your firm’s matter.",
          },
          {
            href: "/how-matter-control-works",
            label: "Juris Control",
            description: "The operational method behind the diagnostic.",
          },
        ]}
      />
    </main>
  );
}

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, ClipboardCheck } from "lucide-react";
import styles from "./HomeCanonicalPath.module.css";

const readinessCycle = [
  "Observe",
  "Structure",
  "Assign",
  "Chase",
  "Escalate",
  "Prepare for review",
  "Record decision",
  "Repeat"
] as const;

const weeklySignals = [
  { value: "7", label: "Matters moved" },
  { value: "3", label: "Stalled matters" },
  { value: "11d", label: "Oldest blocker" },
  { value: "5", label: "Blockers by owner" },
  { value: "2", label: "Adviser reviews ready" },
  { value: "4", label: "Overdue chasers" },
  { value: "1", label: "Change-exposed matter" },
  { value: "2", label: "Escalations this week" }
] as const;

const supportingLinks = [
  { label: "See the method applied to JP-024", href: "/how-matter-control-works" },
  { label: "Inspect the programme-intelligence layer", href: "/intelligence" },
  { label: "Review the Complimentary Matter Control Diagnostic", href: "/diagnostic" }
] as const;

export function HomeCanonicalPath() {
  return (
    <section className={styles.section} aria-labelledby="managed-desk-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <span>Managed readiness desk</span>
            <h2 id="managed-desk-title">An operating function around your firm&apos;s judgement.</h2>
          </div>
          <p>
            Juris Control keeps each active matter moving and ready for review. The
            firm retains the client relationship, professional advice and every final decision.
          </p>
        </div>

        <div className={styles.ownershipSplit}>
          <article>
            <div className={styles.ownershipLabel}>
              <ClipboardCheck size={19} aria-hidden="true" />
              <span>Juris Control maintains</span>
            </div>
            <p>
              We keep status current, name the blocker and owner, chase dependencies and
              prepare the next adviser decision. Management sees stalled work before it
              becomes urgent.
            </p>
          </article>
          <article>
            <div className={styles.ownershipLabel}>
              <BriefcaseBusiness size={19} aria-hidden="true" />
              <span>The advisery firm decides</span>
            </div>
            <p>
              Your firm gives legal, immigration, tax and investment advice. It decides
              eligibility, evidence sufficiency, recommendations and submissions.
            </p>
          </article>
        </div>

        <div className={styles.methodBlock}>
          <div className={styles.blockHeading}>
            <div>
              <span>The Readiness Method</span>
              <h3>A recurring operating cycle, not a one-off dashboard.</h3>
            </div>
            <p>
              The record is updated after each decision. Owners know what happens next;
              management can see when progress stops.
            </p>
          </div>
          <ol className={styles.cycle} aria-label="The Readiness Method operating cycle">
            {readinessCycle.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.briefBlock}>
          <div className={styles.blockHeading}>
            <div>
              <span>Illustrative management brief</span>
              <h3>What operations can see each week.</h3>
            </div>
            <p>
              See what moved, what stalled and which decisions are ready. Ageing and
              escalation become visible before deadlines are at risk.
            </p>
          </div>
          <dl className={styles.signals}>
            {weeklySignals.map((signal) => (
              <div key={signal.label}>
                <dd>{signal.value}</dd>
                <dt>{signal.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <nav className={styles.supportingLinks} aria-label="Explore the readiness method">
          {supportingLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

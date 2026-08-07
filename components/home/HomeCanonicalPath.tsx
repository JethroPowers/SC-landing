import Link from "next/link";
import { ArrowRight, DatabaseZap, FileSearch2, Workflow } from "lucide-react";
import styles from "./HomeCanonicalPath.module.css";

const paths = [
  {
    number: "01",
    icon: Workflow,
    label: "How it works",
    title: "Follow one fictional matter from scattered status to controlled closeout.",
    description:
      "SC-024 shows reconstruction, readiness, review questions, change impact and the firm responsibility that remains at every step.",
    href: "/how-matter-control-works",
    action: "Explore SC-024"
  },
  {
    number: "02",
    icon: DatabaseZap,
    label: "Intelligence",
    title: "Keep programme information behind the matter visible and reviewable.",
    description:
      "Sources, publication state, effective dates and professional review status stay attached to the programme record before they affect live work.",
    href: "/intelligence",
    action: "View Intelligence"
  },
  {
    number: "03",
    icon: FileSearch2,
    label: "Diagnostic",
    title: "Start with one active, recent or anonymised matter.",
    description:
      "The complimentary diagnostic runs for seven to ten working days, creates a controlled matter view and carries no obligation to continue.",
    href: "/diagnostic",
    action: "Review the diagnostic"
  }
] as const;

export function HomeCanonicalPath() {
  return (
    <section className={styles.section} aria-labelledby="canonical-path-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <span>One operating story</span>
            <h2 id="canonical-path-title">Matter readiness, supported by controlled intelligence.</h2>
          </div>
          <p>
            Sovereignty Control prepares the operational record. The firm retains the
            client relationship, professional judgement and every final decision.
          </p>
        </div>

        <div className={styles.paths}>
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <article className={styles.path} key={path.number}>
                <div className={styles.identity}>
                  <span>{path.number}</span>
                  <Icon size={20} aria-hidden="true" />
                  <strong>{path.label}</strong>
                </div>
                <div className={styles.copy}>
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                </div>
                <Link className={styles.link} href={path.href}>
                  {path.action} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

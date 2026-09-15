import type { Metadata } from "next";
import { footerDisclaimer } from "@/lib/site-data";
import { PageIntro, NextPages } from "@/components/partners/Website";
import styles from "@/components/partners/Website.module.css";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Juris Control supports matter readiness and programme information, not professional advice.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow="DISCLAIMER"
        title="Clear professional responsibilities."
      >
        <p>{footerDisclaimer}</p>
      </PageIntro>

      <section className="section section-surface">
        <div className="container split-even">
          <article className="card">
            <h2>Professional review</h2>
            <p className="muted">
              Programme data, costs, timelines, requirements and assumptions
              should be reviewed by qualified professionals before being relied
              upon in client work.
            </p>
          </article>
          <article className="card">
            <h2>Advice boundaries</h2>
            <p className="muted">
              Juris Control does not provide legal, tax, immigration, investment
              or regulated financial advice and does not replace a professional
              firm's judgement.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2>Illustrative work and agreed services.</h2>
          <p>
            The early-stage Juris Control method supports firms that already
            provide or coordinate professional advice. The displayed matter and
            programme registers are fictional examples. Live work requires a
            separately agreed scope and appropriate authority.
          </p>
        </div>
      </section>
      <NextPages
        pages={[
          {
            href: "/how-matter-control-works",
            label: "The operational method",
            description:
              "See how the fictional record separates preparation from professional review.",
          },
          {
            href: "/offers",
            label: "Working together",
            description:
              "The scope, agreement and acceptance of a piece of work.",
          },
          {
            href: "/privacy",
            label: "Enquiry privacy",
            description:
              "Business contact information and the boundary around client data.",
          },
        ]}
      />
    </main>
  );
}

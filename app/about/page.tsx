import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { juris } from "@/lib/partners";
import styles from "@/components/partners/Partners.module.css";
import { PageIntro, NextPages } from "@/components/partners/Website";
export const metadata: Metadata = {
  title: "About the founders",
  description:
    "Jethro and Alberto connect programme knowledge, product architecture and professional collaboration through Juris.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow="ABOUT JURIS PARTNERS"
        title={
          <>
            The people behind Juris.
          </>
        }
      >
        <p>
          Juris is a global mobility intelligence platform. Juris Partners brings its
          professional relationships and operational work together: the Juris
          Adviser Network for independent expertise, and Juris Control for
          separately scoped support with existing client work.
        </p>
        <a className={styles.textLink} href={juris.publicUrl}>
          Explore the public Juris platform
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </PageIntro>
      <section className={styles.founderSection}>
        <div className={`container ${styles.founderGrid}`}>
          <div>
            <span className={styles.kicker}>THE CO-FOUNDERS</span>
            <h2>
              Jethro and Alberto.
            </h2>
          </div>
          <div className={styles.founderNames}>
            <div>
              <strong>Jethro</strong>
              <span>Co-founder</span>
              <p>
                Product, architecture and commercial systems: shaping the
                records, tools and delivery structures that support the work.
              </p>
            </div>
            <div>
              <strong>Alberto</strong>
              <span>Co-founder</span>
              <p>
                Domain knowledge, programme interpretation, content and
                professional relationships: connecting programme understanding
                with the people doing the work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.workingSection}>
        <div className={`container ${styles.sectionHeading}`}>
          <div>
            <span className={styles.kicker}>RESPONSIBILITY STAYS VISIBLE</span>
            <h2>The firm keeps every professional decision.</h2>
          </div>
          <div>
            <p>
              Juris structures information and prepares agreed work. Qualified
              professionals retain advice, eligibility and suitability
              decisions, evidence sufficiency, communication approval and
              submissions.
            </p>
            <p>
              Public programme content can inform research. Work on family
              context, comparisons, fee assumptions, documents, dependencies,
              internal notes, client-update drafts and change impact requires
              the appropriate review and agreed scope.
            </p>
            <p>
              Juris Control is an operational method being validated. The
              website demonstrates a fictional working record; it does not
              establish a scaled service or autonomous software capability.
            </p>
            <Link
              className={styles.textLink}
              href="/how-matter-control-works#workspace"
            >
              Inspect the detailed working record
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.contactSection}>
        <div className="container">
          <h2>Start a conversation with the founders.</h2>
          <p>
            Tell us about your firm, the expertise you would like to contribute
            or the client work that needs support.
          </p>
          <Link className={styles.primaryButton} href="/contact">
            {juris.primaryCta}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <NextPages
        pages={[
          {
            href: "/what-we-do",
            label: "What Juris does",
            description:
              "How adviser relationships, operational support and programme research fit together.",
          },
          {
            href: "/advisers",
            label: "The adviser relationship",
            description:
              "What it means to participate, what you can contribute and how to register interest.",
          },
          {
            href: "/how-matter-control-works",
            label: "The operational method",
            description:
              "Inspect the records and review boundaries behind the simulated matter.",
          },
        ]}
      />
    </main>
  );
}

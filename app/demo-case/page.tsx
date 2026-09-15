import type { Metadata } from "next";
import { WorkedExample } from "@/components/partners/WorkedExample";
import styles from "@/components/partners/Partners.module.css";
import { PageIntro, NextPages } from "@/components/partners/Website";
import webStyles from "@/components/partners/Website.module.css";
export const metadata: Metadata = {
  title: "A worked matter example",
  description:
    "Explore simulated matter JP-024: before and after, missing evidence, accountable next actions and a client-update draft.",
  alternates: { canonical: "/demo-case" },
};
export default function DemoCasePage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow="JURIS CONTROL · SIMULATED EXAMPLE"
        title="One matter. A clearer next step."
      >
        <p>
          An existing enquiry becomes a matter map, then a visible set of
          dependencies and questions for the firm. All actions below stay inside
          this fictional example.
        </p>
        <p>
          Compare the scattered and structured records, assign a follow-up owner
          and prepare an example client update. The evidence gaps and
          professional questions stay open.
        </p>
      </PageIntro>
      <section className={webStyles.section}>
        <div className="container">
          <WorkedExample />
        </div>
      </section>
      <NextPages
        title="Take the example further."
        pages={[
          {
            href: "/how-matter-control-works#workspace",
            label: "Inspect the detailed record",
            description:
              "Matter, readiness, professional review, change impact and closeout views.",
          },
          {
            href: "/use-cases#workflows",
            label: "Find your workflow",
            description:
              "See how the task and output differ for introducers, advisers and delivery teams.",
          },
          {
            href: "/diagnostic",
            label: "Start with one matter",
            description:
              "Explore the complimentary diagnostic and agree its inputs before intake.",
          },
        ]}
      />
    </main>
  );
}

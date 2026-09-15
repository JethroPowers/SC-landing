import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { juris } from "@/lib/partners";
import { isEnquiryConfigured } from "@/lib/enquiry-server";
import styles from "@/components/partners/Partners.module.css";

export const metadata: Metadata = {
  title: "Discuss your firm’s needs",
  description: juris.description,
  alternates: { canonical: "/contact" },
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string; stage?: string }>;
}) {
  const { interest, stage } = await searchParams;
  const isDiagnostic =
    interest === "matter-control-diagnostic" ||
    (interest === "operational-workflow" && stage === "diagnostic");
  return (
    <main className={styles.page}>
      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          <div>
            <span className={styles.kicker}>A CONVERSATION WITH JURIS</span>
            <h1 style={{ fontSize: "clamp(2.8rem,4.5vw,4.2rem)" }}>
              {isDiagnostic ? "Discuss the diagnostic." : "Talk to Juris."}
            </h1>
            <p>
              {isDiagnostic
                ? "Tell us what makes a current or recent matter difficult to reconstruct. Start with a non-confidential description; client documents are not needed here."
                : "Tell us about your firm and the work or relationship you want to discuss. A founder will review your enquiry and discuss the appropriate next step."}
            </p>
            <p className={styles.caption}>
              {isDiagnostic
                ? "One matter · Complimentary · 7–10 working days · No obligation to continue."
                : "Submitting an enquiry does not create a membership or service commitment."}
            </p>
          </div>
          <div id="enquiry">
            <span id="request-demo-form" />
            <ContactForm
              initialInterest={interest}
              initialStage={stage}
              configured={isEnquiryConfigured()}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

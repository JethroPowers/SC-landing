import type { Metadata } from "next";
import {
  PageIntro,
  ConversationCta,
  NextPages,
} from "@/components/partners/Website";
import styles from "@/components/partners/Website.module.css";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy information for Juris Partners professional-firm enquiries.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <PageIntro eyebrow="PRIVACY" title="Your professional enquiry.">
        <p>
          The enquiry form collects business contact details and your selected
          professional interest. Do not submit client-identifiable information
          or matter data through the enquiry form.
        </p>
      </PageIntro>

      <section className="section section-surface">
        <div className="container split">
          <div>
            <p className="eyebrow">Data submitted</p>
            <h2>What the form collects.</h2>
          </div>
          <div className="stack">
            <p className="lead">
              The form requires a name, business email, firm name and main
              interest. Business website, role, jurisdictions served and a
              non-confidential description are optional. Workflow enquiries may
              include the selected workflow stage and an optional approximate
              active-matter range.
            </p>
            <p>
              Adviser-network interest uses the same business enquiry process.
              Service type and a relevant professional-register or credential
              link are optional. These details support a conversation about
              mutual fit; submission does not establish professional status or
              authorise public profile publication.
            </p>
            <p className="muted">
              Diagnostic enquiries should not include client names, passports,
              addresses, source-of-funds records, legal advice, tax advice or
              other sensitive client-identifiable information.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-even">
          <article className="card">
            <h2>Use of information</h2>
            <p className="muted">
              Submitted information is used to review the enquiry, decide a
              suitable next step and respond to the professional firm.
            </p>
          </article>
          <article className="card">
            <h2>Enquiry storage</h2>
            <p className="muted">
              Successfully received enquiries are stored for review and a
              response to your request. If delivery cannot be confirmed, the
              form shows an error and keeps your entries available. It does not
              treat an unconfirmed submission as a received enquiry.
            </p>
          </article>
        </div>
      </section>

      <ConversationCta title="Need to discuss a sensitive client matter?">
        Use the form for high-level details only. Sensitive matter details
        should be handled through an agreed private process.
      </ConversationCta>
      <NextPages
        pages={[
          {
            href: "/disclaimer",
            label: "Professional boundaries",
            description:
              "Programme information, advice and the firm’s responsibilities.",
          },
          {
            href: "/diagnostic",
            label: "Diagnostic inputs",
            description:
              "The minimum operational status needed for the one-matter review.",
          },
          {
            href: "/contact",
            label: "Professional enquiry",
            description:
              "Discuss your firm’s needs using non-confidential business context.",
          },
        ]}
      />
    </main>
  );
}

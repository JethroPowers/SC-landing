import type { Metadata } from "next";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request Demo",
  description: "Request a private demonstration using an anonymised matter or the programme-data problem your firm needs to solve.",
  alternates: { canonical: "/contact" }
};

export default async function ContactPage({
  searchParams
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;

  return (
    <main>
      <section className="contact-intro">
        <div className="container contact-intro-grid">
          <div>
            <h1>Tell us which case or programme-data problem your firm needs to fix.</h1>
            <p>
              Tell us whether the issue is family pricing, programme information,
              application documents, stalled matters or client status. Do not name a client.
            </p>
          </div>
          <div className="contact-note">
            <ShieldAlert size={19} aria-hidden="true" />
            <p>Do not submit client-identifiable information through this form.</p>
          </div>
        </div>
      </section>
      <section className="contact-body" id="request-demo-form">
        <div className="container contact-grid">
          <aside>
            <h2>What the first discussion covers.</h2>
            {[
              "The matter or programme-data problem causing the most rework.",
              "Where applicant details, documents, fees and status currently live.",
              "Which sprint or workspace path is proportionate.",
              "Which programme facts and recommendations require professional review."
            ].map((item) => (
              <div className="contact-agenda-line" key={item}><CheckCircle2 size={17} />{item}</div>
            ))}
          </aside>
          <ContactForm initialInterest={interest} />
        </div>
      </section>
    </main>
  );
}

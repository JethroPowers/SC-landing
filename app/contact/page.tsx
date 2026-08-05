import type { Metadata } from "next";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Discuss the Complimentary Diagnostic",
  description: "Discuss whether one active, recent or anonymised matter is suitable for the complimentary matter-control diagnostic.",
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
            <h1>Discuss one matter that would benefit from clearer operational control.</h1>
            <p>
              The complimentary diagnostic covers one active, recent or anonymised
              matter over seven to ten working days. There is no obligation to continue.
              Do not name a client or submit matter data through this form.
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
              "Whether one matter is suitable for a controlled diagnostic.",
              "Where status, missing items, blockers and dependencies currently live.",
              "The pseudonymous intake and data-handling boundary.",
              "Which questions and programme assumptions remain with the firm's advisor."
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

import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
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
    <main className="contact-page">
      <section className="contact-intro contact-conversion">
        <div className="container contact-intro-grid">
          <div className="contact-conversion-copy">
            <h1>Discuss one matter that would benefit from clearer operational control.</h1>
            <p>
              The complimentary diagnostic covers one active, recent or anonymised
              matter over seven to ten working days. There is no obligation to continue.
            </p>
          </div>
          <div className="contact-conversion-form" id="request-demo-form">
            <ContactForm initialInterest={interest} />
          </div>
          <div className="contact-agenda">
            {[
              "Whether one matter is suitable for the diagnostic.",
              "Where status, blockers and dependencies currently live.",
              "Which professional decisions remain with the firm."
            ].map((item) => (
              <div className="contact-agenda-line" key={item}>
                <CheckCircle2 size={17} aria-hidden="true" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

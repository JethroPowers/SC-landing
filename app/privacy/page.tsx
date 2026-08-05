import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PolicyHeroVisual } from "@/components/HeroVisuals";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy information for Sovereignty Control diagnostic discussions and professional-firm enquiries.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <main>
      <Hero
        title="Privacy for high-level firm enquiries, not client matter intake."
        subtitle="Sovereignty Control collects only the information needed to understand whether a complimentary diagnostic is relevant to your firm. Do not submit client-identifiable information or matter data through the enquiry form."
        variant="plain"
        primaryLabel="Discuss a complimentary diagnostic"
        primaryHref="/contact"
      >
        <PolicyHeroVisual type="privacy" />
      </Hero>

      <section className="section section-surface">
        <div className="container split">
          <div>
            <p className="eyebrow">Data submitted</p>
            <h2>What the form collects.</h2>
          </div>
          <div className="stack">
            <p className="lead">
              The request form asks for contact details, firm type, website,
              role, active case volume, relevant programmes or relocation routes
              and a short message about the case or programme-data problem.
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
            <h3>Use of information</h3>
            <p className="muted">
              Submitted information is used to review the enquiry, decide a
              suitable diagnostic path and respond to the professional firm.
            </p>
          </article>
          <article className="card">
            <h3>Storage and retention</h3>
            <p className="muted">
              Enquiry data should be stored only in the configured production
              contact records and retained only for as long as it is needed to review,
              respond to and administer the professional-firm enquiry.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Need to discuss a sensitive client matter?"
        description="Use the form for high-level details only. Sensitive matter details should be handled through an agreed private process."
      />
    </main>
  );
}

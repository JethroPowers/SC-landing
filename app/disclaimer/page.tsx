import type { Metadata } from "next";
import { footerDisclaimer } from "@/lib/site-data";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PolicyHeroVisual } from "@/components/HeroVisuals";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Sovereignty Control supports matter readiness and programme information, not professional advice.",
  alternates: { canonical: "/disclaimer" }
};

export default function DisclaimerPage() {
  return (
    <main>
      <Hero
        title="Matter-readiness support and programme information, not professional advice."
        subtitle={footerDisclaimer}
        variant="plain"
        primaryLabel="Discuss a complimentary diagnostic"
        primaryHref="/contact"
      >
        <PolicyHeroVisual type="disclaimer" />
      </Hero>

      <section className="section section-surface">
        <div className="container split-even">
          <article className="card">
            <h3>Professional review</h3>
            <p className="muted">
              Programme data, costs, timelines, requirements and assumptions
              should be reviewed by qualified professionals before being relied
              upon in client work.
            </p>
          </article>
          <article className="card">
            <h3>Advice boundaries</h3>
            <p className="muted">
              Sovereignty Control does not provide legal, tax, immigration,
              investment or regulated financial advice and does not replace a
              professional firm's judgment.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Review the matter-control method with clear advice boundaries."
        description="The early-stage method supports firms that already provide or coordinate professional advice."
      />
    </main>
  );
}

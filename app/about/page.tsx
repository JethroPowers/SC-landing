import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "A founder-led case-management and programme-data product for citizenship, residence and relocation firms.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-masthead">
        <div className="container about-masthead-grid">
          <span>Sovereignty Control</span>
          <h1>Built for advisors handling complex families, programme rules and application files.</h1>
        </div>
      </section>
      <section className="founder-note">
        <div className="container founder-note-grid">
          <aside>
            <strong>Jethro Powers</strong>
            <span>Founder and product builder</span>
          </aside>
          <article>
            <p className="founder-lead">
              Sovereignty Control is built by Jethro Powers as part of the Sovereignty
              intelligence project.
            </p>
            <p>
              The project began as a database of citizenship and residence programmes.
              It is now being developed into case-management software for firms handling
              programme comparisons, relocation plans and application preparation.
            </p>
            <p>
              Jethro builds software for businesses where staff must coordinate detailed
              client work. Sovereignty Control focuses on programme routes, family costs,
              application documents, due-diligence questions, deadlines and client updates.
            </p>
            <blockquote>
              “The product is designed to support advisors, not replace them. Professional
              firms remain responsible for regulated advice and the judgement applied to
              each matter.”
            </blockquote>
            <p>
              This is a focused early product being developed around real case work.
              It does not claim institutional scale, regulatory standing or advisory authority.
            </p>
            <Link className="button button-primary" href="/contact">Speak with the founder <ArrowRight size={17} /></Link>
          </article>
        </div>
      </section>
      <section className="build-principles">
        <div className="container">
          <div className="build-principles-heading">
            <h2>How we handle programme and case information.</h2>
            <p>The product is being built around the way specialist advisors prepare comparisons, collect documents and move matters towards submission.</p>
          </div>
          <div className="build-principles-list">
            <article><span>01</span><h3>Make uncertainty visible.</h3><p>Proposed, confirmed and review-required information should never look identical.</p></article>
            <article><span>02</span><h3>Keep professional ownership clear.</h3><p>The product records evidence, status and responsibilities while qualified firms retain advice and judgement.</p></article>
            <article><span>03</span><h3>Build from real matters.</h3><p>Case fields and document lists are checked against real work before they are used across the team.</p></article>
          </div>
        </div>
      </section>
      <section className="current-build">
        <div className="container current-build-grid">
          <div><h2>From programme database to case-management software.</h2></div>
          <div>
            <p>The current build concentrates on the parts of cross-border matters that generic case tools handle poorly:</p>
            <ul>
              <li>Route-level programme and pricing records</li>
              <li>Family-adjusted scenario assumptions</li>
              <li>Document readiness and blocker consequences</li>
              <li>Programme-change impact on active work</li>
              <li>Separate advisor notes and client status views</li>
            </ul>
            <Link className="text-link" href="/control-system">Inspect the case views <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

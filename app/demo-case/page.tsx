import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GuidedDemoCase = dynamic(() =>
  import("@/components/control-room/GuidedDemoCase").then((module) => module.GuidedDemoCase)
);

export const metadata: Metadata = {
  title: "Demo Case",
  description: "A fictional British family comparing four Caribbean citizenship programmes, including costs, documents and advisor review points.",
  alternates: { canonical: "/demo-case" }
};

export default function DemoCasePage() {
  return (
    <main className="demo-page">
      <section className="demo-intro">
        <div className="container demo-intro-grid">
          <div>
            <h1>A British family comparing four Caribbean citizenship programmes.</h1>
          </div>
          <div>
            <p>
              Follow the principal applicant, spouse and two children through programme
              routes, indicative family costs, dependant questions, source-of-funds
              review, application documents and the next client request.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <GuidedDemoCase />
      </section>
      <section className="demo-operating-change">
        <div className="container demo-change-grid">
          <div>
            <h2>The method does not recommend a programme. It shows what the advisor must check first.</h2>
          </div>
          <div className="demo-change-rows">
            <div><span>Uncertain household detail</span><strong>Children’s exact ages become a named client action.</strong></div>
            <div><span>Indicative route cost</span><strong>The estimate carries its family assumptions and review requirement.</strong></div>
            <div><span>Missing evidence</span><strong>Source-of-funds review becomes a blocker with an owner and consequence.</strong></div>
            <div><span>Draft fee event</span><strong>Affected cases and reports are flagged before client figures change.</strong></div>
          </div>
        </div>
      </section>
      <section className="dual-output">
        <div className="container dual-output-grid">
          <div className="dual-output-intro">
            <h2>The advisor and the client need different views of the same matter.</h2>
            <p>Due-diligence notes and programme risks stay with the professional team. The client receives a clear request and next milestone.</p>
          </div>
          <article>
            <span>Advisor view</span>
            <h3>What requires judgement</h3>
            <ul>
              <li>Family eligibility and fee assumptions</li>
              <li>Source-of-funds review notes</li>
              <li>Programme risk and pending changes</li>
              <li>Recommendation dependencies</li>
            </ul>
          </article>
          <article>
            <span>Client view</span>
            <h3>What happens next</h3>
            <ul>
              <li>Current case stage</li>
              <li>Documents or information required</li>
              <li>Action owner</li>
              <li>Expected next milestone</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="demo-close">
        <div className="container home-demo-grid">
          <div><h2>Use an anonymised matter in a private demonstration.</h2><p>Tell us the family profile, routes and case stage without naming the client.</p></div>
          <Link className="button button-primary" href="/contact?interest=matter-control-diagnostic">Discuss a complimentary matter-control diagnostic <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

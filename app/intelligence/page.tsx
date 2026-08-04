import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileSearch, GitPullRequestDraft, RadioTower } from "lucide-react";

const IntelligenceRegister = dynamic(() =>
  import("@/components/control-room/IntelligenceRegister").then((module) => module.IntelligenceRegister)
);

export const metadata: Metadata = {
  title: "Intelligence",
  description: "Programme routes, government fees, dependant rules, sources, effective dates and advisor review states.",
  alternates: { canonical: "/intelligence" }
};

export default function IntelligencePage() {
  return (
    <main className="intelligence-page">
      <section className="intelligence-intro">
        <div className="container intelligence-intro-grid">
          <h1>Know which programme fee, dependant rule and requirement your advisors are using.</h1>
          <div>
            <p>
              Intelligence records programme routes, government fees, dependant rules,
              physical-presence requirements, processing ranges, official sources and
              effective dates. Draft changes stay separate until an advisor reviews them.
            </p>
            <p className="small">The register below uses fictional demonstration records.</p>
          </div>
        </div>
      </section>
      <section className="container">
        <IntelligenceRegister />
      </section>
      <section className="intelligence-principles">
        <div className="container principles-grid">
          <div>
            <span>01</span>
            <h2>Record each qualifying route separately.</h2>
            <p>Contribution, property, bonds, funds, business and deposit routes remain separate so family assumptions can be reviewed properly.</p>
          </div>
          <div>
            <span>02</span>
            <h2>Keep announcements separate from approved figures.</h2>
            <p>A proposed value moves through source review and professional approval before it is allowed into client-facing calculations.</p>
          </div>
          <div>
            <span>03</span>
            <h2>Show which client work needs checking.</h2>
            <p>Every material update should show the old value, new value, source, effective date, reviewer and affected cases or reports.</p>
          </div>
        </div>
      </section>
      <section className="release-lifecycle">
        <div className="container release-lifecycle-grid">
          <div className="release-lifecycle-copy">
            <h2>A new fee notice must be checked before it reaches a client comparison.</h2>
            <p>
              The team needs the issuing authority, source link, effective date and
              reviewer. It also needs to know which proposals, family-cost comparisons
              and active matters still contain the previous figure.
            </p>
          </div>
          <ol className="release-steps">
            <li><FileSearch size={18} /><div><strong>Source captured</strong><span>Issuing authority, URL, retrieval date and source note</span></div></li>
            <li><GitPullRequestDraft size={18} /><div><strong>Draft record</strong><span>Old and proposed values remain visibly separate</span></div></li>
            <li><CheckCircle2 size={18} /><div><strong>Professional review</strong><span>Confidence, limitations and effective date are checked</span></div></li>
            <li><RadioTower size={18} /><div><strong>Approved programme record</strong><span>Affected matters, comparisons and reports are listed for review</span></div></li>
          </ol>
        </div>
      </section>
      <section className="source-standard">
        <div className="container source-standard-grid">
          <div>
            <h2>What must sit behind a programme fee or eligibility claim.</h2>
            <p>
              Advisors must be able to distinguish an effective programme rule from a
              proposed announcement, a working assumption or an item still waiting for an
              official source.
            </p>
          </div>
          <dl>
            <div><dt>Claim</dt><dd>Family contribution for four applicants</dd></div>
            <div><dt>State</dt><dd><span className="inline-status warning">Pending review</span></dd></div>
            <div><dt>Authority</dt><dd>Issuing authority notice</dd></div>
            <div><dt>Effective date</dt><dd>Not confirmed</dd></div>
            <div><dt>Reviewer</dt><dd>Programme Data Review</dd></div>
            <div><dt>Downstream impact</dt><dd>2 cases · 1 advisor report</dd></div>
          </dl>
        </div>
      </section>
      <section className="home-demo-cta">
        <div className="container home-demo-grid">
          <div><h2>See what happens when a programme fee changes during a live matter.</h2><p>The demo holds the new figure for advisor review and identifies the affected case and report.</p></div>
          <Link className="button button-primary" href="/demo-case">View demo case <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

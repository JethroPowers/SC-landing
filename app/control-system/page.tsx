import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, CircleSlash, FileCheck2, GitBranch, MessageSquareText, ShieldCheck, UsersRound } from "lucide-react";

const ControlConsole = dynamic(() =>
  import("@/components/control-room/ControlConsole").then((module) => module.ControlConsole)
);

export const metadata: Metadata = {
  title: "Case Control",
  description: "See applicants, programme routes, family costs, documents, due diligence, deadlines and client status in one matter.",
  alternates: { canonical: "/control-system" }
};

const boundaries = [
  "Does not replace your CRM",
  "Does not provide legal, tax, immigration or investment advice",
  "Does not turn proposed programme changes into confirmed facts",
  "Does not replace professional judgement"
];

const linkedViews = [
  {
    icon: UsersRound,
    view: "Case",
    question: "Who is applying and what do they need?",
    record: "Principal applicant, dependants, objective, budget, target date and advisor"
  },
  {
    icon: GitBranch,
    view: "Scenario",
    question: "Which programme routes are under consideration?",
    record: "Investment route, government fees, family costs and assumptions requiring review"
  },
  {
    icon: FileCheck2,
    view: "Documents",
    question: "Which documents prevent submission?",
    record: "Requirements by applicant, expiry date, review status and missing evidence"
  },
  {
    icon: ShieldCheck,
    view: "Change impact",
    question: "Which quote or comparison may use an old figure?",
    record: "Old fee, proposed fee, source, effective date and affected matters"
  },
  {
    icon: MessageSquareText,
    view: "Client view",
    question: "What must the client provide next?",
    record: "Current stage, requested item, responsible person and next case milestone"
  }
];

export default function ControlSystemPage() {
  return (
    <main className="console-page">
      <section className="console-page-intro">
        <div className="container console-intro-grid">
          <div>
            <h1>See everything required to move a client matter towards submission.</h1>
          </div>
          <div>
            <p>
              Review the family, programme routes, indicative costs, application
              documents, programme updates and client status without rebuilding the
              matter from email and spreadsheets.
            </p>
            <p className="small">The fictional example uses a British family comparing four Caribbean citizenship programmes.</p>
          </div>
        </div>
      </section>
      <section className="container">
        <ControlConsole />
      </section>
      <section className="control-linked-views">
        <div className="container">
          <div className="control-linked-heading">
            <h2>Five case views using the same applicant and programme information.</h2>
            <p>
              If source-of-funds evidence is incomplete, the effect should be visible in
              the case stage, programme recommendation, document list, advisor report
              and client request.
            </p>
          </div>
          <div className="control-linked-table">
            {linkedViews.map((item) => {
              const Icon = item.icon;
              return (
                <div className="control-linked-row" key={item.view}>
                  <div><Icon size={18} aria-hidden="true" /><strong>{item.view}</strong></div>
                  <p>{item.question}</p>
                  <span>{item.record}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="control-decision">
        <div className="container control-decision-grid">
          <div>
            <h2>Every missing item should show what it prevents and who must act.</h2>
          </div>
          <div className="decision-sequence">
            <div><span>01</span><strong>Evidence incomplete</strong><p>Police certificates and professional references remain missing.</p></div>
            <div><span>02</span><strong>Recommendation blocked</strong><p>The advisor cannot finalise the route until source-of-funds review is complete.</p></div>
            <div><span>03</span><strong>Owner and message set</strong><p>The advisor receives the review task. The client receives a clear request and next milestone.</p></div>
          </div>
        </div>
      </section>
      <section className="boundary-editorial">
        <div className="container boundary-editorial-grid">
          <h2>Built for programme and application work that a generic CRM does not understand.</h2>
          <div>
            <p>
              A CRM can hold the client record and correspondence. Sovereignty Control
              deals with the specialist matter details: applicants, dependant rules,
              investment routes, government fees, due diligence, application documents
              and the effect of a programme change on an active comparison.
            </p>
            {boundaries.map((item) => (
              <div className="boundary-line" key={item}><CircleSlash size={17} aria-hidden="true" />{item}</div>
            ))}
            <Link className="text-link" href="/demo-case">Walk through the full case <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

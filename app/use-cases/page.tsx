import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleAlert, FileCheck2, GitBranch, MessageSquareText } from "lucide-react";
import { WorkflowExplorer } from "@/components/control-room/WorkflowExplorer";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "Use cases for CBI/RBI advisors, UAE relocation firms, Caribbean authorised agents and private-client practices.",
  alternates: { canonical: "/use-cases" }
};

export default function UseCasesPage() {
  return (
    <main>
      <section className="use-case-intro">
        <div className="container">
          <h1>Case management for firms handling citizenship, residence and relocation matters.</h1>
          <p>
            Select the firm type to see the usual case sequence, common delay and most
            practical way to start.
          </p>
        </div>
      </section>
      <section className="use-case-explorer">
        <div className="container"><WorkflowExplorer /></div>
      </section>
      <section className="shared-control-pattern">
        <div className="container shared-pattern-grid">
          <div>
            <h2>The programme changes. The same case questions still need answers.</h2>
            <p>
              Whether the matter concerns Caribbean citizenship, a UAE founder move or a
              private-client relocation, the team still needs to know the sequence,
              required evidence, current blocker and next client request.
            </p>
          </div>
          <div className="shared-pattern-list">
            <div><GitBranch size={18} /><strong>Which sequence applies?</strong><span>Programme route or relocation dependency map</span></div>
            <div><FileCheck2 size={18} /><strong>What is ready?</strong><span>Documents and evidence by person and workstream</span></div>
            <div><CircleAlert size={18} /><strong>What is blocked?</strong><span>Blocking item, consequence, owner and required action</span></div>
            <div><MessageSquareText size={18} /><strong>What should be communicated?</strong><span>Internal review state separated from client status</span></div>
          </div>
        </div>
      </section>
      <section className="use-case-start">
        <div className="container use-case-start-grid">
          <h2>What changes after the first Case Control Sprint.</h2>
          <div className="before-after-rows">
            <div><span>Before</span><p>Staff reconstruct the matter from messages, files and memory.</p><strong>After</strong><p>One case map shows the household, route, readiness and next action.</p></div>
            <div><span>Before</span><p>Family pricing is rebuilt from headline figures and old proposal tables.</p><strong>After</strong><p>Route-level costs carry visible assumptions and review states.</p></div>
            <div><span>Before</span><p>The client asks for progress because the case sequence is not visible.</p><strong>After</strong><p>The client status shows the current stage, requested action and next milestone.</p></div>
          </div>
          <Link className="text-link" href="/offers#case-control">See price, timing and deliverables <ArrowRight size={15} /></Link>
        </div>
      </section>
      <section className="use-case-note">
        <div className="container editorial-grid">
          <div className="editorial-title"><h2>The firm remains responsible for every professional recommendation.</h2></div>
          <div className="editorial-copy"><p>Immigration, tax, legal and investment advice remains with qualified professionals. Sovereignty Control records the case facts, documents, review points, responsibilities and client status around that advice.</p></div>
        </div>
      </section>
    </main>
  );
}

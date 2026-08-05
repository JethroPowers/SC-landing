import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MethodRunbook } from "@/components/control-room/MethodRunbook";

export const metadata: Metadata = {
  title: "Method",
  description: "How one active, recent or anonymised matter becomes a controlled, advisor-review-ready record.",
  alternates: { canonical: "/method" }
};

export default function MethodPage() {
  return (
    <main>
      <section className="method-intro">
        <div className="container">
          <h1>How one matter becomes ready for controlled advisor review.</h1>
          <p>We reconstruct the existing operational state, then prepare the matter map, readiness register, blockers, dependencies, owners and review questions.</p>
        </div>
      </section>
      <section className="method-runbook">
        <MethodRunbook />
      </section>
      <section className="demo-close">
        <div className="container home-demo-grid">
          <div><h2>Start with the matter that causes the most chasing or rework.</h2><p>One active, recent or anonymised matter is enough for the complimentary diagnostic.</p></div>
          <Link className="button button-primary" href="/contact?interest=matter-control-diagnostic">Discuss a complimentary matter-control diagnostic <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MethodRunbook } from "@/components/control-room/MethodRunbook";

export const metadata: Metadata = {
  title: "Method",
  description: "How a Case Control Sprint turns one anonymised matter into an advisor-reviewed case file.",
  alternates: { canonical: "/method" }
};

export default function MethodPage() {
  return (
    <main>
      <section className="method-intro">
        <div className="container">
          <h1>How one anonymised matter becomes an advisor-reviewed case file.</h1>
          <p>We review the existing emails, spreadsheets, proposals and documents, then prepare the family-cost comparison, document list, blockers, owners and client status.</p>
        </div>
      </section>
      <section className="method-runbook">
        <MethodRunbook />
      </section>
      <section className="demo-close">
        <div className="container home-demo-grid">
          <div><h2>Start with the matter that causes the most chasing or rework.</h2><p>One live, recent or anonymised case is enough for the sprint.</p></div>
          <Link className="button button-primary" href="/contact?interest=case-control">Request a private demo <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { OfferJourney } from "@/components/control-room/OfferJourney";

export const metadata: Metadata = {
  title: "Offers",
  description: "Start with one client matter or five programme files, then move to a monthly case workspace when the team is ready.",
  alternates: { canonical: "/offers" }
};

export default function OffersPage() {
  return (
    <main>
      <section className="offers-intro">
        <div className="container offers-intro-grid">
          <h1>Start with one matter or five programmes. Add the monthly workspace when the team is ready.</h1>
          <div>
            <p>
              The first sprint deals with work the firm already has: one anonymised
              client matter or five programmes used in proposals and comparisons. The
              monthly workspace is the next step only if advisors want to use the same
              case and programme files across the team.
            </p>
            <p className="small">Founding pricing is available while the workspace is being developed with early specialist firms.</p>
          </div>
        </div>
      </section>
      <section className="container">
        <OfferJourney />
      </section>
      <section className="included-boundaries">
        <div className="container included-grid">
          <h2>What these services do not include.</h2>
          <ul>
            <li>Legal, tax, immigration or investment advice</li>
            <li>Government filing or approval guarantees</li>
            <li>Client document storage unless separately scoped</li>
            <li>Unlimited custom development</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { OfferJourney } from "@/components/control-room/OfferJourney";

export const metadata: Metadata = {
  title: "Offers",
  description: "Start with one complimentary matter-control diagnostic. Later validation stages are evidence-led and agreed privately.",
  alternates: { canonical: "/offers" }
};

export default function OffersPage() {
  return (
    <main>
      <section className="offers-intro">
        <div className="container offers-intro-grid">
          <h1>Start with one matter. Earn every later stage through evidence.</h1>
          <div>
            <p>
              The current offer is a complimentary diagnostic for one active, recent
              or anonymised matter over seven to ten working days. It tests access,
              reconstruction accuracy and immediate operational usefulness.
            </p>
            <p className="small">There is no obligation to continue. Any later pilot or paid readiness stage is agreed privately after closeout.</p>
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
            <li>Passports, bank statements or source-of-wealth file storage</li>
            <li>Unlimited custom development</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

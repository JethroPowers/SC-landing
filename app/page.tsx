import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomepageOfferProgression } from "@/components/home/HomepageOfferProgression";
import { LiveMatterHero } from "@/components/home/LiveMatterHero";
import { ManagedSetup } from "@/components/home/ManagedSetup";
import { OutcomeLedger } from "@/components/home/OutcomeLedger";
import { ScrollConsequences } from "@/components/home/ScrollConsequences";
import { JsonLd } from "@/components/JsonLd";
import { homepageStructuredData } from "@/lib/discovery";
import styles from "@/components/home/HomeExperience.module.css";

const ProgrammeChangeJourney = dynamic(() =>
  import("@/components/home/ProgrammeChangeJourney").then(
    (module) => module.ProgrammeChangeJourney
  )
);

const ControlRoomStory = dynamic(() =>
  import("@/components/control-room/ControlRoomStory").then(
    (module) => module.ControlRoomStory
  )
);

export const metadata: Metadata = {
  title: "Case management for complex cross-border matters",
  description:
    "Structure citizenship, residence and relocation matters around programme routes, family costs, application documents, due diligence, deadlines and client updates.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageStructuredData} />
      <main className={styles.home}>
        <LiveMatterHero />
        <OutcomeLedger />
        <ScrollConsequences />
        <ManagedSetup />
        <ProgrammeChangeJourney />
        <ControlRoomStory />
        <HomepageOfferProgression />

        <section className={styles.finalCta}>
          <div className={`container ${styles.finalCtaGrid}`}>
            <div>
              <h2>Bring one difficult matter to a private working session.</h2>
              <p>
                We will show how the applicants, programme routes, family costs,
                documents, due-diligence questions and next actions could be recorded.
                Do not send client-identifiable information through the enquiry form.
              </p>
            </div>
            <Link className="button button-primary" href="/contact?interest=matter-control-diagnostic">
              Discuss a complimentary matter-control diagnostic <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

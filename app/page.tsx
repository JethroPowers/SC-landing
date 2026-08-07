import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeCanonicalPath } from "@/components/home/HomeCanonicalPath";
import { LiveMatterHero } from "@/components/home/LiveMatterHero";
import { OutcomeLedger } from "@/components/home/OutcomeLedger";
import { JsonLd } from "@/components/JsonLd";
import { homepageStructuredData } from "@/lib/discovery";
import styles from "@/components/home/HomeExperience.module.css";

export const metadata: Metadata = {
  title: "Managed readiness for complex cross-border matters",
  description:
    "Turn scattered citizenship, residence and relocation matter information into a controlled record for professional review.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageStructuredData} />
      <main className={styles.home}>
        <LiveMatterHero />
        <OutcomeLedger />
        <HomeCanonicalPath />

        <section className={styles.finalCta}>
          <div className={`container ${styles.finalCtaGrid}`}>
            <div>
              <h2>Bring one difficult matter to a complimentary diagnostic.</h2>
              <p>
                Over seven to ten working days, we reconstruct one active, recent or
                anonymised matter into a controlled view. There is no obligation to continue.
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

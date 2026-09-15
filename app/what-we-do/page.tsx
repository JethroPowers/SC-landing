import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { juris, enquiryHref } from "@/lib/partners";
import {
  PageIntro,
  NextPages,
  ConversationCta,
} from "@/components/partners/Website";
import styles from "@/components/partners/Website.module.css";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Explore Juris programme research, client operations and professional collaboration, with concrete outputs and clear engagement boundaries.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <main className={styles.page}>
      <PageIntro
        eyebrow="WHAT WE DO"
        title={<>Intelligence, expertise<br />and clearer client work.</>}
        aside={
          <>
            <span className={styles.eyebrow}>FOR YOUR FIRM</span>
            <h2>Find the relevant work.</h2>
            <p>
              See how preparation, handovers and follow-up differ for
              introducers, advisers and delivery teams.
            </p>
            <Link className={styles.textLink} href="/use-cases">
              See where your firm fits
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </>
        }
      >
        <p>
          Juris connects programme intelligence with the professionals who
          apply it. Explore published knowledge, an independent adviser
          relationship or separately scoped support for your existing client work.
        </p>
      </PageIntro>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.rows}>
            <article className={styles.row} id="collaboration">
              <span className={styles.number}>01</span>
              <div>
                <span className={styles.label}>PROFESSIONAL RELATIONSHIPS</span>
                <h2>The Juris Adviser Network</h2>
                <Link className={styles.textLink} href="/advisers">
                  Become a Juris adviser
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div>
                <p>
                  Discuss jurisdiction knowledge, an editorial contribution or a
                  relevant professional relationship. An introduction can be
                  considered where a suitable relationship exists and the
                  parties agree permissions and terms.
                </p>
                <p>
                  Independent advisers and advisory firms can register interest
                  in the Juris Adviser Network. Introducers and other providers
                  have a separate professional collaboration route, without an
                  adviser designation.
                </p>
                <p>
                  There is no guaranteed enquiry volume or automatic partner
                  approval. Buying operational work is neither a condition of
                  collaboration nor a route to preferential referrals or
                  editorial treatment.
                </p>
                <div className={styles.output}>
                  <span className={styles.label}>
                    A POSSIBLE STARTING POINT
                  </span>
                  <strong>A defined contribution or accepted handover</strong>
                  <p>
                    Agree the purpose, responsible people, information that may
                    be shared and the next checkpoint. Referral terms, where
                    relevant, are discussed separately.
                  </p>
                </div>
                <Link
                  className={styles.textLink}
                  href={enquiryHref("professional-collaboration")}
                >
                  Discuss professional collaboration
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
            <article className={styles.row} id="operations">
              <span className={styles.number}>02</span>
              <div>
                <span className={styles.label}>JURIS CONTROL</span>
                <h2>Clearer client operations</h2>
                <Link
                  className={styles.textLink}
                  href="/how-matter-control-works"
                >
                  Explore the operational method
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div>
                <p>
                  An existing enquiry, proposal handover or active matter may
                  need a clearer record. Start with the point where information,
                  ownership or the next action becomes difficult to reconstruct.
                </p>
                <p>
                  Juris can discuss structuring agreed information around your
                  existing tools. Your firm retains professional assessment,
                  evidence sufficiency, communication approval and submissions.
                </p>
                <div className={styles.output}>
                  <span className={styles.label}>DEMONSTRATED HERE</span>
                  <strong>
                    A matter map, dependency register and review pack
                  </strong>
                  <p>
                    Fictional matter JP-024 connects family context, missing
                    evidence, provider responses and accountable next steps.
                    Live work needs agreed inputs, access and scope.
                  </p>
                </div>
                <Link className={styles.textLink} href="/demo-case">
                  Try the worked example
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
            <article className={styles.row} id="research">
              <span className={styles.number} aria-hidden="true">—</span>
              <div>
                <span className={styles.label}>SUPPORTING THE WORK</span>
                <h2>Programme research & understanding</h2>
                <Link className={styles.textLink} href="/intelligence">
                  Explore programme research
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div>
                <p>
                  Published Juris research supports programme understanding
                  across professional relationships and operational work. The
                  public map, directory, programme pages and editorial content
                  are available to explore. Check the
                  sources, review dates and limitations of the information you
                  intend to use.
                </p>
                <p>
                  For a particular professional question, discuss a briefing
                  that brings the relevant route context, assumptions and
                  unresolved points into one reviewable piece of work.
                </p>
                <div className={styles.output}>
                  <span className={styles.label}>A POSSIBLE OUTPUT</span>
                  <strong>A programme briefing for professional review</strong>
                  <p>
                    Agreed research question → dated sources → route and family
                    assumptions → open questions and review notes. Bespoke or
                    recurring research requires an agreed scope.
                  </p>
                </div>
                <Link
                  className={styles.textLink}
                  href={enquiryHref("programme-intelligence")}
                >
                  Discuss a research need
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.muted}`}>
        <div className={`container ${styles.split}`}>
          <div>
            <span className={styles.eyebrow}>EXPLORE THE EXISTING PRODUCT</span>
            <h2>Public discovery is already part of Juris.</h2>
            <p>
              Visit the programme directory and follow through to individual
              programme pages. Public information coverage does not establish
              partner coverage or a dependable referral flow.
            </p>
            <div className={styles.linkGroup}>
              <a className={styles.textLink} href={juris.programmesUrl}>
                Programme directory
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className={styles.textLink} href={juris.insightsUrl}>
                Juris insights
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div>
            <a href={juris.programmesUrl} className={styles.preview}>
              <Image
                src="/previews/juris-programmes.png"
                alt="Juris public programme directory, captured 15 September 2026"
                width={1440}
                height={960}
                sizes="(max-width:700px) 100vw, 50vw"
              />
            </a>
          </div>
        </div>
      </section>
      <ConversationCta>
        Tell us the research question, handoff or relationship you want to
        discuss. Start with business context; client documents are not needed
        for the first conversation.
      </ConversationCta>
      <NextPages
        pages={[
          {
            href: "/use-cases",
            label: "For your firm",
            description:
              "How the work differs for introducers, advisers and delivery teams.",
          },
          {
            href: "/offers",
            label: "Working together",
            description:
              "From an initial conversation to agreed outputs and optional continuation.",
          },
          {
            href: "/about",
            label: "Meet the founders",
            description:
              "Jethro and Alberto’s contributions and the responsibilities your firm retains.",
          },
        ]}
      />
    </main>
  );
}

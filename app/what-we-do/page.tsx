import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, UserRoundCheck, Wrench } from "lucide-react";
import { offerPaths } from "@/lib/control-room-data";
import styles from "./WhatWeDo.module.css";

export const metadata: Metadata = {
  title: "What We Do",
  description: "We organise live client matters, programme information, family costs, documents and advisor reviews for specialist firms.",
  alternates: { canonical: "/what-we-do" }
};

const workingSession = [
  {
    number: "01",
    title: "We start with a real matter.",
    copy: "The starting point is one anonymised client matter or five programmes the team quotes regularly.",
    control: "We record the applicants, dependants, objectives, routes, current files and unanswered questions.",
    firm: "The firm explains the programme and advice context and confirms what requires professional review.",
    output: "A complete case and document map"
  },
  {
    number: "02",
    title: "We prepare the case and programme files.",
    copy: "Programme rules, family costs, required documents, due-diligence questions and target dates are recorded with owners and review states.",
    control: "We build the case summary, comparison, document checklist and next-action list.",
    firm: "The firm checks sources, programme assumptions, eligibility points and client wording.",
    output: "An advisor-reviewed case file"
  },
  {
    number: "03",
    title: "We stay involved while the team starts using it.",
    copy: "The workspace is adjusted against active matters rather than handed over as an empty software account.",
    control: "We maintain programme records, review changes and correct the case views as requirements become clearer.",
    firm: "The firm runs the client relationship and remains responsible for all professional advice.",
    output: "A repeatable case-management process"
  }
];

export default function WhatWeDoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <h1>We turn scattered case information into files your advisors can use.</h1>
          <div>
            <p>
              We help the team organise applicants, programme routes, family costs,
              documents, due diligence, deadlines and client updates. We also maintain
              the programme information used in those matters.
            </p>
            <div className={styles.proof}><Wrench size={17} />Configured with the firm</div>
            <div className={styles.proof}><UserRoundCheck size={17} />Reviewed by professionals</div>
          </div>
        </div>
      </section>

      <section className={styles.session} aria-label="Working session">
        <div className="container">
          {workingSession.map((item) => (
            <article className={styles.sessionChapter} key={item.number}>
              <span>{item.number}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </div>
              <dl>
                <div><dt>Sovereignty Control</dt><dd>{item.control}</dd></div>
                <div><dt>The firm reviews</dt><dd>{item.firm}</dd></div>
                <div><dt>What remains</dt><dd><Check size={15} />{item.output}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.startingPoints}>
        <div className="container">
          <div className={styles.startingHeading}>
            <h2>Three entry points, explained through the problem they resolve.</h2>
            <p>Start with one matter or five programmes before deciding whether the monthly workspace is useful.</p>
          </div>
          <div className={styles.offerSequence}>
            {offerPaths.map((offer, index) => (
              <article className={styles.offerChapter} id={`start-${offer.id}`} key={offer.id}>
                <div className={styles.offerHeading}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{offer.title}</h3>
                    <p>{offer.buyingTrigger}</p>
                  </div>
                </div>
                <dl>
                  <div><dt>What we do</dt><dd>{offer.workPerformed}</dd></div>
                  <div><dt>What remains</dt><dd>{offer.firmOutcome}</dd></div>
                  <div><dt>Engagement</dt><dd>{offer.engagementFormat}</dd></div>
                </dl>
                <Link className="text-link" href={`/offers#${offer.id}`}>
                  See price, timing and deliverables <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.close}>
        <div className="container editorial-grid">
          <div className="editorial-title">
            <h2>Your team is not left to configure an empty account.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              We set up the case fields, programme records, document statuses and
              reports with the firm, then stay involved while advisors begin using
              them on active matters.
            </p>
            <Link className="button button-gold" href="/contact">
              Request a private demo <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

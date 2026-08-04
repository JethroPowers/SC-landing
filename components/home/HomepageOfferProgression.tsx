"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { offerPaths } from "@/lib/control-room-data";
import { useScrollStage } from "@/components/scroll/useScrollStage";
import styles from "./HomeExperience.module.css";

function OfferChapter({ index }: { index: number }) {
  const offer = offerPaths[index];

  return (
    <article className={styles.offerChapter}>
      <div className={styles.offerIdentity}>
        <span>{offer.step}</span>
        <h3>{offer.title}</h3>
        <p>{offer.engagementFormat}</p>
      </div>
      <dl className={styles.offerFields}>
        <div><dt>Buying trigger</dt><dd>{offer.buyingTrigger}</dd></div>
        <div><dt>What we do</dt><dd>{offer.workPerformed}</dd></div>
        <div><dt>Firm outcome</dt><dd>{offer.firmOutcome}</dd></div>
      </dl>
      <div className={styles.offerAction}>
        <div><Check size={15} aria-hidden="true" /><span>{offer.next}</span></div>
        <Link className="text-link" href={`/offers#${offer.id}`}>
          View offer <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function OfferIntro() {
  return (
    <div className={styles.offerIntro}>
      <h2>
        Start with the part of the work that causes the most rework.
      </h2>
      <p>
        One matter proves the case approach. Five programmes establish the
        pricing and rules behind repeated advice. The workspace carries both
        into active work.
      </p>
    </div>
  );
}

export function HomepageOfferProgression() {
  const { active, reducedMotion, scrollToStage, trackRef } = useScrollStage(
    offerPaths.length
  );

  return (
    <section className={styles.offers} aria-label="Ways to start">
      <div className={styles.offerTrack} ref={trackRef}>
        <div className={styles.offerSticky}>
          <div className={`container ${styles.offerCanvas}`}>
            <OfferIntro />
            <div className={styles.offerProgress}>
              {offerPaths.map((offer, index) => (
                <button
                  type="button"
                  aria-current={index === active ? "step" : undefined}
                  onClick={() => scrollToStage(index)}
                  key={offer.id}
                >
                  <span>0{index + 1}</span>
                  <strong>{index === 0 ? "One matter" : index === 1 ? "Five programmes" : "Ongoing workspace"}</strong>
                </button>
              ))}
            </div>

            <div className={styles.offerActive} aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={offerPaths[active].id}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                >
                  <OfferChapter index={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.offerFallback}>
        <div className="container">
          <OfferIntro />
          <div className={styles.offerChapters}>
            {offerPaths.map((offer, index) => (
              <OfferChapter index={index} key={offer.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

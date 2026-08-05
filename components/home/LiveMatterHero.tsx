"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  FolderOpen,
  Mail,
  MessageSquareText,
  ShieldAlert
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { liveMatterStages, type LiveMatterStage } from "@/lib/control-room-data";
import { useScrollStage } from "@/components/scroll/useScrollStage";
import styles from "./LiveMatterHero.module.css";

const scatteredRecords = [
  { icon: Mail, source: "Client email", value: "Spouse and two children" },
  { icon: FileSpreadsheet, source: "Fee workbook", value: "Four programme routes" },
  { icon: FolderOpen, source: "Document folder", value: "Three items still missing" },
  { icon: MessageSquareText, source: "Advisor message", value: "Source-of-funds detail to follow" }
];

const structuredFields = [
  ["Applicants", "Principal applicant, spouse, two children"],
  ["Objective", "Second citizenship and family mobility"],
  ["Programme routes", "St Kitts, Grenada, Dominica, St Lucia"],
  ["Family-cost range", "£350k-£500k equivalent"],
  ["Evidence", "3 missing or review-required items"],
  ["Professional review", "Source of funds and dependant ages"]
];

function MatterVisual({ stage }: { stage: LiveMatterStage }) {
  if (stage.id === "scattered") {
    return (
      <div className={styles.scatteredGrid}>
        {scatteredRecords.map((record) => {
          const Icon = record.icon;
          return (
            <article className={styles.fragment} key={record.source}>
              <div>
                <Icon size={16} aria-hidden="true" />
                <span>{record.source}</span>
              </div>
              <strong>{record.value}</strong>
            </article>
          );
        })}
      </div>
    );
  }

  if (stage.id === "structured") {
    return (
      <div className={styles.structuredGrid}>
        {structuredFields.map(([label, value]) => (
          <div className={styles.structuredField} key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.controlledView}>
      <div className={styles.controlledHeader}>
        <div>
          <span>SC-DEMO-042</span>
          <strong>British family of four</strong>
        </div>
        <span className={styles.reviewState}>Professional review required</span>
      </div>
      <dl className={styles.controlledFacts}>
        <div><dt>Stage</dt><dd>Programme comparison</dd></div>
        <div><dt>Programme release</dt><dd>July 2026 · review</dd></div>
        <div><dt>Missing</dt><dd>3 documents</dd></div>
        <div><dt>Owner</dt><dd>Private Client Team</dd></div>
      </dl>
      <div className={styles.controlledAction}>
        <ShieldAlert size={18} aria-hidden="true" />
        <div>
          <span>Current blocker</span>
          <strong>Source-of-funds review</strong>
        </div>
        <div>
          <span>Next action</span>
          <strong>Advisor reviews supporting evidence</strong>
        </div>
      </div>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className={styles.heroCopy}>
      <h1>Run complex citizenship, residence and relocation matters from one case view.</h1>
      <p>
        We structure the applicants, programme routes, family costs, documents,
        due-diligence questions, responsibilities and next actions behind each matter.
      </p>
      <div className={styles.audience}>
        <span>
          For boutique CBI/RBI firms, authorised agents and private-client relocation teams.
        </span>
      </div>
      <div className={styles.heroActions}>
        <Link className="button button-gold" href="/contact">
          Discuss a complimentary diagnostic <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <Link className={styles.secondaryLink} href="/demo-case">
          View demo case
        </Link>
      </div>
    </div>
  );
}

export function LiveMatterHero() {
  const { active, reducedMotion, scrollToStage, trackRef } = useScrollStage(
    liveMatterStages.length
  );
  const stage = liveMatterStages[active];

  return (
    <section className={styles.heroSection} aria-label="A client matter becoming controlled">
      <div className={styles.heroTrack} ref={trackRef}>
        <div className={styles.heroSticky}>
          <div className={`container ${styles.heroCanvas}`}>
            <HeroCopy />

            <div className={styles.matterFrame}>
              <div className={styles.stageContext}>
                <div>
                  <span>{stage.number} / 0{liveMatterStages.length}</span>
                  <h2>{stage.title}</h2>
                </div>
                <p>{stage.description}</p>
              </div>

              <div className={styles.stageScene} aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={stage.id}
                    initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MatterVisual stage={stage} />
                  </motion.div>
                </AnimatePresence>
                <div className={styles.stageResult}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{stage.result}</span>
                </div>
              </div>

              <div className={styles.stageProgress} aria-label="Matter control stages">
                {liveMatterStages.map((item, index) => (
                  <button
                    type="button"
                    aria-label={`Go to ${item.title}`}
                    aria-current={index === active ? "step" : undefined}
                    onClick={() => scrollToStage(index)}
                    key={item.id}
                  >
                    <span>0{index + 1}</span>
                    <strong>{item.id}</strong>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroFallback}>
        <div className="container">
          <HeroCopy />
          <div className={styles.fallbackStages}>
            {liveMatterStages.map((item) => (
              <article className={styles.fallbackStage} key={item.id}>
                <div className={styles.fallbackHeading}>
                  <span>{item.number}</span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
                <MatterVisual stage={item} />
                <div className={styles.stageResult}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{item.result}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

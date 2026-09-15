"use client";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, FolderOpen, RotateCcw } from "lucide-react";
import { juris } from "@/lib/partners";
import { fictionalMatter } from "@/lib/matter-control-fixture";
import styles from "./Institutional.module.css";

function useSelection(count: number) {
  const [active, setActive] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId();
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = {
      ArrowRight: (index + 1) % count,
      ArrowDown: (index + 1) % count,
      ArrowLeft: (index + count - 1) % count,
      ArrowUp: (index + count - 1) % count,
      Home: 0,
      End: count - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    setActive(keys[event.key]);
    buttons.current[keys[event.key]]?.focus();
  }
  return { active, setActive, buttons, onKey, id };
}
const productViews = [
  {
    label: "Global discovery",
    src: "juris-atlas",
    href: juris.publicUrl,
    caption:
      "Explore the map and find the programme context relevant to a mobility question.",
    action: "Explore public Juris",
  },
  {
    label: "Programmes",
    src: "juris-programmes",
    href: juris.programmesUrl,
    caption:
      "Move from an overview to individual programmes, with information organised for comparison and further research.",
    action: "Browse programmes",
  },
  {
    label: "Programme detail",
    src: "juris-programme-detail",
    href: "https://sovereignty-atlas.vercel.app/programs/hungary-rbi",
    caption:
      "An actual programme page shows the depth behind discovery. Check current sources and professional applicability before client use.",
    action: "Open the programme page",
  },
  {
    label: "Insights",
    src: "juris-insights",
    href: juris.insightsUrl,
    caption:
      "Read the published editorial perspective alongside programme information and your own professional judgement.",
    action: "Read Juris insights",
  },
];
export function PublicProductStory() {
  const { active, setActive, buttons, onKey, id } = useSelection(
    productViews.length,
  );
  const view = productViews[active];
  return (
    <div>
      <div
        role="tablist"
        aria-label="Public Juris product views"
        className={styles.productTabs}
      >
        {productViews.map((item, i) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            id={`${id}-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel`}
            tabIndex={active === i ? 0 : -1}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span>0{i + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-${active}`}
        tabIndex={0}
        className={styles.productFrame}
      >
        <div className={styles.productImage}>
          <Image
            key={view.src}
            className={styles.enter}
            src={`/previews/${view.src}.png`}
            alt={`Actual public Juris ${view.label.toLowerCase()} interface, captured 15 September 2026`}
            width={1440}
            height={960}
            sizes="(max-width: 760px) 94vw, 1264px"
          />
        </div>
        <div className={styles.productCaption}>
          <p>{view.caption}</p>
          <a href={view.href} className={styles.textLink}>
            {view.action}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className={styles.note}>
        Actual public-product captures · 15 September 2026. Open Juris to use
        the current product.
      </p>
    </div>
  );
}
const intelligenceStates = [
  {
    label: "Source",
    eyebrow: "01 / SOURCE CONTEXT",
    title: "Record what was actually published.",
    text: "Keep the source, publication date and the specific assertion together. An announcement is not automatically an effective rule.",
    left: "Example source",
    leftValue: "Fictional programme notice",
    right: "Publication state",
    rightValue: "Proposal · not in force",
  },
  {
    label: "Review",
    eyebrow: "02 / REVIEWED CHANGE",
    title: "Keep interpretation visible.",
    text: "Separate the proposed change from the approved programme record. Hold uncertain applicability for professional review.",
    left: "Review state",
    leftValue: "Unresolved applicability",
    right: "Approved record",
    rightValue: "Existing value retained",
  },
  {
    label: "Programme record",
    eyebrow: "03 / CONNECTED CONTEXT",
    title: "Carry the question into the relevant work.",
    text: "A dated change record can inform a public correction, an adviser briefing or a review of affected client work once the relevant checks are complete.",
    left: "Example matter",
    leftValue: "JP-024 · review required",
    right: "Next decision",
    rightValue: "Firm confirms applicability",
  },
];
export function IntelligenceStory() {
  const { active, setActive, buttons, onKey, id } = useSelection(3);
  const state = intelligenceStates[active];
  return (
    <div className={styles.terminal}>
      <div className={styles.terminalTop}>
        <span>JURIS INTELLIGENCE / CHANGE RECORD</span>
        <span>Illustrative sequence</span>
      </div>
      <div
        role="tablist"
        aria-label="Intelligence sequence"
        className={styles.sequence}
      >
        {intelligenceStates.map((item, i) => (
          <button
            type="button"
            key={item.label}
            role="tab"
            id={`${id}-${i}`}
            aria-controls={`${id}-panel`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span>0{i + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-${active}`}
        tabIndex={0}
        className={styles.terminalDetail}
      >
        <div key={active} className={styles.enter}>
          <span className={styles.kicker}>{state.eyebrow}</span>
          <h3>{state.title}</h3>
          <p>{state.text}</p>
          <dl>
            <div>
              <dt>{state.left}</dt>
              <dd>{state.leftValue}</dd>
            </div>
            <div>
              <dt>{state.right}</dt>
              <dd>{state.rightValue}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className={styles.branches} aria-label="Possible uses after review">
        <div>
          Public Juris<span>Reviewed publication</span>
        </div>
        <div>
          Adviser briefing<span>Agreed research scope</span>
        </div>
        <div>
          Change alert<span>Possible future workflow</span>
        </div>
        <div>
          Operational review<span>Firm confirms impact</span>
        </div>
      </div>
    </div>
  );
}
const controlStates = [
  {
    label: "See the blocker",
    title: "Evidence review",
    tag: "Blocked · provider response",
    heading: "Suitability confirmation outstanding",
    text: "A provider reply was due on 4 August. At the fixed example date, it is six days overdue. The missing response prevents the next review.",
    owner: "Unassigned",
    action: "Request a status and expected response date.",
    history: "10 August · Blocker recorded; follow-up ownership is open.",
  },
  {
    label: "Assign the next action",
    title: "Follow-up prepared",
    tag: "Response still outstanding",
    heading: "One responsible person. One next action.",
    text: "This example assigns the follow-up to the provider liaison. Assigning an owner does not resolve the dependency or supply the missing evidence.",
    owner: "Provider liaison",
    action: "Follow up with the provider; record its expected response date.",
    history: "10 August · Follow-up assigned in the example; nothing sent.",
  },
  {
    label: "Prepare for review",
    title: "Adviser review pending",
    tag: "Draft · approval required",
    heading: "A clear status, ready for the firm to review.",
    text: "Draft: Three evidence items and a provider response remain outstanding. The next review is 12 August. The adviser will confirm the next steps.",
    owner: "Provider liaison",
    action: "Firm reviews the prepared status before any client communication.",
    history: "10 August · Separate client-update draft prepared; nothing sent.",
  },
];
export function ControlProductStory() {
  const { active, setActive, buttons, onKey, id } = useSelection(3);
  const state = controlStates[active];
  return (
    <div className={styles.controlDemo}>
      <div className={styles.controlTop}>
        <span>
          <FolderOpen size={18} aria-hidden="true" />
          JURIS CONTROL / {fictionalMatter.reference}
        </span>
        <small>FICTIONAL MATTER · 10 AUG 2026</small>
      </div>
      <div className={styles.controlBody}>
        <div
          role="tablist"
          aria-label="Control demonstration stages"
          className={styles.controlStages}
        >
          {controlStates.map((item, i) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              id={`${id}-${i}`}
              aria-controls={`${id}-panel`}
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              ref={(el) => {
                buttons.current[i] = el;
              }}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span>0{i + 1}</span>
              {item.label}
            </button>
          ))}
          <p>
            Select a stage to inspect the example. No action affects a real
            matter.
          </p>
        </div>
        <div
          role="tabpanel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-${active}`}
          tabIndex={0}
          className={styles.controlRecord}
        >
          <div className={styles.recordTitle}>
            <div>
              <span>MATTER STATE</span>
              <h3>{state.title}</h3>
            </div>
            <span className={styles.stateTag}>{state.tag}</span>
          </div>
          <div className={styles.metrics}>
            <div>
              <strong>18 / 21</strong>
              <span>Evidence items recorded</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Open dependencies</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Professional decisions pending</span>
            </div>
          </div>
          <div className={`${styles.recordBody} ${styles.enter}`} key={active}>
            <div>
              <span>BLOCKER / PROVIDER CONFIRMATION</span>
              <h4>{state.heading}</h4>
              <p>{state.text}</p>
            </div>
            <dl>
              <div>
                <dt>Follow-up owner</dt>
                <dd>{state.owner}</dd>
              </div>
              <div>
                <dt>Next review</dt>
                <dd>12 August 2026 · Firm adviser</dd>
              </div>
              <div>
                <dt>Next action</dt>
                <dd>{state.action}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className={styles.controlBottom}>
        <span role="status">
          {state.history} 3 evidence items remain missing.
        </span>
        <button type="button" onClick={() => setActive(0)}>
          <RotateCcw size={14} aria-hidden="true" />
          Reset
        </button>
      </div>
    </div>
  );
}

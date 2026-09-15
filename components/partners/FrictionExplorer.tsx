"use client";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { enquiryHref } from "@/lib/partners";
import styles from "./Institutional.module.css";
const points = [
  {
    label: "Enquiry",
    stage: "enquiry",
    title: "An enquiry should arrive with useful context.",
    problem:
      "Important facts sit across messages. The first conversation repeats questions and the next follow-up is unclear.",
    output: "A structured enquiry brief, open questions and a named follow-up.",
    responsibility: "Your firm decides suitability and whether to engage.",
  },
  {
    label: "Consultation",
    stage: "enquiry",
    title: "Prepare the questions before the conversation.",
    problem:
      "Objectives, household context and professional questions are incomplete or difficult to reconstruct.",
    output:
      "A consultation preparation sheet with known facts, assumptions and missing context.",
    responsibility:
      "Your adviser leads the consultation and determines what advice is appropriate.",
  },
  {
    label: "Proposal",
    stage: "comparison",
    title: "Make the assumptions behind the proposal visible.",
    problem:
      "A headline cost or programme comparison loses its source, exclusions or family assumptions.",
    output:
      "A reviewed-assumption sheet and comparison prepared for adviser approval.",
    responsibility:
      "Your firm approves recommendations, fees, exclusions and the proposal.",
  },
  {
    label: "Engagement",
    stage: "handover",
    title: "Carry the agreement into delivery.",
    problem:
      "The receiving team has a file, but cannot see the latest scope, permissions or responsible person.",
    output:
      "An engagement handover record connecting scope, owners and the next milestone.",
    responsibility:
      "Your firm approves the engagement and each provider’s authority.",
  },
  {
    label: "Documents",
    stage: "readiness",
    title: "See what is missing and why it matters.",
    problem:
      "A document list records a gap without showing its consequence or the next responsible person.",
    output:
      "A readiness register linking evidence state, open requests and review dates.",
    responsibility:
      "Qualified professionals decide evidence sufficiency; recording a gap does not resolve it.",
  },
  {
    label: "Dependencies",
    stage: "readiness",
    title: "Give every blocker an owner and a next action.",
    problem:
      "An external reply is overdue, but responsibility and escalation are unclear.",
    output:
      "A dependency record with owner, blocker, due date and agreed follow-up.",
    responsibility:
      "Authorised teams control deadlines, provider contact and submissions.",
  },
  {
    label: "Professional review",
    stage: "review",
    title: "Prepare a record that supports judgement.",
    problem:
      "A reviewer must reconstruct the matter before they can address the actual decisions.",
    output:
      "A decision-ready summary of current status, evidence gaps and unresolved questions.",
    responsibility:
      "The professional makes the judgement and records approval or further requirements.",
  },
  {
    label: "Client update",
    stage: "communication",
    title: "Turn the working record into a clear update.",
    problem:
      "Status wording drifts from the record or includes internal professional notes.",
    output:
      "A separate client-update draft with outstanding actions and the next checkpoint.",
    responsibility: "Your firm approves and sends every communication.",
  },
  {
    label: "Programme change",
    stage: "review",
    title: "Connect a change to the work that needs review.",
    problem:
      "An announcement is treated as effective, or an affected assumption is carried forward unchecked.",
    output:
      "An affected-work review queue with source context, dates and responsible reviewers.",
    responsibility:
      "The adviser confirms applicability before approved assumptions or advice change.",
  },
];
export function FrictionExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId();
  const point = points[active];
  function key(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const actions: Record<string, number> = {
      ArrowRight: (index + 1) % 9,
      ArrowDown: (index + 1) % 9,
      ArrowLeft: (index + 8) % 9,
      ArrowUp: (index + 8) % 9,
      Home: 0,
      End: 8,
    };
    if (!(event.key in actions)) return;
    event.preventDefault();
    setActive(actions[event.key]);
    refs.current[actions[event.key]]?.focus();
  }
  return (
    <div className={styles.friction}>
      <div
        role="tablist"
        aria-label="Workflow friction points"
        className={styles.frictionTabs}
      >
        {points.map((item, i) => (
          <button
            type="button"
            role="tab"
            id={`${id}-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel`}
            tabIndex={active === i ? 0 : -1}
            ref={(el) => {
              refs.current[i] = el;
            }}
            onClick={() => setActive(i)}
            onKeyDown={(e) => key(e, i)}
            key={item.label}
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
        className={styles.frictionPanel}
      >
        <div key={active} className={styles.enter}>
          <span className={styles.kicker}>
            POSSIBLE SCOPED SUPPORT / {point.label}
          </span>
          <h3>{point.title}</h3>
          <p>{point.problem}</p>
          <div className={styles.frictionOutput}>
            <span>WHAT WE COULD INVESTIGATE</span>
            <strong>{point.output}</strong>
          </div>
          <p>{point.responsibility}</p>
          <Link
            className={styles.textLink}
            href={enquiryHref("operational-workflow", point.stage)}
          >
            Discuss this workflow
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

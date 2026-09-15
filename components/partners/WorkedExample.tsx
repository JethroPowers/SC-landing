"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  History,
  RotateCcw,
  UserRound,
  Clock3,
  FolderOpen,
  Mail,
  ListChecks,
} from "lucide-react";
import { fictionalMatter as matter } from "@/lib/matter-control-fixture";
import styles from "./Partners.module.css";

export function MatterPreview() {
  return (
    <div
      className={styles.heroRecord}
      aria-label="Simulated Juris matter record"
    >
      <div className={styles.recordTop}>
        <span>
          <FolderOpen size={17} aria-hidden="true" />
          JURIS / MATTER RECORD
        </span>
        <span className={styles.simulation}>SIMULATED</span>
      </div>
      <div className={styles.recordIdentity}>
        <div>
          <span>FICTIONAL MATTER</span>
          <strong>{matter.reference}</strong>
        </div>
        <span className={styles.attention}>Attention required</span>
      </div>
      <p className={styles.recordContext}>
        One family. Four route contexts.
        <br />A clearer next step.
      </p>
      <div className={styles.recordMetrics}>
        <div>
          <strong>
            18<span>/21</span>
          </strong>
          <span>Evidence items recorded</span>
        </div>
        <div>
          <strong>04</strong>
          <span>Open dependencies</span>
        </div>
        <div>
          <strong>02</strong>
          <span>Questions for review</span>
        </div>
      </div>
      <div className={styles.nextAction}>
        <span>NEXT ACTION</span>
        <strong>Request provider suitability confirmation</strong>
        <div>
          <span>
            <UserRound size={14} aria-hidden="true" />
            Follow-up unassigned
          </span>
          <span>
            <Clock3 size={14} aria-hidden="true" />6 days overdue
          </span>
        </div>
      </div>
      <div className={styles.recordBottom}>
        <span>3 evidence items remain missing</span>
        <Link href="/demo-case">
          Explore the record <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function WorkedExample() {
  const id = useId();
  const [view, setView] = useState<"before" | "after">("after");
  const [drafted, setDrafted] = useState(false);
  const [assigned, setAssigned] = useState(false);
  const [events, setEvents] = useState([
    "09:00 · Existing enquiry and household outline recorded",
    "09:15 · Four route contexts carried into the matter map",
    "09:30 · 3 missing items and 4 dependencies registered",
  ]);
  function reset() {
    setView("after");
    setDrafted(false);
    setAssigned(false);
    setEvents([
      "09:00 · Existing enquiry and household outline recorded",
      "09:15 · Four route contexts carried into the matter map",
      "09:30 · 3 missing items and 4 dependencies registered",
    ]);
  }
  function act(action: "assign" | "draft") {
    if (action === "assign") setAssigned(true);
    else setDrafted(true);
    setEvents((current) => [
      ...current,
      `09:${30 + (current.length - 2) * 5} · ${action === "assign" ? "Follow-up assigned to provider liaison" : "Client-update draft prepared for firm approval"}`,
    ]);
  }
  return (
    <div className={styles.workedDemo}>
      <div className={styles.demoToolbar}>
        <div>
          <span className={styles.simulation}>SIMULATED EXAMPLE</span>
          <strong>{matter.reference} / Readiness & review</strong>
        </div>
        <button type="button" onClick={reset}>
          <RotateCcw size={15} aria-hidden="true" />
          Reset
        </button>
      </div>
      <div className={styles.demoContext}>
        <p>
          Principal applicant, spouse and two children · Mobility and a
          long-term residence option
        </p>
        <span>Fixed example date: 10 August 2026 · Next review: 12 August</span>
      </div>
      <div
        className={styles.demoSwitch}
        role="group"
        aria-label="Matter record view"
      >
        <button
          type="button"
          aria-pressed={view === "before"}
          aria-controls={`${id}-view`}
          onClick={() => setView("before")}
        >
          Before · scattered records
        </button>
        <button
          type="button"
          aria-pressed={view === "after"}
          aria-controls={`${id}-view`}
          onClick={() => setView("after")}
        >
          After · structured record
        </button>
      </div>
      <div id={`${id}-view`}>
        {view === "before" ? (
          <div className={styles.beforeGrid}>
            {[
              {
                icon: Mail,
                label: "Enquiry email",
                text: "Household and objectives. Family details need confirmation.",
              },
              {
                icon: FileText,
                label: "Fee workbook",
                text: "Four routes. A superseded fee assumption still needs review.",
              },
              {
                icon: FolderOpen,
                label: "Document folder",
                text: "18 of 21 evidence items recorded; three remain missing.",
              },
              {
                icon: ListChecks,
                label: "Call notes & messages",
                text: "Provider reply due 4 August. Follow-up ownership is unclear.",
              },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label}>
                <Icon size={20} aria-hidden="true" />
                <span>{label}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.afterGrid}>
            <div className={styles.demoMain}>
              <div className={styles.demoMetrics}>
                <div>
                  <strong>18 / 21</strong>
                  <span>Evidence recorded</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>Open dependencies</span>
                </div>
                <div>
                  <strong>2</strong>
                  <span>Review questions</span>
                </div>
              </div>
              <div className={styles.blocker}>
                <span>BLOCKER / PROVIDER RESPONSE</span>
                <h3>Suitability confirmation outstanding</h3>
                <p>
                  Due 4 August · 6 days overdue at this example’s reference
                  date.
                </p>
                <dl>
                  <div>
                    <dt>Next action</dt>
                    <dd>Request a status and expected response date.</dd>
                  </div>
                  <div>
                    <dt>Follow-up owner</dt>
                    <dd>{assigned ? "Provider liaison" : "Unassigned"}</dd>
                  </div>
                  <div>
                    <dt>Next review</dt>
                    <dd>12 August 2026 · Firm adviser</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  disabled={assigned}
                  onClick={() => act("assign")}
                >
                  <UserRound size={15} aria-hidden="true" />
                  {assigned
                    ? "Owner assigned in example"
                    : "Assign follow-up owner"}
                </button>
              </div>
              <details className={styles.demoDetails}>
                <summary>Family context, routes & review questions</summary>
                <p>
                  {matter.household}. Four fictional route contexts remain under
                  consideration; none is recommended.
                </p>
                <p>
                  Fee sheet: separate route capital, government charges,
                  due-diligence charges, professional fees and family
                  assumptions. One superseded value is held for review.
                </p>
                <ul>
                  {matter.reviewQuestions.map((item) => (
                    <li key={item.question}>{item.question}</li>
                  ))}
                </ul>
                <p>
                  Firm adviser reviews source-of-funds sufficiency; immigration
                  counsel reviews the fictional Route C dependant condition. No
                  professional decision has been completed.
                </p>
              </details>
            </div>
            <div className={styles.demoSide}>
              <div className={styles.internalNote}>
                <span>INTERNAL NOTES / FIRM ONLY</span>
                <p>
                  Evidence threshold and Route C dependant treatment need
                  professional decisions. Hold recommendation and revised
                  figures.
                </p>
              </div>
              <div className={styles.clientUpdate}>
                <span>
                  EXAMPLE CLIENT UPDATE /{" "}
                  {drafted ? "AWAITING APPROVAL" : "NOT PREPARED"}
                </span>
                {drafted ? (
                  <blockquote>
                    “Your matter is in preparation. Three evidence items remain
                    outstanding and we are awaiting a provider response. The
                    next review is 12 August. Your adviser will confirm the next
                    steps.”
                  </blockquote>
                ) : (
                  <p>
                    Prepare a separate draft with the current stage, outstanding
                    actions and next review.
                  </p>
                )}
                <button
                  type="button"
                  disabled={drafted}
                  onClick={() => act("draft")}
                >
                  <FileText size={15} aria-hidden="true" />
                  {drafted
                    ? "Draft prepared · nothing sent"
                    : "Prepare update draft"}
                </button>
              </div>
              <div className={styles.eventHistory}>
                <span>
                  <History size={15} aria-hidden="true" />
                  EXAMPLE HISTORY · 10 AUGUST
                </span>
                <ol>
                  {events.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
      <p role="status" className={styles.demoStatus}>
        {assigned || drafted
          ? `${assigned ? "Follow-up owner assigned. " : ""}${drafted ? "Draft awaiting firm approval. " : ""}3 evidence items remain missing; professional review is still pending.`
          : "Organising the record leaves missing evidence missing. Review-ready never means approved, eligible or compliant."}
      </p>
      <div className={styles.demoFooter}>
        <p>
          All references, dates, actions and history are fictional. This example
          does not send messages, make filings or connect to government systems.
        </p>
        <Link href="/how-matter-control-works#workspace">
          Explore the full method <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

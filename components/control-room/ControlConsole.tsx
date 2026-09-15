"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FileClock, FileText, FolderCheck, LayoutDashboard, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
import {
  caseBlockers,
  caseDocuments,
  changeEvents,
  clientStatus,
  demoCase,
  programmeOptions
} from "@/lib/control-room-data";
import styles from "./ControlRoom.module.css";

const views = [
  { id: "case", label: "Case", icon: LayoutDashboard },
  { id: "scenario", label: "Scenario", icon: UsersRound },
  { id: "documents", label: "Documents", icon: FolderCheck },
  { id: "change-impact", label: "Change Impact", icon: FileClock },
  { id: "client", label: "Client View", icon: FileText }
] as const;

type ViewId = (typeof views)[number]["id"];

function tone(status: string) {
  if (status === "Complete" || status === "Published") return "good";
  if (status === "Blocked" || status === "Missing") return "risk";
  return "warn";
}

export function ControlConsole() {
  const [active, setActive] = useState<ViewId>("case");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1) as ViewId;
      if (views.some((view) => view.id === id)) setActive(id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function select(id: ViewId) {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const current = views.findIndex((view) => view.id === active);
    const next =
      event.key === "Home" ? 0 :
      event.key === "End" ? views.length - 1 :
      event.key === "ArrowRight" ? (current + 1) % views.length :
      (current - 1 + views.length) % views.length;
    select(views[next].id);
    document.getElementById(`console-tab-${views[next].id}`)?.focus();
  }

  return (
    <div className={`${styles.console} ${styles.shell}`}>
      <div className={styles.windowBar}>
        <div className={styles.windowIdentity}>
          <span className={styles.liveDot} />
          <strong>{demoCase.title} · {demoCase.matter}</strong>
          <span>{demoCase.reference}</span>
        </div>
        <span className={styles.badge} data-tone="warn">Adviser review required</span>
      </div>
      <div className={styles.consoleTabs} role="tablist" aria-label="Control views" onKeyDown={onKeyDown}>
        {views.map((view) => {
          const Icon = view.icon;
          return (
            <button
              id={`console-tab-${view.id}`}
              type="button"
              role="tab"
              aria-selected={active === view.id}
              aria-controls="console-panel"
              tabIndex={active === view.id ? 0 : -1}
              className={`${styles.consoleTab} ${active === view.id ? styles.consoleTabActive : ""}`}
              onClick={() => select(view.id)}
              key={view.id}
            >
              <Icon size={16} aria-hidden="true" />
              {view.label}
            </button>
          );
        })}
      </div>
      <div className={styles.consoleBody}>
        <div className={styles.consoleMain} id="console-panel" role="tabpanel" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              {active === "case" && <CaseView />}
              {active === "scenario" && <ScenarioView />}
              {active === "documents" && <DocumentsView />}
              {active === "change-impact" && <ChangeView />}
              {active === "client" && <ClientView />}
            </motion.div>
          </AnimatePresence>
        </div>
        <aside className={styles.consoleAside}>
          <p className={styles.kicker}>Matter summary</p>
          <div className={styles.miniStack}>
            <div className={styles.miniRow}><strong>Stage</strong><span>{demoCase.currentStage}</span></div>
            <div className={styles.miniRow}><strong>Budget</strong><span>{demoCase.budget}</span></div>
            <div className={styles.miniRow}><strong>Owner</strong><span>{demoCase.owner}</span></div>
            <div className={styles.miniRow}><strong>Release</strong><span>July 2026 · review</span></div>
          </div>
          <div className={styles.stageOutcome}>
            The adviser remains responsible for programme eligibility, legal, tax,
            immigration and investment advice.
          </div>
        </aside>
      </div>
    </div>
  );
}

function CaseView() {
  return (
    <>
      <p className={styles.kicker}>Case summary</p>
      <h2 className={styles.viewTitle}>See the stage, blocker, owner and next action.</h2>
      <div className={styles.stats}>
        {[
          ["Programmes", "4"],
          ["Missing", "3"],
          ["Blockers", "1"],
          ["Timeline", "12 months"]
        ].map(([label, value]) => (
          <div className={styles.stat} key={label}><span>{label}</span><strong>{value}</strong></div>
        ))}
      </div>
      <div className={styles.list}>
        {caseBlockers.map((item) => (
          <div className={styles.listRow} key={item.id}>
            <div><strong>{item.title}</strong><span className={styles.subtle}>{item.owner} · {item.effect}</span></div>
            <span className={styles.badge} data-tone={tone(item.status)}>{item.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function ScenarioView() {
  return (
    <>
      <p className={styles.kicker}>Family-cost comparison · indicative demo data</p>
      <h2 className={styles.viewTitle}>Compare total family costs, not only the minimum investment.</h2>
      <table className={styles.dataTable}>
        <thead><tr><th>Programme</th><th>Route</th><th>Estimated total</th><th>Confidence</th><th>Review</th></tr></thead>
        <tbody>
          {programmeOptions.map((option) => (
            <tr key={option.id}>
              <td data-label="Programme"><strong>{option.programme}</strong></td>
              <td data-label="Route">{option.route}</td>
              <td data-label="Estimated total">{option.estimatedTotal}</td>
              <td data-label="Confidence">{option.confidence}</td>
              <td data-label="Review">{option.reviewRequired}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function DocumentsView() {
  return (
    <>
      <p className={styles.kicker}>Documents by applicant</p>
      <h2 className={styles.viewTitle}>See which applicant document prevents submission.</h2>
      <div className={styles.list}>
        {caseDocuments.map((item) => (
          <div className={styles.listRow} key={item.id}>
            <div><strong>{item.name}</strong><span className={styles.subtle}>{item.person}</span></div>
            <span className={styles.badge} data-tone={tone(item.status)}>{item.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function ChangeView() {
  const change = changeEvents[0];
  return (
    <>
      <p className={styles.kicker}>Programme update</p>
      <h2 className={styles.viewTitle}>A proposed government-fee change is held for adviser review.</h2>
      <div className={styles.changeCompare}>
        <div className={styles.changeValue}><span className={styles.subtle}>Current published value</span><strong>{change.oldValue}</strong></div>
        <span>→</span>
        <div className={styles.changeValue}><span className={styles.subtle}>{change.effectiveDate}</span><strong>{change.proposedValue}</strong></div>
      </div>
      <div className={styles.list}>
        <div className={styles.listRow}><strong>Affected active cases</strong><span>{change.affectedCases}</span></div>
        <div className={styles.listRow}><strong>Affected adviser reports</strong><span>{change.affectedReports}</span></div>
      </div>
    </>
  );
}

function ClientView() {
  return (
    <>
      <p className={styles.kicker}>Client status</p>
      <h2 className={styles.viewTitle}>Tell the client what is required without exposing due-diligence notes.</h2>
      <div className={styles.clientPanel}>
        <span className={styles.fragmentLabel}>Current stage</span>
        <h3>{clientStatus.stage}</h3>
        <p>{clientStatus.message}</p>
        <strong>Next milestone</strong>
        <p>{clientStatus.nextMilestone}</p>
      </div>
    </>
  );
}

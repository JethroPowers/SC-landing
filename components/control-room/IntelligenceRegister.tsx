"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { changeEvents, intelligenceRecords, type IntelligenceRecord } from "@/lib/control-room-data";
import styles from "./ControlRoom.module.css";

type Filter = "All" | "Published" | "Draft" | "Review";

function tone(status: string) {
  if (status === "Published") return "good";
  if (status === "Draft") return "warn";
  return "risk";
}

export function IntelligenceRegister() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<IntelligenceRecord | null>(null);
  const reducedMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const records = filter === "All"
    ? intelligenceRecords
    : intelligenceRecords.filter((record) => record.status === filter);

  useEffect(() => {
    if (!selected) return;
    closeRef.current?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
        window.setTimeout(() => triggerRef.current?.focus(), 0);
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [selected]);

  function open(record: IntelligenceRecord, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelected(record);
  }

  function close() {
    setSelected(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <div className={`${styles.register} ${styles.shell}`}>
      <div className={styles.windowBar}>
        <div className={styles.windowIdentity}>
          <span className={styles.liveDot} />
          <strong>Programme register</strong>
          <span>Programme updates · fictional demonstration</span>
        </div>
        <span className={styles.badge}>4 records</span>
      </div>
      <div className={styles.filters} role="group" aria-label="Filter programme records">
        {(["All", "Published", "Draft", "Review"] as Filter[]).map((item) => (
          <button
            type="button"
            className={`${styles.filter} ${filter === item ? styles.filterActive : ""}`}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.registerBody}>
        <table className={styles.registerTable}>
          <thead>
            <tr><th>Programme</th><th>Routes</th><th>Release</th><th>Source state</th><th>Status</th></tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td data-label="Programme">
                  <button
                    type="button"
                    className={styles.recordButton}
                    onClick={(event) => open(record, event.currentTarget)}
                    aria-haspopup="dialog"
                  >
                    {record.programme} <ArrowRight size={13} aria-hidden="true" />
                  </button>
                  <span className={styles.subtle}>{record.jurisdiction}</span>
                </td>
                <td data-label="Routes">{record.routeCount}</td>
                <td data-label="Release">{record.release}</td>
                <td data-label="Source state">{record.sourceState}</td>
                <td data-label="Status"><span className={styles.badge} data-tone={tone(record.status)}>{record.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <AnimatePresence>
          {selected && (
            <motion.aside
              className={styles.drawer}
              role="dialog"
              aria-modal="false"
              aria-label={`${selected.programme} release record`}
              initial={reducedMotion ? false : { x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={reducedMotion ? undefined : { x: 30, opacity: 0 }}
              transition={{ duration: 0.24 }}
            >
              <div className={styles.drawerHeader}>
                <div>
                  <p className={styles.kicker}>{selected.release}</p>
                  <h3>{selected.programme}</h3>
                </div>
                <button className={styles.iconButton} type="button" onClick={close} ref={closeRef} aria-label="Close record">
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <div className={styles.drawerSection}>
                <span className={styles.badge} data-tone={tone(selected.status)}>{selected.status}</span>
                <p>{selected.note}</p>
              </div>
              <div className={styles.drawerSection}>
                <p className={styles.kicker}>Source record</p>
                <p>{selected.sourceState}. Last reviewed {selected.lastReviewed}. A live record would require an official source link, issuing authority and retrieval date.</p>
                <span className={styles.subtle}><ExternalLink size={13} aria-hidden="true" /> Fictional source · no official notice linked</span>
              </div>
              <div className={styles.drawerSection}>
                <p className={styles.kicker}>Release history</p>
                <p>Draft → adviser review → published. Proposed values stay out of client comparisons and reports until approved.</p>
              </div>
              <div className={styles.drawerSection}>
                <p className={styles.kicker}>Matters requiring review</p>
                <p>{changeEvents[0].affectedCases} fictional matters and {changeEvents[0].affectedReports} example adviser report would require review if the pending value is approved.</p>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

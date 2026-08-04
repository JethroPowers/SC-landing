"use client";

import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, Database, Layers3 } from "lucide-react";

const paths = [
  {
    id: "case",
    label: "One messy case",
    title: "Start with a Case Control Sprint",
    fit: "A live, recent or anonymised matter is difficult to track.",
    output: "Case map, family profile, cost model, missing items, blockers, owners, deadlines, advisor report and client status.",
    icon: BriefcaseBusiness
  },
  {
    id: "data",
    label: "Scattered programme data",
    title: "Start with a Programme & Pricing Control Sprint",
    fit: "Fees, route rules, dependant logic or proposal assumptions are inconsistent across the firm.",
    output: "Five structured programme records, source notes, route tables, effective dates, change log and review workflow.",
    icon: Database
  },
  {
    id: "workspace",
    label: "Multiple active matters",
    title: "Start with a Workspace Pilot",
    fit: "The firm is ready to manage active matters, programme records, documents, blockers and client status through one maintained workspace.",
    output: "Active case dashboard, programme intelligence, document readiness, owner tracking, programme-change alerts and monthly review.",
    icon: Layers3
  }
];

export function StartPathSelector() {
  const [activeId, setActiveId] = useState(paths[0].id);
  const active = paths.find((path) => path.id === activeId) ?? paths[0];
  const Icon = active.icon;

  return (
    <div className="start-selector">
      <div className="start-selector-options" aria-label="Choose a starting point">
        {paths.map((path) => (
          <button
            aria-pressed={path.id === active.id}
            className={path.id === active.id ? "active" : undefined}
            key={path.id}
            type="button"
            onClick={() => setActiveId(path.id)}
          >
            {path.label}
          </button>
        ))}
      </div>
      <div className="start-selector-result" aria-live="polite">
        <div className="fragment-icon" aria-hidden="true">
          <Icon size={19} />
        </div>
        <div>
          <h3>{active.title}</h3>
          <p><strong>Use when:</strong> {active.fit}</p>
          <p><strong>What it creates:</strong> {active.output}</p>
        </div>
        <ArrowRight size={20} aria-hidden="true" />
      </div>
    </div>
  );
}

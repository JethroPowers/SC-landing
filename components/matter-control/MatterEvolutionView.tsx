"use client";

import {
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  FileLock2,
  FolderOpen,
  GitBranch,
  MapPinned,
  ShieldCheck,
  UserRoundCheck,
  UsersRound
} from "lucide-react";
import type { FictionalMatterFixture } from "@/lib/matter-control-fixture";
import styles from "./MatterControl.module.css";

type EvolutionState = "selected" | "minimised" | "mapped";

const routeContexts = [
  ["Route A", "Mobility-led option", "Firm review"],
  ["Route B", "Residence-led option", "Evidence check"],
  ["Route C", "Long-term residence", "Change flagged"],
  ["Route D", "Reserve route", "Assumption held"]
];

function SelectedMatter({ matter }: { matter: FictionalMatterFixture }) {
  const facts = [
    { label: "Household", value: matter.household, icon: UsersRound },
    { label: "Objective", value: matter.objective, icon: BriefcaseBusiness },
    { label: "Routes", value: `${matter.routeCount} under consideration`, icon: GitBranch },
    { label: "Next review", value: matter.nextReviewDate, icon: CalendarClock }
  ];

  return (
    <div className={styles.evolutionSelected}>
      <div className={styles.evolutionIdentity}>
        <span>Fictional matter</span>
        <strong>{matter.reference}</strong>
        <small>{matter.status}</small>
        <div>
          <ShieldCheck size={17} aria-hidden="true" />
          Approved diagnostic boundary
        </div>
      </div>
      <div className={styles.evolutionFactGrid}>
        {facts.map(({ label, value, icon: Icon }) => (
          <div key={label}>
            <Icon size={16} aria-hidden="true" />
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function MinimisedMatter({ matter }: { matter: FictionalMatterFixture }) {
  const received = [
    ["Pseudonymous reference", matter.reference],
    ["Household outline", "Principal, spouse, two children"],
    ["Operational objective", "Mobility plus residence option"],
    ["Existing record locations", "Referenced, not recopied"]
  ];

  return (
    <div className={styles.evolutionMinimised}>
      <div className={styles.evolutionColumn}>
        <div className={styles.evolutionSectionTitle}>
          <FolderOpen size={17} aria-hidden="true" />
          <div>
            <span>Received</span>
            <strong>Minimised operational states</strong>
          </div>
        </div>
        <div className={styles.evolutionRows}>
          {received.map(([label, value]) => (
            <div key={label}>
              <CheckCircle2 size={15} aria-hidden="true" />
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.evolutionColumnMuted}>
        <div className={styles.evolutionSectionTitle}>
          <FileLock2 size={17} aria-hidden="true" />
          <div>
            <span>Outside intake</span>
            <strong>High-sensitivity source files</strong>
          </div>
        </div>
        <ul>
          <li>No passports</li>
          <li>No bank statements</li>
          <li>No source-of-wealth files</li>
          <li>No identifiable data in public AI tools</li>
        </ul>
      </div>
    </div>
  );
}

function MappedMatter({ matter }: { matter: FictionalMatterFixture }) {
  return (
    <div className={styles.evolutionMapped}>
      <div className={styles.evolutionMapHead}>
        <div>
          <MapPinned size={18} aria-hidden="true" />
          <span>Current-state matter map</span>
        </div>
        <strong>{matter.reference}</strong>
      </div>
      <div className={styles.evolutionMapContext}>
        <div>
          <UsersRound size={16} aria-hidden="true" />
          <span>Household</span>
          <strong>{matter.household}</strong>
        </div>
        <div>
          <BriefcaseBusiness size={16} aria-hidden="true" />
          <span>Objective</span>
          <strong>{matter.objective}</strong>
        </div>
        <div>
          <UserRoundCheck size={16} aria-hidden="true" />
          <span>Firm sponsor</span>
          <strong>Firm adviser</strong>
        </div>
      </div>
      <div className={styles.evolutionRouteList}>
        {routeContexts.map(([route, purpose, state]) => (
          <div key={route}>
            <span>{route}</span>
            <strong>{purpose}</strong>
            <small>{state}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MatterEvolutionView({
  matter,
  state
}: {
  matter: FictionalMatterFixture;
  state: EvolutionState;
}) {
  return (
    <div
      className={styles.evolutionView}
      data-testid={`matter-evolution-${state}`}
    >
      {state === "selected" ? <SelectedMatter matter={matter} /> : null}
      {state === "minimised" ? <MinimisedMatter matter={matter} /> : null}
      {state === "mapped" ? <MappedMatter matter={matter} /> : null}
    </div>
  );
}

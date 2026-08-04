"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, CircleAlert, FileText, UserRoundCheck } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const moments = [
  {
    id: "case",
    label: "Messy case",
    title: "The case cannot move because the blocker is buried in the workflow.",
    outcome: "The firm can see the owner, missing item and next action in one view.",
    status: "Blocked",
    rows: [
      ["Current stage", "Document collection"],
      ["Main blocker", "Source-of-funds review"],
      ["Owner", "Private Client Advisor"],
      ["Next action", "Confirm route preference and source notes"]
    ]
  },
  {
    id: "cost",
    label: "Family pricing",
    title: "Headline programme minimums do not answer the family-cost question.",
    outcome: "The advisor sees real household assumptions before discussing routes.",
    status: "Needs advisor review",
    rows: [
      ["Household", "Main applicant, spouse, two children"],
      ["Budget range", "£350k-£500k equivalent"],
      ["Routes", "Contribution and property route open"],
      ["Review required", "Children's ages and latest fee schedule"]
    ]
  },
  {
    id: "change",
    label: "Programme change",
    title: "A draft fee change may affect active cases and old reports.",
    outcome: "The firm sees which materials may need review before publishing the update.",
    status: "Pending review",
    rows: [
      ["Changed field", "Dominica family contribution"],
      ["Old value", "£155k"],
      ["Draft value", "£165k"],
      ["Affected outputs", "2 scenarios and 1 advisor report"]
    ]
  },
  {
    id: "client",
    label: "Client status",
    title: "The client needs progress without seeing every internal note.",
    outcome: "The firm can show what is complete, missing, blocked and next.",
    status: "Client action required",
    rows: [
      ["Client stage", "Programme comparison and document preparation"],
      ["Complete", "Initial profile and passport copies"],
      ["Missing", "Police certificates and references"],
      ["Next milestone", "Advisor recommendation after review"]
    ]
  }
];

export function ControlRoomTour() {
  const [activeId, setActiveId] = useState(moments[0].id);
  const active = moments.find((moment) => moment.id === activeId) ?? moments[0];

  return (
    <div className="control-tour">
      <div className="control-tour-menu" aria-label="Control room moments">
        {moments.map((moment) => (
          <button
            aria-pressed={moment.id === active.id}
            className={moment.id === active.id ? "active" : undefined}
            key={moment.id}
            type="button"
            onClick={() => setActiveId(moment.id)}
          >
            {moment.id === "case" ? <CircleAlert size={17} aria-hidden="true" /> : null}
            {moment.id === "cost" ? <UserRoundCheck size={17} aria-hidden="true" /> : null}
            {moment.id === "change" ? <ArrowRight size={17} aria-hidden="true" /> : null}
            {moment.id === "client" ? <FileText size={17} aria-hidden="true" /> : null}
            <span>{moment.label}</span>
          </button>
        ))}
      </div>
      <div className="control-tour-stage" aria-live="polite">
        <div className="control-tour-copy">
          <div className="panel-header">
            <h2>{active.title}</h2>
            <StatusBadge>{active.status}</StatusBadge>
          </div>
          <p className="lead">{active.outcome}</p>
        </div>
        <div className="control-tour-table">
          {active.rows.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="control-tour-result">
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>
            This is the difference between storing information and controlling
            the operating state of the matter.
          </span>
        </div>
      </div>
    </div>
  );
}

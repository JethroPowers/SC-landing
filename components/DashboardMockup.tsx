import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Database,
  FileText,
  FolderKanban,
  Mail,
  MessageSquare,
  Sheet,
  SquareArrowOutUpRight
} from "lucide-react";
import { caseBlockers, caseDocuments } from "@/lib/control-room-data";
import { StatusBadge } from "@/components/StatusBadge";

export function DashboardMockup() {
  const programmes = [
    ["St Kitts", "72%"],
    ["Grenada", "64%"],
    ["Dominica", "49%"],
    ["St Lucia", "58%"]
  ] as const;

  return (
    <div className="visual-shell mockup" aria-label="Sovereignty Control case dashboard mockup">
      <div className="mockup-topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-label">Control room operating view</span>
      </div>
      <div className="mockup-body">
        <div className="mock-panel light">
          <div
            style={{
              alignItems: "flex-start",
              display: "flex",
              justifyContent: "space-between",
              gap: 12
            }}
          >
            <div>
              <p className="mock-copy">Case</p>
              <p className="mock-title">British family of four - Caribbean CBI comparison</p>
            </div>
            <StatusBadge>Client action required</StatusBadge>
          </div>
          <div className="mock-stat-grid">
            <div className="mock-stat">
              <span>Status</span>
              <strong>Document collection</strong>
            </div>
            <div className="mock-stat">
              <span>Budget</span>
              <strong>£350k-£500k</strong>
            </div>
            <div className="mock-stat">
              <span>Missing documents</span>
              <strong>3</strong>
            </div>
            <div className="mock-stat">
              <span>Blockers</span>
              <strong>1</strong>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="mock-panel">
            <p className="mock-title">Programmes compared</p>
            <div className="programme-bars">
              {programmes.map(([label, width]) => (
                <div className="programme-bar" key={label}>
                  <span>{label}</span>
                  <div className="programme-bar-track" aria-hidden="true">
                    <span style={{ width }} />
                  </div>
                  <span>{width}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mock-panel">
            <table className="mock-table">
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Next action</td>
                  <td>Complete source-of-funds review</td>
                </tr>
                <tr>
                  <td>Advisor owner</td>
                  <td>Private Client Team</td>
                </tr>
                <tr>
                  <td>Intelligence release</td>
                  <td>July 2026 draft pending review</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MessFragments() {
  const fragments = [
    {
      label: "Email thread",
      value: "Client asks whether Grenada still fits the budget.",
      meta: "Status unclear",
      icon: Mail
    },
    {
      label: "WhatsApp note",
      value: "Police certificate arriving next week.",
      meta: "Not in tracker",
      icon: MessageSquare
    },
    {
      label: "Old fee table",
      value: "Dominica contribution figure from earlier proposal.",
      meta: "May be stale",
      icon: Sheet
    },
    {
      label: "PDF proposal",
      value: "Four programmes, two route assumptions and no review state.",
      meta: "Needs audit",
      icon: FileText
    }
  ];

  return (
    <div className="fragment-grid" aria-label="Scattered case fragments">
      {fragments.map((fragment) => {
        const Icon = fragment.icon;
        return (
          <article className="fragment-card" key={fragment.label}>
            <div className="fragment-icon" aria-hidden="true">
              <Icon size={18} />
            </div>
            <div>
              <p className="micro">{fragment.label}</p>
              <strong>{fragment.value}</strong>
              <span>{fragment.meta}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function SystemMapMockup() {
  const rows = [
    ["Client and family", "Applicant, spouse, children, dependant rules"],
    ["Programme options", "Routes, fees, effective dates, risk notes"],
    ["Document readiness", "Complete, missing, expired, needs review"],
    ["Blockers and owners", "Source-of-funds, route preference, advisor review"],
    ["Client status", "Current stage, next action, expected milestone"]
  ];

  return (
    <div className="visual-shell system-map" aria-label="System mapping mockup">
      <div className="mockup-topbar">
        <span className="mockup-label">Mess structured into fields</span>
        <span className="mockup-label">Draft review active</span>
      </div>
      <div className="system-map-body">
        {rows.map(([label, value], index) => (
          <div className="system-map-row" key={label}>
            <div className="dependency-node">{index + 1}</div>
            <div>
              <strong>{label}</strong>
              <p className="small">{value}</p>
            </div>
            <StatusBadge>{index === 1 ? "Pending review" : "Confirmed"}</StatusBadge>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProgrammeImpactMockup() {
  return (
    <div className="impact-panel" aria-label="Programme change impact mockup">
      <div className="impact-header">
        <div>
          <p className="micro">Programme change impact</p>
          <h3>Dominica family contribution fee</h3>
        </div>
        <StatusBadge>Pending review</StatusBadge>
      </div>
      <div className="impact-values">
        <div>
          <span>Old value</span>
          <strong>£155k</strong>
        </div>
        <ArrowRight size={18} aria-hidden="true" />
        <div>
          <span>Draft value</span>
          <strong>£165k</strong>
        </div>
      </div>
      <div className="impact-list">
        <div>
          <FolderKanban size={17} aria-hidden="true" />
          <span>2 active case scenarios may need review</span>
        </div>
        <div>
          <FileText size={17} aria-hidden="true" />
          <span>1 advisor report contains the old estimate</span>
        </div>
        <div>
          <Database size={17} aria-hidden="true" />
          <span>Source note and effective date required before publish</span>
        </div>
      </div>
    </div>
  );
}

export function DemoDataNotice() {
  return (
    <div className="demo-notice">
      <SquareArrowOutUpRight size={17} aria-hidden="true" />
      <span>
        Demo data only. Indicative figures and programme notes are placeholders
        for product demonstration and require professional review.
      </span>
    </div>
  );
}

export function ProgrammeChangeLog() {
  const changes = [
    {
      date: "24 Jul 2026",
      change: "Dominica family contribution fee changed in draft release.",
      status: "Pending review"
    },
    {
      date: "18 Jul 2026",
      change: "Grenada due diligence note updated with new source reference.",
      status: "Source required"
    },
    {
      date: "08 Jul 2026",
      change: "St Lucia processing-time range confirmed after advisor review.",
      status: "Confirmed"
    }
  ];

  return (
    <div className="change-log" aria-label="Programme change log mockup">
      {changes.map((item) => (
        <div className="change-item" key={item.change}>
          <span className="micro">{item.date}</span>
          <span>{item.change}</span>
          <StatusBadge>{item.status}</StatusBadge>
        </div>
      ))}
    </div>
  );
}

export function DocumentReadinessMockup() {
  return (
    <div className="document-grid" aria-label="Document readiness checklist">
      {caseDocuments.map((item) => (
        <div className="document-item" key={item.id}>
          <span>{item.name}</span>
          <StatusBadge>{item.status}</StatusBadge>
        </div>
      ))}
    </div>
  );
}

export function ClientStatusPanel() {
  return (
    <div className="status-panel" aria-label="Client-facing status panel">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
        <div>
          <p className="micro">Client-facing status</p>
          <h3>Programme comparison and document preparation</h3>
        </div>
        <StatusBadge>Client action required</StatusBadge>
      </div>
      <p className="muted">
        Your case is currently in programme comparison and document preparation.
        The next step is to confirm family details and complete source-of-funds
        review before a programme recommendation is finalised.
      </p>
      <div className="status-steps" aria-label="Case progress">
        <span className="status-step done">Initial profile</span>
        <span className="status-step current">Comparison</span>
        <span className="status-step">Document review</span>
        <span className="status-step">Recommendation</span>
      </div>
    </div>
  );
}

export function AdvisorReportPreview() {
  const rows = [
    ["Programme shortlist", "St Kitts and Nevis, Grenada, Dominica, St Lucia"],
    ["Cost comparison", "Family-adjusted demo model with review-required assumptions"],
    ["Key trade-offs", "Budget certainty, processing range, family inclusion, source-of-funds depth"],
    ["Next actions", "Confirm ages, route preference, source-of-funds notes and latest fees"],
    ["Professional review required", "Legal, tax, immigration and investment advice remain with qualified professionals"]
  ];

  return (
    <div className="report-preview" aria-label="Advisor report preview">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <p className="micro">Advisor report preview</p>
          <h3>British family of four - Caribbean CBI comparison</h3>
        </div>
        <StatusBadge>Needs advisor review</StatusBadge>
      </div>
      {rows.map(([label, value]) => (
        <div className="report-row" key={label}>
          <strong>{label}</strong>
          <span className="muted">{value}</span>
        </div>
      ))}
    </div>
  );
}

export function DependencyMap() {
  const steps = [
    ["Company setup", "Corporate documents and entity approval"],
    ["Residence visa", "Primary applicant file and immigration submission"],
    ["Family visas", "Dependent files and relationship documents"],
    ["Banking", "KYC, source-of-funds and account-opening sequence"],
    ["Tax residency evidence", "Presence, lease, utilities and supporting records"]
  ];

  return (
    <div className="dependency-map" aria-label="Dependency map">
      {steps.map(([title, description], index) => (
        <div key={title}>
          <div className="dependency-row">
            <div className="dependency-node">{index + 1}</div>
            <div className="dependency-step">
              {index === 0 ? (
                <CheckCircle2 size={20} aria-hidden="true" />
              ) : index === 1 ? (
                <Clock3 size={20} aria-hidden="true" />
              ) : index === 3 ? (
                <CircleAlert size={20} aria-hidden="true" />
              ) : (
                <ArrowRight size={20} aria-hidden="true" />
              )}
              <div>
                <strong>{title}</strong>
                <p className="small">{description}</p>
              </div>
            </div>
          </div>
          {index < steps.length - 1 ? <div className="dependency-line" aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}

export function BlockerList() {
  return (
    <div className="problem-list">
      {caseBlockers.map((blocker) => (
        <div className="problem-row" key={blocker.id}>
          <CircleAlert size={18} aria-hidden="true" />
          <span>{blocker.title}</span>
        </div>
      ))}
    </div>
  );
}

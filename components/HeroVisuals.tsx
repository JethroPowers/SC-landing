import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  CircleAlert,
  Database,
  FileText,
  FolderKanban,
  LockKeyhole,
  ShieldAlert
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

export function HomeControlHero() {
  return (
    <div className="hero-control-room">
      <div className="hero-control-head">
        <div>
          <span>Live matter</span>
          <strong>British family of four</strong>
        </div>
        <StatusBadge>Client action required</StatusBadge>
      </div>
      <div className="hero-control-grid">
        <div>
          <span>Blocked by</span>
          <strong>Source-of-funds review</strong>
        </div>
        <div>
          <span>Next action</span>
          <strong>Confirm dependant eligibility</strong>
        </div>
        <div>
          <span>Programmes</span>
          <strong>St Kitts, Grenada, Dominica, St Lucia</strong>
        </div>
        <div>
          <span>Intelligence release</span>
          <strong>July draft pending review</strong>
        </div>
      </div>
    </div>
  );
}

export function ControlSystemHeroVisual() {
  return (
    <div className="hero-system-board">
      {[
        ["Intelligence", "Programme rules, source notes, route data"],
        ["Scenario", "Family costs and review assumptions"],
        ["Case", "Owners, blockers, deadlines, next action"],
        ["Client", "Status summary and next milestone"]
      ].map(([title, text], index) => (
        <div key={title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{title}</strong>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export function OffersHeroVisual() {
  return (
    <div className="hero-offer-ladder">
      {[
        ["Sprint", "One messy case", "7-10 working days"],
        ["Control", "Five programme records", "10-14 working days"],
        ["Workspace", "Multiple active matters", "Monthly review"]
      ].map(([step, title, meta]) => (
        <div key={step}>
          <span>{step}</span>
          <strong>{title}</strong>
          <small>{meta}</small>
        </div>
      ))}
    </div>
  );
}

export function UseCasesHeroVisual() {
  const cases = [
    ["CBI/RBI firm", "Family-cost comparisons", "Needs advisor review"],
    ["UAE relocation", "Visa, company, banking sequence", "Blocked"],
    ["Caribbean agent", "Submission readiness", "Client action required"],
    ["Private client", "Immigration, tax, banking handoffs", "Pending review"]
  ];

  return (
    <div className="hero-usecase-matrix">
      {cases.map(([firm, work, status]) => (
        <div key={firm}>
          <BriefcaseBusiness size={18} aria-hidden="true" />
          <strong>{firm}</strong>
          <span>{work}</span>
          <StatusBadge>{status}</StatusBadge>
        </div>
      ))}
    </div>
  );
}

export function IntelligenceHeroVisual() {
  return (
    <div className="hero-registry-card">
      <div className="hero-registry-row header">
        <span>Field</span>
        <span>State</span>
        <span>Use</span>
      </div>
      {[
        ["Route fee", "Draft", "Cost model"],
        ["Source note", "Source required", "Advisor review"],
        ["Physical presence", "Confirmed", "Client report"],
        ["Risk note", "Pending review", "Proposal check"]
      ].map(([field, state, use]) => (
        <div className="hero-registry-row" key={field}>
          <strong>{field}</strong>
          <StatusBadge>{state}</StatusBadge>
          <span>{use}</span>
        </div>
      ))}
    </div>
  );
}

export function DemoCaseHeroVisual() {
  return (
    <div className="hero-case-file">
      <div className="hero-case-file-top">
        <FileText size={20} aria-hidden="true" />
        <div>
          <span>Demo case file</span>
          <strong>Caribbean CBI comparison</strong>
        </div>
      </div>
      <div className="hero-case-file-body">
        <div><span>Applicant</span><strong>British national</strong></div>
        <div><span>Family</span><strong>Spouse and two children</strong></div>
        <div><span>Budget</span><strong>£350k-£500k</strong></div>
        <div><span>Main blocker</span><strong>Budget certainty</strong></div>
      </div>
    </div>
  );
}

export function MethodHeroVisual() {
  return (
    <div className="hero-method-runbook">
      {[
        ["Start", "One anonymised matter or five programmes"],
        ["Map", "Where the work currently lives"],
        ["Build", "Case view, model, documents, blockers"],
        ["Review", "Assumptions and advice boundaries"],
        ["Workspace", "Case files used across the team"]
      ].map(([step, text], index) => (
        <div key={step}>
          <span>{index + 1}</span>
          <strong>{step}</strong>
          <p>{text}</p>
          {index < 4 ? <ArrowRight size={17} aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}

export function AboutHeroVisual() {
  return (
    <div className="hero-founder-note">
      <div>
        <Database size={19} aria-hidden="true" />
        <strong>Intelligence foundation</strong>
        <span>Programme routes, fees, dependant rules and sources.</span>
      </div>
      <div>
        <FolderKanban size={19} aria-hidden="true" />
        <strong>Control direction</strong>
        <span>Applicants, documents, due diligence and deadlines.</span>
      </div>
      <div>
        <CheckCircle2 size={19} aria-hidden="true" />
        <strong>Founder-led</strong>
        <span>Built with early specialist firms handling live matters.</span>
      </div>
    </div>
  );
}

export function ContactHeroVisual() {
  return (
    <div className="hero-intake-card">
      <div>
        <CalendarClock size={19} aria-hidden="true" />
        <strong>Private walkthrough</strong>
        <span>Use an anonymised matter or programme set only.</span>
      </div>
      <div>
        <LockKeyhole size={19} aria-hidden="true" />
        <strong>No client-identifiable information</strong>
        <span>Keep sensitive matter details out of the form.</span>
      </div>
      <div>
        <ArrowRight size={19} aria-hidden="true" />
        <strong>Choose a path</strong>
        <span>Case sprint, programme sprint or workspace pilot.</span>
      </div>
    </div>
  );
}

export function PolicyHeroVisual({ type }: { type: "privacy" | "disclaimer" }) {
  return (
    <div className="hero-policy-card">
      {type === "privacy" ? <LockKeyhole size={26} aria-hidden="true" /> : <ShieldAlert size={26} aria-hidden="true" />}
      <strong>{type === "privacy" ? "Sensitive data stays out of enquiry forms." : "Professional advice stays with qualified firms."}</strong>
      <p>
        {type === "privacy"
          ? "Use the demo request for firm details and a high-level description of the case problem only."
          : "Sovereignty Control records case information; it does not make legal, tax, immigration or investment decisions."}
      </p>
      <div>
        <CircleAlert size={17} aria-hidden="true" />
        <span>Review assumptions before client-facing use.</span>
      </div>
    </div>
  );
}

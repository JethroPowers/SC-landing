export type MatterStatus = "ready" | "attention" | "dependency" | "blocked";

export type MatterControlStep = {
  id: string;
  title: string;
  shortTitle: string;
  sovereigntyControl: string;
  firmResponsibility: string;
  recordChange: string;
  output: string;
};

export type WorkspaceViewId =
  | "matter"
  | "readiness"
  | "review"
  | "change"
  | "closeout";

export type ReadinessMetric = {
  label: string;
  value: string;
  note: string;
  status: MatterStatus;
};

export type DependencyRecord = {
  item: string;
  owner: string;
  timing: string;
  status: MatterStatus;
};

export type ReviewQuestion = {
  question: string;
  context: string;
  consequence: string;
  owner: string;
  status: MatterStatus;
};

export type ChangeImpactRecord = {
  change: string;
  source: string;
  publicationDate: string;
  effectiveDate: string;
  route: string;
  previousValue: string;
  currentValue: string;
  verificationStatus: string;
  sequence: string[];
};

export type CloseoutOutput = {
  title: string;
  sample: string;
  status: MatterStatus;
};

export type FictionalMatterFixture = {
  fictionalLabel: string;
  reference: string;
  household: string;
  objective: string;
  routeCount: number;
  status: string;
  nextReviewDate: string;
  currentStage: string;
  matterFacts: Array<{ label: string; value: string }>;
  currentIssues: Array<{ label: string; value: string; status: MatterStatus }>;
  steps: MatterControlStep[];
  readinessMetrics: ReadinessMetric[];
  dependencies: DependencyRecord[];
  reviewQuestions: ReviewQuestion[];
  changeImpact: ChangeImpactRecord;
  closeoutOutputs: CloseoutOutput[];
  diagnostic: {
    fee: string;
    scope: string;
    timing: string;
    obligation: string;
    communicationBoundary: string;
  };
  dataBoundaries: string[];
};

export const fictionalMatter: FictionalMatterFixture = {
  fictionalLabel: "Fictional demonstration matter",
  reference: "SC-024",
  household: "Principal applicant, spouse and two children",
  objective: "Mobility plus a long-term residence option",
  routeCount: 4,
  status: "Attention required",
  nextReviewDate: "12 August 2026",
  currentStage: "Matter reconstructed · blockers being controlled",
  matterFacts: [
    { label: "Reference", value: "SC-024" },
    { label: "Household", value: "Principal applicant, spouse and two children" },
    { label: "Objective", value: "Mobility plus a long-term residence option" },
    { label: "Routes", value: "Four programme routes under consideration" }
  ],
  currentIssues: [
    { label: "Evidence", value: "Three items missing", status: "attention" },
    {
      label: "Advisor direction",
      value: "One source-of-funds question",
      status: "blocked"
    },
    {
      label: "Provider response",
      value: "Overdue by six days",
      status: "dependency"
    },
    {
      label: "Programme assumption",
      value: "One government-fee value superseded",
      status: "attention"
    },
    { label: "Next actions", value: "Two without owners", status: "attention" }
  ],
  steps: [
    {
      id: "selected",
      shortTitle: "Matter selected",
      title: "A suitable matter is selected and bounded.",
      sovereigntyControl:
        "Checks that the matter can be reconstructed from minimised operational information and records the agreed diagnostic scope.",
      firmResponsibility:
        "Selects the matter, keeps the client relationship and approves the participation, communication and data boundaries.",
      recordChange:
        "SC-024 is opened with a pseudonymous reference, household outline, objective, four route contexts and named firm sponsor.",
      output: "Approved intake gate and diagnostic scope."
    },
    {
      id: "received",
      shortTitle: "Information minimised and received",
      title: "Only the operational information needed is received.",
      sovereigntyControl:
        "Structures the firm's existing status information without requesting a new document vault or raw high-sensitivity files.",
      firmResponsibility:
        "Supplies accurate operational context and retains custody of source documents, client identities and professional records.",
      recordChange:
        "Known facts, missing facts, document states, existing location references and sensitivity flags are recorded.",
      output: "Minimised intake record and information-gap list."
    },
    {
      id: "mapped",
      shortTitle: "Matter map reconstructed",
      title: "The scattered matter is reconstructed into one current map.",
      sovereigntyControl:
        "Reconciles the household, intended outcome, four possible routes, timeline, responsible people and latest known position.",
      firmResponsibility:
        "Confirms factual accuracy and remains responsible for route interpretation, suitability and all client advice.",
      recordChange:
        "A single current-state matter map replaces six partial views across messages, files, notes and memory.",
      output: "Current-state matter map."
    },
    {
      id: "registered",
      shortTitle: "Evidence and dependencies registered",
      title: "Evidence states and external dependencies become explicit.",
      sovereigntyControl:
        "Registers 21 evidence items, four dependencies, due dates, existing file references and escalation points.",
      firmResponsibility:
        "Determines what evidence is legally or professionally sufficient and reviews any underlying documents.",
      recordChange:
        "Eighteen items are marked complete, three missing, four dependencies open and one dependency overdue.",
      output: "Document-readiness and dependency registers."
    },
    {
      id: "controlled",
      shortTitle: "Blockers assigned and controlled",
      title: "Blockers are named, assigned and controlled.",
      sovereigntyControl:
        "Ages each blocker, records the last and next action, assigns operational owners and exposes overdue or unowned work.",
      firmResponsibility:
        "Acts on escalated professional questions and approves any communication outside the diagnostic's no-contact boundary.",
      recordChange:
        "The six-day provider delay, source-of-funds question and two ownership gaps are visible in the control record.",
      output: "Blocker register, ownership gaps and escalation plan."
    },
    {
      id: "review",
      shortTitle: "Advisor-review questions prepared",
      title: "Unresolved issues become specific advisor-review questions.",
      sovereigntyControl:
        "Prepares concise context, evidence state, consequence and requested decision for each professional review point.",
      firmResponsibility:
        "Confirms the source-of-funds direction, dependent treatment, programme assumptions and all professional effects.",
      recordChange:
        "Two questions enter the review queue and the superseded government-fee assumption is held for confirmation.",
      output: "Advisor-review questions and programme-assumption register."
    },
    {
      id: "closeout",
      shortTitle: "Closeout and next actions agreed",
      title: "The controlled record is reviewed, corrected and closed out.",
      sovereigntyControl:
        "Walks through the record, applies one factual correction round and prepares prioritised actions for the next 30 days.",
      firmResponsibility:
        "Approves factual corrections, professional positions, owners and whether any further validation stage is justified.",
      recordChange:
        "Immediate actions, owners, target dates, retention decision, feedback and next-stage decision are recorded.",
      output: "Final diagnostic record and closeout summary."
    }
  ],
  readinessMetrics: [
    {
      label: "Evidence complete",
      value: "18 / 21",
      note: "Three items remain missing",
      status: "attention"
    },
    {
      label: "Open dependencies",
      value: "4",
      note: "One is overdue",
      status: "dependency"
    },
    {
      label: "Advisor-review questions",
      value: "2",
      note: "Prepared for decision",
      status: "attention"
    },
    {
      label: "Assumption to confirm",
      value: "1",
      note: "Superseded fee value",
      status: "blocked"
    }
  ],
  dependencies: [
    {
      item: "Provider suitability confirmation",
      owner: "Daniel Okoro · Provider liaison",
      timing: "Overdue by 6 days",
      status: "dependency"
    },
    {
      item: "Child 2 education evidence",
      owner: "Amelia Grant · Case manager",
      timing: "Due 11 Aug",
      status: "attention"
    },
    {
      item: "Source-of-funds direction",
      owner: "Priya Shah · Firm advisor",
      timing: "Advisor decision required",
      status: "blocked"
    },
    {
      item: "Certified relationship record",
      owner: "Marcus Reed · Client operations",
      timing: "Due 14 Aug",
      status: "ready"
    }
  ],
  reviewQuestions: [
    {
      question:
        "What source-of-funds evidence is sufficient before the firm advances any route recommendation?",
      context:
        "The operational record contains an asset-sale summary, but the required professional evidence threshold has not been confirmed.",
      consequence:
        "Route recommendation and client-facing wording remain blocked.",
      owner: "Priya Shah · Firm advisor",
      status: "blocked"
    },
    {
      question:
        "Does the dependent-eligibility change alter Child 1's treatment for Route C?",
      context:
        "A fictional source notice records a new age-and-education condition with a future effective date.",
      consequence:
        "The route remains visible, but no professional effect is applied until the firm confirms it.",
      owner: "Elena Moore · Immigration counsel",
      status: "attention"
    }
  ],
  changeImpact: {
    change: "Dependent-eligibility condition amended for Route C",
    source: "Fictional Mobility Ministry Notice 18/2026",
    publicationDate: "29 July 2026",
    effectiveDate: "15 August 2026",
    route: "Route C · Long-term residence",
    previousValue: "Dependent children under 26 where financially dependent",
    currentValue: "Dependent children under 23 and in full-time education",
    verificationStatus: "Source recorded · professional effect pending firm confirmation",
    sequence: [
      "Source change detected",
      "Effective date recorded",
      "Affected route identified",
      "Active matter flagged",
      "Advisor confirmation requested"
    ]
  },
  closeoutOutputs: [
    {
      title: "Matter map",
      sample: "Household, four routes, current stage, responsible people and last review.",
      status: "ready"
    },
    {
      title: "Document-readiness register",
      sample: "21 evidence items with 18 complete and three missing.",
      status: "attention"
    },
    {
      title: "Blocker and dependency register",
      sample: "Four dependencies, one six-day overdue response and two owner gaps corrected.",
      status: "dependency"
    },
    {
      title: "Advisor-review questions",
      sample: "Two decision questions with context, evidence state and consequence.",
      status: "blocked"
    },
    {
      title: "Programme-assumption register",
      sample: "One superseded government-fee assumption held for confirmation.",
      status: "attention"
    },
    {
      title: "Immediate action plan",
      sample: "Six dated actions for the next 30 days with named owners.",
      status: "ready"
    },
    {
      title: "Closeout summary",
      sample: "Factual corrections, feedback, retention decision and explicit next-stage decision.",
      status: "ready"
    }
  ],
  diagnostic: {
    fee: "Complimentary",
    scope: "One active, recent or anonymised matter",
    timing: "Seven to ten working days",
    obligation: "No obligation to continue",
    communicationBoundary:
      "No contact with the firm's client, provider or authority during this stage"
  },
  dataBoundaries: [
    "No passports",
    "No bank statements",
    "No source-of-wealth files",
    "Pseudonymous matter references wherever possible",
    "No identifiable client information in public or consumer AI tools",
    "No legal advice or regulated judgement",
    "Participation and data-handling note agreed before intake"
  ]
};

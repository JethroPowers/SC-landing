export type CaseStageId = "intake" | "model" | "control" | "communicate";

export type ReviewStatus =
  | "Complete"
  | "Missing"
  | "Needs review"
  | "Not started"
  | "Blocked"
  | "Pending review"
  | "Published"
  | "Draft"
  | "Source required"
  | "Client action required";

export type CaseStage = {
  id: CaseStageId;
  number: string;
  title: string;
  summary: string;
  outcome: string;
};

export type ProgrammeOption = {
  id: string;
  programme: string;
  route: string;
  indicativeMinimum: string;
  familyFees: string;
  dueDiligence: string;
  estimatedTotal: string;
  confidence: "Low" | "Medium" | "High";
  reviewRequired: string;
  processingTime: string;
  presence: string;
  familyInclusion: string;
  risk: string;
};

export type DocumentItem = {
  id: string;
  name: string;
  person: string;
  status: ReviewStatus;
};

export type Blocker = {
  id: string;
  title: string;
  owner: string;
  effect: string;
  status: ReviewStatus;
};

export type ChangeEvent = {
  id: string;
  programme: string;
  field: string;
  oldValue: string;
  proposedValue: string;
  effectiveDate: string;
  source: string;
  reviewer: string;
  status: ReviewStatus;
  affectedCases: number;
  affectedReports: number;
};

export type ClientStatus = {
  stage: string;
  status: ReviewStatus;
  message: string;
  completed: string[];
  missing: string[];
  nextMilestone: string;
};

export type OfferPath = {
  id: "case-control" | "programme-control" | "workspace";
  step: string;
  title: string;
  price: string;
  timing: string;
  useWhen: string;
  outcome: string;
  buyingTrigger: string;
  workPerformed: string;
  firmOutcome: string;
  engagementFormat: string;
  deliverables: string[];
  next: string;
};

export type BusinessOutcome = {
  id: string;
  title: string;
  description: string;
};

export type MatterConsequence = {
  id: string;
  problem: string;
  effect: string;
};

export type ManagedServiceStage = {
  id: "map" | "structure" | "configure" | "maintain";
  number: string;
  title: string;
  description: string;
  evidence: string;
};

export type ProgrammeChangeStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  result: string;
};

export type LiveMatterStage = {
  id: "scattered" | "structured" | "controlled";
  number: string;
  title: string;
  description: string;
  result: string;
};

export type IntelligenceRecord = {
  id: string;
  programme: string;
  jurisdiction: string;
  routeCount: number;
  release: string;
  sourceState: string;
  status: "Published" | "Draft" | "Review";
  lastReviewed: string;
  note: string;
};

export type UseCasePath = {
  id: string;
  label: string;
  title: string;
  situation: string;
  blocker: string;
  workflow: string[];
  recommendedOffer: OfferPath["id"];
};

export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
  firmRole: string;
  controlRole: string;
  output: string;
};

export const caseStages: CaseStage[] = [
  {
    id: "intake",
    number: "01",
    title: "Open the matter",
    summary: "Collect the enquiry, family details, objectives and advisor notes.",
    outcome: "The principal applicant, dependants, budget, target date and missing facts are recorded."
  },
  {
    id: "model",
    number: "02",
    title: "Compare routes",
    summary: "Build family-cost comparisons for the programme routes under consideration.",
    outcome: "The advisor sees government fees, due-diligence costs and assumptions for the whole family."
  },
  {
    id: "control",
    number: "03",
    title: "Prepare the file",
    summary: "Track documents, due-diligence questions, owners and target dates.",
    outcome: "The team sees what prevents submission, who must act and which check comes next."
  },
  {
    id: "communicate",
    number: "04",
    title: "Update the client",
    summary: "Turn the case status into a clear request and next milestone.",
    outcome: "The client sees what is required without receiving internal review notes."
  }
];

export const businessOutcomes: BusinessOutcome[] = [
  {
    id: "blockers",
    title: "Know what prevents progress",
    description:
      "See the missing document, unresolved due-diligence question or advisor review preventing the next stage."
  },
  {
    id: "assumptions",
    title: "Quote from reviewed assumptions",
    description:
      "Keep programme routes, dependant rules, government fees, sources and effective dates consistent across the team."
  },
  {
    id: "client-status",
    title: "Give clients a clearer status",
    description:
      "Separate internal review notes from the action, document request and milestone the client needs."
  },
  {
    id: "reconstruction",
    title: "Reduce repeated reconstruction",
    description:
      "Stop rebuilding the same matter from email, spreadsheets, messages and individual advisor memory."
  }
];

export const matterConsequences: MatterConsequence[] = [
  {
    id: "fees",
    problem: "Different advisors use different fee assumptions.",
    effect: "Comparisons and proposals require another round of checking."
  },
  {
    id: "documents",
    problem: "Application documents remain buried in email.",
    effect: "The team cannot immediately confirm submission readiness."
  },
  {
    id: "blocker",
    problem: "The question preventing progress is not named.",
    effect: "Cases stall while staff chase several possible next actions."
  },
  {
    id: "updates",
    problem: "Client updates depend on whoever remembers the matter.",
    effect: "Handovers take longer and the case context must be rebuilt."
  },
  {
    id: "programme-change",
    problem: "A programme change does not reach active proposals.",
    effect: "Old assumptions may remain in family-cost comparisons and reports."
  }
];

export const managedServiceStages: ManagedServiceStage[] = [
  {
    id: "map",
    number: "01",
    title: "Map",
    description:
      "Review the matter, programme files, proposals, application documents and the way the team currently handles the case.",
    evidence: "Current matter and programme map"
  },
  {
    id: "structure",
    number: "02",
    title: "Structure",
    description:
      "Record applicants, dependants, programme routes, costs, sources, document states and due-diligence questions.",
    evidence: "Checked case and programme records"
  },
  {
    id: "configure",
    number: "03",
    title: "Configure",
    description:
      "Set up case views, responsibilities, review states, advisor reports and client updates around the firm.",
    evidence: "Firm-specific case views and reports"
  },
  {
    id: "maintain",
    number: "04",
    title: "Maintain",
    description:
      "Review programme changes, exceptions, affected matters and the recurring items the team needs to check.",
    evidence: "Monthly change and matter review"
  }
];

export const programmeChangeSteps: ProgrammeChangeStep[] = [
  {
    id: "notice",
    number: "01",
    title: "A dependant fee changes",
    description:
      "A new authority notice proposes a different family contribution figure.",
    result: "Old and proposed values remain separate"
  },
  {
    id: "review",
    number: "02",
    title: "The change enters review",
    description:
      "The source, effective date and claim status are checked before advisor use.",
    result: "Pending review"
  },
  {
    id: "record",
    number: "03",
    title: "The programme record is prepared",
    description:
      "The route and family-fee record is updated as a draft with its source note.",
    result: "Draft record linked to source"
  },
  {
    id: "model",
    number: "04",
    title: "The family-cost model is affected",
    description:
      "The proposed figure changes the indicative total for a family of four.",
    result: "Comparison requires recalculation"
  },
  {
    id: "matter",
    number: "05",
    title: "Active matters are identified",
    description:
      "Cases and proposals using the previous assumption are added to the review list.",
    result: "Two active matters flagged"
  },
  {
    id: "advisor",
    number: "06",
    title: "The advisor sees what to review",
    description:
      "The affected comparison and advisor report are named before client figures change.",
    result: "One advisor report requires review"
  }
];

export const liveMatterStages: LiveMatterStage[] = [
  {
    id: "scattered",
    number: "01",
    title: "The matter exists across six places.",
    description:
      "Family details sit in email, programme costs in a spreadsheet, evidence in document folders and the latest question in an advisor message.",
    result: "No single record shows whether the matter can move"
  },
  {
    id: "structured",
    number: "02",
    title: "The case facts become controlled fields.",
    description:
      "Applicants, dependants, programme routes, family costs, application documents, due-diligence questions and responsibilities are recorded together.",
    result: "The firm can distinguish confirmed facts from items requiring review"
  },
  {
    id: "controlled",
    number: "03",
    title: "The team sees what happens next.",
    description:
      "The matter view names the blocker, owner, next action, client request and programme release being used by the advisor.",
    result: "One maintained view for the advisor and the client matter"
  }
];

export const programmeOptions: ProgrammeOption[] = [
  {
    id: "st-kitts",
    programme: "St Kitts and Nevis",
    route: "Contribution",
    indicativeMinimum: "£210k",
    familyFees: "£78k",
    dueDiligence: "£26k",
    estimatedTotal: "£314k-£360k",
    confidence: "Medium",
    reviewRequired: "Latest fee schedule",
    processingTime: "6-10 months",
    presence: "None expected",
    familyInclusion: "Spouse and dependent children",
    risk: "Fee updates and route availability"
  },
  {
    id: "grenada",
    programme: "Grenada",
    route: "Contribution",
    indicativeMinimum: "£185k",
    familyFees: "£84k",
    dueDiligence: "£28k",
    estimatedTotal: "£305k-£365k",
    confidence: "Medium",
    reviewRequired: "Children's ages",
    processingTime: "8-12 months",
    presence: "None expected",
    familyInclusion: "Spouse and children subject to dependant rules",
    risk: "Source-of-funds review depth"
  },
  {
    id: "dominica",
    programme: "Dominica",
    route: "Contribution",
    indicativeMinimum: "£165k",
    familyFees: "£72k",
    dueDiligence: "£22k",
    estimatedTotal: "£270k-£330k",
    confidence: "Low",
    reviewRequired: "Programme change pending",
    processingTime: "6-9 months",
    presence: "None expected",
    familyInclusion: "Spouse and children subject to current rules",
    risk: "Pending data review"
  },
  {
    id: "st-lucia",
    programme: "St Lucia",
    route: "Property or contribution",
    indicativeMinimum: "£195k",
    familyFees: "£76k",
    dueDiligence: "£24k",
    estimatedTotal: "£302k-£390k",
    confidence: "Medium",
    reviewRequired: "Route preference",
    processingTime: "8-11 months",
    presence: "None expected",
    familyInclusion: "Spouse and children subject to route",
    risk: "Property route timing and costs"
  }
];

export const caseDocuments: DocumentItem[] = [
  { id: "passports", name: "Passport copies", person: "All applicants", status: "Complete" },
  { id: "birth", name: "Birth certificates", person: "Children", status: "Needs review" },
  { id: "marriage", name: "Marriage certificate", person: "Applicant and spouse", status: "Complete" },
  { id: "police", name: "Police certificates", person: "Applicant and spouse", status: "Missing" },
  { id: "sof", name: "Source-of-funds evidence", person: "Main applicant", status: "Needs review" },
  { id: "address", name: "Proof of address", person: "Applicant and spouse", status: "Complete" },
  { id: "medical", name: "Medical forms", person: "All applicants", status: "Not started" },
  { id: "references", name: "Professional references", person: "Main applicant", status: "Missing" }
];

export const caseBlockers: Blocker[] = [
  {
    id: "source-of-funds",
    title: "Source-of-funds review required",
    owner: "Private Client Advisor",
    effect: "Programme recommendation cannot be finalised.",
    status: "Blocked"
  },
  {
    id: "children-ages",
    title: "Confirm children's exact ages",
    owner: "Client",
    effect: "Dependant eligibility and fees remain provisional.",
    status: "Client action required"
  },
  {
    id: "route",
    title: "Confirm contribution or property preference",
    owner: "Advisor",
    effect: "St Lucia scenario cannot be narrowed.",
    status: "Pending review"
  }
];

export const changeEvents: ChangeEvent[] = [
  {
    id: "dominica-family-contribution",
    programme: "Dominica",
    field: "Family contribution",
    oldValue: "£155k",
    proposedValue: "£165k",
    effectiveDate: "Draft: July 2026",
    source: "Issuing authority notice requires confirmation",
    reviewer: "Programme Data Review",
    status: "Pending review",
    affectedCases: 2,
    affectedReports: 1
  },
  {
    id: "grenada-dependant-note",
    programme: "Grenada",
    field: "Dependant education evidence",
    oldValue: "General evidence note",
    proposedValue: "Age-specific evidence required",
    effectiveDate: "Review date: 18 July 2026",
    source: "Official programme guidance",
    reviewer: "Private Client Team",
    status: "Published",
    affectedCases: 1,
    affectedReports: 0
  }
];

export const clientStatus: ClientStatus = {
  stage: "Programme comparison and document preparation",
  status: "Client action required",
  message:
    "Your case is currently in programme comparison and document preparation. The next step is to confirm family details and complete source-of-funds review before a programme recommendation is finalised.",
  completed: ["Initial family profile", "Passport copies", "Budget range"],
  missing: ["Police certificates", "Professional references", "Children's exact ages"],
  nextMilestone: "Advisor recommendation after professional review"
};

export const offerPaths: OfferPath[] = [
  {
    id: "case-control",
    step: "Start",
    title: "Case Control Sprint",
    price: "£1,300-£1,500",
    timing: "7-10 working days",
    useWhen: "One live, recent or anonymised matter is spread across email, spreadsheets, PDFs and advisor notes.",
    outcome: "One case file showing the family, routes, costs, missing documents, blockers, owners and next step.",
    buyingTrigger:
      "A complex, delayed or difficult-to-track matter is spread across files, messages and advisor notes.",
    workPerformed:
      "We map the family, programme routes, cost assumptions, documents, due-diligence questions, blockers and responsibilities.",
    firmOutcome:
      "The firm receives one advisor-ready case file showing what is known, what is missing, what prevents progress and what happens next.",
    engagementFormat:
      "Fixed-scope implementation for one active, recent or anonymised matter.",
    deliverables: [
      "Client and family map",
      "Family-cost and route scenarios",
      "Document readiness and blocker log",
      "Owners, deadlines and next actions",
      "Advisor report and client status"
    ],
    next: "Test the approach on one matter before applying it to other cases."
  },
  {
    id: "programme-control",
    step: "Programme data",
    title: "Programme & Pricing Control Sprint",
    price: "£1,500 setup",
    timing: "10-14 working days",
    useWhen: "Programme fees, dependant rules and source notes differ across proposals, spreadsheets and website pages.",
    outcome: "Five checked programme files covering routes, family rules, fees, sources and effective dates.",
    buyingTrigger:
      "Advisors are using inconsistent programme fees, family rules or proposal assumptions.",
    workPerformed:
      "We turn the five programmes used most often into reviewed route, pricing, dependant and source records.",
    firmOutcome:
      "Advisors compare and quote from the same assumptions while draft changes remain separate from approved client information.",
    engagementFormat:
      "Fixed-scope implementation for five priority citizenship or residence programmes.",
    deliverables: [
      "Five checked programme files",
      "Route and family-pricing tables",
      "Source register and effective dates",
      "Outdated-claims audit",
      "Draft, professional review and publication states"
    ],
    next: "Give every advisor the same current programme and pricing information."
  },
  {
    id: "workspace",
    step: "Operate",
    title: "Sovereignty Control Workspace",
    price: "£750-£1,500 onboarding",
    timing: "£500-£1,000 per month",
    useWhen: "The firm needs one place to review several active matters and the programme information used in them.",
    outcome: "A managed workspace for applications, programme files, documents, deadlines and client updates.",
    buyingTrigger:
      "The firm wants the same programme, document and case checks across several active matters.",
    workPerformed:
      "We configure the case structure, programme records, document states, responsibilities and monthly review list with the team.",
    firmOutcome:
      "The firm receives a configured and maintained workspace rather than an empty software account.",
    engagementFormat:
      "Onboarding followed by monthly programme and active-matter review.",
    deliverables: [
      "Active case dashboard",
      "Programme records and change alerts",
      "Document status and blocker list",
      "Owner and deadline tracking",
      "Client status and report generation"
    ],
    next: "Apply the same case and programme checks across the team."
  }
];

export const intelligenceRecords: IntelligenceRecord[] = [
  {
    id: "stk-2026-07",
    programme: "St Kitts and Nevis",
    jurisdiction: "Caribbean",
    routeCount: 2,
    release: "July 2026",
    sourceState: "Official notice + reviewer note",
    status: "Review",
    lastReviewed: "24 Jul 2026",
    note: "Fee schedule requires final advisor confirmation before client use."
  },
  {
    id: "grd-2026-07",
    programme: "Grenada",
    jurisdiction: "Caribbean",
    routeCount: 2,
    release: "July 2026",
    sourceState: "Confirmed source",
    status: "Published",
    lastReviewed: "18 Jul 2026",
    note: "Dependant evidence note updated and released."
  },
  {
    id: "dma-2026-07",
    programme: "Dominica",
    jurisdiction: "Caribbean",
    routeCount: 2,
    release: "July 2026 draft",
    sourceState: "Source required",
    status: "Draft",
    lastReviewed: "22 Jul 2026",
    note: "Family contribution change remains proposed."
  },
  {
    id: "lca-2026-06",
    programme: "St Lucia",
    jurisdiction: "Caribbean",
    routeCount: 3,
    release: "June 2026",
    sourceState: "Confirmed source",
    status: "Published",
    lastReviewed: "30 Jun 2026",
    note: "Contribution and property routes published."
  }
];

export const useCasePaths: UseCasePath[] = [
  {
    id: "cbi-rbi",
    label: "CBI/RBI advisory",
    title: "Check family pricing before it reaches the proposal.",
    situation: "The firm compares several citizenship or residence programmes for families with different dependant profiles.",
    blocker: "Headline minimums hide family fees, review assumptions and stale programme figures.",
    workflow: ["Household map", "Route scenarios", "Fee review", "Proposal status"],
    recommendedOffer: "case-control"
  },
  {
    id: "uae",
    label: "UAE relocation",
    title: "Make dependant setup, visa, banking and tax steps visible.",
    situation: "Company formation, residence visas, family visas, banking and tax-residence evidence involve different providers.",
    blocker: "Clients cannot see which incomplete action prevents the next stage.",
    workflow: ["Company setup", "Residence visa", "Family visas", "Banking", "Evidence"],
    recommendedOffer: "workspace"
  },
  {
    id: "caribbean",
    label: "Caribbean agent",
    title: "Know whether every applicant is submission-ready.",
    situation: "The authorised agent must coordinate applicants, dependants, introducers and programme documents before submission.",
    blocker: "One missing or review-required record can hold the entire application.",
    workflow: ["Applicant map", "Document readiness", "Due diligence", "Submission"],
    recommendedOffer: "case-control"
  },
  {
    id: "private-client",
    label: "Private-client practice",
    title: "Coordinate the case without blurring professional ownership.",
    situation: "Immigration, tax, corporate, banking and family matters move at different speeds and may be handled by different professionals.",
    blocker: "The client sees separate advice streams rather than one understandable case sequence.",
    workflow: ["Objectives", "Advisor responsibilities", "Dependencies", "Client status"],
    recommendedOffer: "programme-control"
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    id: "select",
    title: "Choose the matter or programme set",
    description: "Choose one anonymised client matter or five priority programmes.",
    firmRole: "Provide the current case papers, pricing files and professional context.",
    controlRole: "Agree which applicants, routes and case stages are in scope.",
    output: "Agreed case or programme list"
  },
  {
    id: "map",
    title: "Review the current files",
    description: "Find the relevant facts across spreadsheets, PDFs, email, proposals and advisor notes.",
    firmRole: "Explain how the team prepares a comparison or application and where cases usually stall.",
    controlRole: "List the applicants, programme routes, documents, third parties and missing facts.",
    output: "Current case and document map"
  },
  {
    id: "structure",
    title: "Build the case file",
    description: "Record applicants, routes, costs, documents, due-diligence questions and blockers.",
    firmRole: "Check programme assumptions, sources and advice boundaries.",
    controlRole: "Add statuses, owners, dates and dependencies.",
    output: "Structured case or programme file"
  },
  {
    id: "build",
    title: "Prepare the working views",
    description: "Set up the case summary, family-cost comparison, document checklist and report.",
    firmRole: "Check the views against the way the team handles the matter.",
    controlRole: "Correct the fields, statuses and next-step rules.",
    output: "Working case and advisor views"
  },
  {
    id: "review",
    title: "Complete professional review",
    description: "Check programme facts, cost assumptions, advice boundaries and client wording.",
    firmRole: "Approve what may be used in the matter or sent to the client.",
    controlRole: "Mark unresolved items and keep draft information out of approved views.",
    output: "Advisor-reviewed case file"
  },
  {
    id: "operate",
    title: "Use it on active matters",
    description: "Use the sprint files as delivered or carry the same fields into the monthly workspace.",
    firmRole: "Run the matters and retain responsibility for all professional advice.",
    controlRole: "Maintain programme records, case statuses and the monthly review list.",
    output: "Repeatable case-management process"
  }
];

export const demoCase = {
  reference: "SC-DEMO-042",
  title: "British family of four",
  matter: "Caribbean citizenship comparison",
  objective: "Second citizenship and improved family mobility",
  family: "Main applicant, spouse and two children",
  budget: "£350k-£500k equivalent",
  timeline: "Within 12 months",
  owner: "Private Client Team",
  currentStage: "Programme comparison",
  disclaimer: "Fictional demonstration data. Professional review required before client use."
} as const;

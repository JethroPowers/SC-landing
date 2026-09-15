export const juris = {
  name: "Juris Partners",
  publicUrl: "https://sovereignty-atlas.vercel.app/",
  programmesUrl: "https://sovereignty-atlas.vercel.app/programmes",
  insightsUrl: "https://sovereignty-atlas.vercel.app/insights",
  adviceUrl: "https://sovereignty-atlas.vercel.app/advisory",
  adviserUrl: "/advisers",
  adviserApplicationUrl: "/advisers#apply",
  description:
    "Juris brings global mobility intelligence, independent professional expertise and separately scoped operational support together for citizenship, residence and relocation firms.",
  primaryCta: "Discuss your firm’s needs",
  exampleUrl: "/demo-case",
  diagnostic: {
    title: "Complimentary Matter Control Diagnostic",
    fee: "Complimentary",
    timing: "7–10 working days",
    scope: "One active, recent or anonymised matter",
    obligation: "No obligation to continue",
  },
  pilot: {
    title: "30-Day Co-Managed Readiness Pilot",
    status: "Subject to fit and scope",
  },
  desk: {
    title: "Future Managed Readiness Desk",
    status: "Future possibility",
  },
} as const;

export const enquiryInterests = [
  { value: "adviser-network", label: "Juris Adviser Network" },
  { value: "operational-workflow", label: "Operational workflow" },
  { value: "programme-intelligence", label: "Programme intelligence" },
  { value: "professional-collaboration", label: "Professional collaboration" },
  { value: "introduction-discussion", label: "Introduction discussion" },
  { value: "unsure", label: "Unsure — let’s discuss" },
] as const;

export type EnquiryInterest = (typeof enquiryInterests)[number]["value"];
export const audiences = ["Introducers", "Advisers", "Delivery Teams"] as const;
export type Audience = (typeof audiences)[number];

export const workflowStages = [
  {
    id: "enquiry",
    label: "Enquiry & consultation",
    title: "Prepare for the first useful conversation.",
    task: "Gather the existing enquiry, objectives and unanswered questions before a call.",
    friction:
      "The same facts sit in messages and call notes; the next follow-up is unclear.",
    output: "Structured enquiry brief and follow-up queue",
    responsibility:
      "The firm assesses suitability and decides whether to engage.",
    status: "Proposed output · scoped engagement",
    emphasis: {
      Introducers:
        "Record scope and permission before asking a suitable professional to accept a handover.",
      Advisers:
        "Bring objectives, household context and missing facts into the consultation.",
      "Delivery Teams":
        "Confirm which facts and permissions must arrive from the referring team.",
    },
  },
  {
    id: "comparison",
    label: "Comparison & proposal",
    title: "Make the assumptions behind a proposal visible.",
    task: "Prepare adviser-led comparisons, family context, fee assumptions and proposal follow-up.",
    friction:
      "A headline minimum is mistaken for a complete family cost; an assumption loses its source.",
    output: "Comparison and fee-assumption sheet for review",
    responsibility:
      "The adviser owns recommendations, fee approval and professional interpretation.",
    status: "Demonstrated in the detailed record · live work scoped",
    emphasis: {
      Introducers:
        "Pass objectives and open questions to the adviser; do not imply an eligibility decision.",
      Advisers:
        "Separate investment capital, government charges, professional fees and unconfirmed costs.",
      "Delivery Teams":
        "Confirm the accepted proposal and delivery assumptions before work begins.",
    },
  },
  {
    id: "handover",
    label: "Engagement & handover",
    title: "Carry the agreement into the working record.",
    task: "Record the agreed engagement, responsible team, scope, permissions and next action.",
    friction:
      "The delivery team receives a file without the latest agreement or a named owner.",
    output: "Engagement handover record and matter map",
    responsibility:
      "The firm approves the engagement, access and each provider’s authority.",
    status: "Matter map demonstrated · live work scoped",
    emphasis: {
      Introducers:
        "A suitable professional must accept the request before handover and attribution are agreed.",
      Advisers:
        "Carry proposal assumptions, exclusions and professional-review questions into setup.",
      "Delivery Teams":
        "Confirm acceptance, ownership and the next milestone with each responsible provider.",
    },
  },
  {
    id: "readiness",
    label: "Documents & dependencies",
    title: "See the missing item and the next responsible person.",
    task: "Coordinate evidence status, missing items, external dependencies and dates.",
    friction:
      "A document is marked missing, but its consequence and follow-up owner are absent.",
    output: "Document-status and dependency register",
    responsibility:
      "Authorised professionals decide evidence sufficiency and control submissions.",
    status: "Demonstrated below · live work scoped",
    emphasis: {
      Introducers:
        "Follow agreed handover status without collecting the applicant’s underlying evidence.",
      Advisers:
        "Surface questions that prevent a professional decision; keep evidence gaps open.",
      "Delivery Teams":
        "Track provider responses, requests from authorities and accountable next steps.",
    },
  },
  {
    id: "communication",
    label: "Updates & next actions",
    title: "Prepare a client update from the current record.",
    task: "Translate outstanding actions into a clear request and next milestone.",
    friction:
      "Client wording drifts from the internal record or exposes professional notes.",
    output: "Client-update draft for the firm to approve",
    responsibility:
      "The firm approves and sends communication; each provider retains its role.",
    status: "Simulated draft below · live work scoped",
    emphasis: {
      Introducers:
        "Agree which status can be shared and which referral milestone needs confirmation.",
      Advisers:
        "Keep professional questions in internal notes and approve external wording separately.",
      "Delivery Teams":
        "Show appointments, requested actions and provider milestones in one concise update.",
    },
  },
  {
    id: "review",
    label: "Change & milestone review",
    title: "Connect a change to the work that needs checking.",
    task: "Review dated source context, upcoming milestones and renewal obligations where applicable.",
    friction:
      "A proposed rule is treated as effective, or a review date has no owner.",
    output: "Review queue with source context, dates and owners",
    responsibility:
      "The adviser confirms applicability; authorised teams own deadlines and filings.",
    status: "Illustrative method · live coverage scoped",
    emphasis: {
      Introducers:
        "Agree a status checkpoint with the professional; do not promise automatic monitoring.",
      Advisers:
        "Review the effect on comparisons and advice before changing an approved assumption.",
      "Delivery Teams":
        "Coordinate review dates across separately responsible relocation and delivery providers.",
    },
  },
] as const;

export function normaliseInterest(value?: string): EnquiryInterest | "" {
  if (
    value === "matter-control-diagnostic" ||
    value === "case-control" ||
    value === "workspace"
  )
    return "operational-workflow";
  if (value === "programme-control") return "programme-intelligence";
  if (value === "other") return "unsure";
  return enquiryInterests.find((item) => item.value === value)?.value ?? "";
}

export function enquiryHref(interest?: EnquiryInterest, stage?: string) {
  const query = new URLSearchParams();
  if (interest) query.set("interest", interest);
  if (
    stage === "diagnostic" ||
    workflowStages.some((item) => item.id === stage)
  )
    query.set("stage", stage!);
  return `/contact${query.size ? `?${query}` : ""}#enquiry`;
}

export function enquiryStage(value?: string) {
  return value === "diagnostic"
    ? juris.diagnostic.title
    : (workflowStages.find((stage) => stage.id === value)?.label ?? "");
}

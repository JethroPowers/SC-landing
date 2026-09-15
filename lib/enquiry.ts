import { enquiryInterests, workflowStages } from "./partners";

// Keep the existing storage column names. No new storage columns are introduced.
export const fieldLimits = {
  name: 120,
  firmName: 160,
  email: 254,
  interest: 80,
  website: 300,
  role: 120,
  firmType: 100,
  mainProblem: 160,
  activeCases: 80,
  routes: 500,
  message: 2000,
  credentialUrl: 300,
} as const;
export type EnquiryPayload = Record<keyof typeof fieldLimits, string>;
export function validateEnquiry(
  input: unknown,
): { ok: true; payload: EnquiryPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { ok: false, error: "Please check the enquiry details." };
  const record = input as Record<string, unknown>;
  const payload = {} as EnquiryPayload;
  for (const key of Object.keys(fieldLimits) as Array<keyof EnquiryPayload>) {
    if (record[key] !== undefined && typeof record[key] !== "string")
      return { ok: false, error: "Please check the enquiry details." };
    const value = (record[key] as string | undefined)?.trim() ?? "";
    if (value.length > fieldLimits[key])
      return {
        ok: false,
        error: "A field is too long. Please shorten your enquiry.",
      };
    payload[key] = value;
  }
  if (
    ![payload.name, payload.firmName, payload.email, payload.interest].every(
      Boolean,
    )
  )
    return {
      ok: false,
      error:
        "Please complete your name, firm, business email and main interest.",
    };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
    return { ok: false, error: "Enter a valid business email address." };
  if (!enquiryInterests.some((item) => item.value === payload.interest))
    return { ok: false, error: "Please choose a main interest." };
  for (const field of ["website", "credentialUrl"] as const) {
    if (!payload[field]) continue;
    try {
      const url = new URL(payload[field]);
      if (!["https:", "http:"].includes(url.protocol)) throw new Error();
    } catch {
      return {
        ok: false,
        error:
          field === "website"
            ? "Enter a website beginning with https:// or http://."
            : "Enter a professional-register link beginning with https:// or http://.",
      };
    }
  }
  if (
    payload.credentialUrl &&
    payload.message.length + payload.credentialUrl.length + 40 >
      fieldLimits.message
  )
    return {
      ok: false,
      error:
        "Please shorten the description so the professional-register link fits with your enquiry.",
    };
  if (
    payload.mainProblem &&
    !["diagnostic", ...workflowStages.map((stage) => stage.id)].includes(
      payload.mainProblem,
    )
  )
    return { ok: false, error: "Please choose a recognised workflow context." };
  if (payload.interest !== "operational-workflow") {
    payload.mainProblem = "";
    payload.activeCases = "";
  }
  return { ok: true, payload };
}

// Retain the existing contact table: the optional register URL is included in
// the founder-readable message, not a new database column.
export function enquiryStoragePayload(payload: EnquiryPayload) {
  const { credentialUrl, ...existing } = payload;
  return {
    ...existing,
    message: [
      existing.message,
      credentialUrl
        ? `Professional register / credential: ${credentialUrl}`
        : "",
    ]
      .filter(Boolean)
      .join("\n\n"),
  };
}

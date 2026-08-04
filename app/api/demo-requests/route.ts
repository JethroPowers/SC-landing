type DemoRequestPayload = {
  name?: string;
  firmName?: string;
  website?: string;
  email?: string;
  role?: string;
  firmType?: string;
  mainProblem?: string;
  interest?: string;
  activeCases?: string;
  routes?: string;
  message?: string;
};

const fieldLimits: Record<keyof DemoRequestPayload, number> = {
  name: 120,
  firmName: 160,
  website: 300,
  email: 254,
  role: 120,
  firmType: 100,
  mainProblem: 160,
  interest: 80,
  activeCases: 80,
  routes: 500,
  message: 2000
};

const requiredFields: Array<keyof DemoRequestPayload> = [
  "name",
  "firmName",
  "email",
  "firmType",
  "mainProblem"
];

const allowedInterests = new Set(["", "case-control", "programme-control", "workspace"]);

export async function POST(request: Request) {
  let input: unknown;

  try {
    input = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return Response.json({ ok: false, error: "Invalid request payload" }, { status: 400 });
  }

  const record = input as Record<string, unknown>;
  const payload = Object.fromEntries(
    (Object.keys(fieldLimits) as Array<keyof DemoRequestPayload>).map((field) => {
      const value = typeof record[field] === "string" ? record[field].trim() : "";
      return [field, value.slice(0, fieldLimits[field])];
    })
  ) as Record<keyof DemoRequestPayload, string>;

  const missing = requiredFields.filter((field) => !payload[field]);

  if (missing.length > 0) {
    return Response.json(
      { ok: false, error: "Missing required fields", missing },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return Response.json({ ok: false, error: "Enter a valid email address" }, { status: 400 });
  }

  if (!allowedInterests.has(payload.interest)) {
    return Response.json({ ok: false, error: "Invalid starting point" }, { status: 400 });
  }

  const submission = {
    ...payload,
    receivedAt: new Date().toISOString(),
    source: "sovereignty-control-website"
  };

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const table = process.env.SUPABASE_DEMO_REQUESTS_TABLE ?? "demo_requests";

  if (supabaseUrl && serviceRoleKey) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(submission)
    });

    if (!response.ok) {
      console.error("Demo request storage failed", response.status);
      return Response.json(
        { ok: false, error: "The request could not be stored" },
        { status: 502 }
      );
    }
  } else if (process.env.NODE_ENV === "production") {
    return Response.json(
      { ok: false, error: "Demo request storage is not configured" },
      { status: 503 }
    );
  } else {
    console.info("Demo request accepted in development", {
      firmType: submission.firmType,
      mainProblem: submission.mainProblem,
      receivedAt: submission.receivedAt
    });
  }

  return Response.json({
    ok: true,
    message: "Demo request received."
  });
}

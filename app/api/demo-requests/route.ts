import { validateEnquiry, enquiryStoragePayload } from "@/lib/enquiry";
import { isEnquiryConfigured } from "@/lib/enquiry-server";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return Response.json(
      { ok: false, error: "Please submit the enquiry from this website." },
      { status: 403 },
    );
  let input: unknown;
  try {
    if (Number(request.headers.get("content-length")) > 12000)
      return Response.json(
        { ok: false, error: "The enquiry is too long." },
        { status: 413 },
      );
    const body = await request.text();
    if (body.length > 12000)
      return Response.json(
        { ok: false, error: "The enquiry is too long." },
        { status: 413 },
      );
    input = JSON.parse(body);
  } catch {
    return Response.json(
      { ok: false, error: "Please check the enquiry details." },
      { status: 400 },
    );
  }
  const result = validateEnquiry(input);
  if (!result.ok)
    return Response.json({ ok: false, error: result.error }, { status: 400 });
  if (!isEnquiryConfigured())
    return Response.json(
      {
        ok: false,
        error:
          "Enquiry delivery is not configured in this preview. Your enquiry has not been sent.",
      },
      { status: 503 },
    );
  const table = process.env.SUPABASE_DEMO_REQUESTS_TABLE ?? "demo_requests";
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(table))
    return Response.json(
      {
        ok: false,
        error: "Enquiry delivery is unavailable. Please try again later.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL!.replace(/\/$/, "")}/rest/v1/${table}`,
      {
        method: "POST",
        headers: {
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          ...enquiryStoragePayload(result.payload),
          receivedAt: new Date().toISOString(),
          source: "juris-partners-website",
        }),
        signal: AbortSignal.timeout(10000),
      },
    );
    if (!response.ok)
      return Response.json(
        {
          ok: false,
          error:
            "Your enquiry could not be stored. Your entries are still here; please try again later.",
        },
        { status: 502 },
      );
    return Response.json({ ok: true, message: "Enquiry received." });
  } catch {
    return Response.json(
      {
        ok: false,
        error:
          "Delivery could not be confirmed. Your entries are still here; please try again later.",
      },
      { status: 502 },
    );
  }
}

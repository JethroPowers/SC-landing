import { expect, test } from "@playwright/test";
import { POST } from "../app/api/demo-requests/route";
const valid = {
  name: "Test",
  firmName: "Example Firm",
  email: "test@example.test",
  interest: "professional-collaboration",
};
const request = (body: unknown) =>
  new Request("http://localhost/api/demo-requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
test("server rejects malformed, missing, excessive and unsupported inputs", async () => {
  for (const body of [
    null,
    [],
    {},
    { ...valid, name: " " },
    { ...valid, email: "invalid" },
    { ...valid, interest: "automatic-approval" },
    { ...valid, website: "javascript:alert(1)" },
    { ...valid, credentialUrl: "javascript:alert(1)" },
    {
      ...valid,
      credentialUrl: "https://register.example.test",
      message: "x".repeat(1990),
    },
    { ...valid, firmName: "x".repeat(161) },
    { ...valid, name: { nested: true } },
    { ...valid, mainProblem: "private narrative" },
  ]) {
    expect((await POST(request(body))).status).toBe(400);
  }
  expect(
    (
      await POST(
        new Request("http://localhost/api/demo-requests", {
          method: "POST",
          body: "{",
        }),
      )
    ).status,
  ).toBe(400);
  expect(
    (await POST(request({ ...valid, message: "x".repeat(13000) }))).status,
  ).toBe(413);
  expect(
    (
      await POST(
        new Request("http://localhost/api/demo-requests", {
          method: "POST",
          headers: { origin: "https://unrelated.test" },
          body: JSON.stringify(valid),
        }),
      )
    ).status,
  ).toBe(403);
});
test("server fails closed without a destination, and only accepts acknowledged storage", async () => {
  const previous = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.SUPABASE_SERVICE_ROLE_KEY,
    table: process.env.SUPABASE_DEMO_REQUESTS_TABLE,
  };
  const originalFetch = global.fetch;
  try {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    expect((await POST(request(valid))).status).toBe(503);
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://storage.example.test";
    process.env.SUPABASE_SERVICE_ROLE_KEY = "mock-only";
    process.env.SUPABASE_DEMO_REQUESTS_TABLE = "demo_requests";
    global.fetch = async () => new Response(null, { status: 500 });
    expect((await POST(request(valid))).status).toBe(502);
    global.fetch = async () => {
      throw new Error("local test network failure");
    };
    expect((await POST(request(valid))).status).toBe(502);
    let stored: Record<string, string> = {};
    global.fetch = async (url, init) => {
      expect(url).toBe("https://storage.example.test/rest/v1/demo_requests");
      stored = JSON.parse(String(init?.body));
      return new Response(null, { status: 201 });
    };
    const response = await POST(
      request({
        ...valid,
        name: " Test ",
        mainProblem: "readiness",
        activeCases: "1–5",
        unknown: "discard",
      }),
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      ok: true,
      message: "Enquiry received.",
    });
    expect(stored.name).toBe("Test");
    expect(stored.mainProblem).toBe("");
    expect(stored.activeCases).toBe("");
    expect(stored.unknown).toBeUndefined();
    expect(stored.source).toBe("juris-partners-website");
    const networkResponse = await POST(
      request({
        ...valid,
        interest: "adviser-network",
        firmType: "Independent adviser",
        credentialUrl: "https://register.example.test/record",
        message: "Discuss a local contribution.",
      }),
    );
    expect(networkResponse.status).toBe(200);
    expect(stored.interest).toBe("adviser-network");
    expect(stored.firmType).toBe("Independent adviser");
    expect(stored.message).toBe(
      "Discuss a local contribution.\n\nProfessional register / credential: https://register.example.test/record",
    );
    expect(stored.credentialUrl).toBeUndefined();
  } finally {
    global.fetch = originalFetch;
    for (const [key, value] of Object.entries({
      NEXT_PUBLIC_SUPABASE_URL: previous.url,
      SUPABASE_SERVICE_ROLE_KEY: previous.key,
      SUPABASE_DEMO_REQUESTS_TABLE: previous.table,
    })) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});

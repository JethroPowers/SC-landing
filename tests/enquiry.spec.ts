import { expect, test } from "@playwright/test";
const fill = async (page: import("@playwright/test").Page) => {
  await page
    .getByLabel("Name", { exact: false })
    .first()
    .fill("Example Reviewer");
  await page.getByLabel("Firm name").fill("Example Firm");
  await page.getByLabel("Business email").fill("review@example.test");
  await page
    .getByLabel("Main interest")
    .selectOption("professional-collaboration");
};
test("context routes correctly, optional fields stay optional and no client uploads exist", async ({
  page,
}) => {
  await page.goto("/contact?interest=matter-control-diagnostic");
  await expect(page.getByLabel("Main interest")).toHaveValue(
    "operational-workflow",
  );
  await expect(page.getByText(/Conversation context:/)).toContainText(
    "Complimentary Matter Control Diagnostic",
  );
  await page
    .locator("summary")
    .filter({ hasText: "Add business context" })
    .click();
  await expect(page.getByLabel("Approximate active matters")).toBeVisible();
  await page
    .getByLabel("Main interest")
    .selectOption("introduction-discussion");
  await expect(page.getByLabel("Approximate active matters")).toHaveCount(0);
  await expect(page.locator('input[type="file"]')).toHaveCount(0);
  await expect(page.getByText(/Do not include applicant names/)).toBeVisible();
});
test("client validation blocks incomplete enquiries", async ({ page }) => {
  await page.goto("/contact");
  let requests = 0;
  await page.route("**/api/demo-requests", (route) => {
    requests++;
    return route.fulfill({ status: 500, body: '{"ok":false}' });
  });
  await page.getByRole("button", { name: "Send enquiry" }).click();
  expect(requests).toBe(0);
  await expect(page.getByLabel("Name", { exact: false }).first()).toBeFocused();
});
test("failure preserves input and never displays success", async ({ page }) => {
  await page.goto("/contact");
  await page.route("**/api/demo-requests", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: '{"ok":false}',
    }),
  );
  await fill(page);
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(
    page.getByRole("form", { name: "Professional enquiry" }).getByRole("alert"),
  ).toContainText("has not been sent");
  await expect(page.getByLabel("Business email")).toHaveValue(
    "review@example.test",
  );
  await expect(page.getByRole("status")).toHaveCount(0);
});
test("network failure and malformed success responses never look accepted", async ({
  page,
}) => {
  await page.goto("/contact");
  await fill(page);
  await page.route("**/api/demo-requests", (route) => route.abort());
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(
    page.getByRole("form", { name: "Professional enquiry" }).getByRole("alert"),
  ).toContainText("could not be confirmed");
  await page.unroute("**/api/demo-requests");
  await page.route("**/api/demo-requests", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":false}',
    }),
  );
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByRole("status")).toHaveCount(0);
  await expect(page.getByLabel("Business email")).toHaveValue(
    "review@example.test",
  );
});
test("mocked acceptance requires acknowledgement and suppresses double submission", async ({
  page,
}) => {
  await page.goto("/contact?interest=operational-workflow&stage=readiness");
  let count = 0;
  let captured: Record<string, string> = {};
  let release: () => void = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route("**/api/demo-requests", async (route) => {
    count++;
    captured = route.request().postDataJSON();
    await gate;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    });
  });
  await page
    .getByLabel("Name", { exact: false })
    .first()
    .fill("Example Reviewer");
  await page.getByLabel("Firm name").fill("Example Firm");
  await page.getByLabel("Business email").fill("review@example.test");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(
    page.getByRole("button", { name: "Submitting…" }),
  ).toBeDisabled();
  await expect(page.getByLabel("Business email")).toBeDisabled();
  await page
    .getByRole("form", { name: "Professional enquiry" })
    .evaluate((form: HTMLFormElement) => form.requestSubmit());
  await expect(page.getByRole("status")).toHaveCount(0);
  release();
  await expect(page.getByRole("status")).toContainText(
    "received for founder review",
  );
  expect(count).toBe(1);
  expect(captured.interest).toBe("operational-workflow");
  expect(captured.mainProblem).toBe("readiness");
  await expect(
    page.getByRole("button", { name: "Enquiry received" }),
  ).toBeDisabled();
});

import { expect, test } from "@playwright/test";

test("adviser journey is prominent, bounded and separate from other collaboration", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("#adviser-network")).toBeAttached();
  await page
    .getByRole("link", { name: "Become a Juris Adviser", exact: true }).first()
    .click();
  await expect(page).toHaveURL(/\/advisers$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Bring yourexpertiseinto Juris.",
  );
  await expect(
    page.getByRole("complementary", {
      name: "Illustrative professional profile structure",
    }),
  ).toContainText("not an approved adviser");
  for (const title of [
    "Express interest",
    "Review mutual fit",
    "Agree the relationship",
    "Onboard & collaborate",
  ]) {
    const summary = page.locator("#joining summary").filter({ hasText: title });
    await summary.focus();
    await expect(summary).toBeFocused();
    await summary.press("Enter");
    await expect(summary.locator("..")).toHaveAttribute("open", "");
  }
  await expect(page.locator("#joining")).toContainText(
    "permitted brand or profile use",
  );
  await expect(page.locator("#public-journey")).toContainText(
    "no automatic matching or client-data sharing",
  );
  await expect(
    page.getByRole("link", {
      name: "Looking for advice for yourself?",
      exact: true,
    }),
  ).toHaveAttribute("href", "https://sovereignty-atlas.vercel.app/advisory");
  await page
    .getByRole("link", { name: "Discuss another collaboration", exact: true })
    .click();
  await expect(page.getByLabel("Main interest")).toHaveValue(
    "professional-collaboration",
  );
});

test("adviser validation and delivery errors preserve professional input and focus feedback", async ({
  page,
}) => {
  await page.goto("/advisers#apply");
  let requests = 0;
  await page.route("**/api/demo-requests", (route) => {
    requests++;
    return route.fulfill({
      status: 503,
      contentType: "application/json",
      body: '{"ok":false}',
    });
  });
  const form = page.getByRole("form", { name: "Juris adviser interest" });
  const submit = form.getByRole("button", {
    name: "Register adviser interest",
  });
  await submit.click();
  await expect(page.getByLabel("Name", { exact: false }).first()).toBeFocused();
  expect(requests).toBe(0);
  await page
    .getByLabel("Name", { exact: false })
    .first()
    .fill("Example Professional");
  await page.getByLabel("Firm name").fill("Example Practice");
  await page.getByLabel("Business email").fill("adviser@example.test");
  await page
    .getByLabel("Professional-register or credential link")
    .fill("javascript:alert(1)");
  await submit.click();
  await expect(form.getByRole("alert")).toContainText("https:// or http://");
  await expect(form.getByRole("alert")).toBeFocused();
  expect(requests).toBe(0);
  await page.getByLabel("Professional-register or credential link").fill("");
  await submit.click();
  await expect(form.getByRole("alert")).toContainText("has not been sent");
  await expect(form.getByRole("alert")).toBeFocused();
  await expect(page.getByLabel("Business email")).toHaveValue(
    "adviser@example.test",
  );
  await expect(form.getByRole("status")).toHaveCount(0);
  expect(requests).toBe(1);
  await expect(form.locator('input[type="file"]')).toHaveCount(0);
});

test("acknowledged adviser interest stores its intent and context without granting acceptance", async ({
  page,
}) => {
  await page.goto("/advisers#apply");
  let captured: Record<string, string> = {};
  await page.route("**/api/demo-requests", (route) => {
    captured = route.request().postDataJSON();
    return route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    });
  });
  await page
    .getByLabel("Name", { exact: false })
    .first()
    .fill("Example Professional");
  await page.getByLabel("Firm name").fill("Example Practice");
  await page.getByLabel("Business email").fill("adviser@example.test");
  await page
    .getByLabel("Business website")
    .fill("https://practice.example.test");
  await page.getByLabel("Your role").fill("Founder");
  await page.getByLabel("Jurisdictions served").fill("Example jurisdiction");
  await page.getByLabel("Service type").selectOption("Independent adviser");
  await page
    .getByLabel("Professional-register or credential link")
    .fill("https://register.example.test/record");
  await page
    .getByLabel("How would you like to collaborate?")
    .fill("Discuss a local editorial contribution.");
  await page.getByRole("button", { name: "Register adviser interest" }).click();
  const status = page.getByRole("status");
  await expect(status).toContainText("received for founder review");
  await expect(status).toContainText(
    "not acceptance or an adviser designation",
  );
  await expect(status).toBeFocused();
  expect(captured).toMatchObject({
    interest: "adviser-network",
    firmType: "Independent adviser",
    role: "Founder",
    routes: "Example jurisdiction",
    credentialUrl: "https://register.example.test/record",
    mainProblem: "",
    activeCases: "",
  });
  await expect(
    page.getByRole("button", { name: "Interest received" }),
  ).toBeDisabled();
  await expect(page.getByLabel("Business email")).toBeDisabled();
});

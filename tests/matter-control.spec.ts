import { expect, test } from "@playwright/test";

test("shared matter example preserves gaps, separates drafts and resets", async ({
  page,
}) => {
  await page.goto("/demo-case");
  await expect(page.getByText("JP-024 / Readiness & review")).toBeVisible();
  await page
    .getByRole("button", { name: "Before · scattered records" })
    .click();
  await expect(page.getByText("Fee workbook", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "After · structured record" }).click();
  await page.getByRole("button", { name: "Assign follow-up owner" }).click();
  await page.getByRole("button", { name: "Prepare update draft" }).click();
  await expect(page.getByRole("status")).toContainText(
    "3 evidence items remain missing",
  );
  await expect(page.getByRole("status")).toContainText(
    "professional review is still pending",
  );
  await expect(
    page.getByRole("button", { name: "Draft prepared · nothing sent" }),
  ).toBeDisabled();
  await expect(
    page.getByText("09:35 · Follow-up assigned to provider liaison"),
  ).toBeVisible();
  await expect(
    page.getByText("09:40 · Client-update draft prepared for firm approval"),
  ).toBeVisible();
  await expect(page.locator("blockquote")).not.toContainText("source-of-funds");
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Prepare update draft" }),
  ).toBeEnabled();
  await expect(page.getByText("Unassigned", { exact: true })).toBeVisible();
  await expect(page.locator("blockquote")).toHaveCount(0);
  await expect(
    page.getByText("09:35 · Follow-up assigned to provider liaison"),
  ).toHaveCount(0);
});
test("retained method supports three phases, seven steps and five record views", async ({
  page,
}) => {
  await page.goto("/how-matter-control-works");
  await expect(page.locator("h1")).toHaveText("Practical support for your client work.");
  const phases = page.getByRole("tablist", {
    name: "Matter-control operating phases",
  });
  for (const name of ["01. Reconstruct", "02. Control", "03. Prepare"]) {
    await phases.getByRole("tab", { name }).click();
    await expect(phases.getByRole("tab", { name })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  }
  await phases.getByRole("tab", { name: "03. Prepare" }).press("Home");
  await expect(
    phases.getByRole("tab", { name: "01. Reconstruct" }),
  ).toBeFocused();
  const outputs = page.getByTestId("all-outputs-disclosure");
  await outputs.locator("summary").click();
  for (const name of [
    "Matter map",
    "Document-readiness register",
    "Blocker and dependency register",
    "Adviser-review questions",
    "Programme-assumption register",
    "Immediate action plan",
    "Closeout summary",
  ]) {
    await expect(outputs.getByText(name, { exact: true })).toBeVisible();
  }
  await expect(page.getByTestId("workspace-disclosure")).toHaveAttribute(
    "open",
    "",
  );
  const workspace = page.getByTestId("workspace-explore");
  for (const name of [
    "Matter",
    "Readiness",
    "Review Queue",
    "Change Impact",
    "Closeout",
  ]) {
    await workspace.getByRole("tab", { name, exact: true }).click();
    await expect(
      workspace.getByRole("tab", { name, exact: true }),
    ).toHaveAttribute("aria-selected", "true");
  }
  await workspace.getByRole("tab", { name: "Matter", exact: true }).click();
  await workspace
    .locator("summary")
    .filter({ hasText: "Compare the four fictional" })
    .click();
  await expect(workspace.getByRole("table")).toContainText("£314k");
  await expect(workspace.getByRole("table")).toContainText(
    "Fictional Programme C",
  );
  const method = page.getByTestId("seven-step-method");
  await expect(method).toHaveAttribute("open", "");
  const tabs = method.getByRole("tab");
  await expect(tabs).toHaveCount(7);
  for (const tab of await tabs.all()) {
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
  }
  await method.getByRole("button", { name: "Previous method step" }).click();
  await expect(tabs.nth(5)).toHaveAttribute("aria-selected", "true");
  await method.getByRole("button", { name: "Next method step" }).click();
  await expect(tabs.nth(6)).toHaveAttribute("aria-selected", "true");
  await page.getByTestId("change-record-disclosure").locator("summary").click();
  await expect(page.getByTestId("change-record-disclosure")).toContainText(
    "Fictional Mobility Ministry",
  );
});
test("intelligence records are fictional, filterable and keyboard dismissible", async ({
  page,
}) => {
  await page.goto("/intelligence");
  await expect(
    page.getByText(/All registers and impact counts below are simulated/),
  ).toBeVisible();
  await page.getByRole("button", { name: "Draft", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Fictional Programme C", exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Fictional Programme A", exact: false }),
  ).toHaveCount(0);
  await page
    .getByRole("button", { name: "Fictional Programme C", exact: false })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Fictional Programme C", exact: false }),
  ).toBeFocused();
});
test("existing route aliases and diagnostic commitments remain accessible", async ({
  page,
}) => {
  for (const [from, to] of [
    ["/pricing", "/offers"],
    ["/method", "/how-matter-control-works#transformation"],
    ["/control-system", "/how-matter-control-works#workspace"],
    ["/atlas-intelligence", "/intelligence"],
    ["/product", "/what-we-do"],
    ["/solutions", "/use-cases"],
    ["/how-it-works", "/how-matter-control-works"],
  ]) {
    await page.goto(from);
    expect(new URL(page.url()).pathname + new URL(page.url()).hash).toBe(to);
  }
  await page.goto("/diagnostic");
  await expect(page.getByText("Complimentary", { exact: true })).toBeVisible();
  await expect(
    page.getByText("7–10 working days", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("No obligation to continue", { exact: true }),
  ).toBeVisible();
  await page
    .locator("summary")
    .filter({ hasText: "After the diagnostic: possible continuation" })
    .click();
  await expect(page.getByText(/five to ten named matters/)).toBeVisible();
});

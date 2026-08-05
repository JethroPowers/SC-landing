import { expect, test } from "@playwright/test";

const processSteps = [
  "Matter selected",
  "Information minimised and received",
  "Matter map reconstructed",
  "Evidence and dependencies registered",
  "Blockers assigned and controlled",
  "Advisor-review questions prepared",
  "Closeout and next actions agreed"
];

const workspaceViews = [
  ["Matter", "matter"],
  ["Readiness", "readiness"],
  ["Review Queue", "review"],
  ["Change Impact", "change"],
  ["Closeout", "closeout"]
] as const;

test.beforeEach(async ({ page }) => {
  await page.goto("/how-matter-control-works");
  await expect(page.getByRole("heading", { name: "How Matter Control Works" })).toBeVisible();
  await expect(page.getByText("Fictional demonstration matter")).toBeVisible();
});

test("every process step is interactive and forward/back navigation preserves context", async ({ page }, testInfo) => {
  for (const step of processSteps) {
    const tab = page.getByRole("tab", { name: new RegExp(`${step}$`) });
    await tab.evaluate((element) => {
      const rail = element.parentElement;
      if (rail) {
        rail.scrollLeft = (element as HTMLElement).offsetLeft - rail.clientWidth / 2;
      }
    });
    if (testInfo.project.name === "mobile-chromium") {
      await tab.evaluate((element) => (element as HTMLButtonElement).click());
    } else {
      await tab.click();
    }
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByTestId("process-panel")).toBeVisible();
  }

  await page.getByRole("tab", { name: "Change Impact", exact: true }).click();
  await page.getByRole("tab", { name: /Matter selected$/ }).click();

  for (let index = 1; index < processSteps.length; index += 1) {
    const next = page.getByRole("button", { name: "Next step", exact: true });
    if (testInfo.project.name === "mobile-chromium") {
      await next.evaluate((element) => (element as HTMLButtonElement).click());
    } else {
      await next.click();
    }
  }
  await expect(page.getByTestId("process-panel")).toContainText("Step 7 of 7");
  await expect(page.getByTestId("workspace-view-change")).toBeVisible();

  for (let index = processSteps.length - 1; index > 0; index -= 1) {
    const previous = page.getByRole("button", { name: "Previous step", exact: true });
    if (testInfo.project.name === "mobile-chromium") {
      await previous.evaluate((element) => (element as HTMLButtonElement).click());
    } else {
      await previous.click();
    }
  }
  await expect(page.getByTestId("process-panel")).toContainText("Step 1 of 7");
  await expect(page.getByTestId("workspace-view-change")).toBeVisible();
});

test("every workspace view renders the required fictional matter state", async ({ page }) => {
  for (const [label, id] of workspaceViews) {
    const tab = page.getByRole("tab", { name: label, exact: true });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByTestId(`workspace-view-${id}`)).toBeVisible();
  }

  await page.getByRole("tab", { name: "Readiness", exact: true }).click();
  await expect(page.getByText("18 / 21")).toBeVisible();
  await expect(page.getByText("Overdue by 6 days")).toBeVisible();

  await page.getByRole("tab", { name: "Change Impact", exact: true }).click();
  await expect(page.getByText("Fictional Mobility Ministry Notice 18/2026")).toBeVisible();
  await expect(page.getByText(/firm confirms its professional effect/i)).toBeVisible();
});

test("data handling disclosure and primary diagnostic route work", async ({ page }) => {
  const disclosure = page.getByTestId("data-handling-disclosure");
  await disclosure.scrollIntoViewIfNeeded();
  await disclosure.locator("summary").click();
  await expect(disclosure.getByText("No passports")).toBeVisible();
  await expect(disclosure.getByText("No bank statements")).toBeVisible();
  await expect(disclosure.getByText("No source-of-wealth files")).toBeVisible();

  const cta = page.getByTestId("primary-cta");
  await expect(cta).toHaveAttribute("href", "/contact?interest=matter-control-diagnostic");
  await cta.click();
  await expect(page).toHaveURL(/\/contact\?interest=matter-control-diagnostic$/);
  await expect(
    page.getByRole("heading", {
      name: "Discuss one matter that would benefit from clearer operational control."
    })
  ).toBeVisible();
});

test("layout has no horizontal clipping and captures the full experience", async ({ page }, testInfo) => {
  await page.getByRole("tab", { name: "Readiness", exact: true }).click();
  await expect(page.getByTestId("matter-summary")).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth
  }));

  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport + 1);
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport + 1);

  const workspaceFit = await page.getByTestId("workspace-view-readiness").evaluate((panel) => {
    const heading = panel.querySelector("h3");
    const panelBounds = panel.getBoundingClientRect();
    const headingBounds = heading?.getBoundingClientRect();

    return {
      panelClientWidth: panel.clientWidth,
      panelScrollWidth: panel.scrollWidth,
      headingRight: headingBounds?.right ?? 0,
      panelRight: panelBounds.right
    };
  });

  expect(workspaceFit.panelScrollWidth).toBeLessThanOrEqual(workspaceFit.panelClientWidth + 1);
  expect(workspaceFit.headingRight).toBeLessThanOrEqual(workspaceFit.panelRight + 1);

  await page.evaluate(() => window.scrollTo(0, 0));

  await page.screenshot({
    fullPage: true,
    path: testInfo.outputPath("matter-control-full-page.png")
  });
});

test("the interactive journey stays free of browser errors", async ({ page }) => {
  const errors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));

  await page.reload({ waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "Readiness", exact: true }).click();
  await page.getByRole("tab", { name: "Review Queue", exact: true }).click();
  await page.getByRole("tab", { name: "Change Impact", exact: true }).click();
  await page.getByRole("tab", { name: "Closeout", exact: true }).click();

  expect(errors).toEqual([]);
});

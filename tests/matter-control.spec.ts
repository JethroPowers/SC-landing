import { expect, test, type Page, type TestInfo } from "@playwright/test";

const phases = [
  ["reconstruct", "One current matter record."],
  ["control", "Every gap becomes controllable."],
  ["prepare", "Judgement reaches the right questions."]
] as const;

const workspaceViews = [
  ["Matter", "matter"],
  ["Readiness", "readiness"],
  ["Review Queue", "review"],
  ["Change Impact", "change"],
  ["Closeout", "closeout"]
] as const;

const methodSteps = [
  "Matter selected",
  "Information minimised and received",
  "Matter map reconstructed",
  "Evidence and dependencies registered",
  "Blockers assigned and controlled",
  "Advisor-review questions prepared",
  "Closeout and next actions agreed"
];

function isPinnedDesktop(testInfo: TestInfo) {
  return testInfo.project.name === "desktop-chromium";
}

async function scrollToPhase(page: Page, index: number) {
  await page.evaluate(({ phaseIndex, phaseCount }) => {
    const track = document.querySelector<HTMLElement>(
      '[data-testid="transformation-track"]'
    );
    if (!track) throw new Error("Transformation track missing");
    const start = window.scrollY + track.getBoundingClientRect().top;
    const travel = Math.max(0, track.offsetHeight - window.innerHeight);
    window.scrollTo(0, start + travel * ((phaseIndex + 0.56) / phaseCount));
  }, { phaseIndex: index, phaseCount: phases.length });
}

test.beforeEach(async ({ page }) => {
  await page.goto("/how-matter-control-works");
  await expect(
    page.getByRole("heading", { name: "We make one live matter ready to manage." })
  ).toBeVisible();
  await expect(page.getByText("Fictional demonstration matter")).toBeVisible();
});

test("the opening explains the service with persistent fictional matter context", async ({ page }) => {
  await expect(
    page.getByText(
      "Sovereignty Control reconstructs the record, controls missing work and prepares the questions your advisors must decide."
    )
  ).toBeVisible();

  const record = page.getByTestId("opening-matter-record");
  await expect(record.getByText("SC-024", { exact: true })).toBeVisible();
  await expect(record.getByText("Principal applicant, spouse and two children")).toBeVisible();
  await expect(record.getByText("Mobility plus a long-term residence option")).toBeVisible();
  await expect(record.getByText(/3 missing evidence items/)).toBeVisible();
  await expect(record.getByText(/1 overdue dependency/)).toBeVisible();
  await expect(record.getByText(/2 questions for review/)).toBeVisible();
  await expect(page.getByRole("link", { name: "Scroll to reconstruct" })).toHaveAttribute(
    "href",
    "#transformation"
  );
});

test("scrolling drives all three pinned phases forwards and backwards", async ({ page }, testInfo) => {
  test.skip(!isPinnedDesktop(testInfo), "The pinned transformation is desktop-only.");

  for (let index = 0; index < phases.length; index += 1) {
    await scrollToPhase(page, index);
    await expect(page.getByTestId("transformation-canvas")).toHaveAttribute(
      "data-active-phase",
      String(index)
    );
    await expect(page.getByRole("heading", { name: phases[index][1] })).toBeVisible();
    await expect(
      page
        .getByTestId("transformation-canvas")
        .getByTestId(`phase-visual-${phases[index][0]}`)
    ).toBeVisible();
  }

  for (let index = phases.length - 2; index >= 0; index -= 1) {
    await scrollToPhase(page, index);
    await expect(page.getByTestId("transformation-canvas")).toHaveAttribute(
      "data-active-phase",
      String(index)
    );
  }
});

test("phase controls navigate directly and remain keyboard accessible", async ({ page }, testInfo) => {
  test.skip(!isPinnedDesktop(testInfo), "Phase controls appear in the pinned desktop canvas.");

  const controls = page.getByRole("tablist", { name: "Matter-control operating phases" });
  for (let index = 0; index < phases.length; index += 1) {
    const tab = controls.getByRole("tab", { name: `${index + 1}. ${phases[index][0]}`, exact: false });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
  }

  const first = controls.getByRole("tab", { name: "01. Reconstruct" });
  await first.focus();
  await expect(first).toBeFocused();
});

test("the three deliverable groups reveal all seven exact outputs", async ({ page }) => {
  const outputs = page.getByTestId("story-deliverables");
  await expect(outputs.getByRole("heading", { name: "A current matter record" })).toBeVisible();
  await expect(outputs.getByRole("heading", { name: "Controlled readiness registers" })).toBeVisible();
  await expect(outputs.getByRole("heading", { name: "An advisor-ready action pack" })).toBeVisible();

  const disclosure = page.getByTestId("all-outputs-disclosure");
  await disclosure.locator("summary").click();
  for (const output of [
    "Matter map",
    "Document-readiness register",
    "Blocker and dependency register",
    "Advisor-review questions",
    "Programme-assumption register",
    "Immediate action plan",
    "Closeout summary"
  ]) {
    await expect(disclosure.getByText(output, { exact: true })).toBeVisible();
  }
});

test("all five workspace views are manually explorable", async ({ page }) => {
  const workspace = page.getByTestId("workspace-explore");
  await expect(workspace.getByRole("tab", { name: "Readiness", exact: true })).toHaveAttribute(
    "aria-selected",
    "true"
  );
  await expect(workspace.getByText("18 / 21")).toBeVisible();
  await expect(workspace.getByText("Overdue by 6 days")).toBeVisible();

  for (const [label, id] of workspaceViews) {
    const tab = workspace.getByRole("tab", { name: label, exact: true });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(workspace.getByTestId(`workspace-view-${id}`)).toBeVisible();
  }
});

test("the seven-step method supports direct, forward and backward navigation", async ({ page }) => {
  const method = page.getByTestId("seven-step-method");
  await method.locator("summary").click();
  const tabs = method.getByRole("tablist", { name: "Seven-step matter-control method" });

  for (let index = 0; index < methodSteps.length; index += 1) {
    const tab = tabs.getByRole("tab", { name: `${index + 1}. ${methodSteps[index]}` });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
  }

  await method.getByRole("button", { name: "Previous method step" }).click();
  await expect(tabs.getByRole("tab", { name: `6. ${methodSteps[5]}` })).toHaveAttribute(
    "aria-selected",
    "true"
  );
  await method.getByRole("button", { name: "Next method step" }).click();
  await expect(tabs.getByRole("tab", { name: `7. ${methodSteps[6]}` })).toHaveAttribute(
    "aria-selected",
    "true"
  );

  await expect(method.getByText("Sovereignty Control", { exact: true })).toBeVisible();
  await expect(method.getByText("The firm remains responsible for", { exact: true })).toBeVisible();
  await expect(method.getByText("Matter record change", { exact: true })).toBeVisible();
  await expect(method.getByText("Practical output", { exact: true })).toBeVisible();
});

test("change impact, professional boundary, diagnostic disclosure and CTA remain clear", async ({ page }) => {
  const change = page.getByTestId("story-change");
  for (const step of [
    "Source change detected",
    "Effective date recorded",
    "Affected route identified",
    "Active matter flagged",
    "Advisor confirmation requested"
  ]) {
    await expect(change.getByText(step, { exact: true })).toBeVisible();
  }
  await expect(change.getByText("Fictional Mobility Ministry Notice 18/2026")).toBeVisible();
  await expect(change.getByText("29 July 2026")).toBeVisible();
  await expect(change.getByText("15 August 2026")).toBeVisible();

  const boundary = page.getByTestId("story-boundary");
  await expect(boundary.getByText("Advises, judges, approves and decides.")).toBeVisible();
  await expect(boundary.getByText("Reconstructs, tracks, prepares and surfaces.")).toBeVisible();

  const disclosure = page.getByTestId("data-handling-disclosure");
  await disclosure.locator("summary").click();
  await expect(disclosure.getByText("No passports", { exact: true })).toBeVisible();
  await expect(disclosure.getByText("No bank statements", { exact: true })).toBeVisible();
  await expect(disclosure.getByText("No source-of-wealth files", { exact: true })).toBeVisible();

  const cta = page.getByTestId("primary-cta");
  await expect(cta).toHaveAttribute("href", "/contact?interest=matter-control-diagnostic");
  await cta.click();
  await expect(page).toHaveURL(/\/contact\?interest=matter-control-diagnostic$/);
});

test("fallback layouts show every phase without pinning", async ({ page }, testInfo) => {
  test.skip(isPinnedDesktop(testInfo), "Desktop uses the pinned transformation.");

  await expect(page.getByTestId("transformation-canvas")).toBeHidden();
  for (const [id, title] of phases) {
    const phase = page.getByTestId(`mobile-phase-${id}`);
    await expect(phase).toBeAttached();
    await expect(phase.getByRole("heading", { name: title })).toBeVisible();
  }
});

test("the page has stable flowing dimensions and no browser errors", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));

  await page.reload({ waitUntil: "networkidle" });
  const dimensions = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const textScrollers = Array.from(document.querySelectorAll<HTMLElement>("main *")).filter(
      (element) => {
        const style = getComputedStyle(element);
        return (
          (style.overflowY === "auto" || style.overflowY === "scroll") &&
          element.scrollHeight > element.clientHeight + 2
        );
      }
    );
    return {
      viewport: window.innerWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
      sections: sections.map((section) => ({
        id: section.id,
        width: section.getBoundingClientRect().width
      })),
      textScrollers: textScrollers.map((element) => element.className)
    };
  });

  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport + 1);
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport + 1);
  expect(dimensions.sections.every((section) => section.width <= dimensions.viewport + 1)).toBe(true);
  expect(dimensions.textScrollers).toEqual([]);

  if (isPinnedDesktop(testInfo)) {
    const transformationPosition = await page
      .getByTestId("transformation-canvas")
      .evaluate((node) => getComputedStyle(node).position);
    const outputPosition = await page
      .getByTestId("story-deliverables")
      .evaluate((node) => getComputedStyle(node).position);
    expect(transformationPosition).toBe("sticky");
    expect(outputPosition).not.toBe("sticky");
  }

  expect(errors).toEqual([]);
});

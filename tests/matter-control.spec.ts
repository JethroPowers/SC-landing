import { expect, test, type Page, type TestInfo } from "@playwright/test";

const chapterLabels = [
  "01. Matter selected",
  "02. Information minimised and received",
  "03. Matter map reconstructed",
  "04. Evidence and dependencies registered",
  "05. Blockers assigned and controlled",
  "06. Advisor-review questions prepared",
  "07. Closeout and next actions agreed",
  "08. Change reaches the matter",
  "09. The professional boundary",
  "10. Start with one matter"
];

const workspaceViews = [
  ["Matter", "matter"],
  ["Readiness", "readiness"],
  ["Review Queue", "review"],
  ["Change Impact", "change"],
  ["Closeout", "closeout"]
] as const;

function isCinematic(testInfo: TestInfo) {
  return testInfo.project.name === "desktop-chromium";
}

function workspaceFor(page: Page, testInfo: TestInfo, chapterIndex: number) {
  return isCinematic(testInfo)
    ? page.getByTestId("workspace-cinematic")
    : page.getByTestId(`workspace-fallback-${chapterIndex}`);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/how-matter-control-works");
  await expect(page.getByRole("heading", { name: "How Matter Control Works" }).first()).toBeVisible();
  await expect(
    page.locator("strong:visible", { hasText: "Fictional demonstration matter" }).first()
  ).toBeVisible();
});

test("all ten chapters are reachable with direct controls and forward/back navigation", async ({ page }, testInfo) => {
  const progress = page.getByRole("tablist", {
    name: "Matter-control narrative chapters"
  });
  const persistentContext = isCinematic(testInfo)
    ? page.getByTestId("workspace-cinematic")
    : page.locator('[aria-label="Fictional matter summary"]:visible');

  await expect(persistentContext.getByText("SC-024", { exact: true }).first()).toBeVisible();
  await expect(
    persistentContext.getByText("Principal applicant, spouse and two children", { exact: true }).first()
  ).toBeVisible();
  await expect(
    persistentContext.getByText("Mobility plus a long-term residence option", { exact: true }).first()
  ).toBeVisible();
  await expect(persistentContext.getByText(/4 (possible )?routes/).first()).toBeVisible();
  await expect(persistentContext.getByText("Attention required", { exact: true }).first()).toBeVisible();
  await expect(persistentContext.getByText(/12 August 2026/).first()).toBeVisible();

  for (let index = 0; index < chapterLabels.length; index += 1) {
    const tab = progress.getByRole("tab", { name: chapterLabels[index] });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");

    if (isCinematic(testInfo)) {
      await expect(page.getByTestId("narrative-canvas")).toHaveAttribute(
        "data-active-chapter",
        String(index)
      );
    } else {
      await expect(page.getByTestId(`mobile-chapter-${index}`)).toBeInViewport();
    }
  }

  const previous = page.getByRole("button", { name: "Previous chapter" });
  await previous.evaluate((node) => node.scrollIntoView({ block: "center" }));
  await previous.click();
  await expect(progress.getByRole("tab", { name: chapterLabels[8] })).toHaveAttribute(
    "aria-selected",
    "true"
  );
  await page.getByRole("button", { name: "Next chapter" }).click();
  await expect(progress.getByRole("tab", { name: chapterLabels[9] })).toHaveAttribute(
    "aria-selected",
    "true"
  );
});

test("scroll position drives every cinematic chapter", async ({ page }, testInfo) => {
  test.skip(!isCinematic(testInfo), "The cinematic scroll track is desktop-only.");

  for (let index = 0; index < chapterLabels.length; index += 1) {
    await page.evaluate(({ chapterIndex, chapterCount }) => {
      const track = document.querySelector<HTMLElement>(
        '[aria-label="How Matter Control Works scroll narrative"]'
      );
      if (!track) throw new Error("Narrative track missing");
      const start = window.scrollY + track.getBoundingClientRect().top;
      const travel = Math.max(0, track.offsetHeight - window.innerHeight);
      window.scrollTo(0, start + travel * ((chapterIndex + 0.56) / chapterCount));
    }, { chapterIndex: index, chapterCount: chapterLabels.length });

    await expect(page.getByTestId("narrative-canvas")).toHaveAttribute(
      "data-active-chapter",
      String(index)
    );
  }
});

test("workspace overrides work and the next chapter restores its mapped view", async ({ page }, testInfo) => {
  const progress = page.getByRole("tablist", {
    name: "Matter-control narrative chapters"
  });
  await progress.getByRole("tab", { name: chapterLabels[3] }).click();
  let workspace = workspaceFor(page, testInfo, 3);

  for (const [label, id] of workspaceViews) {
    const tab = workspace.getByRole("tab", { name: label, exact: true });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(workspace.getByTestId(new RegExp(`workspace-view-${id}`))).toBeVisible();
  }

  await progress.getByRole("tab", { name: chapterLabels[4] }).click();
  workspace = workspaceFor(page, testInfo, 4);
  await expect(workspace.getByRole("tab", { name: "Readiness", exact: true })).toHaveAttribute(
    "aria-selected",
    "true"
  );
  await expect(workspace.getByText("18 / 21")).toBeVisible();
  await expect(workspace.getByText("Overdue by 6 days")).toBeVisible();
});

test("the professional boundary, diagnostic CTA and data disclosure remain usable", async ({ page }, testInfo) => {
  const progress = page.getByRole("tablist", {
    name: "Matter-control narrative chapters"
  });
  await progress.getByRole("tab", { name: chapterLabels[8] }).click();

  const boundary = isCinematic(testInfo)
    ? page.getByTestId("narrative-canvas").getByTestId("boundary-surface")
    : page.getByTestId("mobile-chapter-8").getByTestId("boundary-surface");
  await expect(
    boundary.getByText(/Client relationships, professional judgement/)
  ).toBeVisible();
  await expect(
    boundary.getByText(/Matter reconstruction, readiness tracking/)
  ).toBeVisible();

  await progress.getByRole("tab", { name: chapterLabels[9] }).click();
  const instance = isCinematic(testInfo) ? "cinematic" : "fallback-9";
  const disclosure = page.getByTestId(`data-handling-disclosure-${instance}`);
  await disclosure.locator("summary").click();
  await expect(disclosure.getByText("No passports")).toBeVisible();
  await expect(disclosure.getByText("No bank statements")).toBeVisible();
  await expect(disclosure.getByText("No source-of-wealth files")).toBeVisible();

  const cta = page.getByTestId(`primary-cta-${instance}`);
  await expect(cta).toHaveAttribute(
    "href",
    "/contact?interest=matter-control-diagnostic"
  );
  await cta.click();
  await expect(page).toHaveURL(/\/contact\?interest=matter-control-diagnostic$/);
});

test("keyboard navigation and reduced-motion fallback remain accessible", async ({ page }, testInfo) => {
  const progress = page.getByRole("tablist", {
    name: "Matter-control narrative chapters"
  });
  const first = progress.getByRole("tab", { name: chapterLabels[0] });
  await first.focus();
  await first.press("ArrowRight");
  const second = progress.getByRole("tab", { name: chapterLabels[1] });
  await expect(second).toBeFocused();
  await expect(second).toHaveAttribute("aria-selected", "true");

  if (testInfo.project.name === "reduced-motion-chromium") {
    await expect(page.getByTestId("narrative-canvas")).toBeHidden();
    await expect(page.getByTestId("mobile-chapter-0")).toBeVisible();
    await expect(page.getByTestId("mobile-chapter-9")).toBeVisible();
  }
});

test("layout is stable, unclipped and free of browser errors", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));

  await page.reload({ waitUntil: "networkidle" });
  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth
  }));

  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport + 1);
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport + 1);

  if (isCinematic(testInfo)) {
    const initial = await page.getByTestId("narrative-canvas").boundingBox();
    await page
      .getByRole("tablist", { name: "Matter-control narrative chapters" })
      .getByRole("tab", { name: chapterLabels[7] })
      .click();
    const changed = await page.getByTestId("narrative-canvas").boundingBox();
    expect(changed?.width).toBeCloseTo(initial?.width ?? 0, 0);
    expect(changed?.height).toBeCloseTo(initial?.height ?? 0, 0);
  }

  expect(errors).toEqual([]);
});

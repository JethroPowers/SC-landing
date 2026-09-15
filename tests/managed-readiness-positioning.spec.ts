import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("professional positioning, independent routes and honest offer status", async ({
  page,
}) => {
  await expect(page.locator("h1")).toHaveText("For the people behind global mobility.");
  await expect(
    page.getByRole("link", { name: "Juris Partners home" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Explore the work" }),
  ).toHaveCount(0);
  await expect(page.locator("main form")).toHaveCount(0);
  await expect(page.locator("#adviser-network")).toContainText(
    "participation follows review and agreement",
  );
  await expect(page.locator("main")).toContainText(
    "Adviser participation does not require purchasing Juris Control",
  );
  await expect(page.locator("#working-together")).toContainText(
    "7–10 working days",
  );
  await expect(page.locator("#working-together")).toContainText(
    "No obligation to continue",
  );
  await page
    .getByRole("link", { name: "Open the interactive example" })
    .click();
  await expect(
    page.getByRole("button", { name: "Prepare update draft" }),
  ).toBeVisible();
  await page.goto("/offers#questions");
  await expect(page.locator("#continuation")).toContainText(
    "Subject to fit and scope",
  );
  await expect(page.locator("#continuation")).toContainText(
    "Future possibility",
  );
  for (const heading of [
    "Is Juris a source of guaranteed new leads?",
    "Can we collaborate without buying operational work?",
  ]) {
    await page.locator("summary").filter({ hasText: heading }).click();
  }
  await expect(
    page.getByText(/No\. Juris has a public discovery platform/),
  ).toBeVisible();
  await expect(
    page.getByText(/Yes\. Professional collaboration has its own scope/),
  ).toBeVisible();
  await page.goto("/about");
  await expect(page.locator("main")).toContainText("Alberto");
  await expect(page.locator("main")).toContainText("Jethro");
  await expect(page.locator("main")).not.toContainText("Sovereignty Control");
});
test("public previews load and point to verified product routes", async ({
  page,
}) => {
  for (const img of await page.locator("main img").all()) {
    await expect(img).toBeVisible();
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate(
      (e: HTMLImageElement) => e.complete && e.naturalWidth > 0,
    )).toBeTruthy();
  }
  await expect(
    page.getByRole("link", { name: /Programme intelligence Actual public Juris map/ }),
  ).toHaveAttribute("href", "https://sovereignty-atlas.vercel.app/");
  const json = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(JSON.parse(json!)["@graph"][0].name).toBe("Juris Partners");
  await page.goto("/intelligence");
  await expect(
    page.getByRole("link", { name: "Programme directory", exact: true }),
  ).toHaveAttribute("href", "https://sovereignty-atlas.vercel.app/programmes");
  await expect(
    page.getByRole("link", { name: "Juris insights", exact: true }),
  ).toHaveAttribute("href", "https://sovereignty-atlas.vercel.app/insights");
  await page
    .locator("summary")
    .filter({ hasText: "See a fictional programme-change record" })
    .click();
  await expect(
    page.getByText("Current approved value", { exact: true }),
  ).toBeVisible();
});
test("workflow stages, audience emphasis, keyboard controls and contextual enquiry", async ({
  page,
}) => {
  await page.goto("/use-cases#workflows");
  const tabs = page
    .getByRole("tablist", { name: "Client workflow stages" })
    .getByRole("tab");
  await expect(tabs).toHaveCount(6);
  for (let i = 0; i < 6; i++) {
    await tabs.nth(i).click();
    await expect(tabs.nth(i)).toHaveAttribute("aria-selected", "true");
    await expect(page.locator("#workflow-panel")).toContainText("The task");
    await expect(page.locator("#workflow-panel")).toContainText(
      "Possible friction",
    );
    await expect(page.locator("#workflow-panel")).toContainText(
      "A possible Juris output",
    );
  }
  await tabs.nth(5).press("Home");
  await expect(tabs.nth(0)).toBeFocused();
  await tabs.nth(0).press("ArrowDown");
  await expect(tabs.nth(1)).toBeFocused();
  await page.getByRole("radio", { name: "Introducers", exact: true }).check();
  await expect(page.getByText("A lighter handover")).toBeVisible();
  await expect(
    page.getByText("Professional accepts", { exact: true }),
  ).toBeVisible();
  await page
    .getByRole("radio", { name: "Delivery Teams", exact: true })
    .check();
  await expect(page.getByText("A lighter handover")).toHaveCount(0);
  await tabs.nth(3).click();
  await page.getByRole("link", { name: "Discuss this workflow" }).click();
  await expect(page).toHaveURL(/interest=operational-workflow&stage=readiness/);
  await expect(page.getByLabel("Main interest")).toHaveValue(
    "operational-workflow",
  );
  await expect(page.getByText(/Conversation context:/)).toContainText(
    "Documents & dependencies",
  );
});
test("header, anchors, mobile menu, skip link and reduced motion", async ({
  page,
  isMobile,
}) => {
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeFocused();
  if (isMobile) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Open navigation" }),
    ).toBeFocused();
  }
  if (isMobile)
    await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "What we do", exact: true })
    .click();
  await page
    .getByRole("link", { name: "See where your firm fits", exact: true })
    .click();
  await expect(page).toHaveURL(/\/use-cases$/);
  if (isMobile)
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeHidden();
  await page
    .getByRole("link", { name: "Explore six workflow stages", exact: true })
    .click();
  await expect(page).toHaveURL(/\/use-cases#workflows$/);
  const missing = await page
    .locator('a[href^="#"],a[href^="/#"]')
    .evaluateAll((links) =>
      links
        .map((a) => (a as HTMLAnchorElement).hash)
        .filter(
          (hash) =>
            hash && !document.getElementById(decodeURIComponent(hash.slice(1))),
        ),
    );
  expect(missing).toEqual([]);
  const size = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(size.scroll).toBeLessThanOrEqual(size.width + 1);
  if (
    await page.evaluate(
      () => matchMedia("(prefers-reduced-motion: reduce)").matches,
    )
  ) {
    expect(
      await page
        .locator("main button")
        .first()
        .evaluate((e) => getComputedStyle(e).transitionDuration),
    ).toBe("0s");
  }
});
test("no horizontal clipping at narrow width or doubled text size", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(361);
  await page.addStyleTag({ content: "html{font-size:200%}" });
  const width = await page.evaluate(() => ({
    viewport: innerWidth,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(width.scroll).toBeLessThanOrEqual(width.viewport + 1);
  const clipped = await page.locator("main").evaluate((main) =>
    Array.from(
      main.querySelectorAll("a,button,input,select,textarea,p,h1,h2,h3,label,span,small"),
    )
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.width > 0 &&
          rect.height > 0 &&
          (rect.right > innerWidth + 1 || rect.left < 0)
        );
      })
      .map((element) => element.textContent),
  );
  expect(clipped).toEqual([]);
  await page.goto("/use-cases#workflows");
  await page.addStyleTag({content:"html{font-size:200%}"});
  await page.getByRole("tab", { name: /04 Documents/ }).click();
  await expect(
    page.getByRole("link", { name: "Discuss this workflow" }),
  ).toBeVisible();
});

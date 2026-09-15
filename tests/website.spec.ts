import { expect, test } from "@playwright/test";

const mainPages = [
  ["What we do", "/what-we-do"],
  ["For advisers", "/advisers"],
  ["Operations", "/how-matter-control-works"],
  ["Intelligence", "/intelligence"],
  ["About", "/about"],
] as const;

test("complete website navigation connects distinct pages with current-page context", async ({
  page,
}) => {
  await page.goto("/");
  for (const [label, href] of mainPages) {
    const toggle = page.getByRole("button", { name: "Open navigation" });
    if (await toggle.isVisible()) await toggle.click();
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Juris Partners/);
    await expect(
      page.getByRole("navigation", { name: "Breadcrumb" }),
    ).toContainText(label);
    await expect(
      page
        .getByRole("navigation", {
          name: "Main navigation",
          includeHidden: true,
        })
        .getByRole("link", { name: label, exact: true, includeHidden: true }),
    ).toHaveAttribute("aria-current", "page");
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual((page.viewportSize()?.width ?? 0) + 1);
  }
  for (const [label, href] of [
    ["Contact", "/contact"],
    ["For your firm", "/use-cases"],
    ["Working together", "/offers"],
    ["Worked example", "/demo-case"],
    ["Complimentary diagnostic", "/diagnostic"],
  ]) {
    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
    await expect(
      page.getByRole("navigation", { name: "Breadcrumb" }),
    ).toContainText(label);
    if (["/demo-case", "/diagnostic"].includes(href)) {
      await expect(
        page
          .getByRole("navigation", { name: "Breadcrumb" })
          .getByRole("link", { name: "Operations" }),
      ).toHaveAttribute("href", "/how-matter-control-works");
    }
  }
});

test("firm roles and collaboration have their own accurate enquiry journeys", async ({
  page,
}) => {
  await page.goto("/use-cases");
  for (const role of [
    "Introducers & marketing agents",
    "Advisory firms",
    "Local & authorised delivery teams",
    "Relocation & multi-provider teams",
  ]) {
    await expect(
      page.getByRole("heading", { name: role, exact: true }),
    ).toBeVisible();
  }
  await page
    .getByRole("link", { name: "Discuss adviser preparation", exact: true })
    .click();
  await expect(page.getByLabel("Main interest")).toHaveValue(
    "operational-workflow",
  );
  await expect(page.getByText(/Conversation context:/)).toContainText(
    "Comparison & proposal",
  );
  await page.goto("/offers#collaboration");
  await page
    .getByRole("link", { name: "Discuss collaboration", exact: true })
    .click();
  await expect(page.getByLabel("Main interest")).toHaveValue(
    "professional-collaboration",
  );
  await page.goto("/offers");
  await expect(page.locator("#diagnostic")).toContainText("Complimentary");
  await expect(page.locator("#diagnostic")).toContainText("7–10 working days");
  await expect(page.locator("#continuation")).toContainText(
    "Subject to fit and scope",
  );
  await expect(page.locator("#continuation")).toContainText(
    "Future possibility",
  );
  await page
    .getByRole("link", { name: "Read the full diagnostic scope", exact: true })
    .click();
  await expect(page).toHaveURL(/\/diagnostic$/);
});

test("new pages remain readable at narrow widths and 200 percent text size", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  for (const route of ["/what-we-do", "/use-cases", "/offers", "/advisers"]) {
    await page.goto(route);
    await page.addStyleTag({ content: "html{font-size:200%}" });
    const clipped = await page.locator("main").evaluate((main) =>
      Array.from(main.querySelectorAll("a,button,p,h1,h2,h3,li,dt,dd"))
        .filter((e) => {
          const r = e.getBoundingClientRect();
          return (
            r.width > 0 &&
            r.height > 0 &&
            (r.left < -1 || r.right > innerWidth + 1)
          );
        })
        .map((e) => e.textContent?.slice(0, 100)),
    );
    expect(clipped, route).toEqual([]);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(361);
  }
});

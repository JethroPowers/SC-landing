import { expect, test } from "@playwright/test";

test("public product and intelligence views stay truthful and keyboard operable", async ({
  page,
}) => {
  await page.goto("/");
  const tabs = page.getByRole("tablist", {
    name: "Public Juris product views",
  });
  await tabs.getByRole("tab").first().focus();
  await page.keyboard.press("End");
  await expect(tabs.getByRole("tab", { name: "04 Insights" })).toBeFocused();
  await expect(
    page.getByRole("tabpanel", { name: "04 Insights" }).getByRole("link"),
  ).toHaveAttribute("href", "https://sovereignty-atlas.vercel.app/insights");
  const image = page
    .getByRole("tabpanel", { name: "04 Insights" })
    .locator("img");
  await image.scrollIntoViewIfNeeded();
  await expect(image).toBeVisible();
  await expect
    .poll(() =>
      image.evaluate(
        (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
      ),
    )
    .toBeTruthy();
  const sequence = page.getByRole("tablist", { name: "Intelligence sequence" });
  await sequence.getByRole("tab", { name: "02 Review" }).click();
  await expect(page.getByRole("tabpanel", { name: "02 Review" })).toContainText(
    "Existing value retained",
  );
  await sequence.getByRole("tab", { name: "03 Programme record" }).click();
  await expect(
    page.getByRole("tabpanel", { name: "03 Programme record" }),
  ).toContainText("Firm confirms applicability");
  await expect(page.getByLabel("Possible uses after review")).toContainText(
    "Possible future workflow",
  );
});

test("Control progression preserves evidence gaps and contextual workflow reaches the enquiry", async ({
  page,
}) => {
  await page.goto("/#worked-example");
  const stages = page.getByRole("tablist", {
    name: "Control demonstration stages",
  });
  await stages.getByRole("tab", { name: "02 Assign the next action" }).click();
  const assigned = page.getByRole("tabpanel", {
    name: "02 Assign the next action",
  });
  await expect(assigned).toContainText("Provider liaison");
  await expect(assigned).toContainText("18 / 21");
  await stages.getByRole("tab", { name: "03 Prepare for review" }).click();
  await expect(
    page.getByRole("tabpanel", { name: "03 Prepare for review" }),
  ).toContainText("approval required");
  await expect(
    page.locator("#worked-example").getByRole("status"),
  ).toContainText("nothing sent");
  await page
    .locator("#worked-example")
    .getByRole("button", { name: "Reset", exact: true })
    .click();
  await expect(
    page.getByRole("tabpanel", { name: "01 See the blocker" }),
  ).toContainText("Unassigned");
  const friction = page.getByRole("tablist", {
    name: "Workflow friction points",
  });
  await expect(friction.getByRole("tab")).toHaveCount(9);
  await friction.getByRole("tab", { name: "08 Client update" }).click();
  const panel = page.getByRole("tabpanel", { name: "08 Client update" });
  await expect(panel).toContainText(
    "Your firm approves and sends every communication",
  );
  await panel.getByRole("link", { name: "Discuss this workflow" }).click();
  await expect(page.getByLabel("Main interest")).toHaveValue(
    "operational-workflow",
  );
  await expect(page.getByText(/Conversation context:/)).toContainText(
    "Updates & next actions",
  );
  await page.goto("/#ways-to-work");
  await page
    .getByRole("link", { name: "Discuss intelligence", exact: true })
    .click();
  await expect(page.getByLabel("Main interest")).toHaveValue(
    "programme-intelligence",
  );
});

test("supporting pages are discoverable from the header and menus restore focus", async ({
  page,
}) => {
  await page.goto("/");
  const mobile = page.getByRole("button", { name: "Open navigation" });
  if (await mobile.isVisible()) await mobile.click();
  const toggle = page.getByRole("button", { name: "Explore operations pages" });
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  const main = page.getByRole("navigation", { name: "Main navigation" });
  await expect(
    main.getByRole("link", { name: /Complimentary diagnostic/ }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await main.getByRole("link", { name: /Complimentary diagnostic/ }).click();
  await expect(page).toHaveURL(/\/diagnostic$/);
  await expect(
    page.getByRole("navigation", { name: "Breadcrumb" }),
  ).toContainText("Operations");
  if (await mobile.isVisible()) await mobile.click();
  await page.getByRole("button", { name: "Explore what we do pages" }).click();
  await main.getByRole("link", { name: /Working together/ }).click();
  await expect(page).toHaveURL(/\/offers$/);
  await expect(page.locator("#diagnostic")).toContainText("7–10 working days");
});

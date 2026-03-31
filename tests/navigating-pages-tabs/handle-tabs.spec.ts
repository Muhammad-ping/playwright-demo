import { expect, test } from "@playwright/test";

test("Handle new tabs", async ({ page, context }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click("#openNewTabBtn"),
  ]);

  await newPage.waitForLoadState("domcontentloaded");
  const newPageTitle = await newPage.title();
  expect(newPageTitle).toBe("New Tab Page");

  const heading = await newPage.locator("h1").textContent();
  expect(heading).toBe("Welcome to the New Tab");
});

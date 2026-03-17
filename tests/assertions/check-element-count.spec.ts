import { test, expect } from "@playwright/test";

test("Check Element Count", async ({ page }) => {
  // Navigate to the target webpage

  await page.goto("https://selectors-practice.onrender.com/");

  // Count the number of buttons on the page

  const buttonCount = await page.locator("//button").count();
  console.log(buttonCount);
  expect(buttonCount).toBeGreaterThan(4);

  // Count the number of fruit options in the search options list

  const fruitsCount = await page.locator("ul[id='searchOptions'] li").count();
  console.log(fruitsCount);
  expect(fruitsCount).toBe(7);
});

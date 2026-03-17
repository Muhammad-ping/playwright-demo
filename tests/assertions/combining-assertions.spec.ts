import { test, expect } from "@playwright/test";

test("Combining Multiple Assertions", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");
  // Locate the button output element
  const element = page.locator("#buttonOutput");
  // Perform multiple assertions on the element
  await expect(element).not.toBeVisible();
  expect(await element.textContent()).toBeFalsy();
  await expect(element).toHaveClass(/output/);
});

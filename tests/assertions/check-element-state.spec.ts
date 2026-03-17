import { test, expect } from "@playwright/test";

test("Check Element State", async ({ page }) => {
  // Navigate to the target webpage

  await page.goto("https://selectors-practice.onrender.com/");

  // Check if the login button is enabled
  await expect(
    page.locator("form[id='loginForm'] button[type='submit']"),
  ).toBeEnabled();

  // Check if the "Remember Me" checkbox is checked by default
  await expect(page.locator("#rememberMe")).toBeChecked();

  // Check if the disabled button is indeed disabled
  await expect(page.locator("#disabledButton")).toBeDisabled();

  // Check a checkbox and verify it's checked

  await page.locator("div.checkbox-group input[value='Option 1']").check();
  await expect(
    page.locator("div.checkbox-group input[value='Option 1']"),
  ).toBeChecked();
});

// toBeEnabled()
// toBeChecked()

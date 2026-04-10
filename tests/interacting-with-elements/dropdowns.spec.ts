import { test, expect } from "@playwright/test";

test("Dropdowns", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // scroll to Dropdown section
  await page.locator("#dropdownMenu").scrollIntoViewIfNeeded();

  // Select Blue from Dropdown
  await page.selectOption("#dropdownMenu", "Blue");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Select Red from Dropdown
  await page.locator("#dropdownMenu").selectOption("Red");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Select Green from Dropdown

  await page.selectOption("#dropdownMenu", "Green");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);
});

test("Dropdowns2", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator("#dropdownDisplay").scrollIntoViewIfNeeded();

  await page.locator("#dropdownDisplay").click();
  await page.locator("#customDropdownSearch").fill("Madrid");
  await page.locator("//ul[@id='dropdownOptions']").click();
});

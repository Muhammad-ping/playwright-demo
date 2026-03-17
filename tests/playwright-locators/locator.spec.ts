// Using locator() A flexible and generic selector. Can use CSS and XPath
// `locator()` — гибкий и универсальный селектор. Можно использовать CSS и XPath.

import { test, expect } from "@playwright/test";

test("Locator", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator('input[placeholder="Username"]').fill("asdasd");
  await page.locator('input[placeholder="Password"]').fill("asd");
  await page.locator('//button[text()="Login"]').click();
  // 2 metod
  await page.fill('input[placeholder="Username"]', "asdasd");
  await page.fill('input[placeholder="Password"]', "asd");
  await page.click('//button[text()="Login"]');
});

//div button[id="btnClick"]

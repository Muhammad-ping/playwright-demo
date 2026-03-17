// getByTestId Use data-testid attributes to target elements specifically for testing.
//Используйте атрибуты data-testid
// для выбора элементов, предназначенных специально для тестирования.

import { test, expect } from "@playwright/test";

test("getByTestId", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByTestId("submit-button").click();
});

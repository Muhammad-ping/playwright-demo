// Using getByAltText()  Use this for images or elements with alt attributes.
// Использование getByAltText() Используйте это для изображений или элементов с атрибутом alt.

import { test, expect } from "@playwright/test";

test("getByAlttext", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByAltText("toggle-switch").click();
});
//test

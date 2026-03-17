// Using getByTitle() Targets elements with title attributes.
// Использование функции getByTitle() позволяет находить элементы с атрибутом title.

import { test, expect } from "@playwright/test";

test("getByTitle", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  const title = await page.getByTitle("Login-form").textContent();
  expect(title).toBe("Login Form");
});

// getByLabel() — links inputs with their labels, ideal for forms.
// getByLabel() — связывает поля ввода с их метками; идеально для форм.

import { test, expect } from "@playwright/test";

test("getByRole", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByLabel("Email").fill("aaaest@gam.com");
  await page.getByLabel("Password").fill("aaaaaaaa");
  await page.getByRole("button", { name: " Submit Form" }).click();
});

// getByPlaceholder() — targets input fields with placeholder text, like search boxes.
// getByPlaceholder() — выбирает поля ввода с текстом-подсказкой, например поиск.
// коротко.там где можн написать называется placeholder

import { test, expect } from "@playwright/test";

test("getByPlaceholder() ", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByPlaceholder("username").fill("Muhammad@25");
  await page.getByPlaceholder("password").fill("Muhammad@25");
});

// getByText() — finds elements based on visible text; useful for buttons, links, messages
// getByText() — находит элементы по видимому тексту; удобно для кнопок, ссылок, сообщений.

import { test, expect } from "@playwright/test";
test("getByText", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  const text = await page.getByText("This is a sample text").textContent();
  console.log(text);

  expect(text).toBeTruthy;
});

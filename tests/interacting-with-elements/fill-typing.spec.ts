// fill(вставить) заполнить автоматически сразу как вставить
// typing  печатать по одноту

import { test, expect } from "@playwright/test";

test("Clicking", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  //fill
  await page.fill("#username", "Soliev");
  //typing
  await page.locator("#email").pressSequentially("Muhammad@25", { delay: 100 });
  // delay каждую букву челез 1 секунду печатает
});

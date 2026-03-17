// click нажимать

import { test, expect } from "@playwright/test";

test("Clicking", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  // one time click
  await page.click('div button[id="btnClick"]');
  //doble click
  await page.dblclick('form[id="loginForm"] button[type="submit"]');
});

import { test, expect } from "@playwright/test";

//CSS bu ID #
test("test6", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator("#btnClick").click();
});

// CSS parant to child
test("test2", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator('form[id="loginForm"] button[type="submit"]').click();
});

// CSS also perent to chipd
test("test3", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator('div button[id="btnClick"]').click();
});

//XPAth ratarn to child
test("test4", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator('//div[@class="section"]//button[@id="btnClick"]').click();
});

// Xpath method parant to child
test("test5", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator('//form[@id="loginForm"]//button[@type="submit"]').click();
});

// without locator  ьожно со всеми выше перечислеными методами использовать
test("test7", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.click('form[id="loginForm"] button[type="submit"]');
});

test("test8", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.click("//button[text()='Login']");

  await page.dblclick("//span[@alt='toggle-switch']");
});

test("test9", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.click("#btnClick");
});

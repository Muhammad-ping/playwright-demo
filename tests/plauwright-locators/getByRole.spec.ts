// getByRole() — selects elements using accessibility roles like button, link, textbox.
// getByRole() — выбирает элементы по ролям доступности, например button, link, textbox.

import { test, expect } from "@playwright/test";

test("getByRole", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("checkbox", { name: "Option 1" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("test@msil.com");
  await page.getByRole("textbox", { name: "Username" }).fill("Jahn");
});

test("test", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#dropdownMenu").selectOption("Green");
  await page.locator("#dropdownMenu").selectOption("Red");
  await page.locator("#dropdownMenu").selectOption("Blue");
  await page.locator("#btnClick").click();
});

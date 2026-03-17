import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("fjfjvjdkfkvjdjv");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("rfkvffk jfkv");
  await page.locator("#country").selectOption("UK");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Double Click Me" }).click();
  await page.getByText("Date").click();
  await page.getByText("Option 3").click();
  await page.locator("#dropdownMenu").selectOption("Green");
  await page.locator("span").click();
  await page.getByText("Drag Me").click();
  await page.getByText("Drop Here").click();
  await page.getByText("Drag Me").click();
  await page.getByText("Drag Me").click();
  await page.getByText("Buy groceries").click();
  await page.getByText("Clean the house").click();
  await page.getByText("Finish report").click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Open Page in New Tab" }).click();
  const page1 = await page1Promise;
});

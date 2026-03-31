import { test, expect } from "@playwright/test";

// 1 . login form

test("logim form", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator("#username").fill("Muhammad");
  await page.locator("#password").fill("MMMMMMM");
  await page.locator("#country").selectOption("USA");

  await page.click('//form[@id="loginForm"]//button[@type="submit"]');
});

test("logim form with playLOcator", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.getByPlaceholder("Username").fill("MUhammad");
  await page.getByPlaceholder("Password").fill("MMMMM");
  await page.locator("#country").selectOption("USA");
  await page.getByRole("button", { name: "Login" }).click();
});

//2. Buttons

test("Buttons", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator("#btnClick").scrollIntoViewIfNeeded();
  await page.locator("#btnClick").click();
  expect(page.locator("#buttonOutput")).toHaveText("Click button clicked");
  await page.locator("#btnDoubleClick").dblclick();
  expect(page.locator("#buttonOutput")).toContainText("Double");
});

test("Buttons - playLocator", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator("#btnClick").scrollIntoViewIfNeeded();

  await page.locator("#btnClick").click();
  expect(page.locator("#buttonOutput")).toHaveText("Click button clicked");

  await page.getByRole("button", { name: "Double Click Me" }).dblclick();
  expect(page.locator("#buttonOutput")).toContainText("Double");
});

// 3 get Text

test("grab text", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#textParagraph").scrollIntoViewIfNeeded();

  await page.locator("#textParagraph").textContent();

  await expect(page.locator("#textParagraph")).toContainText("This ");
});

//2 method

test("grab text-locator", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#textParagraph").scrollIntoViewIfNeeded();

  await page.getByText("This is a sample ").textContent();

  await expect(page.locator("#textParagraph")).toContainText("This ");
});

//4 Form with Labels

test("Form with Labels", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#labelForm").scrollIntoViewIfNeeded();

  await page.locator("#email").fill("m.soliev@gmail");
  await page.locator("#pass").fill("MUhammad");
  await page.click('//form[@id="labelForm"]//button[@type="submit"]');

  await expect(page.locator("#labelFormOutput")).toHaveText(
    "Form submitted with email: m.soliev@gmail",
  );
});

//2 method
test("Form with Labels-locator", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#labelForm").scrollIntoViewIfNeeded();

  await page.getByLabel("Email").fill("m.soliev@gmail");
  await page.getByLabel("Password").fill("MUhammad");
  await page.getByRole("button", { name: "Submit Form" }).click();
  await expect(page.locator("#labelFormOutput")).toHaveText(
    "Form submitted with email: m.soliev@gmail",
  );
});

//5 search box

test("Search Box", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#searchBox").scrollIntoViewIfNeeded();

  await page.locator("#searchBox").fill("b");
});

//6 checkboxes
test("Checkboxea", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page
    .locator('[class="section checkbox-group"]')
    .scrollIntoViewIfNeeded();

  await page.locator('[value="Option 1"]').check();
  await page.locator('[value="Option 2"]').check();
  await page.locator('[value="Option 3"]').check();

  await expect(page.locator("#checkboxOutput")).toContainText("Option 1");

  await page.locator('[value="Option 1"]').uncheck();
  await page.locator('[value="Option 2"]').uncheck();
  await page.locator('[value="Option 3"]').uncheck();

  await expect(page.locator("#checkboxOutput")).toContainText("None");
});

//2 method
test("Checkboxea - Locator", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page
    .locator('[class="section checkbox-group"]')
    .scrollIntoViewIfNeeded();

  await page.getByRole("checkbox", { name: "Option 1" }).check();
  await page.getByRole("checkbox", { name: "Option 2" }).check();
  await page.getByRole("checkbox", { name: "Option 3" }).check();

  await expect(page.locator("#checkboxOutput")).toContainText("Option 1");

  await page.getByRole("checkbox", { name: "Option 1" }).uncheck();
  await page.getByRole("checkbox", { name: "Option 2" }).uncheck();
  await page.getByRole("checkbox", { name: "Option 3" }).uncheck();

  await expect(page.locator("#checkboxOutput")).toContainText("None");
});

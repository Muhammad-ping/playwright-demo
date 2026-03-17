import { test, expect } from "@playwright/test";

test("Drag & Drop", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Scroll to Drag and Drop section
  await page
    .locator("//h2 [text()='Todo Drag & Drop']")
    .scrollIntoViewIfNeeded();

  // Get locators

  const finishReportTodo = page.locator("//li[text()='Finish report']");
  const doneZone = page.locator("#doneList");

  // Drag and Drop using dragTo
  await finishReportTodo.dragTo(doneZone);
  await page.waitForTimeout(3000);

  // Drag and Drop using dragAndDrop
  await page.dragAndDrop("//li[text()='Buy groceries']", "#doneList");
  await page.waitForTimeout(3000);

  // Drag and Drop using dragAndDrop
  await page.dragAndDrop("//li[text()='Clean the house']", "#doneList");
  await page.waitForTimeout(3000);

  // Drag and Drop using dragAndDrop
  await page.dragAndDrop("//li[text()='Buy groceries']", "#todoList");
  await page.waitForTimeout(3000);

  // Drag and Drop using dragAndDrop
  await page.dragAndDrop("//li[text()='Clean the house']", "#todoList");
  await page.waitForTimeout(3000);

  await page.dragAndDrop("//li[text()='Finish report']", "#todoList");
});

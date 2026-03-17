import { test, expect } from "@playwright/test";

test("Mouse Actions - Drag and Drop", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Scroll to Mouse action section
  await page.locator("//h2 [text()='Mouse Actions']").scrollIntoViewIfNeeded();

  // Locate the draggable element and the drop zone

  const source = await page.locator("#mouseBox").boundingBox();

  const target = await page.locator("#dropZone").boundingBox();

  if (!source || !target) {
    throw new Error("Could not find source or target");
  }

  // Move to the source element
  await page.mouse.move(
    source.x + source.width / 2,
    source.y + source.height / 2,
  );

  // Hold mouse button down
  await page.mouse.down();

  // Drag to target
  await page.mouse.move(
    target.x + target.width / 2,
    target.y + target.height / 2,
    { steps: 20 },
  );

  // Release mouse
  await page.mouse.up(); // smooth movement

  // Release mouse await page.mouse.up();

  await page.waitForTimeout(2000);
});

import { expect, test } from "@playwright/test";

test("setInputFile - Upload", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#fileUpload").scrollIntoViewIfNeeded();

  await page.setInputFiles("#fileUpload", "documents/doc1.png");

  await expect(page.locator("#uploadOutput")).toHaveText(
    "Selected files: doc1.png",
  );
});

///2 metod

test("setInputFile - Upload metod 2", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const [fileChoose] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("#fileUpload"),
  ]);

  await fileChoose.setFiles("documents/doc2.png");
  await expect(page.locator("#uploadOutput")).toHaveText(
    "Selected files: doc2.png",
  );
});

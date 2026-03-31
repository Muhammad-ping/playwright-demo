import { expect, test } from "@playwright/test";

test("Alerts - click ok ", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#promptBtn").scrollIntoViewIfNeeded();

  //listen for alerts event
  page.once("dialog", async (dialog) => {
    await page.waitForTimeout(2000);
    await dialog.accept("John"); // importent - click OK
  });

  await page.locator("#promptBtn").click();

  await expect(page.locator("#promptResult")).toHaveText("Hello, John");
});

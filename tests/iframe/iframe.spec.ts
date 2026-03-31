import { expect, test } from "@playwright/test";

test("Iframe", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#practiceIframe").scrollIntoViewIfNeeded();

  const iframe = page.frameLocator("#practiceIframe");
  // or locator("#practiceIframe").conctentFrame

  //click
  await iframe.locator("#iframeBtn").click();

  await expect(iframe.locator("#iframeOutput")).toHaveText(
    "Button inside iframe clicked!",
  );
  await page.waitForTimeout(2000);

  // fiil
  await iframe.locator("#iframeInput").fill("Hello world");

  await expect(iframe.locator("#iframeOutput")).toHaveText(
    "You typed: Hello world",
  );
});

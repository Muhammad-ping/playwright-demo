import { expect, test } from "@playwright/test";

test("Alerts", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#alertBtn").scrollIntoViewIfNeeded();

  //listen for alerts event
  page.once("dialog", async (dialog) => {
    console.log(dialog.message()); //just to see massega
    await page.waitForTimeout(2000); // just to see
    await dialog.accept(); // importent - click OK
  });

  await page.locator("#alertBtn").click();
});

// if alerts have two button OK and CANSEL

test("Alerts - click ok ", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#confirmBtn").scrollIntoViewIfNeeded();

  //listen for alerts event
  page.once("dialog", async (dialog) => {
    await dialog.accept(); // importent - click OK
  });

  await page.locator("#confirmBtn").click();

  await expect(page.locator("#confirmResult")).toHaveText("Accepted");
});

// click CANCEL dialod.dismiss

test("Alerts - click CANSEL ", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#confirmBtn").scrollIntoViewIfNeeded();

  //listen for alerts event
  page.once("dialog", async (dialog) => {
    await dialog.dismiss(); // importent - click CANSEL
  });

  await page.locator("#confirmBtn").click();

  await expect(page.locator("#confirmResult")).toHaveText("Cancelled");
});

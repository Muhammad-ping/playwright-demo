import { expect, test } from "@playwright/test";

test("popup ", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#promptBtn").scrollIntoViewIfNeeded();

  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#popupBtn"),
  ]);
  //wait for the page loaded
  await popup.waitForLoadState();

  //veryfi message in page successfuly
  await expect(page.locator("#popupResult")).toHaveText(
    "Popup window opened successfully",
  );

  // Interact with popap page
  const popupTitle = await popup.locator("#popupTitle").textContent();
  expect(popupTitle).toContain("Page");
  expect(popup).toHaveTitle;
  // close popup
  popup.close();
  // //or
  // await popup.click('[onclick="window.close()"]');
});

// second method - all same just change page to   context.waitForEvent("page"),

test("Popup second method", async ({ page, context }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#promptBtn").scrollIntoViewIfNeeded();

  const [popup] = await Promise.all([
    context.waitForEvent("page"),
    page.click("#popupBtn"),
  ]);
  //wait for the page loaded
  await popup.waitForLoadState();

  //veryfi message in page successfuly
  await expect(page.locator("#popupResult")).toHaveText(
    "Popup window opened successfully",
  );

  // Interact with popap page
  const popupTitle = await popup.locator("#popupTitle").textContent();
  expect(popupTitle).toContain("Page");

  // close popup
  popup.close();
  // //or
  // await popup.click('[onclick="window.close()"]');
});

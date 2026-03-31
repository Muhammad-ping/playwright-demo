import { expect, test } from "@playwright/test";

test("Handle new tabs", async ({ page, context }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click("#openNewTabBtn"),
  ]);
  await newPage.waitForTimeout(2000);
  //switch between tabs
  page.bringToFront(); // switch to original tab
  await page.waitForTimeout(2000);
  await newPage.bringToFront();
  await newPage.waitForTimeout(2000);

  //   //or
  //   const pages = context.pages();
  //   const firstPage = pages[0];
  //   const secondPage = pages[1];
  //   //and
  //   await firstPage.bringToFront();
  //   await firstPage.waitForTimeout(2000);
  //   await secondPage.bringToFront();
  //   await secondPage.waitForTimeout(2000);

  await newPage.close();
  await page.waitForTimeout(2000);
  await page.close();
});

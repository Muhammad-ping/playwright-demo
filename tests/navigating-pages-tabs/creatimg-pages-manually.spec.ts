import { test } from "@playwright/test";

test("Creat new page manually", async ({ context }) => {
  const newPage = await context.newPage();
  await newPage.goto("https://selectors-practice.onrender.com/");
});

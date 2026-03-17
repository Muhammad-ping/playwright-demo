import { test, expect } from "@playwright/test";

test("Checkboxes & Radio Buttons", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  //Checking a Checkbox
  await page.check("div input[value='Option 1']");

  //Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  //Unchecking a Checkbox
  await page.uncheck("div.checkbox-group input[value='Option 1']");
  //Selecting a Radio Button
  await page.getByRole("radio", { name: "Choice A" }).check();
  await page.waitForTimeout(2000);
  await page.getByRole("radio", { name: "Choice B" }).check();
});

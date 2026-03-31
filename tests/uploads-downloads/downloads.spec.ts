import { Download, expect, test } from "@playwright/test";

test("download single file", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.locator("#fileUpload").scrollIntoViewIfNeeded();

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#singleDownloadBtn"),
  ]);

  await download.saveAs("download/myText.text");

  await expect(page.locator("#singleDownloadOutput")).toHaveText(
    "Single file download initiated!",
  );
});

test("Download multiple files", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.click("#multiDownloadBtn");
  // Collect downloads in an array

  const downloads: Download[] = [];
  await page.click("#multiDownloadBtn");
  for (let i = 0; i < 3; i++) {
    downloads.push(await page.waitForEvent("download"));
  }
  // Save them

  await Promise.all(
    downloads.map((download, i) =>
      download.saveAs(`downloads/file${i + 1}.txt`),
    ),
  );
  // Verify UI text

  await expect(page.locator("#multiDownloadOutput")).toHaveText(
    "Three files downloaded!",
  );
});

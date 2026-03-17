import { test, expect } from "@playwright/test";

test("Assertions on Attributes & CSS", async ({ page }) => {
  // Navigate to the target webpage

  await page.goto("https://selectors-practice.onrender.com/");

  // Verify the placeholder attribute of the username input field
  await expect(page.locator("#username")).toHaveAttribute(
    "placeholder",
    "Username",
  );

  // Verify the background color of the header
  await expect(page.locator("//button[text()='Login']")).toHaveCSS(
    "border-radius",
    "8px",
  );
});

// toHaveCSS()
// toHaveAttribute() - placeholder="Username"

//API test

test("Assertions on API Response", async ({ page }) => {
  // Make an API request to a sample endpoint and verify the response
  const response = await page.request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  expect(response.status()).toBe(200);

  // Verify specific fields in the JSON response
  const data = await response.json();
  expect(data.id).toBe(1);
  expect(data.title).toBeTruthy();
});

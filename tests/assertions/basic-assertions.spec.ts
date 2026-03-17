import { test, expect } from "@playwright/test";

// Check if values are truthy or falsy:

test("truthy and falsy values", async () => {
  const a = true;
  const b = null;

  expect(a).toBeTruthy(); // Passes
  expect(b).toBeFalsy(); // Passes
});

// Check equality and identity:

test("equality checks", async () => {
  const num = 10;
  const str = "Hello";

  expect(num).toBe(10); // Exact value

  expect(str).toEqual("Hello"); // Deep equality
});

// Check comparison operators:
test("comparison checks", async () => {
  const score = 85;

  expect(score).toBeGreaterThan(80);

  expect(score).toBeGreaterThanOrEqual(85);

  expect(score).toBeLessThan(100);

  expect(score).toBeLessThanOrEqual(85);
});

// toEqual("Hello")

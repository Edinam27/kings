import { test, expect } from "@playwright/test";

test.describe("Home hero", () => {
  test("displays the primary h1", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: /energy, delivered with integrity/i })
    ).toBeVisible();
  });

  test("plays video when motion is allowed", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".hero__media video")).toBeVisible();
    await expect(page.locator(".hero__media img")).toHaveCount(0);
  });

  test("shows a static poster instead of video under reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await expect(page.locator(".hero__media img")).toBeVisible();
    await expect(page.locator(".hero__media video")).toHaveCount(0);
  });
});

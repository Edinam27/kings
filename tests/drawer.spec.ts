import { test, expect } from "@playwright/test";

test.describe("Mobile drawer", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto("/");
  });

  test("toggle button opens the drawer (aria-hidden flips)", async ({ page }) => {
    const toggle = page.getByRole("button", { name: /toggle menu/i });
    const drawer = page.locator(".drawer");

    await expect(drawer).toHaveAttribute("aria-hidden", "true");
    await toggle.click();
    await expect(drawer).toHaveAttribute("aria-hidden", "false");
    await expect(drawer.getByRole("link", { name: /contact/i })).toBeVisible();
  });

  test("tapping a drawer link navigates and closes the drawer", async ({ page }) => {
    const toggle = page.getByRole("button", { name: /toggle menu/i });
    await toggle.click();

    const aboutBtn = page.locator(".drawer").getByRole("button", { name: /^about$/i });
    await aboutBtn.click();
    await page.locator(".drawer").getByRole("link", { name: /our history/i }).click();

    await expect(page).toHaveURL(/\/about\/history/);
    await expect(page.locator(".drawer")).toHaveAttribute("aria-hidden", "true");
  });
});

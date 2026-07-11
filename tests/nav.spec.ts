import { test, expect } from "@playwright/test";

test.describe("Desktop mega-menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");
  });

  test("clicking a panel trigger opens its panel with the right links", async ({ page }) => {
    const trigger = page.getByRole("button", { name: /what we do/i });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");

    await trigger.click();

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    const panel = page.getByRole("region", { name: /what we do menu/i });
    await expect(panel).toBeVisible();
    await expect(
      panel.getByRole("link", { name: /crude oil & products/i })
    ).toBeVisible();
  });

  test("Escape closes an open panel", async ({ page }) => {
    const trigger = page.getByRole("button", { name: /what we do/i });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("keyboard: focus + Enter opens, Escape closes", async ({ page }) => {
    const trigger = page.getByRole("button", { name: /about/i });
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("clicking a mega-menu link navigates", async ({ page }) => {
    await page.getByRole("button", { name: /what we do/i }).click();
    await page
      .getByRole("region", { name: /what we do menu/i })
      .getByRole("link", { name: /shipping/i })
      .click();
    await expect(page).toHaveURL(/\/what-we-do\/shipping/);
  });
});

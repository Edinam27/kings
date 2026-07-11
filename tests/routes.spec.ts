import { test, expect } from "@playwright/test";

// Every IA route from content/navigation — verifies each exports and renders
// a visible h1 (route reachability across the whole site).
const routes = [
  "/",
  "/about",
  "/about/history",
  "/about/people",
  "/about/locations",
  "/what-we-do",
  "/what-we-do/crude-oil-products",
  "/what-we-do/natural-gas-lng",
  "/what-we-do/power",
  "/what-we-do/carbon",
  "/what-we-do/lpg",
  "/what-we-do/terminals-storage",
  "/what-we-do/refining",
  "/what-we-do/renewables",
  "/what-we-do/exploration-production",
  "/what-we-do/shipping",
  "/sustainability",
  "/sustainability/safety",
  "/sustainability/climate",
  "/sustainability/communities",
  "/sustainability/governance",
  "/media",
  "/media/us-power-markets",
  "/media/carbon-markets",
  "/media/lng-flexible-cargo",
  "/careers",
  "/careers/life",
  "/careers/roles",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
  "/legal/modern-slavery",
  "/legal/ethics",
  "/legal/cookies",
];

for (const route of routes) {
  test(`route renders: ${route}`, async ({ page }) => {
    const res = await page.goto(route);
    expect(res?.status()).toBeLessThan(400);
    await expect(page.locator("h1").first()).toBeVisible();
  });
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://edinam27.github.io/kings";
  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-07-10"),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

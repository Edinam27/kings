import { describe, it, expect } from "vitest";
import { articles, getArticle } from "@/content/articles";

const EXPECTED_SLUGS = ["us-power-markets", "carbon-markets", "lng-flexible-cargo"];

describe("articles data", () => {
  it("exposes the three MDX-backed articles with well-formed fields", () => {
    expect(articles.map((a) => a.slug).sort()).toEqual([...EXPECTED_SLUGS].sort());
    for (const a of articles) {
      expect(a.title.trim().length).toBeGreaterThan(0);
      expect(a.slug.startsWith("/")).toBe(false);
      expect(a.body.length).toBeGreaterThan(0);
      expect(a.excerpt.length).toBeGreaterThan(0);
    }
  });

  it("getArticle returns the matching article or undefined", () => {
    expect(getArticle("us-power-markets")?.title).toMatch(/us power markets/i);
    expect(getArticle("does-not-exist")).toBeUndefined();
  });
});

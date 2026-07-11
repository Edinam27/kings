import { describe, it, expect } from "vitest";
import { nav, footerColumns } from "@/content/navigation";

describe("navigation data integrity", () => {
  it("every top-level nav item has a label and either a panel or an href", () => {
    for (const item of nav) {
      expect(item.label.trim().length).toBeGreaterThan(0);
      expect(item.panel ?? item.href).toBeTruthy();
    }
  });

  it("mega panels expose columns with well-formed links", () => {
    for (const item of nav) {
      if (!item.panel) continue;
      expect(item.panel.columns.length).toBeGreaterThan(0);
      for (const col of item.panel.columns) {
        expect(col.title.trim().length).toBeGreaterThan(0);
        for (const link of col.links) {
          expect(link.label.trim().length).toBeGreaterThan(0);
          expect(link.href.startsWith("/")).toBe(true);
        }
      }
    }
  });

  it("footer columns only contain absolute internal links", () => {
    for (const col of footerColumns) {
      for (const link of col.links) {
        expect(link.href.startsWith("/")).toBe(true);
      }
    }
  });

  it("every top-level nav item is a mega-menu with a panel", () => {
    // (Contact is rendered separately in Header, not via nav[]).
    expect(nav.length).toBeGreaterThanOrEqual(5);
    for (const item of nav) {
      expect(item.panel, `expected ${item.label} to have a panel`).toBeTruthy();
    }
  });
});

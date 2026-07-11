import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";

vi.mock("next/link", () => ({
  default: ({ href, children, className, ...rest }: any) => (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  ),
}));

function setReducedMotion(reduce: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: reduce && query.includes("reduce"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as any;
}

describe("Hero", () => {
  beforeEach(() => setReducedMotion(false));

  it("renders the primary h1 headline", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: /energy, delivered with integrity/i })
    ).toBeInTheDocument();
  });

  it("plays video when motion is allowed", () => {
    render(<Hero />);
    expect(document.querySelector(".hero__media video")).not.toBeNull();
    expect(document.querySelector(".hero__media img")).toBeNull();
  });

  it("shows a static poster image instead of video under reduced motion", () => {
    setReducedMotion(true);
    render(<Hero />);
    expect(document.querySelector(".hero__media img")).not.toBeNull();
    expect(document.querySelector(".hero__media video")).toBeNull();
  });
});

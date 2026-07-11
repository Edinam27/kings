import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "@/components/ui/Button";

// Isolate Button's own dispatch/variant logic from Next router internals.
vi.mock("next/link", () => ({
  default: ({ href, children, className, ...rest }: any) => (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  ),
}));

describe("Button", () => {
  it("renders an anchor when href is provided", () => {
    render(<Button href="/what-we-do">Explore</Button>);
    const link = screen.getByRole("link", { name: "Explore" });
    expect(link).toHaveAttribute("href", "/what-we-do");
  });

  it("applies the primary variant by default and ghost when requested", () => {
    const { rerender } = render(<Button href="/x">A</Button>);
    expect(screen.getByRole("link")).toHaveClass("btn--primary");

    rerender(
      <Button href="/x" variant="ghost">
        B
      </Button>
    );
    expect(screen.getByRole("link")).toHaveClass("btn--ghost");
  });

  it("renders a button element when no href is given", () => {
    render(<Button onClick={() => {}}>Submit</Button>);
    const btn = screen.getByRole("button", { name: "Submit" });
    expect(btn).toHaveAttribute("type", "button");
  });

  it("external links open in a new tab with safe rel", () => {
    render(
      <Button href="https://example.com" external>
        External
      </Button>
    );
    const link = screen.getByRole("link", { name: "External" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});

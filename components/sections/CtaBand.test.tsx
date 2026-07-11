import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CtaBand from "@/components/sections/CtaBand";

vi.mock("next/link", () => ({
  default: ({ href, children, className, ...rest }: any) => (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  ),
}));

describe("CtaBand", () => {
  it("renders the heading, eyebrow, copy and primary CTA", () => {
    render(
      <CtaBand
        eyebrow="Careers"
        title="A business on the move."
        text="Join the team."
        primaryHref="/careers"
        primaryLabel="View open roles"
        ghostHref="/contact"
        ghostLabel="Talk to us"
      />
    );
    expect(screen.getByRole("heading", { level: 2, name: /a business on the move/i })).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Join the team.")).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: "View open roles" });
    expect(cta).toHaveAttribute("href", "/careers");
  });

  it("omits optional pieces when not provided", () => {
    const { container } = render(<CtaBand title="Only a title" />);
    expect(container.querySelector(".eyebrow")).toBeNull();
    expect(container.querySelector("p")).toBeNull();
    expect(container.querySelector("a")).toBeNull();
  });
});

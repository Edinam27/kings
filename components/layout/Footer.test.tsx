import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Footer from "@/components/layout/Footer";

vi.mock("next/link", () => ({
  default: ({ href, children, className, ...rest }: any) => (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  ),
}));

describe("Footer", () => {
  it("renders brand, the legal/sitemap links and a copyright line", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    expect(within(footer).getByRole("link", { name: "Cookie policy" })).toHaveAttribute("href", "/legal/cookies");
    expect(within(footer).getByRole("link", { name: "Sitemap" })).toHaveAttribute("href", "/sitemap");
    expect(within(footer).getByText(/all rights reserved/i)).toBeInTheDocument();
  });

  it("lists every footer column and its links", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(within(footer).getByText("Company")).toBeInTheDocument();
    expect(within(footer).getByText("Markets")).toBeInTheDocument();
    expect(within(footer).getByText("Legal")).toBeInTheDocument();
    expect(within(footer).getByRole("link", { name: /cookie policy/i })).toHaveAttribute("href", "/legal/cookies");
  });
});

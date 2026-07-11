import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Header from "@/components/layout/Header";

vi.mock("next/link", () => ({
  default: ({ href, children, className, ...rest }: any) => (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  ),
}));

describe("Header mega-menu", () => {
  it("reveals the panel and links when a panel trigger is clicked", () => {
    render(<Header />);
    const trigger = screen.getByRole("button", { name: /what we do/i });

    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    const panel = screen.getByRole("region", { name: /what we do menu/i });
    expect(panel).toBeInTheDocument();
    expect(
      within(panel).getByRole("link", { name: /crude oil & products/i })
    ).toHaveAttribute("href", "/what-we-do/crude-oil-products");
  });

  it("closes the open panel on Escape", () => {
    render(<Header />);
    const trigger = screen.getByRole("button", { name: /what we do/i });

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("opens and closes the mobile drawer via the toggle", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: /toggle menu/i });
    const drawer = document.querySelector(".drawer")!;

    expect(drawer).toHaveAttribute("aria-hidden", "true");
    fireEvent.click(toggle);
    expect(drawer).toHaveAttribute("aria-hidden", "false");

    // Tapping a bare link closes the drawer.
    fireEvent.click(within(drawer).getByRole("link", { name: /contact/i }));
    expect(drawer).toHaveAttribute("aria-hidden", "true");
  });

  it("expands and collapses a drawer sub-menu", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: /toggle menu/i }));
    const drawer = document.querySelector(".drawer")!;

    const subToggle = within(drawer).getByRole("button", { name: /^what we do$/i });
    fireEvent.click(subToggle);
    expect(subToggle).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(subToggle);
    expect(subToggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the drawer with the Close button", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: /toggle menu/i }));
    const drawer = document.querySelector(".drawer")!;
    expect(drawer).toHaveAttribute("aria-hidden", "false");

    fireEvent.click(within(drawer).getByRole("button", { name: /close menu/i }));
    expect(drawer).toHaveAttribute("aria-hidden", "true");
  });

  it("opens a panel on hover and closes it on mouse leave", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    const item = within(nav).getByText(/what we do/i).closest(".nav__item")!;
    const trigger = within(item).getByRole("button");

    fireEvent.mouseEnter(item);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    fireEvent.mouseLeave(item);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});

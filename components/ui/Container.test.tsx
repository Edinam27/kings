import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Container from "@/components/ui/Container";

describe("Container", () => {
  it("renders a div with the container class and its children", () => {
    render(<Container>inner</Container>);
    const el = screen.getByText("inner");
    expect(el).toHaveClass("container");
  });

  it("appends an optional className", () => {
    const { container } = render(<Container className="narrow">x</Container>);
    expect(container.firstChild).toHaveClass("container", "narrow");
  });
});

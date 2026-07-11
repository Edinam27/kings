import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Section from "@/components/sections/Section";

describe("Section", () => {
  it("wraps children in a section and Container", () => {
    const { container } = render(<Section>body</Section>);
    const section = container.querySelector("section");
    expect(section).not.toBeNull();
    expect(section).toHaveClass("section");
    expect(section?.querySelector(".container")).not.toBeNull();
  });

  it("adds the surface modifier when requested", () => {
    const { container } = render(<Section surface>body</Section>);
    expect(container.querySelector("section")).toHaveClass("section--surface");
  });

  it("forwards an extra className", () => {
    const { container } = render(<Section className="cta-band">body</Section>);
    expect(container.querySelector("section")).toHaveClass("cta-band");
  });
});

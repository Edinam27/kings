import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PageHero from "@/components/sections/PageHero";

describe("PageHero", () => {
  it("renders the full hero with a background image when image is given", () => {
    render(<PageHero eyebrow="Overview" title="Who we are" sub="A global desk" image="/assets/img/oil-rig.jpg" />);
    expect(screen.getByRole("heading", { level: 1, name: "Who we are" })).toBeInTheDocument();
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("A global desk")).toBeInTheDocument();
    expect(document.querySelector(".hero__media img")).toHaveAttribute("src", "/kings/assets/img/oil-rig.jpg");
  });

  it("renders the minimal variant without an image", () => {
    render(<PageHero eyebrow="Overview" title="Plain page" sub="With a summary" />);
    expect(screen.getByRole("heading", { level: 1, name: "Plain page" })).toBeInTheDocument();
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("With a summary")).toBeInTheDocument();
    expect(document.querySelector(".hero__media")).toBeNull();
  });

  it("renders the image hero without optional eyebrow/sub", () => {
    render(<PageHero title="Just a title" image="/assets/img/oil-rig.jpg" />);
    expect(screen.getByRole("heading", { level: 1, name: "Just a title" })).toBeInTheDocument();
    expect(document.querySelector(".hero__media img")).toHaveAttribute("src", "/kings/assets/img/oil-rig.jpg");
    expect(document.querySelector(".eyebrow")).toBeNull();
  });
});

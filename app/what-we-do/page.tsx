import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";
import Link from "next/link";

export const metadata = {
  title: "What We Do | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum trades and moves crude, gas, LNG, power, renewables, carbon and more across the global energy value chain.",
};

const segments = [
  {
    title: "Crude oil & products",
    text: "Sour and sweet grades sourced at the wellhead and traded into refineries worldwide.",
    href: "/what-we-do/crude-oil-products",
    img: "/assets/img/oil-rig.jpg",
  },
  {
    title: "Natural gas & LNG",
    text: "Flexible cargoes and pipeline volumes connecting supply hubs to growing demand.",
    href: "/what-we-do/natural-gas-lng",
    img: "/assets/img/power-plant.jpg",
  },
  {
    title: "Power",
    text: "Electricity trading, generation and balancing across developed and emerging grids.",
    href: "/what-we-do/power",
    img: "/assets/img/power-plant.jpg",
  },
  {
    title: "Carbon",
    text: "Compliance and voluntary markets that put a price on lower-carbon supply.",
    href: "/what-we-do/carbon",
    img: "/assets/img/industrial.jpg",
  },
  {
    title: "LPG",
    text: "Pressurised and refrigerated volumes for petrochemicals, industry and cooking fuel.",
    href: "/what-we-do/lpg",
    img: "/assets/img/industrial.jpg",
  },
  {
    title: "Terminals & storage",
    text: "Owned and contracted storage that lets us position product where it is needed.",
    href: "/what-we-do/terminals-storage",
    img: "/assets/img/industrial.jpg",
  },
  {
    title: "Refining",
    text: "Crude processing and product optimisation through our own and tolled capacity.",
    href: "/what-we-do/refining",
    img: "/assets/img/industrial.jpg",
  },
  {
    title: "Renewables",
    text: "PPAs, green certificates and transition volumes for a lower-carbon mix.",
    href: "/what-we-do/renewables",
    img: "/assets/img/renewables.jpg",
  },
  {
    title: "Exploration & production",
    text: "Equity stakes and lifting arrangements that secure supply at the source.",
    href: "/what-we-do/exploration-production",
    img: "/assets/img/oil-rig.jpg",
  },
  {
    title: "Shipping",
    text: "A chartered fleet and freight desk keeping energy moving between markets.",
    href: "/what-we-do/shipping",
    img: "/assets/img/lng-tanker.jpg",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="A diversified energy trading business"
        sub="From crude at the wellhead to electrons on the grid, we trade and move energy across the full value chain — backed by physical infrastructure."
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Our segments
          </p>
          <h2 className="section-head__title">One platform across the energy mix.</h2>
          <p className="section-head__aside">
            Each desk is independent enough to move fast and connected enough to share logistics,
            risk and market intelligence. Explore any segment to see how we operate.
          </p>
        </div>
        <div className="grid-3">
          {segments.map((s) => (
            <Link
              href={s.href}
              className="card"
              key={s.title}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                aria-hidden="true"
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: "var(--radius)",
                  marginBottom: "1.1rem",
                  backgroundImage: `url(${s.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="card__more">Learn more →</span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Get in touch"
        title="Trade or source with Kings Tier."
        text="Whatever your commodity, there is a desk ready to talk. Reach our trading teams and we will route you to the right counterpart."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/about"
        ghostLabel="About Kings Tier"
      />
    </>
  );
}

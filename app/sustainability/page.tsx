import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";
import Link from "next/link";

const pillars = [
  {
    title: "Safety",
    text: "No commercial outcome justifies an unsafe act. We hold our operations, vessels and partners to a single standard — zero harm to people and the environment.",
  },
  {
    title: "Climate & transition",
    text: "We are investing in lower-carbon supply and building renewable capacity while we keep the world reliably fuelled through the transition.",
  },
  {
    title: "Communities",
    text: "Where we trade and operate, we work to leave a lasting benefit — through local partnerships, transparent dealings and shared prosperity.",
  },
  {
    title: "Governance",
    text: "Clear accountability, rigorous compliance and a refusal to tolerate corruption underpin every deal we strike across our markets.",
  },
];

const metrics = [
  { value: "1.4 GW", label: "Renewable capacity in operation or under development" },
  { value: "Zero", label: "Tolerance for unsafe operations, anywhere in our network" },
  { value: "100%", label: "Counterparties screened against our compliance standards" },
  { value: "2040", label: "Target year for net-zero emissions across our activities" },
];

export const metadata = {
  title: "Sustainability | Kings Tier Petroleum",
  description:
    "Our ESG framework: rigorous safety, measurable investment in the energy transition, strong communities and uncompromising governance.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Environment · Social · Governance"
        title="Energy delivered safely, and with the future in mind."
        image="/assets/img/renewables.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Our framework
          </p>
          <h2 className="section-head__title">
            Responsibility is not a department. It is how the business runs.
          </h2>
          <p className="section-head__aside">
            Kings Tier Petroleum operates across volatile markets and fragile
            environments. Our ESG framework sets one clear expectation: that we
            earn the trust of regulators, communities and counterparties by the
            way we work — not just the volumes we move. Four commitments hold it
            together.
          </p>
        </div>
        <div className="grid-3">
          {pillars.map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Link className="card__more" href={`/sustainability/${p.title.toLowerCase().split(" ")[0]}`}>
                Explore →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            By the numbers
          </p>
          <h2 className="section-head__title">Commitments we can be measured on.</h2>
          <p className="section-head__aside">
            We publish the targets that matter and hold ourselves to them. These
            are the figures that frame our progress each year.
          </p>
        </div>
        <div className="grid-3">
          {metrics.map((m) => (
            <article className="card" key={m.label}>
              <p
                className="display"
                style={{ fontSize: "var(--text-2xl)", color: "var(--brand)", marginBottom: "0.75rem" }}
              >
                {m.value}
              </p>
              <p>{m.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Accountability"
        title="Read how we hold the line on ethics."
        text="Our standards, reporting and anti-corruption stance are set out in full in our ethics commitments."
        primaryHref="/legal/ethics"
        primaryLabel="Our ethics commitments"
        ghostHref="/sustainability/safety"
        ghostLabel="Start with safety"
      />
    </>
  );
}

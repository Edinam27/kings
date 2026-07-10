import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "About Kings Tier Petroleum | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum is a global energy and commodities trading company connecting producers and consumers across the world's energy markets.",
};

const pillars = [
  {
    title: "Trust",
    text: "We build lasting relationships with national oil companies, refiners and end-users founded on transparency, reliable delivery and disciplined risk management.",
  },
  {
    title: "Infrastructure",
    text: "Owned and contracted storage, terminal access and a chartered fleet let us place energy where it is needed, when it is needed — not just on a screen.",
  },
  {
    title: "Discipline",
    text: "Every cargo is backed by rigorous credit, compliance and operational controls: the discipline that lets us move volume with confidence.",
  },
];

const stats = [
  { value: "40+", label: "Offices worldwide" },
  { value: "6", label: "Continents covered" },
  { value: "1.2M b/d", label: "Physical throughput" },
  { value: "25 yrs", label: "Of trading energy" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Kings Tier Petroleum"
        sub="We are a global energy and commodities trading company. Every day we connect producers and consumers across the world's energy markets — reliably, and at scale."
      />

      <Section>
        <p className="display" style={{ fontSize: "var(--text-2xl)", maxWidth: "26ch" }}>
          We turn the complexity of global energy flows into dependable supply.
        </p>
        <p
          style={{
            color: "var(--muted)",
            maxWidth: "60ch",
            marginTop: "1.5rem",
            fontSize: "var(--text-lg)",
          }}
        >
          Kings Tier Petroleum trades crude, refined products, gas, power and lower-carbon
          commodities across six continents. We combine deep market expertise with physical
          infrastructure — terminals, storage and shipping — so that the energy our counterparties
          depend on arrives safely, on time and in specification.
        </p>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What holds us together
          </p>
          <h2 className="section-head__title">Three principles, one operating model.</h2>
        </div>
        <div className="grid-3">
          {pillars.map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            By the numbers
          </p>
          <h2 className="section-head__title">A global business, built over decades.</h2>
        </div>
        <div className="grid-3">
          {stats.map((s) => (
            <article className="card" key={s.label}>
              <h3 style={{ color: "var(--brand)", fontSize: "var(--text-2xl)" }}>{s.value}</h3>
              <p>{s.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Careers"
        title="Build your career at Kings Tier."
        text="We are always looking for traders, operators and analysts who want to move global energy. Explore where you fit."
        primaryHref="/careers"
        primaryLabel="View open roles"
        ghostHref="/about/people"
        ghostLabel="Meet our people"
      />
    </>
  );
}

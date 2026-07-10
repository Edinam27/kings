import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

const focus = [
  {
    title: "Standards above all",
    text: "We apply a single safety standard across every terminal, vessel and office — the toughest applicable rule, never the loosest.",
  },
  {
    title: "Operations in the field",
    text: "From cargo handling to marine transit, our teams run pre-trade risk checks and independent audits before product ever moves.",
  },
  {
    title: "A culture that speaks up",
    text: "Anyone in the business can stop a job that does not feel safe — and is expected to. Reporting is protected, never punished.",
  },
];

export const metadata = {
  title: "Safety | Kings Tier Petroleum",
  description:
    "How Kings Tier Petroleum puts safety first across operations, marine transit and every market we trade in.",
};

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability · Safety"
        title="Safety"
        sub="No commercial outcome is worth a life, an injury or an avoidable spill. That is the first line of our operating philosophy."
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Our standards
          </p>
          <h2 className="section-head__title">
            We trade energy, but we never gamble with people.
          </h2>
          <p className="section-head__aside">
            Kings Tier Petroleum moves hazardous product through some of the
            world&rsquo;s busiest corridors. Safety is the discipline that makes
            the rest of the business possible — designed in before a cargo is
            fixed, enforced in the field, and owned by every employee.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <h2 className="section-head__title">How we keep operations safe.</h2>
        </div>
        <div className="grid-3">
          {focus.map((f) => (
            <article className="card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2 className="section-head__title">A culture built to speak up.</h2>
          <p className="section-head__aside">
            Tournaments of volume mean nothing without trust. We train our people
            to recognise risk early, we investigate near-misses openly, and we
            measure leaders on how safely their desks perform — not only how much
            they trade.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Responsibility"
        title="See the rest of our ESG framework."
        text="Safety is one of four commitments. Explore how we approach climate, communities and governance."
        primaryHref="/sustainability"
        primaryLabel="Our sustainability approach"
        ghostHref="/sustainability/climate"
        ghostLabel="Climate & the transition"
      />
    </>
  );
}

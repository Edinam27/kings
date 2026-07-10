import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Our History | Kings Tier Petroleum",
  description:
    "From a single regional desk to a global energy trading business — the story of Kings Tier Petroleum across three decades.",
};

const milestones = [
  {
    year: "Founded",
    title: "A regional desk with a global ambition",
    text: "Kings Tier began as a focused physical oil trading desk, matching regional refiners with available barrels. From the start we chose physical delivery over pure paper — owning the logistics that make a trade real.",
  },
  {
    year: "Growth",
    title: "Building the operations backbone",
    text: "Through the early years we invested in scheduling, inspection and credit functions rather than headcount alone. That operational discipline let us take on larger, longer-haul contracts without losing control of quality or timing.",
  },
  {
    year: "Expansion",
    title: "Trading across six continents",
    text: "We opened desks in the Americas, EMEA and Asia-Pacific, then layered gas, power and refined products onto the crude foundation. Terminal access and a chartered fleet followed, turning us from a trader into an integrated energy mover.",
  },
  {
    year: "Transition",
    title: "Powering the energy transition",
    text: "Today we trade LNG, power, renewables and carbon alongside hydrocarbons. The same infrastructure and discipline that moved crude now supports lower-carbon supply — a single platform for a changing energy mix.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our history"
        title="Three decades of moving energy"
        sub="Kings Tier Petroleum grew from a single regional trading desk into a global energy and commodities business — without ever losing its focus on physical delivery."
      />

      {milestones.map((m) => (
        <Section key={m.year} surface={m.year === "Expansion"}>
          <div className="section-head">
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              {m.year}
            </p>
            <h2 className="section-head__title">{m.title}</h2>
            <p className="section-head__aside">{m.text}</p>
          </div>
        </Section>
      ))}

      <CtaBand
        eyebrow="About"
        title="See where we operate today."
        text="Our history is written in the markets we serve and the people who serve them. Explore the business as it stands now."
        primaryHref="/about"
        primaryLabel="About Kings Tier"
        ghostHref="/about/locations"
        ghostLabel="Global locations"
      />
    </>
  );
}

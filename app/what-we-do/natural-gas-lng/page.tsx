import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Natural Gas & LNG | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum trades pipeline gas and LNG cargoes, connecting supply hubs to growing demand across the world.",
};

const capabilities = [
  {
    title: "Pipeline supply",
    text: "Balanced pipeline volumes into hubs and virtual trading points, backed by storage and peaking capacity.",
  },
  {
    title: "LNG cargoes",
    text: "Flexible delivered and free-on-board cargoes that redirect molecules to where the margin and the need are greatest.",
  },
  {
    title: "Storage & peaking",
    text: "Contracted storage that lets us carry gas through seasonal swings and capture value at the shoulder.",
  },
  {
    title: "Portfolio management",
    text: "Integrated optimisation across pipeline, cargo and storage so customers get a single, reliable supply picture.",
  },
];

export default function GasLngPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Natural gas & LNG"
        sub="We trade pipeline gas and LNG cargoes that connect supply hubs to growing demand — flexibly, and across basins."
        image="/assets/img/power-plant.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">Gas that moves where it is needed.</h2>
          <p className="section-head__aside">
            Our gas and LNG team lives at the intersection of pipeline and seaborne markets. We blend
            long-term supply agreements with spot cargoes so utilities and industrials can plan with
            confidence through every season.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities across the gas chain.</h2>
        </div>
        <div className="grid-3">
          {capabilities.map((c) => (
            <article className="card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            How we operate
          </p>
          <h2 className="section-head__title">One book, many basins.</h2>
          <p className="section-head__aside">
            We manage pipeline, cargo and storage as a single portfolio, rebalancing daily against
            weather, demand and freight. Our operations team handles the reloads, terminals and
            documentation that make an LNG delivery real.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Trade with us"
        title="Secure flexible gas and LNG supply."
        text="From hub balancing to delivered LNG, our gas desk can structure the volume and tenor you need."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/power"
        ghostLabel="Our power desk"
      />
    </>
  );
}

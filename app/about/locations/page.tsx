import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Global Locations | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum operates trading desks and physical infrastructure across the Americas, EMEA and Asia-Pacific.",
};

const regions = [
  {
    title: "Americas",
    text: "Desks in North and South America cover crude, products and LNG into the Atlantic Basin, with terminal access on the Gulf Coast and along key shipping lanes.",
  },
  {
    title: "EMEA",
    text: "Our Europe, Middle East and Africa hubs sit close to refining centres and producers, linking pipeline gas, cargoes and storage across the region.",
  },
  {
    title: "APAC",
    text: "Asia-Pacific desks connect growing demand with supply from every basin, backed by LNG receiving, storage and a busy physical products book.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global locations"
        title="Close to the markets we serve"
        sub="Kings Tier runs trading desks and physical infrastructure across six continents, so our people are near the producers, refiners and ports that keep energy moving."
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Reach
          </p>
          <h2 className="section-head__title">One network, three regions.</h2>
          <p className="section-head__aside">
            Being local is not a slogan. It means our schedulers answer the port call, our traders
            know the refiner and our operations team can reach a terminal at any hour. The map below
            is a snapshot of where we work.
          </p>
        </div>
        <div
          aria-hidden="true"
          style={{
            aspectRatio: "21 / 9",
            borderRadius: "var(--radius)",
            marginTop: "2rem",
            background: "var(--surface)",
            border: "1px solid var(--line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--muted)",
            fontSize: "var(--text-sm)",
          }}
        >
          Regional office map — Americas · EMEA · APAC
        </div>
      </Section>

      <Section surface>
        <div className="grid-3">
          {regions.map((r) => (
            <article className="card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Contact"
        title="Talk to the nearest desk."
        text="Whatever you trade or source, there is a Kings Tier office close to you. Reach out and we will connect you to the right team."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/about"
        ghostLabel="About Kings Tier"
      />
    </>
  );
}

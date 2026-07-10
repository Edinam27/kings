import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Carbon | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum trades compliance and voluntary carbon, putting a price on lower-carbon supply for its counterparties.",
};

const capabilities = [
  {
    title: "Compliance markets",
    text: "Allowances and emissions units across regulated schemes, sourced and delivered to meet obligations on time.",
  },
  {
    title: "Voluntary credits",
    text: "High-integrity credits from nature-based and engineered removals, screened for quality and permanence.",
  },
  {
    title: "Offsets origination",
    text: "Direct relationships with project developers that give buyers traceable, additionality-backed supply.",
  },
  {
    title: "Advisory",
    text: "Practical guidance on carbon strategy, so procurement decisions fit the wider energy transition plan.",
  },
];

export default function CarbonPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Carbon"
        sub="We trade compliance and voluntary carbon, putting a credible price on lower-carbon supply for the businesses we serve."
        image="/assets/img/industrial.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">A carbon book with real diligence.</h2>
          <p className="section-head__aside">
            Carbon is only as good as its underlying project. Our carbon team pairs trading with
            rigorous origination, so the units we deliver are liquid where they must be and credible
            where they must be permanent.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities across carbon markets.</h2>
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
          <h2 className="section-head__title">Quality before volume.</h2>
          <p className="section-head__aside">
            We vet every credit against additionality, permanence and leakage before it reaches a
            client. That discipline protects both the buyer's reputation and the integrity of the
            market we help build.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Trade with us"
        title="Put a price on your transition."
        text="Whether you face a compliance obligation or a net-zero target, our carbon desk can structure the right supply."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/renewables"
        ghostLabel="Our renewables"
      />
    </>
  );
}

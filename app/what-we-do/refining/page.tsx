import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Refining | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum processes crude and optimises product output through its own and tolled refining capacity.",
};

const capabilities = [
  {
    title: "Crude processing",
    text: "Running the right crude slate through our own and partner refineries to maximise the barrels the market wants.",
  },
  {
    title: "Product optimisation",
    text: "Yield management that shifts output toward cleaner, higher-value products as demand and regulation change.",
  },
  {
    title: "Tolling agreements",
    text: "Flexible tolling that turns third-party capacity into reliable, specification-grade supply for our desks.",
  },
  {
    title: "Spec management",
    text: "Tight quality control so every product lift meets the standard its buyer expects, every time.",
  },
];

export default function RefiningPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Refining"
        sub="We process crude and optimise product output through our own and tolled capacity — converting feedstock into the barrel the market needs."
        image="/assets/img/industrial.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">Where the trade meets the molecule.</h2>
          <p className="section-head__aside">
            Refining closes the loop between our crude origination and our products book. By controlling
            processing, we decide not just what we buy but what we make — and we capture margin on both ends.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities across the barrel.</h2>
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
          <h2 className="section-head__title">Feedstock in, value out.</h2>
          <p className="section-head__aside">
            Our planners balance crude cost, freight and product prices weekly, then lock the slate
            that works. The operations team runs the units to spec, so the barrel we promised is the
            barrel that lifts.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Work with us"
        title="Place crude or buy products."
        text="Our refining desk connects feedstock supply to product demand. Reach out to structure a deal."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/crude-oil-products"
        ghostLabel="Our crude desk"
      />
    </>
  );
}

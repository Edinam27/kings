import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Exploration & Production | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum holds equity in exploration and production and lifts volumes that secure supply at the source.",
};

const capabilities = [
  {
    title: "Equity participation",
    text: "Selective stakes in producing and development assets that anchor our originating position at the wellhead.",
  },
  {
    title: "Field development",
    text: "Working alongside operators to bring new volumes online on realistic, financeable timelines.",
  },
  {
    title: "Production lifting",
    text: "Coordinating the offtake, measurement and export of our share of field output, cargo by cargo.",
  },
  {
    title: "Reserves marketing",
    text: "Placing future volumes into term and spot markets so today's reserves fund tomorrow's development.",
  },
];

export default function EppPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Exploration & production"
        sub="We hold equity in exploration and production and lift volumes that secure supply at the source — not just on the screen."
        image="/assets/img/oil-rig.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">A seat at the wellhead.</h2>
          <p className="section-head__aside">
            Being a trader is not enough when supply is tight. Our E&P activity gives us visibility and
            optionality at the source, so the barrels we promise downstream are barrels we can actually call.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities from reserve to cargo.</h2>
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
          <h2 className="section-head__title">Partners, not passengers.</h2>
          <p className="section-head__aside">
            We invest where we can add trading and logistics value, then lift and market our share
            alongside the operator. The result is supply we understand completely — from reservoir to
            refinery.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Partner with us"
        title="Secure supply at the source."
        text="If you operate or finance upstream assets, our E&P and trading desks can be the counterparty you want."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/crude-oil-products"
        ghostLabel="Our crude desk"
      />
    </>
  );
}

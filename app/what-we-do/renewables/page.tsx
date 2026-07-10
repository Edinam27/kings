import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Renewables | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum originates PPAs, green certificates and transition volumes for a lower-carbon energy mix.",
};

const capabilities = [
  {
    title: "PPA origination",
    text: "Power purchase agreements that give new renewable projects a bankable revenue stream from day one.",
  },
  {
    title: "Green certificates",
    text: "Guarantees of origin and renewable energy certificates sourced and retired with full traceability.",
  },
  {
    title: "Biomass & solar",
    text: "Physical supply from biomass and solar assets, matched to off-takers who need verifiable clean volume.",
  },
  {
    title: "Transition finance",
    text: "Structuring that links energy trading cashflows to the build-out of lower-carbon supply.",
  },
];

export default function RenewablesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Renewables"
        sub="We originate power purchase agreements, green certificates and transition volumes that give clean energy a route to market."
        image="/assets/img/renewables.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">The trading muscle behind clean energy.</h2>
          <p className="section-head__aside">
            Renewables need a counterparty that understands both the electron and the contract. We use
            our trading and balancing skills to make new clean generation financeable and our clients'
            targets achievable.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities for the transition.</h2>
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
          <h2 className="section-head__title">Bankable, traceable, balanced.</h2>
          <p className="section-head__aside">
            We pair long-term offtake with real-time balancing so generators get paid and buyers get
            verified clean volume. Every certificate is tracked to source, and every PPA is structured
            to survive a volatile market.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Build with us"
        title="Monetise your clean energy."
        text="If you develop, buy or consume renewable power, our desk can structure the offtake or certificate you need."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/power"
        ghostLabel="Our power desk"
      />
    </>
  );
}

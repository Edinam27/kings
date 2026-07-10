import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Power | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum trades electricity and operates generation and balancing across developed and emerging grids.",
};

const capabilities = [
  {
    title: "Power trading",
    text: "Day-ahead, intraday and term trading across multiple markets, matched to the rhythm of each grid.",
  },
  {
    title: "Gas-fired generation",
    text: "Dispatchable generation that earns its keep at the peaks and backs up intermittent renewables.",
  },
  {
    title: "Renewables origination",
    text: "Power purchase agreements and green certificates that give clean generation a bankable route to market.",
  },
  {
    title: "Balancing & dispatch",
    text: "Real-time position management that keeps our book within limits while capturing value from volatility.",
  },
];

export default function PowerPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Power"
        sub="We trade electricity and operate generation and balancing across developed and emerging grids — keeping supply and demand in step."
        image="/assets/img/power-plant.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">Electrons, managed in real time.</h2>
          <p className="section-head__aside">
            Power cannot be stored at scale, so our power desk lives close to the grid. We trade
            across timeframes and pair that with our own dispatchable generation to smooth the ups
            and downs of a renewable-heavy system.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities across the grid.</h2>
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
          <h2 className="section-head__title">Generation plus trading, in one view.</h2>
          <p className="section-head__aside">
            Owning physical generation changes how we trade: we can be long or short with intent, and
            our dispatch team settles the position every hour. The result is a power book that is
            both profitable and dependable for the grids we serve.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Trade with us"
        title="Trade or generate with Kings Tier."
        text="If you buy, sell or produce power, our desk can structure a relationship that works for your grid."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/renewables"
        ghostLabel="Our renewables"
      />
    </>
  );
}

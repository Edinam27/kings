import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Our People | Kings Tier Petroleum",
  description:
    "The traders, operators and analysts behind Kings Tier Petroleum — and the culture that lets them move global energy with discipline.",
};

const values = [
  {
    title: "Ownership",
    text: "We give people real decisions and real responsibility early. Desk members own their books, their mistakes and their results.",
  },
  {
    title: "Craft",
    text: "Trading is a skill honed over years. We pair juniors with experienced mentors and protect the time to learn the physical side of the business.",
  },
  {
    title: "Calm under load",
    text: "Energy markets move fast and break unexpectedly. We prize steady operators who keep supply flowing when conditions get hard.",
  },
];

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The people who move the energy"
        sub="Kings Tier is a trading business, but it runs on operators, analysts and relationship-builders. Our edge is the judgement of the people on the desk."
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Culture
          </p>
          <h2 className="section-head__title">A flat team with a physical mindset.</h2>
          <p className="section-head__aside">
            We keep structure light so decisions reach the people closest to the cargo. Around the
            world, our desks share one habit: understand the molecule, the route and the counterparty
            before the trade is ever struck.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            How we work
          </p>
          <h2 className="section-head__title">Three things we look for in everyone.</h2>
        </div>
        <div className="grid-3">
          {values.map((v) => (
            <article className="card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Leadership principles
          </p>
          <h2 className="section-head__title">Discipline is a team sport.</h2>
          <p className="section-head__aside">
            Our leaders came up on the desk. They set the tone on risk, compliance and safety — and
            they protect the operating routines that let a global business move fast without
            breaking. Good outcomes follow from good process, not heroics.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Life at Kings Tier"
        title="Find your desk."
        text="Whether you trade, schedule, analyse or operate, there is a place for you here. See what day-to-day life looks like."
        primaryHref="/careers/life"
        primaryLabel="Life at Kings Tier"
        ghostHref="/careers"
        ghostLabel="Open roles"
      />
    </>
  );
}

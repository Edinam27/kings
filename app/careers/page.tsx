import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

const reasons = [
  {
    title: "Ownership from day one",
    text: "We give people real responsibility early. The desks here are run by individuals, not buried in committees — your judgement moves markets.",
  },
  {
    title: "A global stage",
    text: "Trade across the Americas, EMEA and APAC from offices wired into every major hub. The learning curve is steep because the world is the classroom.",
  },
  {
    title: "Built to last",
    text: "We invest in our people for the long term, with development, mentorship and a path that grows as the business does — no ceiling by design.",
  },
];

const departments = [
  {
    title: "Trading",
    text: "Crude, products, LNG, power and carbon — sit on a desk, own a book and learn the craft from people who have done it for decades.",
  },
  {
    title: "Operations",
    text: "Logistics, chartering, scheduling and risk — the engine room that turns a trade on a screen into product that actually moves.",
  },
  {
    title: "Corporate",
    text: "Finance, compliance, legal, IT and analytics — the functions that keep a global trading house sharp, safe and ahead of the curve.",
  },
];

export const metadata = {
  title: "Careers | Kings Tier Petroleum",
  description:
    "Join Kings Tier Petroleum — a global energy trading business built on ownership, a worldwide stage and careers without a ceiling.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="A business on the move."
        image="/assets/img/engineers.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Why Kings Tier
          </p>
          <h2 className="section-head__title">
            If you want to hide in a big machine, this is the wrong place.
          </h2>
          <p className="section-head__aside">
            We are sized to give people genuine stakes in the outcome. That means
            more pressure, more trust and more room to make your mark than almost
            anywhere else in the industry.
          </p>
        </div>
        <div className="grid-3">
          {reasons.map((r) => (
            <article className="card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Where you fit
          </p>
          <h2 className="section-head__title">Three ways in, one team.</h2>
          <p className="section-head__aside">
            However you join, you join the same business. Here is where most
            careers at Kings Tier Petroleum begin.
          </p>
        </div>
        <div className="grid-3">
          {departments.map((d) => (
            <article className="card" key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Open the door"
        title="Find a role that fits you."
        text="We hire across trading, operations and corporate functions in offices around the world."
        primaryHref="/careers/roles"
        primaryLabel="View open roles"
        ghostHref="/careers/life"
        ghostLabel="Life at Kings Tier"
      />
    </>
  );
}

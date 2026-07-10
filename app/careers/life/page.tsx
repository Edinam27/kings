import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

const values = [
  {
    title: "A culture of candour",
    text: "We say what we think and we expect the same back. Good calls are celebrated, bad ones are dissected and nobody is shot for being wrong in the open.",
  },
  {
    title: "Development that is real",
    text: "Mentorship from senior traders, structured training and exposure to live deals — not a slideshow on your first Tuesday and silence after.",
  },
  {
    title: "Early careers, treated seriously",
    text: "Graduates and interns are given real work, not coffee runs. We would rather teach you the desk than wait for someone already made.",
  },
];

export const metadata = {
  title: "Life at Kings Tier | Kings Tier Petroleum",
  description:
    "What it is like to work at Kings Tier Petroleum — our culture, how we develop people and our approach to early careers.",
};

export default function LifePage() {
  return (
    <>
      <PageHero
        eyebrow="Careers · Life at Kings Tier"
        title="Life at Kings Tier"
        sub="A trading floor is only as good as the trust between the people on it. Here is what that feels like day to day."
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Our culture
          </p>
          <h2 className="section-head__title">
            Flat, fast and founded on trust.
          </h2>
          <p className="section-head__aside">
            We keep structure light so decisions stay close to the people who
            understand the trade. That demands candour and mutual respect — and
            it is why so many of our senior people started here young.
          </p>
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

      <Section surface>
        <div className="section-head">
          <h2 className="section-head__title">How we grow our own.</h2>
          <p className="section-head__aside">
            Most of the people running our desks today joined as graduates or
            analysts. We invest early, promote on merit and keep the ladder short
            enough that talent is never stuck waiting its turn.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Your move"
        title="See where you could start."
        text="Browse our current openings across trading, operations and corporate functions."
        primaryHref="/careers/roles"
        primaryLabel="View open roles"
        ghostHref="/careers"
        ghostLabel="Why join us"
      />
    </>
  );
}

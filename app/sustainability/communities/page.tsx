import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

const efforts = [
  {
    title: "Local impact",
    text: "Where we load and discharge, we source locally where we can — from port services to community programmes — so trade leaves more behind than a wake.",
  },
  {
    title: "Partnerships that last",
    text: "We back reputable NGOs, training institutions and local enterprises rather than one-off gestures, building capability that outlives any single shipment.",
  },
  {
    title: "Transparent dealings",
    text: "Communities deserve to know who they are dealing with. We publish our standards and keep open lines with the regions we operate in.",
  },
];

export const metadata = {
  title: "Communities | Kings Tier Petroleum",
  description:
    "How Kings Tier Petroleum builds lasting local benefit through partnerships, transparency and responsible operations.",
};

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability · Communities"
        title="Communities"
        sub="Energy moves through places where people live and work. We aim to leave those places better than we found them."
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Our approach
          </p>
          <h2 className="section-head__title">
            A licence to operate is earned locally, every day.
          </h2>
          <p className="section-head__aside">
            We do not treat host communities as a footnote to the trade. The
            trust of the towns beside our terminals and the crews in our ports is
            part of how we do business — and we work to make it tangible.
          </p>
        </div>
        <div className="grid-3">
          {efforts.map((e) => (
            <article className="card" key={e.title}>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <h2 className="section-head__title">Partnerships over photo opportunities.</h2>
          <p className="section-head__aside">
            We prefer a few durable relationships with organisations that share
            our standards — skills programmes, maritime safety training and
            local enterprise support — over short-lived sponsorships that fade
            when the cameras leave.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Responsibility"
        title="Explore our full ESG framework."
        text="Communities sit alongside safety, climate and governance as one of our four commitments."
        primaryHref="/sustainability"
        primaryLabel="Our sustainability approach"
        ghostHref="/sustainability/governance"
        ghostLabel="How we govern"
      />
    </>
  );
}

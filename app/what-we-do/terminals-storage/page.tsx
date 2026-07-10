import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Terminals & Storage | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum owns and contracts terminal and storage capacity that positions energy where it is needed.",
};

const capabilities = [
  {
    title: "Owned terminals",
    text: "Strategic terminal assets at key import and distribution points, giving us control over intake and outturn.",
  },
  {
    title: "Bonded storage",
    text: "Customs-bonded capacity that lets cargoes wait for the right market without tying up working capital.",
  },
  {
    title: "Blending & handling",
    text: "On-site blending and quality management so product leaves spec-perfect for its destination.",
  },
  {
    title: "Strategic locations",
    text: "Sites chosen for connectivity to refineries, pipelines and shipping lanes across our regions.",
  },
];

export default function TerminalsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Terminals & storage"
        sub="We own and contract terminal and storage capacity that lets us position product exactly where and when the market needs it."
        image="/assets/img/industrial.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">Infrastructure that earns its keep.</h2>
          <p className="section-head__aside">
            Storage is how a trading business turns timing into value. Our terminals let us buy when
            the arb is wide, hold through a shoulder and deliver into tightness — all while keeping
            product available to clients.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities across our network.</h2>
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
          <h2 className="section-head__title">Connected to the whole book.</h2>
          <p className="section-head__aside">
            Our terminals are not silos — they feed crude, products, gas and LPG desks across regions.
            Shared scheduling and inventory data mean a tank in one port can answer a call from another.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Partner with us"
        title="Use our storage network."
        text="If you need strategic storage or terminal access, talk to the team that runs it as part of a global book."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/shipping"
        ghostLabel="Our shipping"
      />
    </>
  );
}

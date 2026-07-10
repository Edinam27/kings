import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Shipping | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum runs a chartered fleet and freight desk that keeps energy moving between global markets.",
};

const capabilities = [
  {
    title: "Chartered fleet",
    text: "A portfolio of time-chartered and voyage vessels sized to the cargoes our desks actually move.",
  },
  {
    title: "Freight desk",
    text: "In-house freight trading that hedges our own shipping exposure and serves third-party cargo needs.",
  },
  {
    title: "STS & bunkering",
    text: "Ship-to-ship transfer and marine bunkering that put physical supply alongside our trading books.",
  },
  {
    title: "Vessel management",
    text: "Technical and commercial management that keeps the fleet safe, compliant and available.",
  },
];

export default function ShippingPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Shipping"
        sub="We run a chartered fleet and a freight desk that keep energy moving between global markets — physically and on schedule."
        image="/assets/img/lng-tanker.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">The fleet behind the trade.</h2>
          <p className="section-head__aside">
            A trade is only done when the cargo arrives. Our shipping team owns that last, hardest mile —
            chartering, routing and managing vessels so the molecules we sell are the molecules that land.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities across the seas.</h2>
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
          <h2 className="section-head__title">Safe passage, every voyage.</h2>
          <p className="section-head__aside">
            Our freight desk balances owned and chartered tonnage against cargo demand, while vessel
            managers enforce safety and emissions standards. The outcome is reliable delivery, even
            when the market for ships gets tight.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Move with us"
        title="Charter or carry energy with Kings Tier."
        text="If you need cargo moved or freight managed, our shipping desk runs a fleet built for exactly that."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/terminals-storage"
        ghostLabel="Our storage"
      />
    </>
  );
}

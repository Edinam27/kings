import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Crude Oil & Products | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum trades crude oil and refined products from the wellhead into refineries and end-users across the world.",
};

const capabilities = [
  {
    title: "Sourcing & offtake",
    text: "Long-term offtake and spot purchases of sour and sweet grades, secured close to the producer and matched to the right refinery.",
  },
  {
    title: "Refinery supply",
    text: "Tailored crude programmes and product liftings that keep refineries running to spec, on schedule and within credit terms.",
  },
  {
    title: "Freight & logistics",
    text: "In-house vessel scheduling and inspection so every cargo is loaded, measured and delivered the way the contract promises.",
  },
  {
    title: "Risk management",
    text: "Hedging and structured pricing that protect both sides of the barrel against a volatile market.",
  },
];

export default function CrudeOilPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Crude oil & products"
        sub="We move crude and refined products from the wellhead into refineries and end-users worldwide — physically, and in specification."
        image="/assets/img/oil-rig.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">A physical crude and products book.</h2>
          <p className="section-head__aside">
            Our crude and products desk combines originating relationships with operating muscle. We
            do not just quote a price — we own the barrel from loading port to discharge, managing
            quality, freight and timing along the way.
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
          <h2 className="section-head__title">Discipline from lift to delivery.</h2>
          <p className="section-head__aside">
            Every cargo is scheduled, inspected and reconciled by our own operations team. Credit and
            compliance sign off before a barrel moves, so counterparties know the trade will settle
            exactly as agreed.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Trade with us"
        title="Source or place crude and products."
        text="Whether you lift at the wellhead or need a reliable refinery supply, our crude desk is ready to talk."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/refining"
        ghostLabel="Our refining"
      />
    </>
  );
}

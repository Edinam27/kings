import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "LPG | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum trades LPG for petrochemicals, industry and cooking fuel across pressurised and refrigerated markets.",
};

const capabilities = [
  {
    title: "Pressurised & refrigerated",
    text: "Both butane and propane in the form each customer can handle, from small cylinders to fully refrigerated parcels.",
  },
  {
    title: "Petrochemical feedstock",
    text: "Specification-grade volumes that keep crackers and PDH plants supplied without interruption.",
  },
  {
    title: "Autogas & cooking fuel",
    text: "Reliable supply of bottled and bulk LPG for households and fleets off the main grid.",
  },
  {
    title: "Logistics",
    text: "Owned and chartered pressurised vessels plus terminal access that keep the chain moving.",
  },
];

export default function LpgPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="LPG"
        sub="We trade liquefied petroleum gas for petrochemicals, industry and cooking fuel — in both pressurised and refrigerated form."
        image="/assets/img/industrial.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            The desk
          </p>
          <h2 className="section-head__title">A flexible molecule, moved carefully.</h2>
          <p className="section-head__aside">
            LPG sits between fuel and feedstock, and our desk serves both. We match the right form and
            parcel size to each end-user, then handle the pressurised logistics that make delivery safe.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            What we offer
          </p>
          <h2 className="section-head__title">Capabilities across the LPG chain.</h2>
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
          <h2 className="section-head__title">Specified, shipped, safe.</h2>
          <p className="section-head__aside">
            Pressurised cargoes demand precise handling. Our operations team manages vessels, terminals
            and vapour-pressure limits end to end, so the parcel that loads is the parcel that arrives.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Trade with us"
        title="Source LPG with confidence."
        text="From petrochemical feedstock to cooking fuel, our LPG desk can build the supply you rely on."
        primaryHref="/contact"
        primaryLabel="Contact the desk"
        ghostHref="/what-we-do/terminals-storage"
        ghostLabel="Our storage"
      />
    </>
  );
}

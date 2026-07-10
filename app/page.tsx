import Hero from "@/components/sections/Hero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const divisions = [
  {
    title: "Crude oil & products",
    text: "Sour and sweet grades sourced at the wellhead and traded into refineries worldwide.",
    href: "/what-we-do/crude-oil-products",
    img: "/assets/img/oil-rig.jpg",
  },
  {
    title: "Natural gas & LNG",
    text: "Flexible cargoes and pipeline volumes connecting supply hubs to growing demand.",
    href: "/what-we-do/natural-gas-lng",
    img: "/assets/img/power-plant.jpg",
  },
  {
    title: "Power & renewables",
    text: "Electricity, gas-fired generation and sustainable energy solutions for the transition.",
    href: "/what-we-do/renewables",
    img: "/assets/img/renewables.jpg",
  },
  {
    title: "Terminals & storage",
    text: "Owned and contracted storage that lets us position product where it is needed.",
    href: "/what-we-do/terminals-storage",
    img: "/assets/img/industrial.jpg",
  },
  {
    title: "Marine bunkering",
    text: "Physical supply and quality assurance for the world's shipping fleets in key ports.",
    href: "/what-we-do/shipping",
    img: "/assets/img/lng-tanker.jpg",
  },
  {
    title: "Shipping",
    text: "A chartered fleet and terminal network keeping energy moving between markets.",
    href: "/what-we-do/shipping",
    img: "/assets/img/lng-tanker.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro statement */}
      <section className="section">
        <Container>
          <p className="display" style={{ fontSize: "var(--text-2xl)", maxWidth: "24ch" }}>
            Every day, we connect the world&rsquo;s producers and consumers of energy —
            turning logistical complexity into reliable supply.
          </p>
        </Container>
      </section>

      {/* Divisions grid */}
      <section className="section section--surface">
        <Container>
          <div className="section-head">
            <h2 className="section-head__title">What we trade &amp; move</h2>
            <p className="section-head__aside">
              A diversified portfolio across the hydrocarbon value chain and the
              energy transition — each desk backed by dedicated operations and analytics.
            </p>
          </div>
          <div className="grid-3">
            {divisions.map((d) => (
              <article className="card" key={d.title}>
                <div
                  aria-hidden="true"
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "var(--radius)",
                    marginBottom: "1.1rem",
                    backgroundImage: `url(${d.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <a className="card__more" href={d.href}>
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Sustainability teaser */}
      <section className="section">
        <Container>
          <div className="section-head">
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Responsibility
            </p>
            <h2 className="section-head__title">Energy delivered safely, and with the future in mind.</h2>
            <p className="section-head__aside">
              Our ESG framework sets out how we operate: rigorous safety, sound
              governance and measurable investment in the energy transition.
            </p>
            <div style={{ marginTop: "1.75rem" }}>
              <Button href="/sustainability" variant="ghost">
                Read our ESG approach
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Careers CTA */}
      <section className="section cta-band">
        <Container>
          <p className="eyebrow" style={{ color: "#cdd6df", marginBottom: "1rem" }}>
            Careers
          </p>
          <h2>A business on the move.</h2>
          <p>
            Our people are our business. Join a team that turns global complexity into
            reliable energy — and builds a career without a ceiling.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Button href="/careers">View open roles</Button>
            <Button href="/contact" variant="ghost">
              Talk to our team
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

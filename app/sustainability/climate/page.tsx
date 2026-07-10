import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Climate & the energy transition | Kings Tier Petroleum",
  description:
    "How Kings Tier Petroleum is cutting emissions, investing in the transition and participating in carbon markets.",
};

export default function ClimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability · Climate"
        title="Climate & the energy transition"
        image="/assets/img/renewables.jpg"
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Our position
          </p>
          <h2 className="section-head__title">
            The world needs energy today and a liveable climate tomorrow.
          </h2>
          <p className="section-head__aside">
            We are realists about demand and serious about the transition. Kings
            Tier Petroleum keeps supply reliable while building the lower-carbon
            portfolio the coming decades will run on — and we are accountable for
            the emissions along the way.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <h2 className="section-head__title">Emissions we measure and cut.</h2>
          <p className="section-head__aside">
            We track emissions across the cargoes we move and the assets we
            operate, with third-party assured reporting. Efficiency gains in
            marine transit, smarter routing and cleaner terminal power are the
            first wave; fuel switching is the next.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2 className="section-head__title">Investing through the transition.</h2>
          <p className="section-head__aside">
            From renewable power to lower-carbon molecules, we are deploying
            capital into the supply the transition demands — and pairing it with
            the trading expertise that brings new energy to market at scale.
          </p>
          <div style={{ marginTop: "1.75rem" }}>
            <Button href="/what-we-do/renewables" variant="ghost">
              Explore our renewables desk
            </Button>
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <h2 className="section-head__title">Working in carbon markets.</h2>
          <p className="section-head__aside">
            We help credible low-carbon projects reach finance and give emitters a
            transparent route to neutralise residual emissions — with screening
            that filters out low-integrity credits.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="The path forward"
        title="See where transition energy fits in our desks."
        text="Our renewables and power business is where the transition becomes product you can trade."
        primaryHref="/what-we-do/renewables"
        primaryLabel="Power & renewables"
        ghostHref="/sustainability"
        ghostLabel="Back to sustainability"
      />
    </>
  );
}

import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Governance & ethics | Kings Tier Petroleum",
  description:
    "Board oversight, compliance and a zero-tolerance stance on corruption across Kings Tier Petroleum's global trading activity.",
};

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability · Governance"
        title="Governance & ethics"
        sub="Trust is the only currency that matters in global trade. We protect it with clear oversight and unbending standards."
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Board oversight
          </p>
          <h2 className="section-head__title">
            Accountable to a board that asks hard questions.
          </h2>
          <p className="section-head__aside">
            Kings Tier Petroleum is governed by a board with independent oversight
            of risk, conduct and ESG performance. Major trades, new jurisdictions
            and counterparties all pass through documented approval — no desk
            operates as a law unto itself.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="section-head">
          <h2 className="section-head__title">Compliance by design.</h2>
          <p className="section-head__aside">
            Every counterparty is screened, every jurisdiction assessed and every
            payment traced. Our compliance function sits independent of the
            trading desks, with the authority to block a deal that does not clear
            our standards.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2 className="section-head__title">Zero tolerance for corruption.</h2>
          <p className="section-head__aside">
            We do not pay bribes, and we do not look the other way when others do.
            Our anti-corruption policy applies to agents, intermediaries and
            partners as strictly as to our own people — because a shortcut today
            is a liability for everyone tomorrow.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Standards"
        title="Read our full ethics commitments."
        text="Our anti-corruption policy, conduct standards and whistleblower protections are set out in detail."
        primaryHref="/legal/ethics"
        primaryLabel="Our ethics commitments"
        ghostHref="/sustainability"
        ghostLabel="Back to sustainability"
      />
    </>
  );
}

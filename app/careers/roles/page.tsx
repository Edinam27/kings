import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";
import Link from "next/link";

const roles = [
  { title: "LNG Trader", location: "Singapore", discipline: "Trading" },
  { title: "Operations Analyst", location: "London", discipline: "Operations" },
  { title: "Compliance Officer", location: "Geneva", discipline: "Corporate" },
  { title: "Marine Risk Manager", location: "Houston", discipline: "Operations" },
  { title: "Power Analyst", location: "New York", discipline: "Trading" },
  { title: "Graduate Trader", location: "Dubai", discipline: "Trading" },
  { title: "Chartering Coordinator", location: "Houston", discipline: "Operations" },
  { title: "ESG Reporting Lead", location: "London", discipline: "Corporate" },
];

export const metadata = {
  title: "Open roles | Kings Tier Petroleum",
  description:
    "Current openings at Kings Tier Petroleum across trading, operations and corporate functions in offices worldwide.",
};

export default function RolesPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers · Open roles"
        title="Open roles"
        sub="A snapshot of where we are hiring. Don't see your role? Tell us — we are always meeting remarkable people."
      />

      <Section>
        <div className="section-head">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Current openings
          </p>
          <h2 className="section-head__title">Find your seat at the desk.</h2>
        </div>
        <div style={{ display: "grid", gap: "1rem", marginTop: "2rem" }}>
          {roles.map((r) => (
            <article
              className="card"
              key={`${r.title}-${r.location}`}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.25rem 1.75rem",
              }}
            >
              <div>
                <h3 style={{ marginBottom: "0.25rem" }}>{r.title}</h3>
                <p style={{ margin: 0 }}>
                  {r.location} · {r.discipline}
                </p>
              </div>
              <Link className="btn btn--primary" href="/contact">
                Apply
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Not listed?"
        title="Tell us what you bring."
        text="If none of these roles fit, reach out — we are glad to meet talent ahead of the need."
        primaryHref="/contact"
        primaryLabel="Contact our team"
        ghostHref="/careers/life"
        ghostLabel="Life at Kings Tier"
      />
    </>
  );
}

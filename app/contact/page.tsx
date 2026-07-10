import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import ContactForm from "./ContactForm";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact | Kings Tier Petroleum",
  description:
    "Get in touch with the Kings Tier Petroleum trading desk — offices across the Americas, EMEA and APAC.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact desk" />

      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 className="section-head__title" style={{ marginBottom: "1.5rem" }}>
              Send us a message.
            </h2>
            <ContactForm />
          </div>

          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Trading desk
            </p>
            <h2 className="section-head__title" style={{ marginBottom: "1.5rem" }}>
              Talk to a person, not a portal.
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "46ch" }}>
              For commercial enquiries, chartering and new business, the fastest
              route is our trading desk. We aim to respond to every serious
              message within one business day.
            </p>
            <dl style={{ marginTop: "2rem", display: "grid", gap: "1.25rem" }}>
              <div>
                <dt
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontSize: "var(--text-xs)",
                    color: "var(--muted)",
                    fontWeight: 600,
                  }}
                >
                  Email
                </dt>
                <dd style={{ margin: "0.25rem 0 0", fontSize: "var(--text-lg)" }}>
                  <a href={`mailto:${site.contact.email}`} style={{ color: "var(--brand)", textDecoration: "none" }}>
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontSize: "var(--text-xs)",
                    color: "var(--muted)",
                    fontWeight: 600,
                  }}
                >
                  Phone
                </dt>
                <dd style={{ margin: "0.25rem 0 0", fontSize: "var(--text-lg)" }}>
                  {site.contact.phone}
                </dd>
              </div>
              <div>
                <dt
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontSize: "var(--text-xs)",
                    color: "var(--muted)",
                    fontWeight: 600,
                  }}
                >
                  Offices
                </dt>
                <dd style={{ margin: "0.25rem 0 0", color: "var(--muted)" }}>
                  Global trading offices across the Americas, EMEA and APAC.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}

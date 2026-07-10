import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Ethics & compliance | Kings Tier Petroleum",
  description:
    "The Kings Tier Petroleum code of conduct: anti-bribery, sanctions controls, and a protected channel to speak up.",
};

export default function EthicsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Ethics & compliance" />

      <Section>
        <div className="prose">
          <p className="updated">Effective: 10 July 2026</p>

          <h2 id="principles">Principles</h2>
          <p>
            We compete hard on capability, not on cutting corners. Integrity is the
            precondition for every trade we do. This code applies to all employees,
            officers and, in substance, to the agents and partners who act for us.
          </p>

          <h2 id="conduct">Code of conduct</h2>
          <p>Our people are expected to:</p>
          <ul>
            <li>Act lawfully and in the best interest of the business and its stakeholders.</li>
            <li>Avoid conflicts of interest and disclose them promptly where they arise.</li>
            <li>Treat colleagues, counterparties and communities with respect.</li>
            <li>Keep accurate books and records that reflect the true nature of every transaction.</li>
          </ul>

          <h2 id="abc">Anti-bribery &amp; corruption</h2>
          <p>
            We prohibit bribery in any form, direct or indirect. We do not offer,
            promise, give, request or accept improper payments or advantages to win or
            retain business. Facilitation payments are not permitted, and gifts and
            hospitality must be reasonable, transparent and documented.
          </p>

          <h2 id="sanctions">Sanctions &amp; trade controls</h2>
          <p>
            We maintain a 100% counterparty compliance screening process and screen
            against applicable sanctions and export-control lists before and during
            relationships. We will not knowingly transact with sanctioned parties,
            vessels or jurisdictions, and we train our desks to recognise red flags.
          </p>

          <h2 id="speak-up">Speak up</h2>
          <p>
            Anyone — employee or external — can raise a concern about suspected
            misconduct confidentially and without fear of retaliation. Reports are
            reviewed independently by compliance, and we protect those who speak up in
            good faith.
          </p>
          <blockquote>
            If something feels wrong, it is always right to raise it. We would rather
            hear early than discover late.
          </blockquote>

          <h2 id="contact">Contact</h2>
          <p>
            Concerns can be raised via the <Link href="/#contact">contact desk</Link> or
            directly to our compliance function at{" "}
            <a href="mailto:compliance@kingstier.example">compliance@kingstier.example</a>.
          </p>
        </div>
      </Section>

      <Container className="legal-back">
        <Link href="/">Back to home</Link>
      </Container>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Modern slavery statement | Kings Tier Petroleum",
  description:
    "Kings Tier Petroleum's statement on preventing modern slavery and human trafficking across our operations and supply chain.",
};

export default function ModernSlaveryPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Modern slavery statement" />

      <Section>
        <div className="prose">
          <p className="updated">Reporting period: fiscal year 2025</p>

          <h2 id="commitment">Our commitment</h2>
          <p>
            Kings Tier Petroleum has a zero-tolerance approach to modern slavery in any
            form — forced labour, bonded labour, human trafficking and comparable
            abuse. We are committed to acting lawfully and ethically, and to embedding
            that expectation throughout our operations and supply chain.
          </p>

          <h2 id="structure">Structure &amp; supply chain</h2>
          <p>
            We are a global energy trading business operating across the Americas, EMEA
            and APAC. Our supply chain includes producers, refiners, vessel owners,
            terminals, logistics providers and professional services. While we hold
            little direct operational labour, we recognise our influence over working
            conditions through the partners we choose.
          </p>

          <h2 id="policies">Policies</h2>
          <p>Our position is backed by clear internal controls:</p>
          <ul>
            <li>An anti-slavery clause in supplier and chartering contracts.</li>
            <li>Counterparty and third-party due diligence before onboarding.</li>
            <li>Whistleblower protection for anyone who raises a concern (see our <Link href="/legal/ethics">Ethics &amp; compliance</Link> code).</li>
          </ul>

          <h2 id="due-diligence">Due diligence</h2>
          <p>
            We screen high-risk suppliers and jurisdictions, and we require assurance on
            labour standards as part of counterparty onboarding. Where a red flag
            appears, engagement is paused pending remediation.
          </p>

          <h2 id="risk">Risk assessment</h2>
          <p>
            The areas of greatest potential exposure are lower-tier logistics and
            maritime labour. We prioritise scrutiny there — through vetting, audits
            where practicable, and contract terms that let us act.
          </p>

          <h2 id="training">Training</h2>
          <p>
            Procurement, operations and compliance staff receive training on recognising
            and responding to modern-slavery indicators, refreshed as part of our
            ongoing compliance programme.
          </p>

          <h2 id="contact">Contact</h2>
          <p>
            Concerns can be raised confidentially through our ethics line or via the{" "}
            <Link href="/#contact">contact desk</Link>. We investigate every report
            and protect those who raise them in good faith.
          </p>
        </div>
      </Section>

      <Container className="legal-back">
        <Link href="/">Back to home</Link>
      </Container>
    </>
  );
}

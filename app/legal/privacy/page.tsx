import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Notice | Kings Tier Petroleum",
  description:
    "How Kings Tier Petroleum collects, uses and protects personal data submitted through this site and our trading relationships.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Notice" />

      <Section>
        <div className="prose">
          <p className="updated">Last updated: 10 July 2026</p>

          <h2 id="overview">Overview</h2>
          <p>
            Kings Tier Petroleum Trading Company (“Kings Tier”, “we”, “us”) respects
            your privacy. This policy explains what personal data we collect through
            this website and our business relationships, why we collect it, and the
            choices available to you. It applies to visitors to this site and to
            counterparties, candidates and partners who interact with us.
          </p>

          <h2 id="collect">What we collect</h2>
          <p>We collect only what we need to respond to you and run our business:</p>
          <ul>
            <li>Contact details you submit voluntarily (name, email, message) via our contact form.</li>
            <li>Correspondence and enquiry content you choose to send us.</li>
            <li>Standard technical data (such as browser and approximate region) via privacy-respecting analytics, where consented.</li>
            <li>Business-contact information exchanged in the course of trading and compliance.</li>
          </ul>

          <h2 id="use">How we use it</h2>
          <p>We use personal data to:</p>
          <ul>
            <li>Respond to enquiries and manage trading relationships.</li>
            <li>Carry out know-your-counterparty, sanctions and anti-fraud screening.</li>
            <li>Meet legal and regulatory obligations.</li>
            <li>Improve the site and our services where we have a lawful basis to do so.</li>
          </ul>
          <p>
            We do not sell your personal data, and we do not use it for automated
            decision-making that produces legal effects about you.
          </p>

          <h2 id="sharing">Who we share with</h2>
          <p>
            We share data only with vetted service providers (for example, email and
            hosting) acting on our instructions, and with regulators or counterparties
            where required by law or contract. Each receives the minimum necessary.
          </p>

          <h2 id="transfers">International transfers</h2>
          <p>
            As a global business we operate across many jurisdictions. Where we transfer
            personal data internationally, we rely on appropriate safeguards consistent
            with applicable data-protection law.
          </p>

          <h2 id="retention">Retention</h2>
          <p>
            We keep personal data only as long as needed for the purposes above or to
            meet legal obligations, then delete or anonymise it. Enquiry data is
            typically retained for the duration of the relationship plus a short
            statutory period.
          </p>

          <h2 id="rights">Your rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct,
            delete or port your personal data, and to object to or restrict certain
            processing. To exercise any right, contact us using the details below.
          </p>

          <h2 id="contact">Contact us</h2>
          <p>
            Questions or requests about this policy can be sent to our data-protection
            contact via the <Link href="/#contact">contact desk</Link>, or by email to{" "}
            <a href="mailto:privacy@kingstier.example">privacy@kingstier.example</a>.
          </p>
        </div>
      </Section>

      <Container className="legal-back">
        <Link href="/">Back to home</Link>
      </Container>
    </>
  );
}

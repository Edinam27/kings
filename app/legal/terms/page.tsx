import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of use | Kings Tier Petroleum",
  description:
    "The terms governing your use of the Kings Tier Petroleum website and the limits of any information published here.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" />

      <Section>
        <div className="prose">
          <p className="updated">Last updated: 10 July 2026</p>

          <h2 id="acceptance">Acceptance</h2>
          <p>
            By accessing this website you agree to these Terms of Use. If you do not
            agree, please do not use the site. Separate written agreements govern our
            trading and commercial relationships and are not replaced by anything here.
          </p>

          <h2 id="use">Using the site</h2>
          <p>You may view and share this site for lawful, non-commercial purposes. You agree not to:</p>
          <ul>
            <li>Attempt to disrupt, overload or gain unauthorised access to the site or its infrastructure.</li>
            <li>Present the site’s content as your own or in a way that misleads as to its source.</li>
            <li>Use the site for any unlawful or deceptive purpose.</li>
          </ul>

          <h2 id="ip">Intellectual property</h2>
          <p>
            All content on this site — including text, marks, artwork and code — is the
            property of Kings Tier Petroleum or its licensors and is protected by
            applicable intellectual-property law. Our name, logo and brand marks may not
            be used without prior written permission.
          </p>

          <h2 id="info">No advice</h2>
          <p>
            Content on this site, including any market commentary or “insights”, is
            provided for general information only. It is not investment, trading, legal
            or tax advice, and it may not be current. Decisions should be based on
            professional advice and our formal written agreements.
          </p>

          <h2 id="liability">Liability</h2>
          <p>
            The site is provided “as is” without warranties of any kind to the fullest
            extent permitted by law. Kings Tier is not liable for any loss arising from
            your use of, or inability to use, the site, except where liability cannot be
            excluded by law.
          </p>

          <h2 id="law">Governing law</h2>
          <p>
            These terms are governed by the laws of the jurisdiction in which the
            relevant Kings Tier entity is established, without regard to conflict-of-law
            principles. Any dispute is subject to the exclusive jurisdiction of the
            courts there.
          </p>

          <h2 id="contact">Contact</h2>
          <p>
            Questions about these terms can be sent via our{" "}
            <Link href="/#contact">contact desk</Link> or to{" "}
            <a href="mailto:legal@kingstier.example">legal@kingstier.example</a>.
          </p>
        </div>
      </Section>

      <Container className="legal-back">
        <Link href="/">Back to home</Link>
      </Container>
    </>
  );
}

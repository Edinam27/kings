import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookie policy | Kings Tier Petroleum",
  description:
    "How Kings Tier Petroleum uses essential and analytics cookies on this site, and how you can manage them.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie policy" />

      <Section>
        <div className="prose">
          <p className="updated">Last updated: 10 July 2026</p>

          <h2 id="what">What cookies are</h2>
          <p>
            Cookies are small text files stored on your device when you visit a site.
            They let the site remember your actions and preferences over time, and help
            us understand how the site is used. Some are essential; others are optional.
          </p>

          <h2 id="essential">Essential cookies</h2>
          <p>
            We use essential cookies needed for the site to function — for example, to
            remember interface preferences and keep basic security controls in place.
            These are set automatically and cannot be switched off in our systems.
          </p>

          <h2 id="analytics">Analytics</h2>
          <p>
            With your consent, where required, we use privacy-respecting analytics
            cookies to measure traffic and improve the site. These tell us, in
            aggregate, which pages are visited and roughly where visitors come from.
            They do not identify you personally and are never sold.
          </p>

          <h2 id="manage">Managing cookies</h2>
          <p>You can control cookies in two ways:</p>
          <ul>
            <li>Use the cookie banner on your first visit to accept or decline non-essential cookies.</li>
            <li>Adjust your browser settings at any time to block or delete cookies; note this may affect how parts of the site work.</li>
          </ul>
          <p>
            For questions about this policy, contact us via the{" "}
            <Link href="/#contact">contact desk</Link>.
          </p>
        </div>
      </Section>

      <Container className="legal-back">
        <Link href="/">Back to home</Link>
      </Container>
    </>
  );
}

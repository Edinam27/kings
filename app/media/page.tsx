import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";
import { articles } from "@/content/articles";
import { asset } from "@/lib/asset";

export const metadata = {
  title: "Media & insights | Kings Tier Petroleum",
  description:
    "Perspectives from our trading desks on the forces shaping global energy markets.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Market insights"
        sub="Perspectives from our trading desks on the forces shaping global energy markets."
      />
      <Section surface>
        <div className="grid-3">
          {articles.map((a) => (
            <article className="card" key={a.slug}>
              <div
                aria-hidden="true"
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: "var(--radius)",
                  marginBottom: "1.1rem",
                  backgroundImage: `url(${asset(a.image)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>
                {a.category} · {a.readTime}
              </div>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <Link className="card__more" href={`/media/${a.slug}`}>
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand
        eyebrow="Stay close to the market"
        title="Trade with a desk that reads it first."
        text="Our trading and analytics teams publish when they have something worth saying. The fastest way to hear it is to be a counterparty."
        primaryHref="/contact"
        primaryLabel="Contact desk"
        ghostHref="/what-we-do"
        ghostLabel="Explore markets"
      />
    </>
  );
}

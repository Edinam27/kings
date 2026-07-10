import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/sections/Section";
import CtaBand from "@/components/sections/CtaBand";
import { articles, getArticle } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) return {};
  return { title: `${a.title} | Kings Tier Petroleum`, description: a.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <>
      <PageHero eyebrow={article.category} title={article.title} image={article.image} />
      <Section>
        <div className="prose" style={{ maxWidth: "68ch", margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
            {article.readTime} · {article.date}
          </p>
          {article.body.map((block, i) => (
            <div key={i} style={{ marginBottom: "1.75rem" }}>
              {block.heading ? <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "0.75rem" }}>{block.heading}</h2> : null}
              {block.paragraphs.map((p, j) => (
                <p key={j} style={{ color: "var(--muted)", marginBottom: "1rem" }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
          <p style={{ marginTop: "2rem" }}>
            <Link className="card__more" href="/media">
              ← All insights
            </Link>
          </p>
        </div>
      </Section>
      <CtaBand
        eyebrow="Talk to our desks"
        title="Hear the next view first."
        text="Our analysts publish when they have something worth saying."
        primaryHref="/contact"
        primaryLabel="Contact desk"
        ghostHref="/what-we-do"
        ghostLabel="Explore markets"
      />
    </>
  );
}

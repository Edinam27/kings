import Container from "@/components/ui/Container";
import { asset } from "@/lib/asset";

export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  image?: string;
}) {
  if (image) {
    return (
      <section className="hero" style={{ minHeight: "52svh" }}>
        <div className="hero__media" aria-hidden="true">
          <img src={asset(image)} alt="" />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container hero__inner">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 style={{ fontSize: "var(--text-3xl)" }}>{title}</h1>
          {sub ? <p className="hero__sub">{sub}</p> : null}
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ paddingBlock: "clamp(3rem,6vw,5rem)" }}>
      <Container>
        {eyebrow ? <p className="eyebrow" style={{ marginBottom: "1rem" }}>{eyebrow}</p> : null}
        <h1 style={{ fontSize: "var(--text-3xl)", maxWidth: "20ch" }}>{title}</h1>
        {sub ? <p style={{ color: "var(--muted)", maxWidth: "58ch", marginTop: "1rem", fontSize: "var(--text-lg)" }}>{sub}</p> : null}
      </Container>
    </section>
  );
}

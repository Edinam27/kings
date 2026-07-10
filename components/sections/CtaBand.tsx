import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaBand({
  eyebrow,
  title,
  text,
  primaryHref,
  primaryLabel,
  ghostHref,
  ghostLabel,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  ghostHref?: string;
  ghostLabel?: string;
}) {
  return (
    <section className="section cta-band">
      <Container>
        {eyebrow ? <p className="eyebrow" style={{ color: "#cdd6df", marginBottom: "1rem" }}>{eyebrow}</p> : null}
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: text ? "2rem" : "1.5rem" }}>
          {primaryHref ? <Button href={primaryHref}>{primaryLabel ?? "Get in touch"}</Button> : null}
          {ghostHref ? (
            <Button href={ghostHref} variant="ghost">
              {ghostLabel ?? "Learn more"}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

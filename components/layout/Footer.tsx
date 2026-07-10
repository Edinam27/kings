import Link from "next/link";
import Container from "@/components/ui/Container";
import { footerColumns } from "@/content/navigation";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div>
            <div className="footer__brand">{site.shortName}</div>
            <p style={{ maxWidth: "34ch", fontSize: "var(--text-sm)" }}>
              {site.description}
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="footer__col-title">{col.title}</div>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            <Link href="/legal/privacy">Privacy</Link> ·{" "}
            <Link href="/legal/cookies">Cookies</Link> ·{" "}
            <Link href="/sitemap">Sitemap</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}

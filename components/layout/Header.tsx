"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { nav, NavItem } from "@/content/navigation";
import { site } from "@/content/site";

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSub, setOpenSub] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close menus on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenIndex(null);
        setDrawerOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          {site.shortName}
          <small>{site.tagline}</small>
        </Link>

        {/* Desktop nav */}
        <nav className="nav nav--desktop" aria-label="Primary">
          {nav.map((item, i) => (
            <NavTrigger
              key={item.label}
              item={item}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
          <Link className="btn btn--primary" href="/contact" style={{ marginLeft: "0.5rem" }}>
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Full-width mega panels (desktop) */}
      {nav.map((item, i) =>
        item.panel ? (
          <div
            key={item.label}
            className="meganav"
            data-open={openIndex === i}
            role="region"
            aria-label={`${item.label} menu`}
            onMouseEnter={() => setOpenIndex(i)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <div className="container">
              <div className="meganav__grid">
                {item.panel.columns.map((col) => (
                  <div key={col.title}>
                    <div className="meganav__col-title">{col.title}</div>
                    {col.links.map((l) => (
                      <Link key={l.href + l.label} className="meganav__link" href={l.href}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ))}
                {item.panel.feature && (
                  <div className="meganav__feature">
                    <div className="meganav__col-title">{item.panel.feature.title}</div>
                    <p>{item.panel.feature.text}</p>
                    <Link className="card__more" href={item.panel.feature.href}>
                      {item.panel.feature.cta} →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null
      )}

      {/* Mobile drawer */}
      <div className="drawer" data-open={drawerOpen} aria-hidden={!drawerOpen}>
        <div className="drawer__top">
          <span className="brand">{site.shortName}</span>
          <button
            className="nav__toggle"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            style={{ display: "flex" }}
          >
            <span /><span /><span />
          </button>
        </div>
        {nav.map((item, i) => (
          <div key={item.label}>
            {item.panel ? (
              <>
                <button
                  className="drawer__link"
                  aria-expanded={openSub === i}
                  onClick={() => setOpenSub(openSub === i ? null : i)}
                >
                  {item.label}
                  <span aria-hidden>{openSub === i ? "−" : "+"}</span>
                </button>
                <div className="drawer__sub" data-open={openSub === i}>
                  {item.panel.columns.flatMap((c) => c.links).map((l) => (
                    <Link key={l.href + l.label} href={l.href} onClick={() => setDrawerOpen(false)}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link className="drawer__link" href={item.href ? item.href : "/"} onClick={() => setDrawerOpen(false)}>
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <Link
          className="btn btn--primary"
          href="/contact"
          style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}
          onClick={() => setDrawerOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

function NavTrigger({
  item,
  index,
  openIndex,
  setOpenIndex,
}: {
  item: NavItem;
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  const isOpen = openIndex === index;
  return (
    <div
      className="nav__item"
      data-open={isOpen}
      onMouseEnter={() => item.panel && setOpenIndex(index)}
      onMouseLeave={() => item.panel && setOpenIndex(null)}
    >
      {item.panel ? (
        <button
          className="nav__link"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setOpenIndex(isOpen ? null : index)}
        >
          {item.label}
          <svg className="nav__caret" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      ) : (
        <Link className="nav__link" href={item.href ? item.href : "/"}>
          {item.label}
        </Link>
      )}
    </div>
  );
}

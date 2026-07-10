"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        {reduced ? (
          <img src="/assets/img/oil-rig.jpg" alt="" />
        ) : (
          <video autoPlay muted loop playsInline poster="/assets/img/oil-rig.jpg">
            <source src="/assets/video/oil-rig.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero__scrim" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow">Global energy &amp; commodities trading</p>
        <h1>Energy, delivered with integrity.</h1>
        <p className="hero__sub">
          Kings Tier Petroleum sources, moves and delivers crude, refined fuels, LNG
          and power across every continent — pairing deep logistical infrastructure
          with disciplined risk management our counterparties trust.
        </p>
        <div className="hero__cta">
          <Button href="/what-we-do">Explore our markets</Button>
          <Button href="/about" variant="ghost">
            About Kings Tier
          </Button>
        </div>
      </div>
    </section>
  );
}

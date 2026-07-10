/* ==========================================================================
   Kings Tier Petroleum — Interactions
   Vanilla JS, no dependencies. All motion respects prefers-reduced-motion.
   ========================================================================== */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---- Sticky header state ---- */
  const header = $(".site-header");
  const onScrollHeader = () => {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 24);
  };
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---- Scroll progress rail ---- */
  const progress = $(".scroll-progress");
  const onScrollProgress = () => {
    if (!progress) return;
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const ratio = max > 0 ? h.scrollTop / max : 0;
    progress.style.transform = `scaleX(${ratio})`;
  };
  onScrollProgress();
  window.addEventListener("scroll", onScrollProgress, { passive: true });

  /* ---- Mobile nav toggle ---- */
  const toggle = $(".nav__toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Scroll reveal (staggered) ---- */
  const revealEls = $$("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = el.dataset.revealDelay || "0";
          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.classList.add("is-visible");
          obs.unobserve(el);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---- Count-up stats ---- */
  const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
  const formatNum = (val, decimals) =>
    val.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    if (Number.isNaN(target)) return;
    const decimals = (el.dataset.count.split(".")[1] || "").length;
    const prefix = el.dataset.prefix || "";
    const duration = reduceMotion ? 0 : 1500;
    const start = performance.now();

    const tick = (now) => {
      const p = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      const val = target * easeOutQuint(p);
      el.textContent = prefix + formatNum(val, decimals);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + formatNum(target, decimals);
    };
    requestAnimationFrame(tick);
  };

  const counters = $$("[data-count]");
  if (counters.length) {
    const cio = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCount(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---- Hero parallax (subtle, rAF-throttled) ---- */
  const art = $(".hero__art");
  if (art && !reduceMotion) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY * 0.16;
          art.style.transform = `translate3d(0, ${y}px, 0)`;
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ---- Segment cards: pointer-tracked glow ---- */
  if (!reduceMotion) {
    $$(".seg").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    });
  }

  /* ---- Magnetic buttons ---- */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    $$("[data-magnetic]").forEach((btn) => {
      const strength = 0.32;
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }

  /* ---- Active nav link on scroll (scrollspy) ---- */
  const sections = $$("section[id]");
  const navLinks = $$('.nav__links a[href^="#"]');
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const linkFor = (id) =>
      navLinks.find((a) => a.getAttribute("href") === `#${id}`);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkFor(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.removeAttribute("aria-current"));
            link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---- Contact form (validated, composes mailto) ---- */
  const contactForm = $("#contact-form");
  if (contactForm) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const statusEl = contactForm.querySelector(".contact-form__status");

    const setError = (input, msg) => {
      const field = input.closest(".field");
      if (!field) return;
      field.classList.add("field--error");
      const err = field.querySelector("[data-error]");
      if (err) err.textContent = msg;
    };
    const clearError = (input) => {
      const field = input.closest(".field");
      if (!field) return;
      field.classList.remove("field--error");
      const err = field.querySelector("[data-error]");
      if (err) err.textContent = "";
    };

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#cf-name");
      const email = $("#cf-email");
      const message = $("#cf-message");
      let valid = true;

      if (!name.value.trim()) { setError(name, "Please tell us your name."); valid = false; }
      else clearError(name);
      if (!emailRe.test(email.value.trim())) { setError(email, "Enter a valid email address."); valid = false; }
      else clearError(email);
      if (message.value.trim().length < 10) { setError(message, "A little more detail, please (10+ characters)."); valid = false; }
      else clearError(message);

      if (!valid) {
        if (statusEl) statusEl.textContent = "";
        return;
      }

      const subject = `Enquiry from ${name.value.trim()}`;
      const body = `Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\n${message.value.trim()}`;
      const mailto = `mailto:trading@kingstier.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      if (statusEl) statusEl.textContent = "Opening your email app — thank you, we'll be in touch.";
      contactForm.reset();
    });

    contactForm.querySelectorAll("input, textarea").forEach((el) => {
      el.addEventListener("input", () => clearError(el));
    });
  }

  /* ---- Footer year ---- */
  const yearEl = $("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

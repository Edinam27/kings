export type MegaColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type NavItem = {
  label: string;
  href?: string; // top-level link (used when no panel)
  panel?: {
    columns: MegaColumn[];
    feature?: { title: string; text: string; href: string; cta: string };
  };
};

export const nav: NavItem[] = [
  {
    label: "About",
    panel: {
      columns: [
        {
          title: "Company",
          links: [
            { label: "Overview", href: "/about" },
            { label: "Our history", href: "/about/history" },
            { label: "Our people", href: "/about/people" },
            { label: "Global locations", href: "/about/locations" },
          ],
        },
      ],
      feature: {
        title: "A global energy partner",
        text: "Four decades connecting producers and consumers of energy across every continent.",
        href: "/about",
        cta: "About Kings Tier",
      },
    },
  },
  {
    label: "What we do",
    panel: {
      columns: [
        {
          title: "Trading & distribution",
          links: [
            { label: "Crude oil & products", href: "/what-we-do/crude-oil-products" },
            { label: "Natural gas & LNG", href: "/what-we-do/natural-gas-lng" },
            { label: "Power", href: "/what-we-do/power" },
            { label: "Carbon", href: "/what-we-do/carbon" },
            { label: "LPG", href: "/what-we-do/lpg" },
          ],
        },
        {
          title: "Assets & investments",
          links: [
            { label: "Terminals & storage", href: "/what-we-do/terminals-storage" },
            { label: "Refining", href: "/what-we-do/refining" },
            { label: "Renewables & transition", href: "/what-we-do/renewables" },
            { label: "Exploration & production", href: "/what-we-do/exploration-production" },
          ],
        },
        {
          title: "Logistics",
          links: [{ label: "Shipping", href: "/what-we-do/shipping" }],
        },
      ],
      feature: {
        title: "From wellhead to end user",
        text: "A single, accountable chain of custody — sourced, moved, hedged and delivered with precision.",
        href: "/what-we-do",
        cta: "Explore our markets",
      },
    },
  },
  {
    label: "Sustainability",
    panel: {
      columns: [
        {
          title: "Responsibility",
          links: [
            { label: "ESG overview", href: "/sustainability" },
            { label: "Safety", href: "/sustainability/safety" },
            { label: "Climate & transition", href: "/sustainability/climate" },
            { label: "Communities", href: "/sustainability/communities" },
            { label: "Governance & ethics", href: "/sustainability/governance" },
          ],
        },
      ],
      feature: {
        title: "Energy delivered responsibly",
        text: "Rigorous safety, accountable governance and measurable investment in the transition.",
        href: "/sustainability",
        cta: "Our ESG approach",
      },
    },
  },
  {
    label: "Media",
    panel: {
      columns: [
        {
          title: "Newsroom",
          links: [
            { label: "Latest news", href: "/media" },
            { label: "Market insights", href: "/media" },
            { label: "Reports", href: "/media" },
          ],
        },
      ],
      feature: {
        title: "Market perspectives",
        text: "Views from our trading desks on the forces shaping global energy.",
        href: "/media",
        cta: "Read the analysis",
      },
    },
  },
  {
    label: "Careers",
    panel: {
      columns: [
        {
          title: "Join us",
          links: [
            { label: "Life at Kings Tier", href: "/careers/life" },
            { label: "Open roles", href: "/careers/roles" },
            { label: "Graduates & early careers", href: "/careers" },
          ],
        },
      ],
      feature: {
        title: "A business on the move",
        text: "Our people are our business. Build a career without a ceiling.",
        href: "/careers",
        cta: "View open roles",
      },
    },
  },
];

export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "What we do", href: "/what-we-do" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "Crude & products", href: "/what-we-do/crude-oil-products" },
      { label: "Gas & LNG", href: "/what-we-do/natural-gas-lng" },
      { label: "Power & renewables", href: "/what-we-do/renewables" },
      { label: "Shipping", href: "/what-we-do/shipping" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Modern slavery", href: "/legal/modern-slavery" },
      { label: "Ethics & compliance", href: "/legal/ethics" },
      { label: "Cookie policy", href: "/legal/cookies" },
    ],
  },
];

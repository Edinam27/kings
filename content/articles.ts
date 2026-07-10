export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "us-power-markets",
    title: "What matters most in US power markets right now",
    category: "Power",
    readTime: "7 min read",
    date: "2026-06-12",
    image: "/assets/img/power-plant.jpg",
    excerpt:
      "Rising electricity demand is reshaping how reliable supply is developed, fuelled and delivered — and where the real opportunities lie.",
    body: [
      {
        paragraphs: [
          "Rising electricity demand across the United States is reshaping how reliable supply is developed, fuelled and delivered. After years of flat load, data centres, electrification and reshoring are pulling forwards a capacity build-out that the market had not priced in.",
          "For a trading desk, the opportunity is not a single commodity but the spread between regions and times of day. Where generation cannot move, price can.",
        ],
      },
      {
        heading: "Capacity is the constraint, not fuel",
        paragraphs: [
          "The binding limit is increasingly the ability to deliver power where and when it is needed. Interconnection queues, transmission congestion and the retirement of firm capacity matter more than the marginal cost of gas or renewables.",
          "We position around that scarcity: structuring deals that pair generation with the logistics and hedging needed to make delivery certain.",
        ],
      },
      {
        heading: "Flexibility is the asset",
        paragraphs: [
          "Batteries, demand response and dispatchable gas all earn a premium for flexibility. The traders who win are those who can move barrels and molecules to back stop intermittent supply — and who can settle the risk cleanly.",
        ],
      },
    ],
  },
  {
    slug: "carbon-markets",
    title: "Why carbon markets need a practical safety valve",
    category: "Carbon",
    readTime: "5 min read",
    date: "2026-05-28",
    image: "/assets/img/industrial.jpg",
    excerpt:
      "Balancing decarbonisation ambition with the stability industry needs to invest.",
    body: [
      {
        paragraphs: [
          "Carbon markets only deliver if they are credible and durable. A price that swings violently discourages the long-term investment that abatement actually requires.",
          "A practical safety valve — a predictable cost ceiling — lets policymakers hold an ambitious trajectory without exposing industry to shocks that stall progress.",
        ],
      },
      {
        heading: "Certainty drives investment",
        paragraphs: [
          "Industrial operators plan on multi-decade horizons. A transparent, bounded carbon cost is more useful than a high but volatile one, because it lets capital commit.",
          "We trade these markets with the same discipline as any other: measured exposure, independent risk governance, and settlement our counterparties can rely on.",
        ],
      },
    ],
  },
  {
    slug: "lng-flexible-cargo",
    title: "Global LNG demand and the flexible cargo",
    category: "LNG",
    readTime: "6 min read",
    date: "2026-05-09",
    image: "/assets/img/lng-tanker.jpg",
    excerpt:
      "How optionality is becoming the most valuable asset in gas trading.",
    body: [
      {
        paragraphs: [
          "LNG has turned a regional commodity into a global one. A cargo lifted on one coast can relieve a shortage on another, and that mobility is now the defining feature of the market.",
          "The most valuable asset is no longer the molecule itself but the option to place it where it is needed.",
        ],
      },
      {
        heading: "Optionality as strategy",
        paragraphs: [
          "Flexible volumes, diversified offtake and access to terminals let us arbitrage between basins in real time. When a cold snap hits one region, supply can be redirected without a bespoke negotiation.",
          "That is the heart of what we do: sourcing, moving and delivering energy with discipline, so reliability never depends on a single route.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

"use client";

import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CHOOSE_CARDS = [
  {
    slug: "historic-cities",
    emoji: "🏛️",
    title: "Historic Cities",
    tagline: "Genoa's palazzi, caruggi and harbour light — Liguria's great maritime capital within a cruise-timed day.",
    highlights: [
      "Guided introduction to historic Genoa",
      "Striped palazzi and narrow lanes",
      "Harbour viewpoints and cathedral squares",
      "Roughly 45–60 minutes from Savona each way",
      "Best on a long port call",
    ],
    cta: "Discover Genoa",
    href: "/shore-excursions/genoa-highlights",
    imageKey: "historic",
    wide: true,
  },
  {
    slug: "coastal-villages",
    emoji: "⛵",
    title: "Coastal Villages",
    tagline: "Portofino's pastel harbour and Santa Margherita's elegant promenade — the Riviera at its most photogenic.",
    highlights: [
      "Iconic Portofino harbour",
      "Santa Margherita waterfront stroll",
      "Coastal paths and viewpoints",
      "Full-day excursion from Savona",
      "Editor's Choice for long calls",
    ],
    cta: "Plan Portofino",
    href: "/shore-excursions/portofino-santa-margherita",
    imageKey: "ligurian-coast",
    wide: true,
  },
  {
    slug: "savona-old-town",
    emoji: "🚶",
    title: "Savona Old Town",
    tagline: "Priamar fortress, cathedral lanes and harbour life — a complete city day minutes from the gangway.",
    highlights: [
      "Walk from Palacrociere Savona terminal",
      "Priamar and waterfront views",
      "Via Paleocapa and historic piazzas",
      "Focaccia and Ligurian lunch stops",
      "Ideal for shorter port calls",
    ],
    cta: "Explore Savona",
    href: "/shore-excursions/savona-walking-tour",
    imageKey: "walking",
    wide: false,
  },
  {
    slug: "food-wine",
    emoji: "🍷",
    title: "Food & Wine",
    tagline: "Focaccia, pesto, olive oil and seafood — Liguria by the plate along the coast.",
    highlights: [
      "Regional focaccia and farinata",
      "Coastal seafood and trattorie",
      "Pesto and Ligurian white wine",
      "Village stops on scenic drives",
      "Food woven into the route",
    ],
    cta: "Taste Liguria",
    href: "/shore-excursions/ligurian-coast-experience",
    imageKey: "food",
    wide: false,
  },
  {
    slug: "scenic-drives",
    emoji: "📸",
    title: "Scenic Riviera Drives",
    tagline: "Cliff roads, village colour and Mediterranean horizons — breadth without rushing one famous harbour.",
    highlights: [
      "Curated coastal routing",
      "Photography stops built in",
      "Villages beyond the headline names",
      "Cruise-timed return to Savona",
      "Best when you want variety",
    ],
    cta: "Take the coast road",
    href: "/shore-excursions/italian-riviera-discovery",
    imageKey: "photography",
    wide: false,
  },
  {
    slug: "private",
    emoji: "🚗",
    title: "Private Riviera Touring",
    tagline: "Your vehicle, your pace and one carefully chosen Ligurian route shaped around your party.",
    highlights: [
      "Flexible stops and walking pace",
      "Useful for families and mixed mobility",
      "Photography and lunch timing",
      "One realistic coastal anchor",
      "Cruise-first return planning",
    ],
    cta: "Compare private touring",
    href: "/compare/private-tour-vs-coach-tour",
    imageKey: "private",
    wide: false,
  },
] as const;

export function ChooseYourRiviera() {
  return (
    <section id="choose" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your Riviera</p>
        <h2 className="section-title mt-2 max-w-3xl">
          How Would You Like to Experience the Italian Riviera?
        </h2>
        <p className="section-subtitle">
          From Genoa&apos;s palazzi and Portofino&apos;s harbour to Savona&apos;s walkable old town and
          Ligurian food culture, choose the experience that best fits your interests and time ashore.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages["ligurian-coast"];
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${card.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 text-3xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    &ldquo;{card.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

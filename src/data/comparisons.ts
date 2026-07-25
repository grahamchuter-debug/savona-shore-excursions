import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "genoa-or-portofino",
    title: "Genoa or Portofino?",
    seoTitle: "Genoa vs Portofino from Savona — Which Shore Excursion?",
    metaDescription:
      "Compare Genoa and Portofino for a Savona port day: road time, walking, atmosphere, booking and return-to-ship planning.",
    kind: "versus",
    optionA: "Genoa",
    optionB: "Portofino",
    summary:
      "Genoa offers palazzi, caruggi and one of Italy's great maritime cities. Portofino delivers the Riviera's most famous harbour and coastal glamour — with longer, less predictable road time from Savona.",
    verdict:
      "Choose Genoa for urban history, architecture and a slightly more forgiving drive. Choose Portofino when coastal beauty is the priority and your call is long enough to absorb traffic. Neither belongs on a rushed short call.",
    overview: [
      "Genoa is roughly 45 km west of Savona — typically 45–60 minutes each way.",
      "Portofino lies east along the coast — often 60–75 minutes each way with seasonal congestion.",
      "Genoa suits walkers who want depth; Portofino suits photographers and coastal romantics.",
    ],
    comparisonTable: [
      { category: "Headline experience", optionA: "Historic city, palazzi and harbour", optionB: "Iconic harbour village and coastal paths" },
      { category: "Typical road time", optionA: "About 45–60 min each way", optionB: "About 60–75 min each way" },
      { category: "Walking", optionA: "Moderate — slopes and cobbles in caruggi", optionB: "Moderate — village slopes and polished stone" },
      { category: "Crowds", optionA: "Busy in centre, spread across districts", optionB: "Intense around harbour in peak season" },
      { category: "Best for", optionA: "History, architecture, urban energy", optionB: "Coastal scenery, photography, glamour" },
    ],
    faqs: [
      {
        question: "Can I visit both on one port day?",
        answer:
          "Not properly. Each deserves focused time; combined coach days feel rushed and threaten your return buffer.",
      },
      {
        question: "Which is better on a shorter call?",
        answer:
          "Often neither — stay in Savona Old Town. If you must travel, Genoa usually involves slightly less road risk than Portofino.",
      },
    ],
    relatedSlugs: ["genoa-from-savona", "portofino-from-savona", "best-first-time-riviera-day"],
    imageKey: "compare",
  },
  {
    slug: "is-portofino-worth-it-from-savona",
    title: "Is Portofino Worth It from Savona?",
    seoTitle: "Is Portofino Worth It from Savona Cruise Port?",
    metaDescription:
      "Honest verdict on Portofino for Savona cruise passengers: road time, crowds, scenery, excursions and when to choose another day.",
    kind: "guide",
    summary:
      "Yes for passengers with a long call who want the definitive Riviera harbour and accept significant road time. No for short calls, mobility limitations or anyone expecting a quiet, spontaneous village.",
    verdict:
      "Portofino earns its reputation in good light at the water's edge — but the journey from Savona and seasonal crowds are real. Make it the day's anchor on a full port call, not a gamble squeezed around other stops.",
    overview: [
      "Road time both ways can consume 2–2.5 hours before you step onto the harbour.",
      "The village is small; satisfaction depends on free time, not drive-by photographs.",
      "Organised excursions handle parking and return timing better than most independent attempts.",
    ],
    guideItems: [
      {
        name: "Portofino from Savona",
        slug: "portofino-from-savona",
        href: "/guides/portofino-from-savona",
        reason: "Full guide to road time, walking and excursion options.",
        topExcursion: "Portofino & Santa Margherita",
        returnConfidence: "Good with cruise-timed transport",
        walkingDifficulty: "Moderate on village slopes",
      },
      {
        name: "How to Visit Portofino",
        slug: "how-to-visit-portofino",
        href: "/guides/how-to-visit-portofino",
        reason: "Practical planning for first-time visitors.",
        topExcursion: "Portofino & Santa Margherita",
        returnConfidence: "Depends on operator buffer",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Genoa or Portofino?",
        slug: "genoa-or-portofino",
        href: "/compare/genoa-or-portofino",
        reason: "Compare the coastal icon with Genoa's historic alternative.",
        topExcursion: "Either headline day",
        returnConfidence: "Route dependent",
        walkingDifficulty: "Moderate for both",
      },
    ],
    faqs: [
      {
        question: "Is Portofino overrated?",
        answer:
          "It can feel crowded at midday, but the harbour in morning light still justifies the journey for many passengers — on the right call length.",
      },
      {
        question: "What if traffic is bad?",
        answer:
          "Reputable operators build contingency. Independent travellers bear the risk — another reason to book cruise-timed excursions.",
      },
    ],
    relatedSlugs: ["portofino-from-savona", "how-to-visit-portofino", "genoa-or-portofino"],
    imageKey: "coast",
  },
  {
    slug: "private-tour-vs-coach-tour",
    title: "Private Tour vs Coach Tour",
    seoTitle: "Private vs Coach Shore Tours from Savona",
    metaDescription:
      "Compare private and coach shore excursions from Savona for group size, pace, cost, mobility and return-to-ship timing on the Italian Riviera.",
    kind: "versus",
    optionA: "Private Tour",
    optionB: "Coach Tour",
    summary:
      "Private tours buy control: direct pickup, adjustable pacing and fewer group delays. Coach tours make Genoa and Portofino more affordable per person but follow fixed routes and group speed.",
    verdict:
      "Choose private for families, small parties, mobility considerations and photography stops on your schedule. Choose coach when price matters and the published itinerary fits. Neither eliminates Ligurian traffic.",
    overview: [
      "Private tours reduce waiting and can shorten or extend stops within port limits.",
      "Coach tours offer better per-person value and package logistics.",
      "For Portofino, verify parking, free time and return buffer regardless of format.",
    ],
    comparisonTable: [
      { category: "Group size", optionA: "Your party, usually one vehicle", optionB: "Often 25–45 passengers" },
      { category: "Pace", optionA: "Adjustable within port constraints", optionB: "Fixed to published schedule" },
      { category: "Cost", optionA: "Higher overall; can suit families", optionB: "Lower per person in EUR" },
      { category: "Mobility", optionA: "Stops often adaptable", optionB: "Group route less flexible" },
      { category: "Traffic risk", optionA: "Same roads — private does not bypass jams", optionB: "Operators plan known buffers" },
    ],
    faqs: [
      {
        question: "Does private guarantee more time in Portofino?",
        answer:
          "It can, within port-hour limits — but road time still governs the day.",
      },
      {
        question: "Are coach tours slower?",
        answer:
          "Boarding and regrouping add time, but experienced cruise operators design around those realities.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "signature-riviera-experience", "genoa-or-portofino"],
    imageKey: "private",
  },
  {
    slug: "one-day-in-savona",
    title: "One Day in Savona",
    seoTitle: "One Day in Savona from the Cruise Port",
    metaDescription:
      "Plan one realistic day in Savona with Priamar, cathedral, old-town lanes, Ligurian lunch and a safe return to your ship.",
    kind: "guide",
    summary:
      "Savona rewards a city day. Priamar, the cathedral, historic lanes and the waterfront sit close enough to combine without turning the port call into a motorway exercise.",
    verdict:
      "Start at Priamar and the waterfront, explore the cathedral quarter and Via Paleocapa, enjoy a Ligurian lunch, then drift back toward the terminal with time in hand.",
    overview: [
      "Morning: Priamar exterior and old-town lanes before coach groups peak.",
      "Midday: focaccia or seafood lunch near the cathedral or harbour.",
      "Afternoon: promenade walk, last-minute shops, calm return to terminal.",
    ],
    guideItems: [
      {
        name: "Savona Old Town",
        slug: "savona-old-town",
        href: "/guides/savona-old-town",
        reason: "Essential sights in historical context.",
        topExcursion: "Savona Walking Tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "Walking from the Port",
        slug: "walking-from-port",
        href: "/guides/walking-from-port",
        reason: "Terminal orientation and DIY route detail.",
        topExcursion: "Self-guided Savona",
        returnConfidence: "High with 60–90 min buffer",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "Savona Walking Tour",
        slug: "savona-walking-tour",
        href: "/shore-excursions/savona-walking-tour",
        reason: "Guided context when you want commentary without leaving town.",
        topExcursion: "Savona Walking Tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
    ],
    faqs: [
      {
        question: "Can I add Genoa on the same day?",
        answer:
          "Only on an exceptionally long call — and even then a dedicated Genoa excursion is cleaner.",
      },
      {
        question: "Is Savona enough for first-timers?",
        answer:
          "On short calls, yes. On long calls, pair Savona morning with a booked Riviera excursion only if hours truly allow.",
      },
    ],
    relatedSlugs: ["walking-from-port", "savona-old-town", "cruise-tips"],
    imageKey: "walking",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Savona Shore Excursion",
    seoTitle: "Best Savona Shore Excursion — Honest First-Timer Guide",
    metaDescription:
      "Choose the best Savona shore excursion for your port hours, interests and mobility: Genoa, Portofino, Riviera drives or Savona itself.",
    kind: "guide",
    summary:
      "There is no universal winner. Portofino is the coastal icon, Genoa the historic city, Riviera Discovery the scenic route, and Savona itself the smart answer for shorter calls.",
    verdict:
      "For most first-time visitors with a full port day, choose Portofino & Santa Margherita for Riviera glamour or Genoa Highlights for urban depth. Stay in Savona for shorter calls.",
    overview: [
      "Best coastal day: Portofino & Santa Margherita with cruise-timed return.",
      "Best historic city: Genoa Highlights within roughly an hour's drive.",
      "Best scenic breadth: Italian Riviera Discovery along the coast.",
      "Best short-call choice: Savona Walking Tour or independent old town.",
    ],
    guideItems: [
      {
        name: "Portofino & Santa Margherita",
        slug: "portofino-from-savona",
        href: "/guides/portofino-from-savona",
        reason: "The defining Riviera harbour experience from Savona.",
        topExcursion: "Portofino & Santa Margherita",
        returnConfidence: "Good with planned road buffers",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Genoa Highlights",
        slug: "genoa-from-savona",
        href: "/guides/genoa-from-savona",
        reason: "Maritime history and palazzi without the longest coastal drive.",
        topExcursion: "Genoa Highlights",
        returnConfidence: "Good on long calls",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Italian Riviera Discovery",
        slug: "italian-riviera",
        href: "/guides/italian-riviera",
        reason: "Coastal villages and viewpoints when breadth beats one famous stop.",
        topExcursion: "Italian Riviera Discovery",
        returnConfidence: "Good with operator contingency",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Savona Old Town",
        slug: "savona-old-town",
        href: "/guides/savona-old-town",
        reason: "Maximum culture with minimum transfer time.",
        topExcursion: "Savona Walking Tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
    ],
    faqs: [
      {
        question: "What is the safest choice for a six-hour call?",
        answer:
          "Stay in Savona. The old town has enough substance without spending hours on coastal roads.",
      },
      {
        question: "Should I book before sailing?",
        answer:
          "Yes for Portofino and peak-season Genoa days — popular excursions fill ahead of cruise week.",
      },
    ],
    relatedSlugs: ["genoa-or-portofino", "best-first-time-riviera-day", "best-shore-excursions"],
    imageKey: "compare",
  },
  {
    slug: "best-first-time-riviera-day",
    title: "Best Italian Riviera Day for First-Time Visitors",
    seoTitle: "Best First-Time Italian Riviera Day from Savona",
    metaDescription:
      "First time on the Italian Riviera? Compare Genoa, Portofino, Savona and scenic drives by port hours, interests and planning.",
    kind: "guide",
    summary:
      "A first Riviera day should reveal Liguria rather than race across it. Choose one clear story: Genoa's palaces, Portofino's harbour, Savona's walkable old town or a curated coastal drive.",
    verdict:
      "Portofino is the first choice for coastal iconography on a long call. Genoa is the richer urban alternative. Savona is the intelligent short-call option; scenic discovery tours suit passengers who want breadth without one famous name.",
    overview: [
      "Long full day and coastal priority: Portofino & Santa Margherita.",
      "Long full day and history priority: Genoa Highlights.",
      "Shorter call or independent preference: Savona Old Town.",
      "Scenery without a single anchor: Italian Riviera Discovery.",
    ],
    guideItems: [
      {
        name: "Portofino",
        slug: "portofino-from-savona",
        href: "/guides/portofino-from-savona",
        reason: "The most memorable first impression of the Ligurian coast.",
        topExcursion: "Portofino & Santa Margherita",
        returnConfidence: "Requires long call and traffic buffer",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Genoa",
        slug: "genoa-from-savona",
        href: "/guides/genoa-from-savona",
        reason: "Urban depth, caruggi and harbour grandeur.",
        topExcursion: "Genoa Highlights",
        returnConfidence: "Good on long calls",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Savona Old Town",
        slug: "savona-old-town",
        href: "/guides/savona-old-town",
        reason: "Walkable history beside the ship — ideal when hours are limited.",
        topExcursion: "Savona Walking Tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "Italian Riviera",
        slug: "italian-riviera",
        href: "/guides/italian-riviera",
        reason: "Coastal breadth for passengers who want villages beyond the headline.",
        topExcursion: "Italian Riviera Discovery",
        returnConfidence: "Good with sensible buffers",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "Can I see Genoa and Portofino in one port day?",
        answer:
          "No. They lie in opposite directions and each needs proper time from Savona.",
      },
      {
        question: "Which option suits limited mobility?",
        answer:
          "Savona Walking Tour or a private Savona route adapts most readily. Discuss slopes and vehicle access before booking Genoa or Portofino.",
      },
    ],
    relatedSlugs: ["genoa-or-portofino", "best-shore-excursions", "is-portofino-worth-it-from-savona"],
    imageKey: "highlights",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}

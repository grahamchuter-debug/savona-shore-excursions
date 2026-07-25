import type { ExperienceCard, FAQ, VisitorType } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export const homepageTagline = "Discover the Italian Riviera from Savona";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Savona for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to Genoa, Portofino, Santa Margherita or a calm Savona walking day — with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time on the Italian Riviera",
    shortLabel: "First visit",
    description:
      "Compare Genoa, Portofino and the Ligurian coast before choosing the experience that fits your first call.",
    href: "/compare/best-shore-excursions",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Walk from the terminal into Savona Old Town, or plan taxis and trains toward Genoa with realistic timings.",
    href: "/guides/walking-from-port",
    cta: "Explore independently",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Riviera plan from Savona.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected Genoa, Portofino, Santa Margherita and Ligurian coast experiences designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & Riviera guides",
    description:
      "Honest advice on how far Genoa is, how to visit Portofino, taxis, walking from the terminal and cruise tips.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "See which ships call at Savona and plan your day ashore around real arrival windows.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    slug: "historic-cities",
    title: "Historic Cities",
    description: "Genoa’s palazzi, harbour and caruggi — Liguria’s great maritime capital.",
    href: "/shore-excursions/genoa-highlights",
    cta: "Explore Genoa",
    imageKey: "historic",
  },
  {
    slug: "coastal-villages",
    title: "Coastal Villages",
    description: "Portofino, Santa Margherita and colourful Ligurian harbours.",
    href: "/shore-excursions/portofino-santa-margherita",
    cta: "See the villages",
    imageKey: "coast",
  },
  {
    slug: "food-wine",
    title: "Food & Wine",
    description: "Focaccia, pesto, olive oil and the flavours that define the Ligurian table.",
    href: "/shore-excursions/savona-walking-tour",
    cta: "Taste Liguria",
    imageKey: "food",
  },
  {
    slug: "scenic-drives",
    title: "Scenic Drives",
    description: "Cliff-edge roads and Mediterranean viewpoints along the Italian Riviera.",
    href: "/shore-excursions/italian-riviera-discovery",
    cta: "Take the coast road",
    imageKey: "photography",
  },
  {
    slug: "walking-tours",
    title: "Walking Tours",
    description: "Savona Old Town and Priamar — close to the ship, rich in atmosphere.",
    href: "/shore-excursions/savona-walking-tour",
    cta: "Walk Savona",
    imageKey: "walking",
  },
  {
    slug: "small-groups",
    title: "Small Groups",
    description: "Intimate vehicle experiences with space to enjoy the day ashore.",
    href: "/shore-excursions/ligurian-coast-experience",
    cta: "Travel small",
    imageKey: "private",
  },
  {
    slug: "luxury-experiences",
    title: "Luxury Experiences",
    description: "Private pacing, premium routing and Riviera days shaped around your party.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "View signature days",
    imageKey: "wine",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Is Savona a good cruise port for the Italian Riviera?",
      answer:
        "Yes. Savona is a practical gateway to Genoa, Portofino, Santa Margherita Ligure and the wider Ligurian coast, with a walkable old town beside the terminal.",
    },
    {
      question: "Can I visit Portofino from Savona in one day?",
      answer:
        "With a full day in port, yes. Road time is significant, so choose a cruise-timed excursion and protect a 60–90 minute return buffer.",
    },
    {
      question: "How far is Genoa from Savona?",
      answer:
        "Typically about 45–60 minutes by road each way, depending on traffic and your exact meeting point.",
    },
    {
      question: "Do your excursions include a return to ship guarantee?",
      answer:
        "Yes. Bookable excursions are planned around your cruise call. Confirmation details explain the assurance that applies to your booking.",
    },
  ];
}

import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureRivieraExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Riviera Discovery",
  seoTitle: "Signature Riviera Discovery — Future Private Ligurian Day",
  metaDescription:
    "Preview a future small-group Italian Riviera shore experience from Savona — maximum eight guests, luxury transport and flexible discovery. Not currently bookable.",
  tagline:
    "A future small-group journey along the Ligurian coast — designed around your ship, not a generic day tour.",
  overview:
    "Signature Riviera Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Savona along the Italian Riviera in a luxury vehicle, with scenic village stops, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🚐",
      title: "Luxury vehicle",
      description: "Comfortable transport planned for Ligurian coastal roads and village approaches.",
    },
    {
      emoji: "⛵",
      title: "Riviera harbours",
      description: "Portofino-area colour, Santa Margherita elegance and quieter Ligurian villages at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for harbour and viewpoint photographs rather than images through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Ligurian lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Routing designed to adapt to ship times, traffic, weather, mobility and the interests of each group.",
    },
    {
      emoji: "🚢",
      title: "Cruise-first timing",
      description: "The future operating plan will be built backwards from all-aboard with a conservative return margin.",
    },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Riviera Discovery now?",
      answer:
        "No. The experience is in preparation and is not currently available to book. This page describes the intended concept only.",
    },
    {
      question: "What should I book in the meantime?",
      answer:
        "Choose from our bookable Savona shore excursions — Portofino & Santa Margherita, Genoa Highlights, Italian Riviera Discovery, Ligurian Coast Experience or the Savona Walking Tour.",
    },
  ] satisfies FAQ[],
};

/** Back-compat alias during rename */
export const signatureAndalusiaExperience = signatureRivieraExperience;

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureRivieraExperience.title,
    description:
      "A future maximum-eight-guest Riviera experience. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}

/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your perfect day on the Italian Riviera take you? Choose the experience that fits your hours ashore — then build everything around your ship’s schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "historic-cities",
    title: "Historic Cities",
    body: "Genoa’s harbour, palazzi and old-town lanes — Liguria’s maritime capital in one carefully timed day.",
    href: "/shore-excursions/genoa-highlights",
    icon: "route",
  },
  {
    id: "coastal-villages",
    title: "Coastal Villages",
    body: "Portofino, Santa Margherita and colourful Ligurian harbours made for unhurried wandering.",
    href: "/shore-excursions/portofino-santa-margherita",
    icon: "viewpoint",
  },
  {
    id: "food",
    title: "Food",
    body: "Focaccia, pesto and seaside tables — taste Liguria without losing your ship buffer.",
    href: "/shore-excursions/savona-walking-tour",
    icon: "food",
  },
  {
    id: "scenic-drives",
    title: "Scenic Drives",
    body: "Cliff roads and Mediterranean viewpoints that turn the transfer into part of the day.",
    href: "/shore-excursions/italian-riviera-discovery",
    icon: "sunrise",
  },
  {
    id: "small-groups",
    title: "Small Groups",
    body: "Intimate vehicles, clearer pacing and a calmer day than large coach tours.",
    href: "/shore-excursions/ligurian-coast-experience",
    icon: "clock",
  },
  {
    id: "family-friendly",
    title: "Family Friendly",
    body: "Shorter walks, flexible stops and days that still feel special with children aboard.",
    href: "/shore-excursions/savona-walking-tour",
    icon: "family",
  },
  {
    id: "luxury",
    title: "Luxury",
    body: "Private pacing, premium routing and Riviera days shaped around your party alone.",
    href: "/signature-riviera-experience",
    icon: "luxury",
  },
];

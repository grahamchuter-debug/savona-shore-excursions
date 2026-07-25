/**
 * Central cruise-positioning copy for homepage readiness.
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
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food";
}

export const dayAshoreIntro =
  "Choose the kind of Riviera day that fits your hours ashore — then build everything around your ship’s schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "historic-cities",
    title: "Historic Cities",
    body: "Genoa’s harbour, palazzi and old-town lanes — the maritime capital of Liguria in one carefully timed day.",
    icon: "route",
  },
  {
    id: "coastal-villages",
    title: "Coastal Villages",
    body: "Portofino, Santa Margherita and colourful Ligurian harbours made for unhurried wandering.",
    icon: "viewpoint",
  },
  {
    id: "food-wine",
    title: "Food & Wine",
    body: "Focaccia, pesto, olive oil and seaside tables — taste Liguria without losing your ship buffer.",
    icon: "food",
  },
  {
    id: "scenic-drives",
    title: "Scenic Drives",
    body: "Cliff roads and Mediterranean viewpoints that turn the transfer itself into part of the experience.",
    icon: "sunrise",
  },
  {
    id: "walking-tours",
    title: "Walking Tours",
    body: "Stay close to port and explore Savona Old Town and Priamar at an easy pace.",
    icon: "walk",
  },
  {
    id: "small-groups",
    title: "Small Groups",
    body: "Intimate vehicles, clearer commentary and a calmer day than large coach tours.",
    icon: "clock",
  },
];

import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Savona cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "Genoa's palazzi, Savona's Priamar and Liguria's layered past." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Independent", description: "A realistic self-guided Savona day within easy reach of the ship." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "Portofino, Santa Margherita and the Ligurian waterfront." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Harbour panoramas, cliff roads and Mediterranean light." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Riviera small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Flexible Savona and coastal options with manageable travel and walking." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Portofino harbour, coastal drives and Genoa's striped façades." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Focaccia, pesto, seafood and Ligurian white wine." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Coastal villages and local stops beyond the standard coach route." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Savona highlights for calls without enough usable time to travel the coast." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Portofino & Santa Margherita — the Italian Riviera's defining harbour day on a carefully timed excursion from Savona.",
    href: "/shore-excursions/portofino-santa-margherita",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Portofino and Santa Margherita for first-time visitors with a long port call and appetite for coastal road time.",
    href: "/shore-excursions/portofino-santa-margherita",
    cta: "Discover the Riviera",
  },
  {
    id: "historic",
    emoji: "🏛️",
    label: "Best Historic City",
    description: "Genoa Highlights — palazzi, caruggi and harbour grandeur within a cruise-timed day from Savona.",
    href: "/shore-excursions/genoa-highlights",
    cta: "Explore Genoa",
  },
  {
    id: "food-wine",
    emoji: "🍷",
    label: "Best Food & Wine",
    description: "Ligurian Coast Experience — focaccia, pesto, olive oil and seafood without leaving the coast behind.",
    href: "/shore-excursions/ligurian-coast-experience",
    cta: "Taste Liguria",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Private Tour",
    description: "Compare private versus coach pacing — flexible routing for parties who value control on Riviera roads.",
    href: "/compare/private-tour-vs-coach-tour",
    cta: "Compare touring styles",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Italian Riviera Discovery — cliff roads, village stops and harbour light designed for the camera.",
    href: "/shore-excursions/italian-riviera-discovery",
    cta: "Photograph the coast",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Savona city or a gentler coastal day keeps road time sensible and allows mixed-age families to set an easier pace.",
    href: "/compare/best-first-time-riviera-day",
    cta: "Compare family days",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Best Independent Day",
    description: "Walking from Savona port — Priamar, cathedral, lanes and waterfront with a generous ship buffer.",
    href: "/guides/walking-from-port",
    cta: "Use the DIY guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Riviera Discovery",
    description: "Signature Riviera Discovery — a future maximum-eight-guest coastal day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

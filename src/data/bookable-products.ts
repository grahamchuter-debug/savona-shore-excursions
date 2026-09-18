/**
 * Bookable shore excursions — customer display + Worker catalogue alignment.
 *
 * Prices are Shore Excursions Group customer-facing major-unit amounts for this
 * European market, displayed in EUR with no FX conversion.
 * (€115 / €142 / €148 / €150 / €168)
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";
import { SITE_CURRENCY } from "@/lib/commerce/currency";

export type BookableProduct = {
  id: string;
  slug: string;
  name: string;
  experienceName: string;
  shortName: string;
  experienceTitleLines: readonly string[];
  experienceSubheading: string;
  durationLabel: string;
  /** @deprecated Prefer priceAmount */
  priceEur: number;
  priceAmount: number;
  priceCurrency: DestinationCurrencyCode;
  path: string;
  bookingPath: string;
  successPath: string;
  imageAlt: string;
  backLabel: string;
  ctaLabel: string;
  checkoutReconnectLine: string;
  heroSlides: readonly {
    id: string;
    width: number;
    height: number;
    priority?: boolean;
  }[];
  checkoutReconnectImageId: string;
  checkoutReconnectImageAlt: string;
};

function hero(
  id: string,
  dims: { width: number; height: number },
  priority = false,
) {
  return { id, ...dims, priority };
}

function product(
  partial: Omit<BookableProduct, "priceAmount" | "priceCurrency" | "priceEur"> & {
    priceAmount: number;
  },
): BookableProduct {
  return {
    ...partial,
    priceEur: partial.priceAmount,
    priceCurrency: SITE_CURRENCY,
  };
}

export const BOOKABLE_PRODUCTS: readonly BookableProduct[] = [
  product({
    id: "genoa-highlights",
    slug: "genoa-highlights",
    name: "Genoa Highlights",
    experienceName: "Genoa Highlights Shore Excursion",
    shortName: "Genoa Highlights",
    experienceTitleLines: ["Genoa", "Highlights"],
    experienceSubheading:
      "Palazzi, harbour light and the historic lanes of Italy’s great maritime city.",
    durationLabel: "Approximately 8 hours",
    priceAmount: 148,
    path: "/shore-excursions/genoa-highlights",
    bookingPath: "/book/genoa-highlights",
    successPath: "/book/genoa-highlights/success",
    imageAlt:
      "Historic Genoa streets and harbour views on a shore excursion from Savona",
    backLabel: "← Genoa Highlights",
    ctaLabel: "Choose Your Cruise Date",
    checkoutReconnectLine: "Your Genoa day is almost booked.",
    heroSlides: [
      hero("camogli-waterfront", { width: 2560, height: 1707 }, true),
      hero("savona-coast", { width: 2560, height: 1707 }),
      hero("santa-margherita", { width: 2560, height: 1707 }),
    ],
    checkoutReconnectImageId: "camogli-waterfront",
    checkoutReconnectImageAlt:
      "Colourful Ligurian harbour facades along the Italian Riviera coast",
  }),
  product({
    id: "portofino-santa-margherita",
    slug: "portofino-santa-margherita",
    name: "Portofino & Santa Margherita",
    experienceName: "Portofino & Santa Margherita Shore Excursion",
    shortName: "Portofino & Santa Margherita",
    experienceTitleLines: ["Portofino", "& Santa Margherita"],
    experienceSubheading:
      "Two of the Riviera’s most photographed harbours in one carefully timed cruise day.",
    durationLabel: "Approximately 8 hours",
    priceAmount: 168,
    path: "/shore-excursions/portofino-santa-margherita",
    bookingPath: "/book/portofino-santa-margherita",
    successPath: "/book/portofino-santa-margherita/success",
    imageAlt:
      "Portofino and Santa Margherita Ligure harbours from a Savona shore excursion",
    backLabel: "← Portofino & Santa Margherita",
    ctaLabel: "Choose Your Cruise Date",
    checkoutReconnectLine: "Your Riviera day is almost booked.",
    heroSlides: [
      hero("portofino-bay", { width: 2560, height: 1707 }, true),
      hero("santa-margherita", { width: 2560, height: 1707 }),
      hero("camogli-waterfront", { width: 2560, height: 1707 }),
    ],
    checkoutReconnectImageId: "portofino-bay",
    checkoutReconnectImageAlt:
      "Italian Riviera coastline towards Portofino on a clear Mediterranean day",
  }),
  product({
    id: "italian-riviera-discovery",
    slug: "italian-riviera-discovery",
    name: "Italian Riviera Discovery",
    experienceName: "Italian Riviera Discovery Shore Excursion",
    shortName: "Italian Riviera Discovery",
    experienceTitleLines: ["Italian Riviera", "Discovery"],
    experienceSubheading:
      "A broader Ligurian day — coastal villages, scenic drives and time to savour the Riviera.",
    durationLabel: "Approximately 8–9 hours",
    priceAmount: 150,
    path: "/shore-excursions/italian-riviera-discovery",
    bookingPath: "/book/italian-riviera-discovery",
    successPath: "/book/italian-riviera-discovery/success",
    imageAlt:
      "Italian Riviera coastal discovery shore excursion departing from Savona",
    backLabel: "← Italian Riviera Discovery",
    ctaLabel: "Choose Your Cruise Date",
    checkoutReconnectLine: "Your Riviera discovery is almost booked.",
    heroSlides: [
      hero("santa-margherita", { width: 2560, height: 1707 }, true),
      hero("portofino-bay", { width: 2560, height: 1707 }),
      hero("savona-coast", { width: 2560, height: 1707 }),
    ],
    checkoutReconnectImageId: "santa-margherita",
    checkoutReconnectImageAlt:
      "Santa Margherita Ligure waterfront on the Italian Riviera",
  }),
  product({
    id: "savona-walking-tour",
    slug: "savona-walking-tour",
    name: "Savona Walking Tour",
    experienceName: "Savona Walking Tour Shore Excursion",
    shortName: "Savona Walking Tour",
    experienceTitleLines: ["Savona", "Walking Tour"],
    experienceSubheading:
      "Priamar, the old town and local flavour — the perfect shorter day ashore.",
    durationLabel: "Approximately 3 hours",
    priceAmount: 115,
    path: "/shore-excursions/savona-walking-tour",
    bookingPath: "/book/savona-walking-tour",
    successPath: "/book/savona-walking-tour/success",
    imageAlt: "Savona old town walking tour for cruise passengers",
    backLabel: "← Savona Walking Tour",
    ctaLabel: "Choose Your Cruise Date",
    checkoutReconnectLine: "Your Savona walk is almost booked.",
    heroSlides: [
      hero("savona-coast", { width: 2560, height: 1707 }, true),
      hero("camogli-waterfront", { width: 2560, height: 1707 }),
    ],
    checkoutReconnectImageId: "savona-coast",
    checkoutReconnectImageAlt: "Mediterranean waterfront near Savona cruise port",
  }),
  product({
    id: "ligurian-coast-experience",
    slug: "ligurian-coast-experience",
    name: "Ligurian Coast Experience",
    experienceName: "Ligurian Coast Experience Shore Excursion",
    shortName: "Ligurian Coast Experience",
    experienceTitleLines: ["Ligurian Coast", "Experience"],
    experienceSubheading:
      "Scenic coastal roads, colourful fishing villages and the calm pace of Liguria.",
    durationLabel: "Approximately 7–8 hours",
    priceAmount: 142,
    path: "/shore-excursions/ligurian-coast-experience",
    bookingPath: "/book/ligurian-coast-experience",
    successPath: "/book/ligurian-coast-experience/success",
    imageAlt: "Ligurian coast scenic shore excursion from Savona",
    backLabel: "← Ligurian Coast Experience",
    ctaLabel: "Choose Your Cruise Date",
    checkoutReconnectLine: "Your Ligurian coast day is almost booked.",
    heroSlides: [
      hero("camogli-waterfront", { width: 2560, height: 1707 }, true),
      hero("portofino-bay", { width: 2560, height: 1707 }),
      hero("santa-margherita", { width: 2560, height: 1707 }),
    ],
    checkoutReconnectImageId: "camogli-waterfront",
    checkoutReconnectImageAlt: "Camogli waterfront on the Ligurian coast",
  }),
] as const;

export function getBookableProduct(slugOrId: string): BookableProduct | undefined {
  const key = slugOrId.trim();
  return BOOKABLE_PRODUCTS.find((p) => p.slug === key || p.id === key);
}

export function getAllBookableSlugs(): string[] {
  return BOOKABLE_PRODUCTS.map((p) => p.slug);
}

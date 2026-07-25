/**
 * Server-controlled excursion catalogue for Checkout.
 * Browser-supplied excursionName / price are never authoritative.
 */

export type ExcursionProduct = {
  id: string;
  name: string;
  bookingPath: string;
  successPath: string;
  /** Authoritative EUR major units per guest */
  pricePerGuestEur: number;
};

export const EXCURSION_CATALOGUE: Readonly<Record<string, ExcursionProduct>> = {
  "genoa-highlights": {
    id: "genoa-highlights",
    name: "Genoa Highlights Shore Excursion",
    bookingPath: "/book/genoa-highlights",
    successPath: "/book/genoa-highlights/success",
    pricePerGuestEur: 136,
  },
  "portofino-santa-margherita": {
    id: "portofino-santa-margherita",
    name: "Portofino & Santa Margherita Shore Excursion",
    bookingPath: "/book/portofino-santa-margherita",
    successPath: "/book/portofino-santa-margherita/success",
    pricePerGuestEur: 154,
  },
  "italian-riviera-discovery": {
    id: "italian-riviera-discovery",
    name: "Italian Riviera Discovery Shore Excursion",
    bookingPath: "/book/italian-riviera-discovery",
    successPath: "/book/italian-riviera-discovery/success",
    pricePerGuestEur: 149,
  },
  "savona-walking-tour": {
    id: "savona-walking-tour",
    name: "Savona Walking Tour Shore Excursion",
    bookingPath: "/book/savona-walking-tour",
    successPath: "/book/savona-walking-tour/success",
    pricePerGuestEur: 105,
  },
  "ligurian-coast-experience": {
    id: "ligurian-coast-experience",
    name: "Ligurian Coast Experience Shore Excursion",
    bookingPath: "/book/ligurian-coast-experience",
    successPath: "/book/ligurian-coast-experience/success",
    pricePerGuestEur: 138,
  },
} as const;

export function getExcursionProduct(excursionId: string): ExcursionProduct | null {
  const id = excursionId.trim();
  return EXCURSION_CATALOGUE[id] ?? null;
}

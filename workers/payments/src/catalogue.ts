/**
 * Server-controlled excursion catalogue for Checkout.
 * Browser-supplied excursionName / price are never authoritative.
 *
 * Multi-currency: each product carries Stripe currency + major-unit price.
 * Never convert between currencies — use the selling-market face price.
 */

export type CatalogueCurrency = "eur" | "usd" | "gbp";

export type ExcursionProduct = {
  id: string;
  name: string;
  bookingPath: string;
  successPath: string;
  /** Authoritative major units per guest (same face price as source catalogue) */
  pricePerGuest: number;
  /** Stripe currency code */
  currency: CatalogueCurrency;
  /** @deprecated Prefer pricePerGuest — kept for transitional callers */
  pricePerGuestEur?: number;
};

export const EXCURSION_CATALOGUE: Readonly<Record<string, ExcursionProduct>> = {
  "genoa-highlights": {
    id: "genoa-highlights",
    name: "Genoa Highlights Shore Excursion",
    bookingPath: "/book/genoa-highlights",
    successPath: "/book/genoa-highlights/success",
    pricePerGuest: 148,
    pricePerGuestEur: 148,
    currency: "eur",
  },
  "portofino-santa-margherita": {
    id: "portofino-santa-margherita",
    name: "Portofino & Santa Margherita Shore Excursion",
    bookingPath: "/book/portofino-santa-margherita",
    successPath: "/book/portofino-santa-margherita/success",
    pricePerGuest: 168,
    pricePerGuestEur: 168,
    currency: "eur",
  },
  "italian-riviera-discovery": {
    id: "italian-riviera-discovery",
    name: "Italian Riviera Discovery Shore Excursion",
    bookingPath: "/book/italian-riviera-discovery",
    successPath: "/book/italian-riviera-discovery/success",
    pricePerGuest: 150,
    pricePerGuestEur: 150,
    currency: "eur",
  },
  "savona-walking-tour": {
    id: "savona-walking-tour",
    name: "Savona Walking Tour Shore Excursion",
    bookingPath: "/book/savona-walking-tour",
    successPath: "/book/savona-walking-tour/success",
    pricePerGuest: 115,
    pricePerGuestEur: 115,
    currency: "eur",
  },
  "ligurian-coast-experience": {
    id: "ligurian-coast-experience",
    name: "Ligurian Coast Experience Shore Excursion",
    bookingPath: "/book/ligurian-coast-experience",
    successPath: "/book/ligurian-coast-experience/success",
    pricePerGuest: 142,
    pricePerGuestEur: 142,
    currency: "eur",
  },
} as const;

export function getExcursionProduct(excursionId: string): ExcursionProduct | null {
  const id = excursionId.trim();
  return EXCURSION_CATALOGUE[id] ?? null;
}

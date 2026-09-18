/**
 * World 2.0 Destination Configuration — Savona reference implementation.
 * Future destinations: copy starter-template and replace this file first.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "savona",
  name: "Savona Shore Excursions",
  destination: "Savona",
  descriptor: "Shore Excursions",
  strapline: "Gateway to the Italian Riviera",
  domain: "savonashoreexcursions.com",
  url: "https://savonashoreexcursions.com",
  description:
    "The cruise passenger's guide to discovering the Italian Riviera from Savona — Genoa, Portofino, Santa Margherita Ligure, Savona Old Town and carefully selected shore excursions with honest independent advice.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "SV",
  pagesProject: "savona-shore-excursions",
  paymentsWorkerName: "savona-payments",
  d1DatabaseName: "savona-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@savonashoreexcursions.com",
    bookings: "bookings@savonashoreexcursions.com",
    privacy: "privacy@savonashoreexcursions.com",
  },
  legal: {
    tradingName: "Savona Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "savona",
    meetingPointLabel: "Savona Cruise Port",
    country: "Italy",
  },
  seo: {
    defaultKeywords: [
      "Savona Shore Excursions",
      "Shore Excursions from Savona",
      "Savona Cruise Excursions",
      "Savona Cruise Port Guide",
      "Portofino from Savona",
      "Genoa from Savona",
      "Italian Riviera Shore Excursions",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "Historic Cities",
    "Coastal Villages",
    "Food",
    "Scenic Drives",
    "Small Groups",
    "Family Friendly",
    "Luxury",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;

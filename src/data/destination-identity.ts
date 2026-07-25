/**
 * World 2.0 destination identity — Savona.
 */
export type LogoConcept = "anchor-arch" | "harbour-m";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

export const destinationIdentity = {
  destination: "Savona",
  descriptor: "Shore Excursions",
  /** Displayed as tracked uppercase in the wordmark. */
  strapline: "Gateway to the Italian Riviera",
  /** Accessible full brand name for screen readers / link labels */
  accessibleName: "Savona Shore Excursions",
  accent: "coastal" as const,
  logoConcept: "anchor-arch" as LogoConcept,
  iconStyle: "anchor-arch" as const,
} as const;

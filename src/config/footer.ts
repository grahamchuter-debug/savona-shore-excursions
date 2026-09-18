/**
 * Destination-specific footer link columns.
 * Structure is inherited from the template; only the hrefs/labels change per port.
 */

export type FooterLink = { href: string; label: string };

export type FooterColumns = {
  blurb: string;
  chooseTitle: string;
  choose: FooterLink[];
  planTitle: string;
  plan: FooterLink[];
  bookTitle: string;
  book: FooterLink[];
  /** Extra clause after company disclosure, e.g. "Port of Savona". */
  independenceClause: string;
};

export const footerColumns: FooterColumns = {
  blurb:
    "Helping cruise passengers discover Genoa, Portofino, Santa Margherita Ligure and Savona Old Town with honest independent advice for every day ashore.",
  chooseTitle: "Choose your Riviera day",
  choose: [
    { href: "/compare/genoa-or-portofino", label: "Genoa or Portofino?" },
    { href: "/compare/best-shore-excursions", label: "Best Savona excursions" },
    { href: "/guides/how-to-visit-portofino", label: "How to visit Portofino" },
    { href: "/wow-collection", label: "The Wow Collection" },
  ],
  planTitle: "Plan your port day",
  plan: [
    { href: "/cruise-planner", label: "Savona Cruise Planner" },
    { href: "/shore-excursions", label: "Shore Excursions" },
    { href: "/guides/how-far-is-genoa", label: "How far is Genoa?" },
    { href: "/guides/walking-from-port", label: "Walking from port" },
    { href: "/cruise-port-guide", label: "Savona Port Guide" },
  ],
  bookTitle: "Book & contact",
  book: [
    { href: "/shore-excursions/portofino-santa-margherita", label: "Portofino flagship" },
    { href: "/shore-excursions/italian-riviera-discovery", label: "Signature Experience" },
    { href: "/ship-schedules", label: "Cruise Ship Schedule" },
    { href: "/enquire", label: "Contact concierge" },
  ],
  independenceClause: "not affiliated with any cruise line or the Port of Savona.",
};

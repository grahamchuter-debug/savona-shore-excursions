export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "ligurian-coast",
    "Italian Riviera coastline — gateway experiences from Savona cruise port",
  ),
  ogDefault: img(
    "santa-margherita",
    "Santa Margherita Ligure and Italian Riviera shore excursions from Savona",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Savona Shore Excursions",
  },
  port: img("cruise-port", "Savona cruise port waterfront — gateway to the Italian Riviera"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Historic Genoa and Ligurian city streets from Savona"),
  coast: img("ligurian-coast", "Ligurian coast scenic drive from Savona"),
  walking: img("walking", "Walking Savona old town from the cruise terminal"),
  food: img("food", "Ligurian food and focaccia culture"),
  private: img("private", "Private Italian Riviera shore excursion from Savona"),
  photography: img("photography", "Photography viewpoints along the Italian Riviera"),
  wine: img("wine", "Ligurian wine and coastal dining"),
  compare: img("compare", "Comparing Savona shore excursion options"),
  port: img("cruise-port", "Savona cruise port terminal"),
  highlights: img("santa-margherita", "Italian Riviera highlights from Savona"),
  city: img("historic", "Historic centre exploring from Savona cruise port"),
  "hero-home": img("ligurian-coast", "Italian Riviera gateway hero image from Savona"),
  "santa-margherita": img("santa-margherita", "Santa Margherita Ligure waterfront"),
  camogli: img("camogli", "Camogli colourful harbour on the Ligurian coast"),
  "ligurian-coast": img("ligurian-coast", "Ligurian coastline toward Portofino"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "genoa-highlights": "historic",
  "portofino-santa-margherita": "ligurian-coast",
  "italian-riviera-discovery": "santa-margherita",
  "savona-walking-tour": "walking",
  "ligurian-coast-experience": "camogli",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("ligurian-coast");

const highlightImageKeys: Record<string, string> = {
  "savona-old-town": "walking",
  "genoa-from-savona": "historic",
  "portofino-from-savona": "ligurian-coast",
  "santa-margherita-ligure": "santa-margherita",
  "italian-riviera": "coast",
};

const comparisonImageKeys: Record<string, string> = {
  "genoa-or-portofino": "compare",
  "is-portofino-worth-it-from-savona": "ligurian-coast",
  "private-tour-vs-coach-tour": "private",
  "one-day-in-savona": "walking",
  "best-shore-excursions": "highlights",
  "best-first-time-riviera-day": "santa-margherita",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}

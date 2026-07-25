import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships call at Savona’s modern passenger terminal, a short walk or brief shuttle from the historic centre. For day trips toward Genoa and the Portofino promontory, plan roughly 45–75 minutes each way by road depending on traffic and exact meeting point. Confirm your ship’s all-aboard time — not merely the published departure — and aim to be back at the terminal 60–90 minutes early. Longer Riviera days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your cruise call so you are back in Savona with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "genoa-highlights",
    title: "Genoa Highlights",
    seoTitle: "Genoa Highlights Shore Excursion from Savona",
    metaDescription:
      "Discover Genoa from Savona on a cruise-timed shore excursion — historic lanes, harbour views and Ligurian atmosphere with a planned return to ship.",
    category: "Historic Cities",
    tagline:
      "Italy’s great maritime city — palazzi, harbour light and caruggi lanes within a carefully timed day from Savona.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    bestFor: "First-time visitors who want Genoa’s historic centre without rushing the return to Savona",
    overview:
      "Genoa Highlights takes you from Savona into one of the Mediterranean’s great port cities. Expect a guided introduction to the old town, harbour viewpoints and the layered history that shaped Liguria — paced for a cruise call rather than a city break.",
    body: [
      "After meeting at Savona cruise port, the coastal drive toward Genoa usually takes under an hour in good traffic. Your guide frames the day around what matters most in limited hours ashore.",
      "In the historic centre, narrow caruggi open onto grand piazzas and striped façades. Stops typically include harbour-facing viewpoints, a palace or cathedral exterior, and time to sense Genoa’s mercantile character.",
      "A lunch window is usually built in so you can try focaccia or a simple Ligurian meal. Exact sequencing flexes with traffic, ship timing and group pace.",
      "The return to Savona is planned with a deliberate buffer before all-aboard. This is a full cultural day — rewarding when your ship offers a long call.",
    ],
    highlights: [
      "Cruise-port pickup in Savona",
      "Guided introduction to historic Genoa",
      "Harbour and old-town viewpoints",
      "Time for a Ligurian lunch stop",
      "Return planned around your ship’s schedule",
    ],
    itinerary: [
      {
        title: "Meet in Savona",
        detail: "Meet your driver-guide at the cruise terminal and confirm the day’s timing against your all-aboard.",
      },
      {
        title: "Coastal transfer to Genoa",
        detail: "Scenic road transfer along the Ligurian coast into Genoa’s historic core.",
      },
      {
        title: "Historic Genoa walking highlights",
        detail: "Explore key old-town lanes, piazzas and harbour perspectives with commentary.",
      },
      {
        title: "Free time for lunch",
        detail: "Pause for focaccia, pesto or seafood at a local café or trattoria (own expense).",
      },
      {
        title: "Return to Savona",
        detail: "Drive back to the cruise port with a buffer before your ship’s all-aboard time.",
      },
    ],
    included: [
      "Port pickup and drop-off in Savona",
      "Air-conditioned transport",
      "English-speaking driver-guide",
      "Guided Genoa highlights orientation",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Lunch and personal purchases",
      "Museum or attraction entrance fees unless stated on your voucher",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — Genoa’s historic centre includes cobbles and slopes",
      "Carry a light layer; harbour breezes can feel cooler than inland streets",
      "Confirm whether any paid interiors are included before departure",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How far is Genoa from Savona cruise port?",
        answer:
          "By road it is typically around 45–60 minutes each way, depending on traffic and your exact drop-off point in the city.",
      },
      {
        question: "Is this suitable for a short port call?",
        answer:
          "It works best with a long day in port. If you have fewer than about seven usable hours ashore, consider the Savona Walking Tour instead.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Expect a moderate amount of walking on historic surfaces. Routes can often be adjusted for pace, but cobbles remain.",
      },
    ],
    relatedExcursionSlugs: [
      "italian-riviera-discovery",
      "ligurian-coast-experience",
      "savona-walking-tour",
    ],
    featured: true,
    priceEur: 136,
    bookable: true,
    bookingPath: "/book/genoa-highlights",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic streets, some slopes and cobbles",
    cruiseSuitability: "Best with 8+ hours in port",
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "portofino-santa-margherita",
    title: "Portofino & Santa Margherita",
    seoTitle: "Portofino & Santa Margherita Shore Excursion from Savona",
    metaDescription:
      "Visit Portofino and Santa Margherita Ligure from Savona on a cruise-timed Italian Riviera shore excursion with return-to-ship planning.",
    category: "Coastal Villages",
    tagline:
      "Two of the Riviera’s most photographed harbours — colourful piazzas, yacht basins and Ligurian light.",
    duration: "Approximately 8 hours",
    pace: "Relaxed",
    bestFor: "Cruise passengers who want the classic Portofino postcard day from Savona",
    overview:
      "Portofino & Santa Margherita is the flagship Riviera day from Savona: scenic coastal roads, free time in Santa Margherita Ligure, and the famous piazzetta of Portofino — sequenced so you still return with a sensible ship buffer.",
    body: [
      "From Savona you travel east along the Ligurian coast toward the Gulf of Tigullio. The landscape shifts quickly from working harbour to elegant seaside resorts.",
      "Santa Margherita Ligure offers a softer introduction — palm-lined promenades, gelaterias and a chance to pause for lunch before the final approach to Portofino.",
      "Portofino itself is compact. Time here is about atmosphere: the harbour horseshoe, pastel façades, and the climb toward Castello Brown viewpoints when legs and timing allow.",
      "Seasonal access can affect whether the last stretch is by road or short boat connection. Your voucher notes the day’s logistics; either way, the return to Savona remains the planning priority.",
    ],
    highlights: [
      "Scenic drive along the Italian Riviera",
      "Free time in Santa Margherita Ligure",
      "Portofino harbour and piazzetta",
      "Photo stops along the Ligurian coast",
      "Cruise-timed return to Savona",
    ],
    itinerary: [
      {
        title: "Savona cruise port departure",
        detail: "Meet at the terminal and depart east along the Ligurian coastline.",
      },
      {
        title: "Santa Margherita Ligure",
        detail: "Explore the waterfront, shops and cafés; enjoy lunch at your own pace.",
      },
      {
        title: "Portofino",
        detail: "Arrive in Portofino for harbour views, the piazzetta and optional viewpoint walks.",
      },
      {
        title: "Return transfer",
        detail: "Rejoin your vehicle for the timed return to Savona cruise port.",
      },
    ],
    included: [
      "Pickup and drop-off at Savona cruise port",
      "Private or small-group vehicle as confirmed on voucher",
      "English-speaking driver",
      "Scenic Riviera routing",
      "Return planned around all-aboard",
    ],
    notIncluded: [
      "Lunch and drinks",
      "Boat ferry fees if required by seasonal access",
      "Castle or church entrance fees",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Portofino is compact but can be crowded in peak season — arrive with patience",
      "Comfortable shoes help if you climb toward Castello Brown",
      "Keep valuables minimal in busy harbour areas",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Can I visit Portofino from Savona in one cruise day?",
        answer:
          "Yes, when your ship offers a full day in port. Road time is significant, so this excursion is designed specifically around cruise schedules.",
      },
      {
        question: "Is a boat ride to Portofino always included?",
        answer:
          "Not always. Seasonal ferry operations and weather can mean a road approach instead. Your confirmation explains the day’s access plan.",
      },
      {
        question: "How strenuous is the day?",
        answer:
          "Walking is generally easy to moderate around the harbours. Optional viewpoint climbs add steps and slopes.",
      },
    ],
    relatedExcursionSlugs: [
      "italian-riviera-discovery",
      "ligurian-coast-experience",
      "genoa-highlights",
    ],
    featured: true,
    priceEur: 154,
    bookable: true,
    bookingPath: "/book/portofino-santa-margherita",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy to moderate — harbour strolling; optional climbs",
    cruiseSuitability: "Best with 8+ hours in port",
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "italian-riviera-discovery",
    title: "Italian Riviera Discovery",
    seoTitle: "Italian Riviera Discovery Shore Excursion from Savona",
    metaDescription:
      "Discover the Italian Riviera from Savona with a scenic coastal day covering Ligurian villages, viewpoints and cruise-timed returns.",
    category: "Scenic Drives",
    tagline:
      "A broader Ligurian day — coastal roads, village colour and time to breathe in the Riviera.",
    duration: "Approximately 8–9 hours",
    pace: "Moderate",
    bestFor: "Travellers who want more than one village and a scenic overview of the Riviera",
    overview:
      "Italian Riviera Discovery is designed for passengers who want a wider sense of Liguria: scenic driving, carefully chosen coastal stops and enough free time to enjoy the atmosphere without turning the day into a checklist.",
    body: [
      "Leaving Savona, you follow the coast east through changing views of cliffs, harbours and olive-clad hillsides.",
      "Stops may include a combination of Santa Margherita Ligure, Camogli or similar Riviera towns depending on traffic, season and ship timing — always with the return buffer protected.",
      "This is not an attempt to see everything. It is a curated discovery day that favours quality of light, pace and place over covering every famous name.",
      "Expect photo stops, a lunch window and a calm return to Savona before all-aboard.",
    ],
    highlights: [
      "Scenic Ligurian coastal driving",
      "Two or more Riviera village stops when timing allows",
      "Photo viewpoints above the Mediterranean",
      "Flexible pacing for cruise passengers",
      "Return-to-ship planning from Savona",
    ],
    itinerary: [
      {
        title: "Departure from Savona",
        detail: "Meet at the cruise port and begin the eastbound Riviera drive.",
      },
      {
        title: "Coastal village exploration",
        detail: "Visit selected Ligurian harbours and promenades with guided orientation.",
      },
      {
        title: "Lunch and free time",
        detail: "Pause for a local meal and independent browsing.",
      },
      {
        title: "Viewpoint and return",
        detail: "Optional scenic overlook before the timed return to Savona.",
      },
    ],
    included: [
      "Savona port pickup and return",
      "Air-conditioned transport",
      "English-speaking driver-guide",
      "Scenic routing and village stops",
      "Ship-aware scheduling",
    ],
    notIncluded: [
      "Meals and drinks",
      "Entrance fees",
      "Boat tickets if optionally added",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring a camera — coastal light is the star of this day",
      "Ask your driver which village mix best fits your ship’s hours",
      "A longer call makes this itinerary more rewarding",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Portofino always included?",
        answer:
          "Not on every departure. Some days emphasise a wider coastal mix; others include Portofino when timing and access allow. Check your confirmation.",
      },
      {
        question: "How does this differ from Portofino & Santa Margherita?",
        answer:
          "The Portofino-focused excursion concentrates on those two harbours. Discovery spreads time across a broader Riviera impression.",
      },
    ],
    relatedExcursionSlugs: [
      "portofino-santa-margherita",
      "ligurian-coast-experience",
      "genoa-highlights",
    ],
    featured: true,
    priceEur: 149,
    bookable: true,
    bookingPath: "/book/italian-riviera-discovery",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — village walking and viewpoint paths",
    cruiseSuitability: "Ideal for long port calls (8–9+ hours)",
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "savona-walking-tour",
    title: "Savona Walking Tour",
    seoTitle: "Savona Walking Tour — Shore Excursion from the Cruise Port",
    metaDescription:
      "Explore Savona Old Town on a cruise-friendly walking tour — Priamar fortress views, historic streets and local flavour close to the terminal.",
    category: "Walking Tours",
    tagline:
      "Stay close to port and discover Savona’s old town, fortress silhouette and Ligurian everyday life.",
    duration: "Approximately 3 hours",
    pace: "Relaxed",
    bestFor: "Short calls, first-timers, or anyone who prefers not to travel far from the ship",
    overview:
      "The Savona Walking Tour is the calm, high-value choice when you want atmosphere without a long road day. Meet near the terminal, walk the historic centre, and still keep generous time for the ship.",
    body: [
      "Savona rewards slow looking. From the passenger terminal you are quickly among piazzas, porticoes and the looming Priamar fortress.",
      "A local guide brings the maritime story to life — trade routes, cathedral façades and the everyday markets that still feed the city.",
      "Tastings may feature olive oil, focaccia or sweets depending on the confirmed itinerary. The focus is flavour and place, not a rushed checklist.",
      "Because you remain near port, this tour suits shorter calls, families and guests who want a premium morning ashore with minimal transfer risk.",
    ],
    highlights: [
      "Easy meeting point near Savona cruise terminal",
      "Old Town and Priamar fortress orientation",
      "Local food flavours when included on voucher",
      "Short duration with a generous ship buffer",
      "Ideal independent alternative to long Riviera drives",
    ],
    itinerary: [
      {
        title: "Meet by the port",
        detail: "Join your guide a short walk from the cruise terminal.",
      },
      {
        title: "Historic Savona",
        detail: "Walk key lanes, piazzas and fortress viewpoints with commentary.",
      },
      {
        title: "Local flavour",
        detail: "Sample Ligurian specialities when included, or pause for coffee.",
      },
      {
        title: "Return toward the terminal",
        detail: "Finish with clear directions back to your ship.",
      },
    ],
    included: [
      "English-speaking walking guide",
      "Old Town route designed for cruise timing",
      "Tastings when specified on your voucher",
      "Clear return guidance to the terminal",
    ],
    notIncluded: [
      "Additional food and drinks beyond any listed tastings",
      "Museum tickets",
      "Transport beyond walking distance",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Perfect if your ship has a shorter stay in Savona",
      "Combine with free afternoon time in the old town if hours allow",
      "Wear walking shoes for stone paving",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How far is the old town from the cruise terminal?",
        answer:
          "In most cases it is a short walk or brief shuttle. Your guide meets you with clear instructions on the voucher.",
      },
      {
        question: "Is this better than going to Portofino?",
        answer:
          "If you have limited hours, prefer less driving, or want a relaxed introduction to Liguria, yes. Portofino needs a longer call.",
      },
    ],
    relatedExcursionSlugs: [
      "genoa-highlights",
      "ligurian-coast-experience",
      "portofino-santa-margherita",
    ],
    featured: true,
    priceEur: 105,
    bookable: true,
    bookingPath: "/book/savona-walking-tour",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy — mostly flat urban walking",
    cruiseSuitability: "Excellent for short or long calls",
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "ligurian-coast-experience",
    title: "Ligurian Coast Experience",
    seoTitle: "Ligurian Coast Experience Shore Excursion from Savona",
    metaDescription:
      "Enjoy a Ligurian coast shore excursion from Savona — scenic drives, colourful fishing villages and a calm cruise-day pace.",
    category: "Small Groups",
    tagline:
      "Colourful harbour villages, coastal roads and the unhurried rhythm of Liguria.",
    duration: "Approximately 7–8 hours",
    pace: "Relaxed",
    bestFor: "Guests who want scenic villages and sea views without a hyper-famous checklist",
    overview:
      "The Ligurian Coast Experience favours atmosphere over icons: fishing harbours painted in pinks and yellows, cliff-edge roads and time to enjoy a slow lunch — still engineered around your Savona cruise call.",
    body: [
      "Many of Liguria’s most photogenic villages sit between Genoa and the Portofino promontory. This day samples that coastline with a small-group feel.",
      "Camogli is a frequent highlight — tall painted houses above a working harbour — alongside other stops chosen for access and light.",
      "You travel by vehicle with photo pauses and guided orientation, then free time to wander or eat.",
      "Compared with a Portofino-first itinerary, this experience is often quieter and more spacious, while still delivering that unmistakable Riviera colour.",
    ],
    highlights: [
      "Scenic Ligurian coastal driving",
      "Colourful harbour village time",
      "Small-group pacing",
      "Lunch stop overlooking the sea or harbour",
      "Return to Savona with ship buffer",
    ],
    itinerary: [
      {
        title: "Leave Savona cruise port",
        detail: "Board your vehicle and follow the coast toward selected Ligurian villages.",
      },
      {
        title: "Harbour village visit",
        detail: "Walk a colourful waterfront such as Camogli with time for photos.",
      },
      {
        title: "Lunch and free time",
        detail: "Enjoy a relaxed meal and independent exploration.",
      },
      {
        title: "Scenic return",
        detail: "Coastal drive back to Savona ahead of all-aboard.",
      },
    ],
    included: [
      "Round-trip transport from Savona cruise port",
      "English-speaking driver-guide",
      "Village orientation",
      "Cruise-aware timing",
    ],
    notIncluded: [
      "Lunch and personal shopping",
      "Entrance fees",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Ideal if you have already seen Portofino or prefer quieter harbours",
      "Bring sunglasses — reflected harbour light is strong",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Will we visit Portofino?",
        answer:
          "This itinerary focuses on Ligurian coast character rather than Portofino specifically. Choose Portofino & Santa Margherita if that harbour is your priority.",
      },
      {
        question: "Is this a private tour?",
        answer:
          "Departures may operate as private or small-group depending on booking. Your confirmation states the vehicle arrangement.",
      },
    ],
    relatedExcursionSlugs: [
      "portofino-santa-margherita",
      "italian-riviera-discovery",
      "savona-walking-tour",
    ],
    featured: true,
    priceEur: 138,
    bookable: true,
    bookingPath: "/book/ligurian-coast-experience",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy to moderate — harbour and village walking",
    cruiseSuitability: "Best with 7–8+ hours in port",
    supplier: SEG_SUPPLIER,
  },
];

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

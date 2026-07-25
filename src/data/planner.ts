import { SIGNATURE_EXPERIENCE_PATH, signatureRivieraExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Savona explorer",
    description: "A low-risk city day using walking, taxis and your own return buffer.",
  },
  {
    id: "genoa",
    label: "First-time Genoa visitor",
    description: "A long guided day for passengers with enough port time for Liguria's great maritime city.",
  },
  {
    id: "portofino",
    label: "Coastal photography traveller",
    description: "A full-day road journey to Portofino, Santa Margherita and Riviera harbours.",
  },
  {
    id: "riviera",
    label: "Scenic Riviera traveller",
    description: "A curated coastal drive with villages, viewpoints and Ligurian food stops.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "savona", label: "Savona Old Town" },
  { id: "genoa", label: "Genoa Highlights" },
  { id: "portofino", label: "Portofino & coast" },
  { id: "riviera", label: "Italian Riviera drive" },
  { id: "food", label: "Food & wine" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "genoa" | "portofino" | "riviera";

export const SAVONA_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Savona Old Town",
    summary:
      "The most flexible choice: walk from the terminal to Priamar, the cathedral, Via Paleocapa and the harbour promenade.",
    minimumHours: 4,
    links: [
      {
        label: "Walking from Savona Port",
        href: "/guides/walking-from-port",
        why: "Walking route, focaccia stops and return-to-ship timing.",
      },
      {
        label: "Savona Walking Tour",
        href: "/shore-excursions/savona-walking-tour",
        why: "Guided context without committing to a long coastal road day.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Walk from Palacrociere Savona toward Priamar and the waterfront." },
      { time: "Morning", text: "Priamar exterior, cathedral quarter and Via Paleocapa before coach groups peak." },
      { time: "Midday", text: "Focaccia or seafood lunch near the harbour or old town." },
      { time: "Afternoon", text: "Promenade walk and last-minute shops before heading back to the terminal." },
    ],
  },
  genoa: {
    headline: "Genoa Highlights Full Day",
    summary:
      "Liguria's maritime capital when your call is long enough for caruggi, palazzi and a planned return to Savona.",
    minimumHours: 8,
    links: [
      {
        label: "Genoa Highlights",
        href: "/shore-excursions/genoa-highlights",
        why: "Cruise-timed transport into historic Genoa with return to Savona.",
      },
      {
        label: "Genoa or Portofino?",
        href: "/compare/genoa-or-portofino",
        why: "Compare urban history with coastal glamour before booking.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the organised excursion at the confirmed Savona terminal point." },
      { time: "Morning", text: "Coastal transfer to Genoa and guided introduction to the historic centre." },
      { time: "Midday", text: "Old-town lanes, harbour viewpoints and a Ligurian lunch window." },
      { time: "Afternoon", text: "Final free time if the schedule allows, then direct return to Savona." },
    ],
  },
  portofino: {
    headline: "Portofino & Santa Margherita",
    summary:
      "Choose Portofino for harbour colour, coastal paths and the Riviera's most photographed setting.",
    minimumHours: 8,
    links: [
      {
        label: "Portofino & Santa Margherita",
        href: "/shore-excursions/portofino-santa-margherita",
        why: "Classic Riviera day with cruise-timed return from Savona.",
      },
      {
        label: "Is Portofino Worth It?",
        href: "/compare/is-portofino-worth-it-from-savona",
        why: "Candid verdict before you commit to the road time.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the guide and leave Savona before coastal traffic builds." },
      { time: "Morning", text: "Scenic drive toward Santa Margherita or Portofino with a first photo stop." },
      { time: "Midday", text: "Harbour free time, promenade walk and an unhurried Ligurian lunch." },
      { time: "Afternoon", text: "Second village or viewpoint, then return by the operator's buffered route." },
    ],
  },
  riviera: {
    headline: "Italian Riviera Discovery",
    summary:
      "A coastal route through villages and viewpoints when you want breadth rather than one famous harbour alone.",
    minimumHours: 8,
    links: [
      {
        label: "Italian Riviera Discovery",
        href: "/shore-excursions/italian-riviera-discovery",
        why: "Curated coastal stops with cruise-port return planning.",
      },
      {
        label: "Ligurian Coast Experience",
        href: "/shore-excursions/ligurian-coast-experience",
        why: "Food and scenery with smaller-group pacing.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the transfer; confirm the day's routing against your all-aboard time." },
      { time: "Morning", text: "Coastal drive with a village or viewpoint stop east or west of Savona." },
      { time: "Midday", text: "Focaccia or seafood lunch at a planned coastal pause." },
      { time: "Afternoon", text: "Final photography stop, then direct return to Savona with contingency." },
    ],
  },
};

function usableHours(input: PlannerInput): number {
  if (!input.arrivalTime || !input.departureTime) return 7.5;
  const [arrivalHour, arrivalMinute] = input.arrivalTime.split(":").map(Number);
  const [departureHour, departureMinute] = input.departureTime.split(":").map(Number);
  const elapsed = departureHour * 60 + departureMinute - arrivalHour * 60 - arrivalMinute;
  return Math.max(0, elapsed / 60 - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("savona") ||
    hours < 8
  ) {
    return "independent";
  }
  if (interests.includes("portofino") || interests.includes("photography")) return "portofino";
  if (interests.includes("riviera") || interests.includes("coast")) return "riviera";
  if (interests.includes("genoa") && hours >= 8) return "genoa";
  return hours >= 8 ? "portofino" : "independent";
}

export function generateSavonaPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = SAVONA_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureRivieraExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Riviera concept — in preparation and not bookable.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend, so choose Savona instead.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Savona Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Savona Ship Schedule",
        href: "/ship-schedules/savona",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare the Riviera",
        href: "/compare",
        why: "Review honest trade-offs before booking a long coastal day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Savona terminal 60–90 minutes before all-aboard; Genoa and Portofino days require additional coastal traffic contingency.",
      },
    ],
  };
}

/** @deprecated use generateSavonaPlan */
export const MALAGA_DAY_PLANS = SAVONA_DAY_PLANS;
/** @deprecated use generateSavonaPlan */
export const generateMalagaPlan = generateSavonaPlan;

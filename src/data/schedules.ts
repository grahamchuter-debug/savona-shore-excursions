import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import savonaSchedule from "./imported-schedules/savona.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Savona cruise ship schedules?",
    answer:
      "These sample calls support planning and are updated from published information where available. Times, berths and even calls can change, so confirm with your cruise line before booking.",
  },
  {
    question: "Where do cruise ships berth in Savona?",
    answer:
      "Ships use Savona’s passenger terminal complex. Walking time into the old town is usually short; always follow terminal signage on the day.",
  },
  {
    question: "Is a Savona call long enough for Portofino?",
    answer:
      "A full day in port can support a cruise-timed Portofino and Santa Margherita excursion. Shorter calls are better suited to Savona walking or a nearer coastal option.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Allow 60–90 minutes buffer when returning from Genoa or the Portofino coast",
  "Book popular Riviera days early in peak season",
  "Keep a lighter Plan B (Savona Old Town) if your call is shortened",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "savona",
    name: "Savona",
    country: "Italy",
    seoTitle: "Savona Cruise Ship Schedule — Italian Riviera Port Calls",
    metaDescription:
      "Savona cruise ship schedule for planning Genoa, Portofino and Ligurian coast shore excursions from the Gateway to the Italian Riviera.",
    intro:
      "Savona is a practical Riviera gateway — walkable old town beside the terminal, with full-day routes to Genoa and the Portofino promontory.",
    description:
      "Where Liguria begins for many Mediterranean itineraries — stay local or reach the Italian Riviera’s most famous harbours.",
    scheduleOverview:
      "Savona welcomes year-round traffic with particularly busy spring and autumn Mediterranean seasons.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  savona: savonaSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}

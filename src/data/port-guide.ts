import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Savona Cruise Port Guide",
  subtitle:
    "Terminal access, walking times, old town, Ligurian food, transport toward Genoa and Portofino, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Palacrociere Savona",
      quay: "Modern passenger terminal on the western harbour, beside the historic centre",
      usedBy: "Most cruise ships calling at Savona, including Costa and other Mediterranean itineraries",
      cityAccess:
        "Approximately 5–15 minutes on foot to Priamar, the cathedral and Via Paleocapa; taxis available at peak turnaround",
    },
    {
      name: "Inner harbour berths",
      quay: "Occasional alternative positions closer to the marina and waterfront promenade",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Often under 10 minutes on foot to the old-town core and waterfront cafés",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Savona",
      paragraphs: [
        "Most ships use Palacrociere Savona, the purpose-built cruise terminal on the city's western waterfront. Unlike sprawling mega-ports, Savona places the historic centre within walking distance of many berths.",
        "Check the ship's daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth; many passengers walk directly into town.",
        "Savona is an excellent base for a city day on foot. Genoa, Portofino and the wider Italian Riviera are separate full-day journeys requiring road time and different timing.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the main terminal, follow signs toward Priamar fortress and the waterfront promenade. The cathedral and Via Paleocapa lie a short walk inland.",
        "Allow 5–15 minutes to reach the old-town core in normal conditions. The route is mostly level, though historic lanes include cobbles and gentle slopes.",
        "The harbour promenade is useful at the end of the day because it keeps you oriented toward the terminal while you unwind with a coffee or gelato.",
      ],
    },
    {
      heading: "Savona Old Town highlights",
      paragraphs: [
        "Priamar fortress dominates the waterfront — a sixteenth-century stronghold with views across the port and back toward your ship.",
        "The Cattedrale dell'Assunta anchors the historic centre. Allow time for surrounding piazzas rather than a single exterior photograph.",
        "Via Paleocapa and the lane network behind it offer shops, focaccia counters and quieter corners away from the main coach routes.",
      ],
    },
    {
      heading: "Food and Ligurian flavour",
      paragraphs: [
        "Focaccia — especially the thin, olive-oil-rich style — appears throughout Savona. Farinata, chickpea pancakes cooked in copper pans, is another local staple worth trying.",
        "Seafood trattorie line the harbour and side streets. Lunch need not be elaborate: a slice of focaccia and a glass of local white wine can anchor a short independent day.",
        "If your excursion includes Recco or coastal villages, cheese focaccia there is a regional speciality — but keep timing aligned with your return plan.",
      ],
    },
    {
      heading: "Transport beyond Savona",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver Palacrociere Savona or your ship name for the return — 'the port' alone is ambiguous.",
        "Regional trains connect Savona with Genoa along the coast. Public transport can work for confident independent travellers but timetables rarely suit tight port windows as well as organised excursions.",
        "Genoa is typically 45–60 minutes by road each way; Portofino often 60–75 minutes with seasonal traffic. Riviera days need operators who plan backwards from all-aboard, not map-app optimism.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start at Priamar and the waterfront before coach groups concentrate. Continue through the cathedral quarter and Via Paleocapa for a mid-morning browse.",
        "Take a proper Ligurian lunch near the centre, then spend the afternoon on the promenade or revisiting favourite lanes without another long transfer.",
        "Keep the final hour ashore close to the harbour so an unexpected queue does not threaten all-aboard.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm all-aboard time — earlier than published departure. For a Savona city day, reach the terminal 60–90 minutes before all-aboard.",
        "For Genoa, Portofino or Riviera drives, the operator should plan with motorway and coastal traffic contingency. A best-case journey time is not an adequate return plan.",
        "Independent travellers are responsible for reaching the ship. If a long coastal trip does not leave a conservative margin, choose Savona itself instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Savona from the cruise terminal?",
      answer:
        "Yes. Most passengers reach Priamar and the old town in roughly 5–15 minutes on foot from Palacrociere Savona.",
    },
    {
      question: "What can I see close to Savona port?",
      answer:
        "Priamar fortress, the cathedral, Via Paleocapa, the harbour promenade and focaccia shops are all within a compact walking area.",
    },
    {
      question: "Do I need transport for Savona Old Town?",
      answer:
        "Usually not. It is walkable from the terminal, though cobbles and gentle slopes may suit comfortable footwear.",
    },
    {
      question: "Is Portofino an easy independent trip from the port?",
      answer:
        "Rarely on a cruise day. Road time, parking and return risk make an organised excursion the more realistic approach.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger road contingency for Genoa or Portofino.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;

import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Savona?",
    answer:
      "Most ships use Palacrociere Savona, the modern passenger terminal on the western waterfront beside the historic centre. Berths can vary — check your ship's information on arrival.",
  },
  {
    question: "How far is Savona cruise port from the old town?",
    answer:
      "Priamar, the cathedral and Via Paleocapa are roughly 5–15 minutes on foot from the main terminal for most passengers.",
  },
  {
    question: "Can I explore Savona independently?",
    answer:
      "Yes. The old town is compact and Priamar, the cathedral, harbour promenade and focaccia shops fit into one well-paced walking day.",
  },
  {
    question: "What is the best independent Savona itinerary?",
    answer:
      "Walk from the terminal to Priamar and the waterfront, explore the cathedral quarter and Via Paleocapa, lunch on focaccia or seafood, then return via the harbour promenade with a 60–90 minute buffer.",
  },
  {
    question: "How far is Genoa from Savona cruise port?",
    answer:
      "Genoa is about 45 km west of Savona. Road transfers typically take 45–60 minutes each way depending on traffic.",
  },
  {
    question: "Can I visit Genoa and Savona city in one port day?",
    answer:
      "Only on an exceptionally long call — and even then a dedicated Genoa excursion is cleaner. Do not sacrifice your return buffer for a rushed old-town stop.",
  },
  {
    question: "How far is Portofino from Savona?",
    answer:
      "Portofino lies east along the coast — roughly 80–90 km by road. Transfers commonly take 60–75 minutes each way, longer in peak traffic.",
  },
  {
    question: "Is Portofino or Genoa better for a first visit?",
    answer:
      "Portofino for coastal glamour and harbour photography; Genoa for palazzi, caruggi and maritime history. See our comparison guides for a fuller trade-off.",
  },
  {
    question: "Is Portofino worth it from Savona?",
    answer:
      "On a long port call, yes for passengers who prioritise the Riviera's most famous harbour and accept significant road time. On shorter calls, Savona itself is the smarter choice.",
  },
  {
    question: "Can cruise passengers visit Portofino safely on a port day?",
    answer:
      "Yes with organised transport and conservative return timing. Independent travellers face parking limits and traffic risk — excursions exist partly to manage that.",
  },
  {
    question: "What happens if coastal roads are congested?",
    answer:
      "Journey times lengthen. Reputable operators build contingency; independent travellers bear the risk. Always plan backwards from all-aboard.",
  },
  {
    question: "Is Santa Margherita Ligure included on Portofino tours?",
    answer:
      "Many Savona excursions combine both towns on one Riviera day. Confirm the published itinerary and free time at each stop.",
  },
  {
    question: "What food should I try in Savona?",
    answer:
      "Look for focaccia, farinata, Ligurian seafood, pesto and local white wine. Recco's cheese focaccia appears on some coastal routes.",
  },
  {
    question: "Can I combine a food focus with Savona sightseeing?",
    answer:
      "Yes. The old town and harbour are close together — a focaccia lunch anchors an independent day without long transfers.",
  },
  {
    question: "Should I book through the cruise line or independently?",
    answer:
      "Ship excursions offer the clearest protection if a tour is delayed. Reputable independent operators may offer smaller groups — check port-day experience, cancellation terms and return guarantee.",
  },
  {
    question: "How much return-to-ship buffer should I allow?",
    answer:
      "For Savona city, aim to be at the terminal 60–90 minutes before all-aboard. For Genoa or Portofino, build the route backwards with additional coastal traffic contingency.",
  },
  {
    question: "Are Savona shore excursions accessible?",
    answer:
      "Central Savona and the waterfront have accessible sections, but old-town paving and slopes need thought. Genoa and Portofino involve cobbles and gradients. Discuss exact needs before booking.",
  },
  {
    question: "What currency and language are used in Savona?",
    answer:
      "Italy uses the euro. Italian is the local language; English is widely understood in visitor areas. Cards are common — carry some cash for small cafés and taxis.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}

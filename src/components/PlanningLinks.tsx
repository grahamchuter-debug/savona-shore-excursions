import Link from "next/link";

const LINKS = [
  { href: "/cruise-port-guide", label: "Savona Cruise Port Guide" },
  { href: "/cruise-planner", label: "Savona Cruise Planner" },
  { href: "/ship-schedules/savona", label: "Ship Schedules" },
  { href: "/compare", label: "Compare the Riviera" },
  { href: "/wow-collection", label: "The Wow Collection" },
];

export function PlanningLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="btn-secondary text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
}

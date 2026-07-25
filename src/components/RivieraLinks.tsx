import Link from "next/link";

const RIVIERA_LINKS = [
  {
    title: "Genoa or Portofino?",
    description:
      "Compare Liguria's two headline days — urban history versus coastal harbour glamour from Savona.",
    href: "/compare/genoa-or-portofino",
  },
  {
    title: "Is Portofino worth it?",
    description:
      "Honest guidance on road time, crowds, scenery and who should choose another day.",
    href: "/compare/is-portofino-worth-it-from-savona",
  },
  {
    title: "Walking from Savona port",
    description:
      "Priamar, cathedral, old-town lanes and harbour with a realistic return-to-ship plan.",
    href: "/guides/walking-from-port",
  },
  {
    title: "Compare Riviera experiences",
    description:
      "Choose between Genoa, Portofino, Savona and scenic drives with candid trade-offs.",
    href: "/compare",
  },
  {
    title: "Private or coach touring",
    description:
      "Compare private versus coach pacing and short-port realism before you book a coastal day.",
    href: "/compare/private-tour-vs-coach-tour",
  },
  {
    title: "Savona cruise schedules",
    description:
      "Check your published port hours before committing to Genoa or Portofino.",
    href: "/ship-schedules/savona",
  },
];

export function RivieraLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Italian Riviera planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in Savona or travel the coast.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RIVIERA_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Savona planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}

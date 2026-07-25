import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do You Need a Shore Excursion in Savona?</h2>
        <p className="section-subtitle">
          The honest answer: you can enjoy Savona independently. An excursion becomes worthwhile when
          you want to reach Genoa, Portofino and the wider Italian Riviera within a cruise day.
        </p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              You can explore Savona independently — and many passengers do
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Savona&apos;s old town is compact and close to the terminal, making an independent day
              realistic for most passengers:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Priamar fortress and waterfront
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Cathedral and Via Paleocapa
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Focaccia shops and harbour cafés
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Promenade back to the terminal
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              The wider Riviera needs more planning
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Genoa and Portofino are too far from the terminal for casual exploration.
              Organised transport and disciplined timing matter for:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Genoa</strong> — palazzi, caruggi and a full day of urban walking
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Portofino</strong> — coastal roads, harbour crowds and photography time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Santa Margherita Ligure</strong> — elegant promenade often paired with Portofino
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Scenic coastal drives</strong> — best reached with a realistic route and return buffer
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare/genoa-or-portofino" className="btn-secondary text-sm">
            Genoa or Portofino?
          </Link>
          <Link href="/guides/walking-from-port" className="btn-secondary text-sm">
            Walking from port
          </Link>
          <Link href="/guides/savona-old-town" className="btn-secondary text-sm">
            Savona Old Town guide
          </Link>
        </div>
      </div>
    </section>
  );
}

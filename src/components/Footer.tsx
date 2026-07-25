import Link from "next/link";
import { SITE } from "@/lib/site";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { DestinationLogo } from "@/components/DestinationLogo";
import { businessIdentity } from "@/lib/legal/business-identity";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-maple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-coastal-900"
              aria-label={`${SITE.name} — home`}
            >
              <DestinationLogo variant="compact" tone="on-dark" decorative />
            </Link>
            <p className="mt-4 text-sm text-coastal-100/70 leading-relaxed">
              Helping cruise passengers discover Genoa, Portofino, Santa Margherita Ligure and Savona
              Old Town with honest independent advice for every day ashore.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Choose your Riviera day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/compare/genoa-or-portofino" className="hover:text-white">Genoa or Portofino?</Link></li>
              <li><Link href="/compare/best-shore-excursions" className="hover:text-white">Best Savona excursions</Link></li>
              <li><Link href="/guides/how-to-visit-portofino" className="hover:text-white">How to visit Portofino</Link></li>
              <li><Link href="/wow-collection" className="hover:text-white">The Wow Collection</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your port day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/cruise-planner" className="hover:text-white">Savona Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/guides/how-far-is-genoa" className="hover:text-white">How far is Genoa?</Link></li>
              <li><Link href="/guides/walking-from-port" className="hover:text-white">Walking from port</Link></li>
              <li><Link href="/cruise-port-guide" className="hover:text-white">Savona Port Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Book & contact</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/shore-excursions/portofino-santa-margherita" className="hover:text-white">Portofino flagship</Link></li>
              <li><Link href={SIGNATURE_EXPERIENCE_PATH} className="hover:text-white">Signature Experience</Link></li>
              <li><Link href="/ship-schedules" className="hover:text-white">Cruise Ship Schedule</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Contact concierge</Link></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <DestinationLogo variant="mark" tone="on-dark" className="opacity-90" decorative />
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
          <Link href="/booking-conditions" className="hover:text-white">Booking Conditions</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. {businessIdentity.companyDisclosure} Independent operator —
        not affiliated with any cruise line or the Port of Savona.
      </div>
    </footer>
  );
}

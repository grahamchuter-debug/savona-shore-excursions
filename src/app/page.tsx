import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourDay } from "@/components/ChooseYourDay";
import { SpiritOfPlace } from "@/components/SpiritOfPlace";
import { WowCollectionFeature } from "@/components/WowCollectionFeature";
import { SignatureExperienceFeature } from "@/components/SignatureExperienceFeature";
import { EditorsCollection } from "@/components/EditorsCollection";
import { HonestAdvice } from "@/components/HonestAdvice";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs, homepageTagline } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { DestinationQuickLinks } from "@/components/DestinationQuickLinks";
import { CruiseHeroTrust } from "@/components/CruiseHeroTrust";
import { YourDayAshore } from "@/components/YourDayAshore";
import { formatMajorMoney, SITE_CURRENCY } from "@/lib/commerce/currency";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Savona Shore Excursions | Gateway to the Italian Riviera",
  description:
    "Discover the Italian Riviera from Savona — Genoa, Portofino, Santa Margherita Ligure and carefully selected shore excursions designed around your cruise schedule.",
  path: "/",
  keywords: [
    "Savona Shore Excursions",
    "Shore Excursions from Savona",
    "Savona Cruise Excursions",
    "Savona Cruise Port Guide",
    "Portofino from Savona",
    "Genoa from Savona",
    "Italian Riviera Shore Excursions",
  ],
});

const SITE_DESCRIPTION =
  "The gateway to the Italian Riviera — carefully selected Savona shore excursions, independent cruise advice and unforgettable experiences across Genoa, Portofino, Santa Margherita Ligure and the Ligurian coast.";

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 5);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Savona — Gateway to the Italian Riviera",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100 animate-fade-up">
            Your gateway to Portofino, Genoa and the Ligurian Coast
          </p>
          <h1 className="home-hero-heading animate-fade-up-delay">{homepageTagline}</h1>
          <CruiseHeroTrust />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            Explore Genoa, Portofino, Santa Margherita Ligure and the Ligurian coast with carefully
            selected shore excursions designed around your cruise schedule.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions" className="btn-accent">
              Explore Shore Excursions
            </Link>
            <Link
              href="/ship-schedules"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Cruise Ship Schedule
            </Link>
          </div>
        </div>
      </section>

      <YourDayAshore />
      <ChooseYourDay />
      <SpiritOfPlace />
      <WowCollectionFeature />
      <SignatureExperienceFeature />
      <EditorsCollection />
      <HonestAdvice />

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-coastal-200">When you&apos;re ready</p>
            <h2 className="section-title mt-2 text-white">Featured shore excursions</h2>
            <p className="section-subtitle text-coastal-100">
              Bookable experiences from Savona — priced in euros and planned around your ship.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((excursion) => {
              const image = getExcursionImage(excursion.slug);
              return (
                <Link
                  key={excursion.slug}
                  href={`/shore-excursions/${excursion.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-coastal-200">
                      {excursion.category}
                      {(excursion.priceAmount ?? excursion.priceEur) != null
                        ? ` · ${formatMajorMoney(excursion.priceAmount ?? excursion.priceEur!, excursion.priceCurrency ?? SITE_CURRENCY)}`
                        : ""}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">
                      {excursion.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-coastal-100">
                      {excursion.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-accent">
              View all shore excursions
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Plan with confidence</p>
            <h2 className="section-title mt-2">Everything you need for Savona</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {coreSections.map((section) => (
              <Link key={section.slug} href={section.href} className="nav-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-coastal-600">
                  {section.number}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-gray-900">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{section.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-maple-600">
                  {section.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DestinationQuickLinks />
      <FAQSection faqs={faqs} title="Savona shore excursion FAQs" />
    </>
  );
}

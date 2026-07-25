import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/booking-conditions";

export const metadata = buildMetadata({
  title: "Booking Conditions",
  description: `Booking conditions for shore excursions booked through ${SITE.name} — cancellations, changes and return-to-ship policies.`,
  path,
  noindex: true,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Booking Conditions", path },
];

export default function BookingConditionsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Booking Conditions", description: `Booking conditions for ${SITE.name}.`, path })]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="section-title mt-8">Booking Conditions</h1>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Bookings made through {SITE.name} are subject to the terms of the excursion operator named
              on your confirmation voucher. Prices are quoted in euros (EUR) unless otherwise stated.
            </p>
            <p>
              Cancellation and amendment rules vary by excursion and sailing date. Check your confirmation
              email for the applicable policy, including deadlines for refunds or changes. Missed ship
              departures caused by passenger delay outside the operator&apos;s control are not covered.
            </p>
            <p>
              Return-to-ship assurances apply as described on each bookable excursion page and in your
              booking confirmation. Independent travel not booked through our partners remains your
              responsibility.
            </p>
            <p>
              Booking enquiries:{" "}
              <a href="mailto:bookings@savonashoreexcursions.com" className="text-coastal-700 hover:underline">
                bookings@savonashoreexcursions.com
              </a>
              . General questions:{" "}
              <a href="mailto:hello@savonashoreexcursions.com" className="text-coastal-700 hover:underline">
                hello@savonashoreexcursions.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

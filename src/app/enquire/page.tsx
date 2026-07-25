import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const path = "/enquire";

export const metadata = buildMetadata({
  title: "Enquire / Contact",
  description:
    "Get in touch about Savona cruise planning — Genoa, Portofino, Riviera excursions and port-day questions.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Enquire", path },
];

export default function EnquirePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Enquire / Contact", description: "Get in touch about Savona and Italian Riviera cruise planning.", path })]} />
      <PageHero title="Enquire / Contact" subtitle="Questions about your Savona port day, shore excursions, The Wow Collection or our cruise planner? Tell us a little and we'll point you in the right direction." compact />
      <section className="section-padding">
        <div className="container-wide max-w-xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 text-sm text-gray-600">
            You can also email{" "}
            <a href="mailto:hello@savonashoreexcursions.com" className="text-coastal-700 hover:underline">
              hello@savonashoreexcursions.com
            </a>{" "}
            or{" "}
            <a href="mailto:bookings@savonashoreexcursions.com" className="text-coastal-700 hover:underline">
              bookings@savonashoreexcursions.com
            </a>{" "}
            for booking enquiries.
          </p>
          <form className="mt-8 space-y-4" action="#" method="post">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={5} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" placeholder="Tell us about your Savona port day — ship, hours ashore, interests and how we can help..." />
            </div>
            <button type="submit" className="btn-primary">Send enquiry</button>
          </form>
        </div>
      </section>
    </>
  );
}

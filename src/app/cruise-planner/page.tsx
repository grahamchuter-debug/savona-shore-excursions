import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Savona cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Italian Riviera recommendations.";

export const metadata = buildMetadata({
  title: "Savona Cruise Planner — Italian Riviera Port Day Itinerary",
  description,
  path,
  keywords: ["Savona cruise planner", "Italian Riviera cruise day plan", "Savona port day itinerary", "Portofino from Savona planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Savona Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Savona Cruise Planner", description, path })]} />
      <PageHero
        title="Savona Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for Genoa, Portofino, Savona Old Town and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}

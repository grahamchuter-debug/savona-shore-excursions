import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookingTourProvider } from "@/components/booking-engine/booking-tour-context";
import { BookingEngine } from "@/components/booking-engine/booking-engine";
import { getAllBookableSlugs, getBookableProduct } from "@/data/bookable-products";
import { getBookingTourView } from "@/lib/booking/booking-config";
import { buildBookingShipsByDate } from "@/lib/booking/booking-ships";
import { formatBookingMoney } from "@/lib/booking/booking-format";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllBookableSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getBookableProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `Book ${product.name}`,
    description: `Book ${product.experienceName} from Savona. ${formatBookingMoney(product.priceAmount)} per guest. Secure online booking with return-to-ship planning.`,
    path: product.bookingPath,
  });
}

export default async function BookTourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getBookingTourView(slug);
  if (!tour) notFound();

  const shipsByDate = buildBookingShipsByDate();
  const firstHero = tour.heroGallery[0];

  return (
    <>
      {firstHero ? (
        <link
          rel="preload"
          as="image"
          href={firstHero.fallbackSrc}
          imageSrcSet={firstHero.webpSrcSet}
          imageSizes="100vw"
        />
      ) : null}
      <BookingTourProvider tour={tour}>
        <main className="flex-1">
          <BookingEngine shipsByDate={shipsByDate} />
        </main>
      </BookingTourProvider>
    </>
  );
}

import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookingTourProvider } from "@/components/booking-engine/booking-tour-context";
import { BookingSuccessClient } from "@/components/booking-engine/booking-success-client";
import { getAllBookableSlugs, getBookableProduct } from "@/data/bookable-products";
import { getBookingTourView } from "@/lib/booking/booking-config";
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
    title: `Booking Confirmed — ${product.name}`,
    description: `Your ${product.experienceName} booking confirmation from Savona Shore Excursions.`,
    path: product.successPath,
  });
}

export default async function BookSuccessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getBookingTourView(slug);
  if (!tour) notFound();

  return (
    <BookingTourProvider tour={tour}>
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="book-shell py-24 text-center text-[var(--book-muted)]">
              Confirming your payment…
            </div>
          }
        >
          <BookingSuccessClient />
        </Suspense>
      </main>
    </BookingTourProvider>
  );
}

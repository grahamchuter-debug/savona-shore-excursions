/**
 * Booking engine configuration — Savona multi-product checkout experience.
 */
import type { BookableProduct } from "@/data/bookable-products";
import { getBookableProduct } from "@/data/bookable-products";
import { siteConfig } from "@/lib/site-config";

export type BookingHeroSlide = {
  id: string;
  width: number;
  height: number;
  fallbackSrc: string;
  webpSrcSet: string;
  avifSrcSet: string;
  priority?: boolean;
};

export type BookingDeparture = {
  date: string;
  startTime?: string;
};

function bookingHeroSlide(
  id: string,
  dims: { width: number; height: number },
  priority = false,
): BookingHeroSlide {
  const base = `/images/booking/${id}`;
  // JPG sources until sharp webp/avif pipeline is run for booking assets
  return {
    id,
    width: dims.width,
    height: dims.height,
    fallbackSrc: `${base}-1920.jpg`,
    webpSrcSet: `${base}-1280.jpg 1280w, ${base}-1920.jpg 1920w, ${base}-2560.jpg 2560w`,
    avifSrcSet: `${base}-1280.jpg 1280w, ${base}-1920.jpg 1920w, ${base}-2560.jpg 2560w`,
    priority,
  };
}

export type BookingTourView = {
  id: string;
  slug: string;
  name: string;
  experienceName: string;
  backLabel: string;
  experienceTitleLines: readonly string[];
  experienceSubheading: string;
  fullName: string;
  path: string;
  bookingPath: string;
  imageAlt: string;
  heroGallery: readonly BookingHeroSlide[];
  checkoutReconnectImage: string;
  checkoutReconnectImageAlt: string;
  ctaLabel: string;
  durationLabel: string;
  pricePerGuest: number;
  checkoutReconnectLine: string;
};

export function buildBookingTourView(product: BookableProduct): BookingTourView {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    experienceName: product.experienceName,
    backLabel: product.backLabel,
    experienceTitleLines: product.experienceTitleLines,
    experienceSubheading: product.experienceSubheading,
    fullName: product.experienceName,
    path: product.path,
    bookingPath: product.bookingPath,
    imageAlt: product.imageAlt,
    heroGallery: product.heroSlides.map((s) =>
      bookingHeroSlide(s.id, { width: s.width, height: s.height }, s.priority),
    ),
    checkoutReconnectImage: `/images/booking/${product.checkoutReconnectImageId}-1920.jpg`,
    checkoutReconnectImageAlt: product.checkoutReconnectImageAlt,
    ctaLabel: product.ctaLabel,
    durationLabel: product.durationLabel,
    pricePerGuest: product.priceAmount,
    checkoutReconnectLine: product.checkoutReconnectLine,
  };
}

export function getBookingTourView(slugOrId: string): BookingTourView | null {
  const product = getBookableProduct(slugOrId);
  return product ? buildBookingTourView(product) : null;
}

/** @deprecated Prefer BookingTourProvider — kept for static imports during migration */
export const bookingPrototypeTour: BookingTourView = buildBookingTourView(
  getBookableProduct("portofino-santa-margherita")!,
);

export const bookingDepartures: readonly BookingDeparture[] = [
  { date: "2026-09-12", startTime: "9:00 AM" },
  { date: "2026-09-19", startTime: "9:30 AM" },
  { date: "2026-10-03", startTime: "9:00 AM" },
  { date: "2026-10-17" },
  { date: "2026-11-07", startTime: "10:00 AM" },
] as const;

export const bookingMeetingConfig = {
  label: "Meeting Point",
  place: "Savona Cruise Port",
  instructionsNote:
    "Full meeting instructions will be included with your booking confirmation.",
} as const;

export const bookingStartTimeConfig = {
  label: "Start Time",
  unconfirmedLabel: "Confirmed on your final voucher",
} as const;

export const bookingCapacityConfig = {
  guestsPerVehicle: 6,
  maxVehiclesSelectableAtCheckout: 1,
  minGuests: 1,
  capacityLabel: "Maximum 6 guests per vehicle",
  groupSizeLabel: "Maximum 6 guests per vehicle",
  overCapacityMessage:
    "Travelling with more than six people? Contact us and we’ll check additional vehicle availability.",
  overCapacityContactHref: `mailto:${siteConfig.bookingEmail}`,
  overCapacityContactLabel: "Contact us",
} as const;

export const bookingCheckoutGuestLimit =
  bookingCapacityConfig.guestsPerVehicle *
  bookingCapacityConfig.maxVehiclesSelectableAtCheckout;

import { SITE_CURRENCY, CURRENCY_SYMBOL } from "@/lib/commerce/currency";

export const bookingPricingConfig = {
  currencyCode: SITE_CURRENCY,
  currencySymbol: CURRENCY_SYMBOL[SITE_CURRENCY],
  /** Fallback only — live tours use BookingTourView.pricePerGuest */
  pricePerGuest: bookingPrototypeTour.pricePerGuest,
  priceConfigured: true,
  freeCancellationLabel: "Free Cancellation",
  freeCancellationDetail: "Full refund up to 24 hours before departure.",
  returnGuaranteeLabel: "Return to Ship Guarantee",
  returnGuaranteeDetail:
    "Your itinerary is planned to return you to Savona with time before your ship departs.",
  securePaymentLabel: "Secure Online Booking",
  securePaymentDetail: "Encrypted checkout. Your details stay protected.",
  cruisePortPickupLabel: "Cruise-Port Pickup",
} as const;

export const bookingReassuranceConfig = {
  heading: "Designed Around Your Cruise",
  supportingCopy:
    "Your experience is carefully planned around your ship’s schedule. We monitor cruise arrivals, keep groups small and allow suitable time for your return to port.",
  promises: [
    {
      id: "return-guarantee",
      label: bookingPricingConfig.returnGuaranteeLabel,
      detail: bookingPricingConfig.returnGuaranteeDetail,
      featured: true,
    },
    {
      id: "group-size",
      label: "Maximum 6 Guests per Vehicle",
      detail: null,
      featured: false,
    },
    {
      id: "cancellation",
      label: bookingPricingConfig.freeCancellationLabel,
      detail: bookingPricingConfig.freeCancellationDetail,
      featured: false,
    },
    {
      id: "cruise-port",
      label: bookingPricingConfig.cruisePortPickupLabel,
      detail: bookingMeetingConfig.place,
      featured: false,
    },
    {
      id: "secure",
      label: bookingPricingConfig.securePaymentLabel,
      detail: bookingPricingConfig.securePaymentDetail,
      featured: false,
    },
  ],
} as const;

export const bookingCheckoutCopy = {
  heading: "Complete Your Booking",
  supportingLine: "Review your cruise day and enter your details securely.",
  cruiseDayHeading: "Your Cruise Day",
  reconnectLine: "Your Riviera day is almost booked.",
  payButtonLabel: "Continue to Secure Payment",
  payingLabel: "Redirecting to secure payment…",
  securePaymentHeading: "Secure payment",
  securePaymentNote:
    "You will complete payment on Stripe’s secure checkout. No charge is taken on this screen.",
  paymentMethodLabel: "Credit or debit card",
  paymentProviderNote: "Secure payment powered by Stripe",
  checkoutCancelledNote:
    "Payment was cancelled. Your selections are still here — you can try again when ready.",
  priceNotConfiguredNote:
    "Online booking is not available until the retail price is configured. Please contact us to reserve.",
  supportLine: "Need help before booking? Contact our cruise excursion team.",
  supportLinkLabel: "Contact us",
} as const;

export const bookingCheckoutLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cancellation Policy", href: "/booking-conditions" },
  { label: "Return to Ship Guarantee", href: "/return-to-ship-guarantee" },
  { label: "Contact Us", href: "/enquire" },
] as const;

export const bookingContactPath = "/enquire" as const;

export const bookingSteps = [
  { id: "tour", label: "Experience" },
  { id: "date", label: "Date" },
  { id: "ship", label: "Ship" },
  { id: "guests", label: "Guests" },
  { id: "payment", label: "Payment" },
  { id: "confirmed", label: "Confirmed" },
] as const;

export type BookingStepId = (typeof bookingSteps)[number]["id"];

export function bookingSessionStorageKey(tourId: string): string {
  return `sv-booking:v1:${tourId}`;
}

export function getBookingStartTimeLabel(isoDate: string): string {
  const match = bookingDepartures.find((d) => d.date === isoDate);
  if (match?.startTime) return match.startTime;
  return bookingStartTimeConfig.unconfirmedLabel;
}

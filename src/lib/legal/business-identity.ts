/**
 * Single source of truth for confirmed business/legal identity.
 * Savona Shore Excursions is the customer-facing brand.
 */
export const businessIdentity = {
  tradingName: "Savona Shore Excursions",
  legalCompanyName: "Wow A Tour Ltd",
  legalEntityStatement:
    "Savona Shore Excursions is a trading name of Wow A Tour Ltd.",
  companyNumber: "11426960",
  registeredJurisdiction: "England and Wales",
  registeredOffice: {
    lines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    formatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
    multiline:
      "Kintyre House\n70 High Street\nFareham\nHampshire\nUnited Kingdom\nPO16 7BB",
  },
  customerServiceEmail: "bookings@savonashoreexcursions.com",
  customerServiceEmailHref: "mailto:bookings@savonashoreexcursions.com",
  helloEmail: "hello@savonashoreexcursions.com",
  privacyEmail: "privacy@savonashoreexcursions.com",
  agentStatus:
    "Savona Shore Excursions acts as booking agent for the local excursion provider.",
  companyDisclosure:
    "Savona Shore Excursions is a trading name of Wow A Tour Ltd, registered in England and Wales under company number 11426960. Registered office: Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB.",
  bookingAgentRoleParagraphs: [
    "Wow A Tour Ltd, trading as Savona Shore Excursions, acts as a booking agent on behalf of independent local excursion providers.",
    "When you make a booking, we arrange the reservation and collect payment on behalf of the provider identified in your booking confirmation. The excursion itself is supplied and operated by that independent provider.",
    "We remain responsible for providing our booking services with reasonable care and skill. The local provider is responsible for operating the excursion in accordance with the booking description and applicable law.",
  ],
  cancellationLanguage: {
    triggerStatement:
      "If the local provider cancels the excursion, or if we notify you that the booking cannot be fulfilled",
    refundStatement: "We will arrange a refund to the original payment method.",
  },
  localProviderPlaceholder:
    "Local excursion provider identified on your final voucher",
} as const;

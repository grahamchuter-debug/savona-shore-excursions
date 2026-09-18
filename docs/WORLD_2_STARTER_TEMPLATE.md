# World 2.0 Starter Template

**Location:** `World-2.0/starter-template/`  
**Reference implementation:** `savona-shore-excursions` (config-driven)  
**Goal:** empty folder → production-ready Mediterranean destination in **under 2 hours**

---

## What a new destination must supply

| Input | Where |
|-------|--------|
| Destination name + strapline + emails | `src/config/destination.ts` |
| Hero / excursion images | `public/images/` |
| Tours + `whyWeChose` + prices (face currency, no FX) | `src/data/excursions.ts`, `bookable-products.ts`, Worker `catalogue.ts` |
| Cruise schedules | `src/data/` / imported schedules |
| Local guides | `src/data/guides.ts` (+ compare pages as needed) |
| Footer link copy | `src/config/footer.ts` |
| Contact email prefixes | already generated from domain (`hello` / `bookings` / `privacy`) |

Everything else is inherited from this template.

---

## 1. Components moved (platform / reusable)

### Shell & branding
- `Header`, `Footer`, `DestinationLogo`, `Breadcrumbs`
- `PageHero`, `PhotoHeroBand`, `ComparisonHeroBand`
- `ResponsiveImage`, `PreloadImage`, `ImageCard`

### Editorial / trust
- `YourDayAshore`, `WhyWeChoseThisExcursion`
- `CruiseHeroTrust`, `CruisePassengerRatings`
- `HonestAdvice`, `FAQSection`, `EditorsCollection`, `WowCollectionFeature`
- `ChooseYourDay`, `SpiritOfPlace`, `SignatureExperienceFeature`, `DestinationQuickLinks`
- `ExperienceSelector`, `VisitorTypeSelector`, `EditorialRecommendations`

### Planning frameworks
- `CruisePlanner` (was destination-named)
- `ScheduleTable`, `ShipScheduleHubView`
- Guide/article shells: `GuideArticle`, `HighlightArticle`, `ComparisonTable`, `PlanningLinks`

### Booking engine (full)
- `booking-engine/*` including steps, success client, tour context, trust, progress, resume
- App routes: `/book/[slug]`, `/book/[slug]/success`

### SEO / structured data
- `JsonLd` + `src/lib/schema.ts` + `src/lib/seo.ts`

### Legal pages (routes inherited)
- `/privacy`, `/terms`, `/cookie-policy`, `/booking-conditions`, `/cancellation-policy`, `/return-to-ship-guarantee`
- Content builders under `src/lib/legal/*` driven by `businessIdentity`

### Payments Worker + D1 + email
- `workers/payments` (Stripe Checkout, webhook, D1, Resend internal ops email)
- Migrations, catalogue, schedule helpers, CORS, booking refs via `BOOKING_REF_PREFIX`

---

## 2. Configuration created

| Config | Path | Purpose |
|--------|------|---------|
| **Destination** | `src/config/destination.ts` | Name, domain, currency, contact, SEO keywords, nav, booking prefix, Worker/D1 names, legal trading name |
| **Footer** | `src/config/footer.ts` | Blurb + column links (destination content only) |
| **Site** | `src/lib/site.ts` | Derived from destination config |
| **Currency** | `src/lib/commerce/currency.ts` | Region defaults + `SITE_CURRENCY` from config (no FX) |
| **Business identity** | `src/lib/legal/business-identity.ts` | Derived emails / trading name |
| **Brand identity** | `src/data/destination-identity.ts` | Wordmark fields from config |
| **Worker vars** | `workers/payments/wrangler.toml` | Currency, prefix, origins, email From name |
| **Clone script** | `scripts/clone-destination.mjs` | Generates destination + wrangler + package name |

---

## 3. Estimated reduction in development time

| Workstream (pre-template) | Typical | With starter | Savings |
|---------------------------|---------|--------------|---------|
| Scaffold Next + design system + nav/footer | 6–10 h | 0 h (inherited) | ~8 h |
| Legal pages + identity wiring | 3–4 h | 15 min (emails/domain) | ~3.5 h |
| Booking engine + success UX | 12–20 h | 0 h | ~16 h |
| Payments Worker + D1 + email | 8–12 h | 30–45 min (D1 id + secrets) | ~10 h |
| Your Day Ashore / Why We Chose / trust / FAQ shells | 4–6 h | 30–60 min (copy) | ~4 h |
| Cruise planner + schedule + port guide frameworks | 6–10 h | 1–1.5 h (data only) | ~7 h |
| SEO / JSON-LD / image components | 3–5 h | 20 min | ~4 h |
| **Total engineering** | **~42–67 h** | **~3–4 h content + ops** | **~90%+** |

**Target for next Mediterranean port:** **≤ 2 hours** of focused work once images and tour list are ready:

1. Clone + config (10 min)  
2. Tours + catalogue prices (40–50 min)  
3. Schedules + 4–6 guides (40–50 min)  
4. Heroes + smoke QA + D1 create (20–30 min)

Editorial depth beyond “production-ready” (unique long-form, photography licensing) can continue after launch.

---

## 4. Recommended clone procedure

See **[CLONE.md](./CLONE.md)** for the step-by-step runbook.

Quick path:

```bash
cd "World-2.0"
node scripts/clone-destination.mjs \
  --slug livorno \
  --name "Livorno" \
  --strapline "Gateway to Tuscany" \
  --prefix LV \
  --country Italy \
  --out ../../livorno-shore-excursions

cd ../../livorno-shore-excursions
npm install
# Fill destination/CLONE_CHECKLIST.md
npm run dev
```

Register the site in `sites.json` when live.

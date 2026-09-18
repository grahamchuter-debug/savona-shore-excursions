# Clone a new World 2.0 destination (≤ 2 hours)

Reference: Savona Shore Excursions. Template: `World-2.0/starter-template/`.

## Minute 0–10 — Scaffold

```bash
cd "/path/to/World-2.0"
node scripts/clone-destination.mjs \
  --slug <slug> \
  --name "<Name>" \
  --strapline "<Strapline>" \
  --prefix <XX> \
  --country "<Country>" \
  --out ../<slug>-shore-excursions

cd ../<slug>-shore-excursions
npm install
cp .env.example .env.local
```

Confirm `src/config/destination.ts` looks correct (domain, currency `EUR` for Europe, emails, booking prefix).

## Minute 10–60 — Tours & booking catalogue

1. Replace sample excursions in `src/data/excursions.ts` (slugs, titles, durations, `whyWeChose`, face prices in destination currency — **no FX**).
2. Mirror bookable products in `src/data/bookable-products.ts`.
3. Mirror Worker catalogue in `workers/payments/src/catalogue.ts` (ids, major-unit prices, success paths).
4. Drop hero + card images into `public/images/` and wire `src/lib/images.ts`.

## Minute 60–100 — Schedules, guides, home copy

1. Cruise schedules → schedule data / `ship-schedules` sources.
2. 4–8 local guides in `src/data/guides.ts` (walking from port, top day trips, honest advice).
3. Update `src/config/footer.ts` links to real compare/guide paths.
4. Home hero headline + `YourDayAshore` categories already exist — adjust copy in `src/data/homepage.ts` / cruise-positioning only.

## Minute 100–120 — Ops smoke test

```bash
npm run dev
# In another terminal:
npm run payments:dev   # after workers/payments npm install + .dev.vars
npm run build && npm run check-links
```

Production prep (can finish same day or next):

```bash
cd workers/payments
npx wrangler d1 create <slug>-bookings
# paste database_id into wrangler.toml
npx wrangler d1 migrations apply <slug>-bookings --remote
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
npx wrangler secret put RESEND_API_KEY
npx wrangler deploy
```

Then Cloudflare Pages project, DNS, Search Console, add row to World-2.0 `sites.json`.

## Do not rebuild

- Navigation / footer chrome  
- Legal page routes  
- Booking engine UI  
- Worker payment flow / D1 schema / email outbox  
- Currency helpers (only set `currency` in destination config)  
- JSON-LD helpers  

## Destination-only files (edit these)

- `src/config/destination.ts`
- `src/config/footer.ts`
- `src/data/excursions.ts`, `bookable-products.ts`, `guides.ts`, `comparisons.ts`, `homepage.ts`, planner data
- `src/lib/images.ts` + `public/images/**`
- `workers/payments/src/catalogue.ts` + schedule bindings
- `workers/payments/wrangler.toml` (ids / secrets — never commit secrets)

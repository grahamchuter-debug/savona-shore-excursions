# Savona Shore Excursions

World 2.0 local destination site for **Savona Shore Excursions** — Gateway to the Italian Riviera.

- Design system: Malaga Shore Excursions World 2.0
- Booking engine: Villefranche production flow (Stripe Checkout + Cloudflare Worker + D1 + Resend)

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Site: [http://localhost:3000](http://localhost:3000)

### Payments Worker (local)

```bash
cd workers/payments
cp .dev.vars.example .dev.vars
# Add Stripe + Resend secrets
npm install --legacy-peer-deps
npm run dev
```

Set `NEXT_PUBLIC_PAYMENTS_API_URL=http://127.0.0.1:8787` in `.env.local`.

## Bookable products (EUR)

| Product | Price | Booking path |
|---------|------:|--------------|
| Genoa Highlights | €136 | `/book/genoa-highlights` |
| Portofino & Santa Margherita | €154 | `/book/portofino-santa-margherita` |
| Italian Riviera Discovery | €149 | `/book/italian-riviera-discovery` |
| Savona Walking Tour | €105 | `/book/savona-walking-tour` |
| Ligurian Coast Experience | €138 | `/book/ligurian-coast-experience` |

Prices aligned to Shore Excursions Group Savona customer-facing rates (USD → EUR display).

## Production (after domain)

1. Register / point `savonashoreexcursions.com`
2. Cloudflare Pages project `savona-shore-excursions`
3. Create D1 `savona-bookings` and update `workers/payments/wrangler.toml` `database_id`
4. Deploy Worker `savona-payments` + Stripe webhook
5. Set production `SITE_BASE_URL` / CORS / secrets
6. Search Console + email forwarding for hello@ / bookings@ / privacy@

## Stack

Next.js 16 static export · Tailwind 4 · Cloudflare Pages · Cloudflare Workers (payments)

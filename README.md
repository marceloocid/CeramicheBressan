# Ceramiche Artistiche Bressan C2

Corporate catalogue website for **Ceramiche Artistiche Bressan C2**, a family-run Italian artisan ceramics business based in Pianezze, Vicenza.

The website is not an ecommerce platform. It has no cart, checkout, prices, or payments. Its purpose is to present the company, product families, visual catalogue, and contact channels for shops, boutiques, retailers, distributors, and interested business customers.

Visible website content is available in Italian and English.

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- Resend for contact form email delivery
- Cloudflare Turnstile for spam protection
- Vercel Analytics and Speed Insights, loaded through the cookie consent flow

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Useful Commands

```bash
npm run lint
npm run build
```

`npm run build` may temporarily update `next-env.d.ts` between development and production route types. Do not commit that generated change unless it is intentional.

## Environment Variables

Create `.env.local` from `.env.local.example`.

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_SITE_URL=
```

Notes:

- Never commit `.env.local`.
- `CONTACT_FROM_EMAIL` must be a sender accepted by Resend.
- In production, set `NEXT_PUBLIC_SITE_URL` to the definitive canonical public domain, including `https://`.
- Vercel preview deployments can fall back to `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL`, but the canonical production domain should still be configured explicitly.
- In Cloudflare Turnstile, authorize every domain used for testing and production, including `localhost` if needed.
- Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Main Routes

- `/` - Home
- `/azienda` - Company profile and business details
- `/storia` - Historical account and recognitions in Italian
- `/creazioni` - Editorial product families and collections
- `/per-rivenditori` - Information for shops and retailers
- `/catalogo` - Visual catalogue grouped by product series
- `/lavorazione` - Craftsmanship and production process
- `/contatti` - Contact page, request form, and map
- `/privacy-policy`
- `/cookie-policy`
- `/en/history` - English translation of the historical account and recognitions
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`

## Project Structure

Key files and folders:

- `app/` - App Router pages, metadata, API routes, sitemap, robots, and app icons.
- `components/` - Shared UI components.
- `data/site.ts` - Main website data: company info, navigation, collection categories, and catalogue items.
- `public/images/` - Original image assets used by the website.
- `public/favicon-source.png` - Source image used to generate favicons and app icons.

## Catalogue and Images

Catalogue data lives mainly in `data/site.ts`.

- `collectionCategories` represents broad editorial families used by `/creazioni`.
- `catalogItems` represents concrete product series or real product examples used by `/catalogo`.
- Each catalogue item may include an `images[]` gallery.
- The first image in each `images[]` array is used as the main catalogue card image.
- Additional images are shown through the catalogue lightbox/modal.

Image handling rules:

- Do not overwrite, crop, optimize, or delete original product images without an explicit decision.
- Add new product images under `public/images/`.
- Reference new images from `data/site.ts`.
- The folder `public/images/muestra` was intentionally removed because it was not used by the website.

## Contact Form

The contact form component is:

```text
components/ContactForm.tsx
```

It posts to:

```text
app/api/contact/route.ts
```

The API route:

- accepts `POST` requests,
- validates required fields,
- validates email format,
- validates privacy consent,
- validates the Cloudflare Turnstile token server-side,
- uses a hidden honeypot field named `website`,
- sends the request by email through Resend,
- uses the visitor email as `Reply-To`,
- does not send an automatic email back to the visitor.

If Turnstile does not appear locally, restart the development server so `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is reloaded, then verify that the current domain is allowed in Cloudflare Turnstile.

## Cookie Consent and External Services

Cookie and external-service preferences are handled by:

```text
components/CookieConsent.tsx
```

Current consent categories:

- `Necessari` - always active.
- `Statistiche` - enables Vercel Analytics and Speed Insights.
- `Contenuti esterni` - enables external embeds such as Google Maps.

Google Maps is wrapped by:

```text
components/GoogleMapConsent.tsx
```

The map iframe should not load before the user accepts external content.

## Favicons and Icons

The favicon source file is:

```text
public/favicon-source.png
```

Generated favicon/icon files include:

- `public/favicon.ico`
- `public/favicon.svg`
- `public/apple-touch-icon.png`
- `app/favicon.ico`
- `app/icon.png`
- `app/apple-icon.png`

To replace the favicon, update `public/favicon-source.png` and regenerate the favicon/icon files from that source.

## SEO and Publishing

The website uses two localized root layouts:

- `app/(it)/layout.tsx` for Italian routes,
- `app/en/layout.tsx` for English routes.

The website includes:

- global metadata shared by both localized root layouts,
- page-level metadata on main pages,
- Open Graph metadata,
- Twitter card metadata,
- `app/sitemap.ts`,
- `app/robots.ts`,
- `public/llms.txt`,
- `LocalBusiness` structured data.

Before publishing, verify:

- `NEXT_PUBLIC_SITE_URL` points to the definitive canonical production domain and uses `https://`,
- Resend is configured with the final sender/domain,
- Cloudflare Turnstile allows the production domain,
- the contact form works in production,
- Privacy Policy and Cookie Policy have been reviewed by the owner or a legal/privacy advisor,
- Google Maps, analytics, and cookie preferences behave as expected.

## Company Data

Main company data is centralized in `data/site.ts`:

- `site.visibleName`
- `site.legalName`
- `site.address`
- `site.phone` and `site.phoneHref`
- `site.email` and `site.emailHref`
- `site.vat`
- `site.facebookUrl`

Update this file if the company contact details change.

## Branch Workflow

The repository currently uses:

- `main` for the publishable version.
- `test` for testing changes before moving them to `main`.

Keep both branches aligned when a tested change is approved for publishing.

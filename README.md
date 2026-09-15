# Hope Services Website

Marketing site for Hope Services (supported living for adults with developmental disabilities in Meridian, Idaho), built from the Figma file *Hope-Services-Website* with Next.js 16 (App Router), React 19, and CSS Modules.

## Develop

```bash
npm install
npm run dev
```

Production build and local server:

```bash
npm run build && npm run start
```

## Routes

`/`, `/services`, `/services/supported-living`, `/eligibility`, `/housing`, `/about`, `/about/team`, `/about/service-coordinators`, `/careers` (`/jobs` redirects here), `/contact`.

## Environment

Copy `.env.example` to `.env.local`. Forms post to a server action (`src/app/actions/inquiry.ts`); with `RESEND_API_KEY` and `INQUIRY_TO` set they are emailed through Resend, otherwise they are logged.

## Assets and fonts

- Raster images are pre-sized by `scripts/optimize-images.mjs` / `scripts/optimize-page-images.mjs` (sharp) and served through `next/image` (AVIF/WebP).
- Fonts are self-hosted and subset with `scripts/subset-fonts.mjs`: Metropolis (public domain, via Fontsource) and Kenyan Coffee Bold (Typodermic; confirm the web-embedding license before launch).

## Quality checks

```bash
node scripts/audit.mjs http://localhost:3000/        # Lighthouse mobile + desktop for one URL
node scripts/audit-all.mjs http://localhost:3000     # every route, prints a score table
node scripts/mobile-check.mjs http://localhost:3000 --shots   # phone-emulated overflow check + screenshots
```

Deployed on Vercel: import the GitHub repo, set the environment variables above, and deploy. No other configuration is required.

# Azure Waves Resort Website

Premium, conversion-focused resort website and mini booking inquiry experience built with Next.js App Router.

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- shadcn-style UI components (Dialog, Tabs, Accordion, Carousel, Dropdown, Sheet)
- React Hook Form + Zod
- Embla Carousel

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

`http://localhost:3000`

## Build and Production

```bash
npm run lint
npm run build
npm run start
```

## Project Structure

- `app/` - App Router pages and API route handlers
- `components/` - reusable UI, site sections, and form flows
- `data/` - editable site content (rooms, offers, gallery, etc.)
- `lib/` - utilities, metadata helpers, and site constants

## Where to Edit Content

### Rooms and pricing

- File: `data/rooms.ts`
- Update room names, prices, amenities, policies, and images.

### Amenities and experiences

- Files:
  - `data/amenities.ts`
  - `data/experiences.ts`

### Offers/packages

- File: `data/offers.ts`

### Testimonials / FAQ / Gallery

- Files:
  - `data/testimonials.ts`
  - `data/faqs.ts`
  - `data/gallery.ts`

### Contact details and map

- File: `lib/site.ts`
- Update:
  - `phoneDisplay`, `phoneRaw`, `whatsappRaw`
  - `email`, `location`
  - `mapEmbed` (Google Maps embed URL)
  - `mapDirections`

## Replacing Images

All sample images are currently remote royalty-free placeholders (Unsplash/Pexels) and can be replaced in:

- `data/rooms.ts`
- `data/amenities.ts`
- `data/experiences.ts`
- `data/gallery.ts`
- `app/page.tsx` (home hero image)

If you use another image host, add it in `next.config.ts` under `images.remotePatterns`.

## Booking Inquiry Mock API

- Endpoint: `POST /api/inquiries`
- Handler: `app/api/inquiries/route.ts`
- Current storage: in-memory mock store (resets when server restarts)

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project**.
3. Import the repository.
4. Use default build settings:
   - Build command: `npm run build`
   - Output: Next.js default
5. Deploy.

No additional environment variables are required for the mock API flow.

## Notes

- SEO metadata and OpenGraph are configured per page.
- JSON-LD `LodgingBusiness` schema is injected globally in `app/layout.tsx`.
- Sticky mobile CTA bar is enabled site-wide.


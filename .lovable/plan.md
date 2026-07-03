## What I'll build

Turn the site into a real multi-page Blushbuild creator diary. Everything currently lives on `/` with `#anchor` links — I'll create dedicated routes, wire the nav to them, and fill each page with real content in the existing paper/cream editorial style. Mobile-optimized like the home page.

The **diary** and **journal** are the same thing (your existing "Recent diary entries" section). I'll use `/diary` as the URL to match your language.

## New routes

```text
src/routes/
  index.tsx            (existing home — nav + CTAs repointed to real routes)
  resources.tsx        Freebies library index
  resources.$slug.tsx  Individual freebie detail + email-gate download
  shop.tsx             Products / sales index
  shop.$slug.tsx       Individual product sales page
  progress.tsx         Live product progress board (Idea → Building → Beta → Live)
  diary.tsx            Diary index — all entries with covers + dates
  diary.$slug.tsx      Individual diary entry (long-form, pull quotes, images)
  blog.tsx             Blog index (strategy, launches, mindset)
  blog.$slug.tsx       Individual blog article
  about.tsx            Founder story / behind Blushbuild
```

## Shared pieces

- **`src/components/site-header.tsx` + `site-footer.tsx`** — extracted from `index.tsx` so every page shares the same nav. Nav becomes real `<Link to="/diary">` etc.
- **`src/content/`** — typed TS modules (`resources.ts`, `products.ts`, `diary.ts`, `blog.ts`) storing slug/title/cover/excerpt/body/date. Detail pages look up by `params.slug`, throw `notFound()` on miss. No backend needed.
- Every route defines its own `head()` (title, description, og:title, og:description, and og:image on detail pages from the cover asset).
- `notFoundComponent` on every route and root.

## Page contents

- **Resources** — hero blurb, 8 freebie cards (existing 4 expanded), category chips (PDF / Guide / Template / Freebie), bottom email CTA.
- **Resource detail** — cover, what's inside, preview strip, email form, related freebies.
- **Shop** — 4+ products with status tag (In progress / Selling / Coming soon), price, waitlist CTA.
- **Product sales page** — hero, pitch, what you get, who it's for, FAQ, sticky Buy/Join-waitlist bar.
- **Progress** — kanban columns (Idea → Building → Beta → Live) with % bars + this-week update.
- **Diary index** — chronological entries with cover thumbs and dates, monthly grouping.
- **Diary entry** — long-form: intro, sections, pull quote, inline image, sign-off, prev/next entry links.
- **Blog index** — featured post + 6+ posts, category chips.
- **Blog detail** — reading time, cover, article body, next-post link.
- **About** — founder story, timeline, values, join-the-list CTA.

## Home page updates

- Swap header/footer for shared components.
- Nav + all section CTAs go to real routes:
  - "Follow the journey" → `/diary`
  - "See progress" → `/progress`
  - Product cards → `/shop/$slug`
  - Resource cards → `/resources/$slug`
  - Diary "View all" / "Read the diary" → `/diary`
  - Shop (soon) → `/shop`, About → `/about`, Freebies → `/resources`

## Technical notes

- Content in TS modules under `src/content/` — no Cloud/backend. Email forms stay presentational unless you want them wired up (would need Lovable Cloud + a provider).
- Reuse existing CSS component classes (`.product-card`, `.resource-card`, `.journal-card`, `.button-solid`, etc.). Add small additions to `src/styles.css` for article prose, kanban columns, and the sticky buy bar.
- Each detail route uses `createFileRoute("/section/$slug")` + `Route.useParams()`; `notFound()` when slug missing.
- Same mobile-first spacing pattern as the last pass.

## Out of scope (say the word to add)

- Real email capture / newsletter provider.
- Real payments / checkout (Lovable Cloud + Stripe).
- CMS / admin UI for editing entries (content is code for now).
- Blog / diary search.

Approve and I'll build it all in one pass.
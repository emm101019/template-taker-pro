## What's actually missing

Content-wise, every blog post, diary entry, resource, and product already has a full body in `src/content/site.ts` — the detail pages render them. The real gaps are navigational and structural:

1. **Progress board cards are not links.** No `/progress/$slug` route exists, so "See progress" has nowhere to go.
2. **Shop detail pages are thin.** Only pitch + what-you-get + FAQ. No image gallery, no features/benefits section, no related products.
3. **A few surfaces don't link to detail pages** — the progress cards on the home page and the "See progress" CTA on home product cards point to `/shop/$slug` but the button label still says "See progress", which is confusing.
4. **Progress entries have no long-form write-up** — the board only shows a one-line `update`.

## Fix

### 1. New route: `src/routes/progress.$slug.tsx`
A dedicated page per progress item (`canva-crash-course`, `pinterest-growth-kit`, `faceless-brand-course`, `creator-swipe-vault`, `brand-clarity-workbook`, `content-strategy-planner`, `digital-product-bundle`, `etsy-success-guide`).

Layout:
- Back link → `/progress`
- Hero: cover image, title, stage tag, % complete bar, last updated
- **The story so far** — 3-4 paragraph write-up of where the product started and where it is now
- **What's shipped** — bullet list of milestones done
- **What's next** — bullet list of upcoming milestones
- **Weekly updates** — reverse-chronological list of 3-4 short dated notes
- Cross-link: if the slug matches a shop product, "See it in the shop →"; otherwise "Join the waitlist" email input
- Prev / next progress item

Add a `progressDetails` map in `src/content/site.ts` keyed by slug with `story: string[]`, `shipped: string[]`, `next: string[]`, `updates: { date, note }[]`. Populate all 8 items with realistic placeholder copy.

### 2. Wire progress board → detail page
In `src/routes/progress.tsx`, wrap each `<article>` card in `<Link to="/progress/$slug" params={{ slug: item.slug }}>` with hover lift.

### 3. Expand `src/routes/shop.$slug.tsx` to a full Etsy-style listing
Add these sections between the hero and FAQ:
- **Image gallery** — hero image + 3 thumbnails (reuse other product images / mood assets for placeholder). Simple click-to-swap in state.
- **Description** — a 2-3 paragraph long-form description (new `description: string[]` field on `Product`).
- **Features & benefits** — 4-6 short "Feature — benefit" lines (new `features: { title, detail }[]` field).
- **Related products** — 3 other products from the shop as cards linking to their slug.

Extend `Product` type in `src/content/site.ts` and populate `description` + `features` + `gallery` for all 4 products.

### 4. Home page tidy
In `src/routes/index.tsx`:
- Home product cards: change CTA label from "See progress" to "See the product" (already links to `/shop/$slug`).
- Add a small "See progress →" secondary link on each home product card pointing to `/progress/$slug`.

### 5. Sanity pass on links
Confirm every card on `/diary`, `/blog`, `/shop`, `/resources`, `/progress`, and the home page is wrapped in `<Link>` with correct `params`. Fix any stragglers found during the pass (no-op if already correct).

## Out of scope
- Real checkout / real email capture (buttons stay visual placeholders).
- Redesigns of header/footer.
- New imagery — reuse existing assets for galleries.

## Files touched

```text
src/content/site.ts                  (extend Product type; add progressDetails, description, features, gallery data)
src/routes/progress.tsx              (wrap cards in Link)
src/routes/progress.$slug.tsx        (NEW — detail page + not-found + error boundary)
src/routes/shop.$slug.tsx            (add gallery, description, features, related products)
src/routes/index.tsx                 (product card CTAs)
```

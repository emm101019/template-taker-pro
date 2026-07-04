## Why entries don't open

The detail pages (`/diary/$slug`, `/blog/$slug`, `/resources/$slug`, `/shop/$slug`) exist and render fine — SSR returns 200 with the full post. The bug is on the **home page**: the diary/resource/nav links there aren't wired to the detail routes.

Specifically in `src/routes/index.tsx`:

- The "Recent diary entries" list renders each entry as a plain `<span>` — not a link at all. Clicking a title does nothing.
- "View all" and "Read the diary →" both point to `/about` instead of `/diary`.
- Resource cards' "Get it free →" points to `/resources` (index) instead of `/resources/$slug`.
- The diary list uses a local hardcoded array (line 69) instead of the shared `diaryEntries` from `src/content/site.ts`, so slugs aren't available.
- Header nav and footer use plain `<a href>` for internal routes. This forces a full page reload every navigation and is why the user sometimes sees "Load failed" when Vite is mid-reconnect.

## Fix (single file: `src/routes/index.tsx`)

1. Replace the local `diaryEntries` array with an import of `diaryEntries` from `@/content/site` and take the first 5. Same for resources — use the shared `resources` list so each card has a `slug`.
2. Wrap each diary list item in `<Link to="/diary/$slug" params={{ slug: entry.slug }}>` so titles are clickable.
3. Point "View all" and "Read the diary →" to `/diary` (not `/about`).
4. Change each resource card's "Get it free →" to `<Link to="/resources/$slug" params={{ slug: resource.slug }}>`.
5. Convert header nav and footer internal links from `<a href="...">` to TanStack `<Link to="...">`:
   - Home → `/`, Journey → `/progress`, Resources/Freebies → `/resources`, Shop → `/shop`, About → `/about`, plus Diary and Blog entries in the nav.
6. Any remaining CTAs (`/progress` hero button, etc.) become `<Link>` too.

No changes to detail routes, content, or styles — they already work. This is purely re-wiring the home page.

## Out of scope

- Rewriting `SiteHeader` / `SiteFooter` (the home page currently doesn't use them; a later pass can consolidate).
- Adding new content.

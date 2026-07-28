## Hero rework — /starter-kit

Scope: only the hero section of `src/routes/starter-kit.tsx` (lines ~176–229) plus the matching `.starter-hero*` rules in `src/styles.css`. Nothing else on the page, no other routes, form logic unchanged.

### New visual hierarchy (top → bottom, mobile-first)

1. Eyebrow pill — `✦ FREE INTERACTIVE STARTER KIT` (existing style, unchanged).
2. **H1 headline** — the product name, in the site's editorial serif (Cormorant/Italiana), no shimmer, no gradient:
   ```
   Pretty & Unforgettable
   Brand™ Starter Kit
   ```
   "Brand™" stays on its own line; "&" set in italic serif for rhythm.
3. **Supporting promise** (sub-headline, smaller, muted foreground):
   "Build a faceless brand people can't forget — premium, authentic, unmistakably yours."
4. Body paragraph (kept, trimmed):
   "Not another free PDF. An interactive Starter Kit that walks you through the complete branding framework — real examples, visual breakdowns, exercises, and a personalized brand assessment."
5. CTA row (unchanged): `Unlock My Starter Kit →` + `Instant Access · Free · No Spam`.
6. Dark plum contrast card on the right (desktop) / below copy (mobile) — see below.

### Color treatment

- Remove the pink/lavender wash: delete `.starter-hero-glow`, the hero `<Sparkles>` layer, and the orbiting glyphs.
- Hero background = site default cream/ivory (`bg-background`), same border-bottom divider used elsewhere.
- Typography = existing site tokens (`font-serif-alt` for H1, `text-foreground` / `text-muted-foreground`), no shimmer/gradient text.
- CTA = existing `.button-solid` with no extra glow.
- Contrast is delivered by ONE element: a deep-plum bordered "book cover" card replacing the current pastel mockup.

### Dark plum mockup card (the intentional contrast)

- Background: deep plum from the existing lower "final" section token (reuse, don't invent a new color).
- Cream inner border + subtle inner shadow, matches the luxury card treatment already on the page.
- Contents:
  - Eyebrow: `BLUSHBUILD · CHAPTER ONE`
  - Serif title: `Pretty & Unforgettable Brand™`
  - Note: `An interactive Starter Kit`
  - Hairline divider
  - Foot: `Framework · Worksheets · Assessment`
- No floating orbits, no shine sweep. Static, editorial, on-brand.

### Mobile layout

- Single column, headline first, card below CTA.
- Card max-width capped so it doesn't dominate; comfortable padding matching other sections.

### Files touched

- `src/routes/starter-kit.tsx` — replace the `{/* HERO */}` block only (lines ~176–229). Remove `Sparkles` + `.starter-orbit*` + `.starter-hero-glow` usage from the hero.
- `src/styles.css` — retire hero-specific pastel/shimmer/orbit rules (`.starter-hero-glow`, `.starter-hero-shimmer`, `.starter-hero-script`, `.starter-orbit*`, `.starter-mockup-shine`); add restrained rules for the new plum card reusing existing plum/cream tokens. No new color tokens introduced.

### Out of scope

- All other sections (Is this you, Sound like you, Experience, Picture this, Bonus, Differentiators, FAQ, Final CTA) untouched.
- Form fields, validation, submit handler, redirect: unchanged.
- No other routes modified.

Awaiting approval before editing.
## Give `/starter-kit` a lush, "Pretty Products"-level hero

Match the richness of the reference (deep lavender field, layered product stack, florals, birds, glow, sparkles) while staying inside the existing blush/lavender/plum + serif/script style already used elsewhere on the page. Only the hero block changes.

### Visual direction

- Deep lavender-to-plum gradient field with soft radial glow (uses existing `--starter-lavender` / `--starter-plum` tokens, no new palette).
- One AI-generated hero composition image, styled like the reference: a layered stack of a workbook cover, laptop mockup, tablet mockup, and printed worksheets, surrounded by white hydrangeas, green leaves, two soft-focus birds mid-flight, butterflies, and a central circular "07 DAYS" badge — all on the lavender field, lit like a still-life photograph. Generated at 1400×1200 with `imagegen--generate_image` (premium quality, for legible mock text on the workbook cover reading "The Pretty & Unforgettable Brand™ Starter Kit"). Saved to `src/assets/starter-hero-stack.jpg` and imported.
- The image replaces the current CSS "mockup card" on the right; the left column keeps the current copy/CTA but is restyled to sit on the darker lavender field with light-on-dark type (script accent stays blush).

### Hero layout (desktop)

```text
┌──────────────────────────────┬────────────────────────────────┐
│ ✦ FREE INTERACTIVE           │            ✦    ♡              │
│   STARTER KIT                │      ┌───────────────────┐     │
│                              │      │  hydrangeas +     │     │
│ build a                      │      │  workbook cover   │     │
│ Faceless Brand               │      │  laptop + tablet  │     │
│ people can't forget.         │      │  birds + leaves   │     │
│                              │      │  "07 DAYS" seal   │     │
│ Build a brand that feels …   │      └───────────────────┘     │
│ premium, authentic, and      │           ✧            ❁       │
│ impossible to ignore.        │                                │
│                              │                                │
│ [ Unlock My Starter Kit → ]  │                                │
│ Instant Access · Free        │                                │
└──────────────────────────────┴────────────────────────────────┘
```

- Background: full-bleed lavender→plum gradient with a soft blush radial glow behind the image; existing `Sparkles` component reused, count bumped to 22, tinted lighter for contrast.
- Left copy: existing headline structure kept, but headline color shifts to warm cream on the dark field; "Faceless Brand" keeps the blush shimmer; a thin blush divider with a centered `✦` sits under the headline.
- Right: the generated composition floats in with a soft drop shadow and a slow ambient float animation (reuse existing `starter-orbit` keyframes; no new animation libs). Four small orbit glyphs (`✦ ♡ ✧ ❁`) drift around it.
- CTA button and eyebrow pill unchanged in behavior; only restyled for the darker field (blush gradient stays; eyebrow becomes translucent white pill with blush text).

### Mobile behavior

- Image stacks above the copy, capped at ~360px wide, centered.
- Headline drops one size step; orbit glyphs hide below 640px (matches current mobile rules).

### Files touched

- `src/assets/starter-hero-stack.jpg` — new, generated via `imagegen--generate_image` (premium tier so the workbook cover text renders legibly).
- `src/routes/starter-kit.tsx` — replace only the `{/* HERO */}` JSX with the new two-column layout and import the new asset. Nothing below the hero changes.
- `src/styles.css` — add `.starter-hero--lush` variant styles (dark gradient field, cream headline color, image frame + float, blush divider) and extend the existing mobile media query for the hero. No token changes.

### Out of scope

- No changes to sections below the hero, no new routes, no data or form-logic changes, no new dependencies.

## Goal
Elevate `/starter-kit` to match the richness of the Pretty Products Challenge reference (IMG_6532–IMG_6547): more color, floating motion, and every content block shown in the examples — including a full FAQ accordion.

## Scope
Only `src/routes/starter-kit.tsx` and scoped styles in `src/styles.css`. No changes to other routes, data, or business logic. Respect `prefers-reduced-motion`.

## New / upgraded sections (in order)
1. **Hero** — layered blush→lavender→plum gradient wash, drifting sparkles + hearts around the mockup, animated shimmer on the "Starter Kit" headline, glowing pulse CTA. Keep existing copy.
2. **Is this you?** — reworked into chat-bubble conversation (alternating left/right with avatar dots, IMG_6533 style), gentle float loop + scroll stagger.
3. **Sound like you?** — new script-serif transition block bridging pain → promise (IMG_6535).
4. **What you'll experience** — existing 8 chapter cards, upgraded with gradient borders, hover tilt/lift, sparkle-on-hover, scroll reveal stagger.
5. **Picture this — Seven days from now…** — new checklist section with 4 outcome cards + rose-gold check badges (IMG_6545).
6. **Bonus tools & templates** — new visual row of "unlocked" ornament cards (inline SVG lock-cards, IMG_6542 vibe) with floating animation.
7. **What makes this different** — keep, add animated shimmer line drawing across the progress dots.
8. **Quick questions / Everything you're wondering (FAQ)** — new accordion with all questions from IMG_6546, adapted to Blushbuild voice:
   - I'm not a designer. Will this work for me?
   - How much time do I need each day?
   - I sell printables / wall art / planners — does it apply?
   - Do I need paid Canva or fancy tools?
   - Is it live or can I do it at my own pace?
   - What happens after the 7 days?
   - Do you offer refunds / is my email safe?
   Native `<details>`/`<summary>` for accessibility, custom styled with animated `+`/`−`, smooth expand.
9. **So… shall we Make It Pretty?** — new deep-plum finale band above the form with aurora blob animation and script accent (IMG_6547 mood, Blushbuild wording).
10. **Final CTA form** — keep fields + redirect to `/chapter-one`; upgrade to shimmering button, glow ring on focus, floating sparkle ornaments.

## Motion system (added to styles.css)
Keyframes: `float-slow`, `drift`, `shimmer`, `aurora`, `sparkle-twinkle`, `gradient-pan`, `pulse-glow`, `reveal-up`, `accordion-open`.
Utilities: `.reveal` + `.is-visible` toggled by a small IntersectionObserver hook in the page. All looping animations disabled under `@media (prefers-reduced-motion: reduce)`.

## Technical notes
- Pure CSS + inline SVG ornaments — no new dependencies.
- Mobile-first: ornament count/size reduced under `sm:`; accordion single-column.
- Form logic, validation, localStorage save, and `/chapter-one` redirect unchanged.
- Header banner link to `/starter-kit` unchanged.

## Deliverable
On approval, one edit to `src/routes/starter-kit.tsx` (structure + observer + FAQ data) and one append to `src/styles.css` (keyframes + new `.starter-*` classes). Result: a colorful, animated, fully-featured landing page with FAQ that mirrors the reference depth while staying in the Blushbuild editorial system.
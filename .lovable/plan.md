## Hero neutral rework — /starter-kit

Only the hero section changes. No other page, route, style block, or form logic is touched. No code is edited until you approve this plan.

### 1. Hierarchy (top → bottom, mobile-first)

1. Eyebrow pill — `✦ FREE INTERACTIVE STARTER KIT` (existing pill style, neutral border/background).
2. **H1** in `--font-display` (Cormorant Garamond), `--color-foreground` (site's dark espresso):
   `Pretty & Unforgettable Brand™ Starter Kit`
   ("&" set in `--font-serif-alt` italic for editorial rhythm; "Brand™ Starter Kit" wraps to its own line on desktop).
3. **Supporting promise** directly under H1, in Italiana italic, `color-mix` of foreground @ 70%:
   `Build a faceless brand people can't forget — premium, authentic, unmistakably yours.`
4. Short body paragraph, kept:
   Italic emphasis line "Not another free PDF." + follow-up sentence describing the interactive Starter Kit.
5. CTA row: existing `.button-solid` + `Instant Access · Free · No Spam` micro-caption.
6. Right column (stacks below on mobile): one neutral mockup card (details in §2).

### 2. Neutral color treatment

Palette pulled only from existing site tokens — nothing new introduced:

- Hero background: `var(--color-background)` (cream/ivory).
- Section divider: `border-bottom: 1px solid var(--color-border)` (taupe).
- Typography: `var(--color-foreground)` for headline, `var(--color-muted-foreground)` for eyebrow/caption, foreground @ ~70–80% for body.
- CTA: existing `.button-solid`, no glow, no pulse.

Mockup card (the single contrast element):

- Fill: warm white / oatmeal — `color-mix(in oklab, var(--color-card) 90%, white 10%)`.
- Outer border: 1px `var(--color-border)`.
- Header band across top of card: espresso — `var(--color-foreground)` at full opacity, height ~2.75rem, contains `BLUSHBUILD · CHAPTER ONE` eyebrow in cream (`var(--color-background)`).
- Inner editorial border: 1px hairline in `color-mix(var(--color-foreground) 25%, transparent)`, inset 0.75rem.
- Shadow: `0 24px 50px -30px var(--color-paper-shadow)` (matches other cards on the site).
- Contents below header band, all in foreground/foreground-muted:
  - Serif title `Pretty & Unforgettable / Brand™` (display + italic serif).
  - Italic note `An interactive Starter Kit`.
  - Hairline divider in border color.
  - Foot micro-caps `Framework · Worksheets · Assessment`.

No purple, plum, lavender, blush, gradients, sparkles, orbits, glow, shimmer, or floating glyphs anywhere in the hero.

### 3. Removals

From the hero JSX and its scoped styles only:

- Any remaining plum/purple fills on `.starter-mockup` (currently `#3a2231` + cream text) — replaced with the neutral oatmeal card above.
- Existing decorative pill shadow tint if any lingers — replaced with plain border.
- Confirm removal (already gone last turn but re-verify): `Sparkles` in hero, `.starter-hero-glow`, `.starter-orbit*`, `.starter-hero-shimmer`, `.starter-hero-script`, `.starter-cta-glow` from the CTA button, `.starter-mockup-shine`, floating animation on the card.

### 4. Files & rules changed

- `src/routes/starter-kit.tsx` — only the `{/* HERO */}` block (~lines 176–222). Remove `starter-cta-glow` if still on the CTA; keep everything else on the page identical.
- `src/styles.css` — only these selectors:
  - `.starter-hero` (keep neutral background + border-bottom).
  - `.starter-mockup`, `.starter-mockup::before`, `.starter-mockup-inner`, `.starter-mockup-eyebrow`, `.starter-mockup-title`, `.starter-mockup-note`, `.starter-mockup-line`, `.starter-mockup-foot` — rewritten to the oatmeal-card treatment above (add a `.starter-mockup-header` rule for the espresso band).
  - `.starter-eyebrow-pill` — confirm neutral (already neutral, no change expected).

No other selectors touched. No new CSS variables added. No dependency changes.

### 5. Confirmation

No code will be modified until you approve this plan.
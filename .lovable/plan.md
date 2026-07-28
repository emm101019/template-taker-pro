# /starter-kit — Full Neutral Visual Reset

Only visual styling changes. Copy, layout, JSX structure, form logic, redirect, and mobile responsiveness stay identical.

## 1. Section-by-section inventory of colored styling to remove

Verified in `src/routes/starter-kit.tsx` and `src/styles.css`.

**Hero (`.starter-hero`)** — already neutral (cream + oatmeal/espresso mockup). Keep as-is. Only check: no lingering pink shimmer classes render.

**"Is this you?" chat section (`.starter-section-lavender`, lines 1398–1402, 1441–1466)**
- `.starter-section-lavender` background wash
- `.starter-bokeh` colored blobs
- `.starter-avatar-plum` gradient `#4a2937 → #7d4a5c`
- `.starter-avatar-lavender` gradient `#9b72cf → #c9a0dc`
- `.starter-avatar-blush` gradient `#c17c74 → #e8a87c`
- `.starter-avatar-cream` gradient `#d4b896 → #c9a084`
- `.starter-bubble-plum` gradient `#4a2937 → #6a3a4d`, ink `#f8e8ee`
- `.starter-bubble-lavender` gradient `#e8dff5 → #d4c1e8`, ink `#4a2937`
- `.starter-bubble-blush` gradient `#f8e8ee → #f4c5d8`
- `.starter-bubble-cream` gradient `#fdf6e3 → #f0ebe3`
- `.starter-script-accent` and `.starter-script-light` `#f4c5d8`

**"Sound like you?" (`.starter-section-blush`, line 1403–1407)**
- Blush-tinted section background

**Experience grid (`.starter-experience-card::before`, `.starter-card-shine`, `.starter-card-sparkle`, lines 1483–1503)**
- Colored radial glow overlay
- Pink shine sweep
- Pink sparkle glyph

**"Picture this" (`.starter-section-cream`, `.starter-picture-card`, lines 1408–1410, 1511–1521)**
- Cream section is already neutral, but `.starter-picture-card:hover` box-shadow uses `#9b72cf` (purple)
- `.starter-picture-card h3` and `p` locked to `#4a2937` (plum ink) instead of tokens
- `.starter-check` likely tinted (verify)

**Bonus tools (`.starter-section-plum`, `.starter-title-light`, `.starter-body-light`, lines 1411–1417, 1530–1553)**
- Deep-plum section background
- Light-pink title/body ink `#f8e8ee`
- `.starter-bonus-glyph` color `#9b72cf`
- `.starter-bonus-card` likely plum-tinted (verify surrounding rules)

**FAQ (`.starter-faq-item`, `.starter-faq-plus`, lines 1556–1578)**
- `.is-open` border + box-shadow use `#9b72cf`
- `.starter-faq-plus.is-open` fill `#c9a0dc`
- Answer text locked to `#4a2937`

**Final CTA (`.starter-final`, `.starter-aurora-blob`, lines 1582–1602)**
- `.starter-aurora-blob.b1` `#c17c74`, `.b2` `#9b72cf`, `.b3` `#f4c5d8`
- `.starter-final-title em` accent `#f4c5d8`
- `.starter-sparkles.is-light .starter-sparkle` `#f8dfec`

**Global decorative**
- `.starter-sparkles` pink light variant
- Any `starter-hero-glow`, `starter-hero-shimmer`, `starter-cta-glow` (referenced in the reduced-motion rule) — if they exist as color washes, neutralize; if unused, leave the reduced-motion rule as harmless.

## 2. Neutral replacements

Palette (all pulled from existing tokens in `src/styles.css`): `--background` (warm ivory), `--card` (warm white), `--secondary` / `--accent` (oatmeal / soft taupe), `--muted` (linen), `--foreground` (espresso), `--primary` (soft black), `--footer` (deep espresso section), `--footer-foreground` (cream on dark).

| Current | Replacement |
| --- | --- |
| `.starter-section-lavender` background | `background: var(--background)` (warm ivory) |
| `.starter-section-blush` background | `background: var(--card)` (warm white) |
| `.starter-section-cream` background | keep — already neutral; ensure it uses `var(--secondary)` oatmeal wash |
| `.starter-section-plum` background | `background: var(--footer)` (dark espresso); text uses `var(--footer-foreground)` |
| `.starter-bokeh`, `.starter-aurora-blob*` | Remove color; either delete rules or set `background: transparent` and `display: none` on decorative blobs |
| `.starter-avatar-*` gradients | Single flat `background: var(--secondary)`; glyph color `var(--foreground)`. The plum/dark variant uses `background: var(--foreground)` with `color: var(--background)` for contrast |
| `.starter-bubble-plum` | `background: var(--foreground); color: var(--background);` (dark editorial bubble) |
| `.starter-bubble-lavender` / `-blush` / `-cream` | `background: var(--card); color: var(--foreground); border: 1px solid color-mix(in oklab, var(--foreground) 10%, transparent);` — all bubbles read as warm-white with taupe hairline |
| `.starter-script-accent`, `.starter-script-light` color `#f4c5d8` | `color: var(--muted-foreground)` on light sections; `color: color-mix(in oklab, var(--footer-foreground) 80%, transparent)` on dark sections |
| `.starter-experience-card::before` colored glow | Remove; keep hover lift + subtle warm shadow only |
| `.starter-card-shine` pink sweep | Change to `linear-gradient(120deg, transparent, color-mix(in oklab, var(--foreground) 4%, transparent), transparent)` — neutral sheen |
| `.starter-card-sparkle` pink glyph | `color: color-mix(in oklab, var(--foreground) 35%, transparent)` |
| `.starter-picture-card:hover` box-shadow `#9b72cf` | `box-shadow: 0 18px 40px -22px color-mix(in oklab, var(--foreground) 25%, transparent)` |
| `.starter-picture-card h3` / `p` locked `#4a2937` | `color: var(--foreground)` / `var(--muted-foreground)` |
| `.starter-check` tint | `background: var(--secondary); color: var(--foreground);` |
| `.starter-bonus-card` | `background: color-mix(in oklab, var(--footer-foreground) 8%, var(--footer)); border: 1px solid color-mix(in oklab, var(--footer-foreground) 18%, transparent); color: var(--footer-foreground);` |
| `.starter-bonus-glyph` `#9b72cf` | `color: var(--footer-foreground)` |
| `.starter-title-light`, `.starter-body-light`, `.starter-eyebrow-light` | `color: var(--footer-foreground)` / `color-mix(...80%, transparent)` |
| `.starter-faq-item.is-open` purple border + shadow | `border-color: color-mix(in oklab, var(--foreground) 25%, transparent); box-shadow: 0 12px 30px -18px color-mix(in oklab, var(--foreground) 18%, transparent);` |
| `.starter-faq-plus.is-open` `#c9a0dc` | `background: var(--foreground); color: var(--background);` |
| `.starter-faq-answer p` locked `#4a2937` | `color: var(--muted-foreground)` |
| `.starter-final-title em` `#f4c5d8` accent | `color: var(--footer-foreground)` (italic serif carries the emphasis, not color) |
| `.starter-sparkles.is-light .starter-sparkle` `#f8dfec` | `color: color-mix(in oklab, var(--footer-foreground) 55%, transparent)` (kept subtle, monochrome) |
| Any `linear-gradient(...pink/purple...)` | Delete or replace with flat token |

Sparkle/aurora/bokeh decorations become monochrome (or are removed) — they never reintroduce color.

## 3. Files / selectors changed

**Only `src/styles.css`** — every rule listed in §1 (roughly lines 1398–1602, plus the `.starter-avatar-*` / `.starter-bubble-*` block at 1441–1466 and picture/bonus/faq/final blocks). No token additions needed; existing neutral tokens (`--background`, `--card`, `--secondary`, `--muted`, `--foreground`, `--footer`, `--footer-foreground`) cover the palette.

**No changes to** `src/routes/starter-kit.tsx` — class names, JSX, `tone` values, and copy remain identical. The classes `starter-section-lavender`, `starter-bubble-plum`, etc. keep their names but are restyled to neutral (semantic-name-only, no visual purple).

## 4. Proposed neutral rhythm

```text
Hero                → warm ivory (var(--background))                [unchanged]
Is this you?        → warm ivory; bubbles: warm-white + one dark espresso bubble for rhythm
Sound like you?     → warm white (var(--card))
What you'll experience → oatmeal panel (var(--secondary)) with warm-white cards
Picture this        → warm ivory with oatmeal cards
Bonus tools         → dark espresso (var(--footer)) with cream typography  ← main dark break
What makes this different → warm white
FAQ                 → oatmeal panel (var(--secondary))
Final CTA           → dark espresso (var(--footer)) with cream typography + espresso submit button
```

Two dark editorial breaks (Bonus + Final CTA) give contrast; everything else alternates ivory / warm-white / oatmeal.

## 5. Confirmation

After this pass, no purple, lavender, mauve, pink, blush-pink, or colored glow/shadow will remain anywhere on `/starter-kit`. Every color reference resolves to an existing neutral design token (ivory, warm white, oatmeal, taupe, espresso, cream-on-dark). All hardcoded hex values `#4a2937`, `#7d4a5c`, `#9b72cf`, `#c9a0dc`, `#c17c74`, `#e8a87c`, `#d4b896`, `#c9a084`, `#f8e8ee`, `#f4c5d8`, `#e8dff5`, `#d4c1e8`, `#f8dfec`, `#fdf6e3`, `#f0ebe3`, `#6a3a4d` will be gone from the starter-kit rules.

**No files will be edited until you approve this plan.**

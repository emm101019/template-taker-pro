## Goal

Every freebie on `/resources` and `/resources/$slug` gets:
1. Real, finished long-form content (not just 4 preview lines)
2. A working "Download PDF" button that produces a branded PDF instantly

## Approach — PDFs generated in the browser with `jsPDF`

Client-side generation (no server, no storage, no build step, no hosting cost). One button click → PDF downloads immediately. Works for all 8 resources.

- Install `jspdf`.
- New helper `src/lib/pdf/build-resource-pdf.ts` — takes a `ResourcePdf` object (title, subtitle, sections of headings + paragraphs + bullet lists) and produces a styled multi-page PDF: cream background, serif "Blushbuild" wordmark header, Cormorant-style title, body text with wrapping/pagination, page numbers, footer "blushbuild.com".
- Uses jsPDF built-in fonts (Times/Helvetica) — no font loading, avoids the Unicode-glyph pitfalls.

## Content — extend each resource with a full PDF body

Extend `Resource` type in `src/content/site.ts` with:

```ts
pdf: {
  subtitle: string;
  intro: string;               // 1–2 paragraphs
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];                          // 4–7 sections per resource
  closing: string;              // sign-off paragraph
};
```

Populate `pdf` for all 8 existing resources with realistic, finished placeholder copy (≈600–1000 words each) that matches the resource's topic:

1. Etsy Starter Kit — shop setup walkthrough, listing templates, pricing worksheet, first-week promo plan
2. Canva Prompt Ideas — 50 prompts grouped by platform (reels/carousels/pins), each with hook + outline
3. Product Launch Checklist — T-14 → T+7 day-by-day checklist, batch template, warm-launch email script
4. Pinterest Script Notes — 30 hook formulas, SEO title starters, description templates, idea-pin scripts
5. Brand Clarity Workbook — 12 voice prompts, palette worksheet, offer stack, one-line positioning generator
6. Faceless Business Map — niche selector, 3 pillars, voice bank, product ladder, 30-day plan
7. Content Strategy Planner — weekly/monthly pages, batching flow, metrics dashboard, Sunday reset ritual
8. Creator Launch Swipes — swipe copy for emails, captions, pins, DMs, sales-page sections

## Wire the download button

Update `src/routes/resources.$slug.tsx`:
- Replace the "Drop your email → Send it over" form section with a primary **"Download the PDF →"** button (plus keep an optional email field labelled "Also email me future freebies" — cosmetic, no backend).
- On click: call the PDF builder with `resource.pdf`, then `doc.save(`${resource.slug}.pdf`)`.
- Add a smaller "Download PDF" button on each `/resources` grid card too, so users can grab a freebie without clicking through.

Also add on the shop product detail page for `brand-clarity-workbook` a cross-link ("Grab the free workbook") pointing to the resource — already exists in copy, just confirm the link.

## Files touched

```text
package.json                              (add jspdf)
src/lib/pdf/build-resource-pdf.ts         (NEW — jsPDF builder)
src/content/site.ts                       (extend Resource type + add `pdf` for all 8)
src/routes/resources.$slug.tsx            (Download PDF button, remove email-only form)
src/routes/resources.index.tsx            (small Download PDF button on each card)
```

## Out of scope

- Real email capture / mailing list
- Storing generated PDFs on a server
- Custom fonts embedded in PDFs (uses jsPDF built-ins for reliability)
- New resources beyond the 8 already listed (can add later if you want more)

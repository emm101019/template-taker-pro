## Problem

`jsPDF`'s `doc.save()` is unreliable on iOS Safari (the user's current viewport is 430px, and the session replay showed the "Saved as etsy-starter-kit.pdf" toast appear but no file actually reached the device). iOS blocks programmatic downloads and needs either an `<a download>` click gesture or the PDF opened in a new tab so the user can tap Share → Save to Files.

## Fix

Rewrite the download path in `src/lib/pdf/build-resource-pdf.ts`:

1. Generate a `Blob` with `doc.output("blob")` and wrap it in `URL.createObjectURL`.
2. Detect iOS (`/iPad|iPhone|iPod/.test(navigator.userAgent)` plus modern iPad detection via `navigator.maxTouchPoints > 1 && /Mac/.test(navigator.platform)`).
3. On iOS: `window.open(url, "_blank")` so the PDF loads in a new tab where the user can save it. Revoke the URL after a short delay.
4. Everywhere else: create a hidden `<a href={url} download={`${slug}.pdf`}>`, append, click, remove, then revoke the URL.
5. Return `{ opened: "download" | "newtab" }` from `downloadResourcePdf` so the UI can adjust its confirmation copy.

Update `src/routes/resources.$slug.tsx`:

- Store the returned mode in state.
- When `newtab`, show: "Opened in a new tab — tap Share → Save to Files to keep it."
- When `download`, keep the current "Saved as `<slug>.pdf`" text.

Also apply the same helper in `src/routes/resources.index.tsx` (no code change needed — it already goes through `downloadResourcePdf`, so the fix propagates automatically).

## Files touched

```text
src/lib/pdf/build-resource-pdf.ts       (blob URL + anchor click, iOS new-tab fallback)
src/routes/resources.$slug.tsx          (iOS-aware confirmation message)
```

## Out of scope

- Server-side PDF generation
- Saving PDFs to the user's Lovable Cloud storage
- Email delivery of the PDF

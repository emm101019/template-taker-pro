## Goal
Make the freebie downloads work reliably and gate them behind an email capture.

## Changes

### 1. Email capture gate (new)
- Add a small modal component `src/components/EmailGateModal.tsx`:
  - Fields: email (required, zod-validated), optional first name.
  - Submit → stores `{email, resourceSlug, resourceTitle, timestamp}` in `localStorage` under `blushbuild.leads` (append to array) and sets `blushbuild.subscribed=true` so returning visitors skip the modal.
  - On success, calls an `onUnlock()` callback passed by the parent, then closes.
- Styling matches the cream/serif Blushbuild system (reuses existing button + input classes).

### 2. Wire the gate into resource buttons
- `src/routes/resources.index.tsx` and `src/routes/resources.$slug.tsx`:
  - Replace direct `<a href={pdfUrl} download>` with a button that:
    1. If `localStorage.blushbuild.subscribed` is true → immediately trigger download.
    2. Otherwise → open `EmailGateModal`; on unlock, trigger download.
  - Download trigger uses a programmatic `<a>` click with `download` attr for desktop/Android, and `window.open(url, '_blank')` on iOS Safari (same UA check already in the codebase) so Safari reliably shows the PDF instead of a blank page.

### 3. Fix "Download button doesn't work"
Root cause candidates to verify in build mode before finalizing (I'll read `src/content/resource-downloads.ts` + both resource routes first):
- Static PDF assets referenced via import may not resolve, OR the `<a download>` is being intercepted by TanStack `<Link>`, OR iOS is blocking the navigation.
- Fix: ensure PDFs are imported as URL strings (Vite `?url` if needed) and the trigger is a plain `<button>` (not a `Link`) that performs the platform-appropriate action above.

### 4. Copy updates
- Button label stays "Download PDF"; helper text under it: "Enter your email once to unlock every freebie."
- Modal copy: "Get the {resourceTitle} — free. Drop your email and we'll unlock all Blushbuild freebies on this device."

## Out of scope
- No backend/email service integration (leads stored locally only). If you want emails sent to Lovable Cloud / a mailing list, say the word and I'll add that as a follow-up.

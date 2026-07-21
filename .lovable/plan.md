## Plan

1. **Remove the blank-screen trigger**
   - Replace the root stylesheet loading method with the standard TanStack/Vite CSS import so mobile Safari is not depending on a `/src/styles.css` stylesheet link that is failing in the preview.
   - Keep Google Fonts in the route head, since those are already loading correctly.

2. **Make the email gate safer on mobile**
   - Keep the email requirement before downloads.
   - Change the download flow so iPhone Safari opens the PDF from a direct user action after the email is submitted, instead of relying on a delayed programmatic popup that Safari may block.
   - Add a clear fallback link inside the modal/result state: “Open PDF” so even if automatic opening is blocked, the customer can tap it manually.

3. **Clean up leftover PDF-generation risk**
   - Remove the unused `jspdf` dependency and any stale PDF generator imports/files if they are no longer used, so the mobile bundle stays lighter and avoids the earlier white-screen issue.

4. **Verify**
   - Check the live preview DOM/styles after the fix.
   - Test the resources page flow: tap Download PDF → email modal appears → valid email unlocks → PDF opens/downloads via a real link.
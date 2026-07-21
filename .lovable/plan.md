Plan to fix the blank white screen after tapping Download PDF:

1. **Make the PDFs real files, not browser-generated blobs**
   - The current code builds the PDF in the browser only after the button is pressed.
   - On iPhone Safari, that blob/new-tab flow can open a blank page after the browser says it was approved.
   - I’ll generate actual PDF files for every free resource and place them in the app as downloadable files.

2. **Change the Download PDF buttons into normal file links**
   - Each resource card and resource detail page will link directly to its matching PDF file.
   - This avoids the popup/new-tab approval issue and should work on iPhone, Android, and desktop.
   - The button will open/download the actual PDF instead of running JavaScript to create one.

3. **Keep the resource pages filled out**
   - The existing page content stays the same.
   - The PDF button will simply become reliable.

4. **Remove the fragile PDF popup behavior**
   - I’ll remove the iOS-specific blob/new-tab logic that is causing the blank screen.
   - I’ll keep the UI simple: “Download PDF” opens the finished PDF.

5. **Verify the PDFs visually**
   - After generating them, I’ll convert each PDF page to images and inspect them for blank pages, cut-off text, bad spacing, or missing content.
   - Then I’ll verify the resource page buttons point to the correct PDF files.
import fs from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb, PDFPage, PDFFont } from "pdf-lib";
import { resourcePdfs } from "../src/content/resource-pdfs";

const OUT_DIR = path.resolve(process.cwd(), "public/freebies");

const PAGE_W = 612;
const PAGE_H = 792;
const MARGIN_X = 72;
const MARGIN_TOP = 108;
const MARGIN_BOTTOM = 72;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const CREAM = rgb(0.976, 0.961, 0.941);
const TEXT = rgb(0.243, 0.173, 0.133);
const ACCENT = rgb(0.784, 0.647, 0.576);

const BODY_SIZE = 10.5;
const BODY_LEADING = 15;
const SMALL_SIZE = 9;
const LABEL_SIZE = 10;
const SUBTITLE_SIZE = 13;
const TITLE_SIZE = 28;
const SECTION_SIZE = 15;

function wrapLine(text: string, width: number, font: PDFFont, size: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    const w = font.widthOfTextAtSize(test, size);
    if (w <= width) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function generatePdf(slug: string) {
  const data = resourcePdfs[slug];
  if (!data) throw new Error(`Unknown resource: ${slug}`);

  const doc = await PDFDocument.create();
  console.log("StandardFonts", StandardFonts);
  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const timesBold = await doc.embedFont(StandardFonts.TimesBold);
  const timesItalic = await doc.embedFont(StandardFonts.TimesItalic);

  let page = doc.addPage([PAGE_W, PAGE_H]);
  let y = drawPageBase(page, timesItalic);

  // Cover label
  page.drawText("A Blushbuild Freebie", {
    x: MARGIN_X,
    y: y - 18,
    size: LABEL_SIZE,
    font: helvetica,
    color: TEXT,
  });
  y -= 42;

  // Title
  const titleLines = wrapLine(
    "Pretty & Unforgettable Brand Starter Kit",
    CONTENT_W,
    timesBold,
    TITLE_SIZE
  );
  for (const line of titleLines) {
    page.drawText(line, {
      x: MARGIN_X,
      y,
      size: TITLE_SIZE,
      font: timesBold,
      color: TEXT,
    });
    y -= TITLE_SIZE + 6;
  }
  y -= 8;

  // Subtitle
  const subtitleLines = wrapLine(data.subtitle, CONTENT_W, timesItalic, SUBTITLE_SIZE);
  for (const line of subtitleLines) {
    page.drawText(line, {
      x: MARGIN_X,
      y,
      size: SUBTITLE_SIZE,
      font: timesItalic,
      color: TEXT,
    });
    y -= SUBTITLE_SIZE + 6;
  }
  y -= 18;

  // Intro
  const introLines = wrapLine(data.intro, CONTENT_W, helvetica, BODY_SIZE);
  for (const line of introLines) {
    page.drawText(line, {
      x: MARGIN_X,
      y,
      size: BODY_SIZE,
      font: helvetica,
      color: TEXT,
      lineHeight: BODY_LEADING,
    });
    y -= BODY_LEADING;
  }

  // Content pages
  for (const section of data.sections) {
    ({ page, y } = ensureSpace(doc, page, y, timesBold, helvetica, SECTION_SIZE + 24));
    y -= 12;
    page.drawText(section.heading, {
      x: MARGIN_X,
      y,
      size: SECTION_SIZE,
      font: timesBold,
      color: TEXT,
    });
    y -= SECTION_SIZE + 14;

    if (section.paragraphs) {
      for (const para of section.paragraphs) {
        ({ page, y } = ensureSpace(doc, page, y, timesBold, helvetica, BODY_LEADING));
        const lines = wrapLine(para, CONTENT_W, helvetica, BODY_SIZE);
        for (const line of lines) {
          page.drawText(line, {
            x: MARGIN_X,
            y,
            size: BODY_SIZE,
            font: helvetica,
            color: TEXT,
            lineHeight: BODY_LEADING,
          });
          y -= BODY_LEADING;
        }
        y -= 8;
      }
    }

    if (section.bullets) {
      const bulletIndent = 14;
      const bulletWidth = CONTENT_W - bulletIndent;
      for (const bullet of section.bullets) {
        ({ page, y } = ensureSpace(doc, page, y, timesBold, helvetica, BODY_LEADING));
        const lines = wrapLine(bullet, bulletWidth, helvetica, BODY_SIZE);
        for (let i = 0; i < lines.length; i++) {
          const x = MARGIN_X + bulletIndent;
          if (i === 0) {
            page.drawText("•", {
              x: MARGIN_X + 2,
              y,
              size: BODY_SIZE,
              font: helveticaBold,
              color: TEXT,
            });
          }
          page.drawText(lines[i], {
            x,
            y,
            size: BODY_SIZE,
            font: helvetica,
            color: TEXT,
            lineHeight: BODY_LEADING,
          });
          y -= BODY_LEADING;
        }
      }
      y -= 8;
    }
  }

  // Closing
  ({ page, y } = ensureSpace(doc, page, y, timesBold, helvetica, BODY_LEADING * 4));
  y -= 12;
  const closingLines = wrapLine(data.closing, CONTENT_W, helvetica, BODY_SIZE);
  for (const line of closingLines) {
    page.drawText(line, {
      x: MARGIN_X,
      y,
      size: BODY_SIZE,
      font: helvetica,
      color: TEXT,
      lineHeight: BODY_LEADING,
    });
    y -= BODY_LEADING;
  }

  // Draw headers/footers on all pages with correct page numbers
  const pages = doc.getPages();
  for (let i = 0; i < pages.length; i++) {
    drawHeaderAndFooter(pages[i], i + 1, pages.length, helvetica, timesItalic);
  }

  const pdfBytes = await doc.save();
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.pdf`), pdfBytes);
  console.log(`Generated public/freebies/${slug}.pdf (${pages.length} pages)`);
}

function drawPageBase(page: PDFPage, headerFont: PDFFont) {
  // Background
  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_W,
    height: PAGE_H,
    color: CREAM,
  });

  // Header word
  page.drawText("Blushbuild", {
    x: MARGIN_X,
    y: PAGE_H - 54,
    size: 14,
    font: headerFont,
    color: TEXT,
  });

  return PAGE_H - 96;
}

function drawHeaderAndFooter(page: PDFPage, pageNum: number, total: number, footerFont: PDFFont, headerFont: PDFFont) {
  // Header line across top
  page.drawLine({
    start: { x: MARGIN_X, y: PAGE_H - 66 },
    end: { x: PAGE_W - MARGIN_X, y: PAGE_H - 66 },
    thickness: 0.75,
    color: ACCENT,
  });

  // Header word (in case page was added after base)
  page.drawText("Blushbuild", {
    x: MARGIN_X,
    y: PAGE_H - 54,
    size: 14,
    font: headerFont,
    color: TEXT,
  });

  // Footer line across bottom
  page.drawLine({
    start: { x: MARGIN_X, y: 52 },
    end: { x: PAGE_W - MARGIN_X, y: 52 },
    thickness: 0.75,
    color: ACCENT,
  });

  page.drawText("blushbuild.com", {
    x: MARGIN_X,
    y: 36,
    size: SMALL_SIZE,
    font: footerFont,
    color: TEXT,
  });
  page.drawText(`Page ${pageNum}`, {
    x: PAGE_W - MARGIN_X - footerFont.widthOfTextAtSize(`Page ${pageNum}`, SMALL_SIZE),
    y: 36,
    size: SMALL_SIZE,
    font: footerFont,
    color: TEXT,
  });
}

function ensureSpace(doc: PDFDocument, page: PDFPage, y: number, headerFont: PDFFont, footerFont: PDFFont, needed: number) {
  if (y - needed < MARGIN_BOTTOM + 18) {
    const newPage = doc.addPage([PAGE_W, PAGE_H]);
    drawPageBase(newPage, headerFont);
    return { page: newPage, y: PAGE_H - 108 };
  }
  return { page, y };
}

const slug = process.argv[2] || "brand-starter-kit";
generatePdf(slug).catch((err) => {
  console.error(err);
  process.exit(1);
});


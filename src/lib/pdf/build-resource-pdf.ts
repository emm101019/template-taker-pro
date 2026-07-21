import { jsPDF } from "jspdf";

export type ResourcePdf = {
  subtitle: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  closing: string;
};

const CREAM: [number, number, number] = [250, 244, 236];
const INK: [number, number, number] = [40, 30, 26];
const MUTED: [number, number, number] = [110, 95, 88];
const ACCENT: [number, number, number] = [188, 118, 108];

const MARGIN = 56;
const PAGE_W = 595.28; // A4 pt
const PAGE_H = 841.89;
const CONTENT_W = PAGE_W - MARGIN * 2;

export function buildResourcePdf(title: string, data: ResourcePdf): jsPDF {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  let y = MARGIN;
  let page = 1;

  const paintBackground = () => {
    doc.setFillColor(...CREAM);
    doc.rect(0, 0, PAGE_W, PAGE_H, "F");
    // header wordmark
    doc.setFont("times", "italic");
    doc.setFontSize(11);
    doc.setTextColor(...ACCENT);
    doc.text("Blushbuild", MARGIN, 32);
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(0.5);
    doc.line(MARGIN, 40, PAGE_W - MARGIN, 40);
    // footer
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text("blushbuild.com", MARGIN, PAGE_H - 28);
    doc.text(`Page ${page}`, PAGE_W - MARGIN, PAGE_H - 28, { align: "right" });
  };

  const newPage = () => {
    doc.addPage();
    page += 1;
    paintBackground();
    y = MARGIN + 20;
  };

  const ensureSpace = (needed: number) => {
    if (y + needed > PAGE_H - MARGIN) newPage();
  };

  const writeParagraph = (text: string, opts?: { size?: number; font?: "times" | "helvetica"; style?: "normal" | "italic" | "bold"; color?: [number, number, number]; leading?: number; gap?: number }) => {
    const size = opts?.size ?? 11;
    const font = opts?.font ?? "times";
    const style = opts?.style ?? "normal";
    const color = opts?.color ?? INK;
    const leading = opts?.leading ?? size * 1.5;
    doc.setFont(font, style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, CONTENT_W) as string[];
    for (const line of lines) {
      ensureSpace(leading);
      doc.text(line, MARGIN, y);
      y += leading;
    }
    y += opts?.gap ?? 6;
  };

  const writeHeading = (text: string) => {
    ensureSpace(50);
    y += 10;
    doc.setFont("times", "bold");
    doc.setFontSize(18);
    doc.setTextColor(...INK);
    const lines = doc.splitTextToSize(text, CONTENT_W) as string[];
    for (const line of lines) {
      ensureSpace(22);
      doc.text(line, MARGIN, y);
      y += 22;
    }
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(0.75);
    doc.line(MARGIN, y - 4, MARGIN + 36, y - 4);
    y += 10;
  };

  const writeBullet = (text: string) => {
    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...INK);
    const lines = doc.splitTextToSize(text, CONTENT_W - 16) as string[];
    for (let i = 0; i < lines.length; i++) {
      ensureSpace(16);
      if (i === 0) {
        doc.setTextColor(...ACCENT);
        doc.text("*", MARGIN, y);
        doc.setTextColor(...INK);
      }
      doc.text(lines[i], MARGIN + 14, y);
      y += 16;
    }
    y += 2;
  };

  // === Cover ===
  paintBackground();
  y = 180;
  doc.setFont("times", "italic");
  doc.setFontSize(12);
  doc.setTextColor(...ACCENT);
  doc.text("A Blushbuild Freebie", MARGIN, y);
  y += 40;
  doc.setFont("times", "bold");
  doc.setFontSize(34);
  doc.setTextColor(...INK);
  const titleLines = doc.splitTextToSize(title, CONTENT_W) as string[];
  for (const line of titleLines) {
    doc.text(line, MARGIN, y);
    y += 40;
  }
  y += 10;
  doc.setFont("times", "italic");
  doc.setFontSize(14);
  doc.setTextColor(...MUTED);
  const subLines = doc.splitTextToSize(data.subtitle, CONTENT_W) as string[];
  for (const line of subLines) {
    doc.text(line, MARGIN, y);
    y += 20;
  }

  // === Body ===
  newPage();
  writeParagraph(data.intro, { size: 12, leading: 18, gap: 12 });

  for (const section of data.sections) {
    writeHeading(section.heading);
    if (section.paragraphs) {
      for (const p of section.paragraphs) writeParagraph(p);
    }
    if (section.bullets) {
      for (const b of section.bullets) writeBullet(b);
      y += 6;
    }
  }

  writeHeading("A note from me");
  writeParagraph(data.closing, { style: "italic", color: MUTED, leading: 18 });

  return doc;
}

export function downloadResourcePdf(slug: string, title: string, data: ResourcePdf) {
  const doc = buildResourcePdf(title, data);
  doc.save(`${slug}.pdf`);
}

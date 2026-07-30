import brandClarityWorkbookAsset from "@/assets/freebies/brand-clarity-workbook.pdf.asset.json";
import canvaPromptIdeasAsset from "@/assets/freebies/canva-prompt-ideas.pdf.asset.json";
import contentStrategyPlannerAsset from "@/assets/freebies/content-strategy-planner.pdf.asset.json";
import creatorLaunchSwipesAsset from "@/assets/freebies/creator-launch-swipes.pdf.asset.json";
import brandStarterKitAsset from "@/assets/freebies/brand-starter-kit.pdf.asset.json";
import facelessBusinessMapAsset from "@/assets/freebies/faceless-business-map.pdf.asset.json";
import pinterestScriptNotesAsset from "@/assets/freebies/pinterest-script-notes.pdf.asset.json";
import productLaunchChecklistAsset from "@/assets/freebies/product-launch-checklist.pdf.asset.json";

export const resourceDownloads: Record<string, string> = {
  "brand-starter-kit": brandStarterKitAsset.url,
  "canva-prompt-ideas": canvaPromptIdeasAsset.url,
  "product-launch-checklist": productLaunchChecklistAsset.url,
  "pinterest-script-notes": pinterestScriptNotesAsset.url,
  "brand-clarity-workbook": brandClarityWorkbookAsset.url,
  "faceless-business-map": facelessBusinessMapAsset.url,
  "content-strategy-planner": contentStrategyPlannerAsset.url,
  "creator-launch-swipes": creatorLaunchSwipesAsset.url,
};

// Returns the in-app viewer route (renders every page vertically with pdfjs).
export function getResourcePdfRoute(slug: string): string | null {
  return resourceDownloads[slug] ? `/freebies/${slug}` : null;
}

// Returns the raw PDF asset URL (for the Download PDF button inside the viewer).
export function getResourcePdfAsset(slug: string): string | null {
  return resourceDownloads[slug] ?? null;
}

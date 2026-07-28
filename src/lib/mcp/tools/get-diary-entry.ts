import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { diaryEntries, diaryEntryExtras } from "@/content/site";

export default defineTool({
  name: "get_diary_entry",
  title: "Get diary entry",
  description: "Fetch the full body of one Blushbuild diary entry by slug, plus lessons and next steps.",
  inputSchema: {
    slug: z.string().min(1).describe("Diary entry slug."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const entry = diaryEntries.find((d) => d.slug === slug);
    if (!entry) {
      return {
        content: [{ type: "text", text: `No diary entry found with slug "${slug}".` }],
        isError: true,
      };
    }
    const extras = diaryEntryExtras[slug] ?? null;
    const payload = { ...entry, extras, url: `/diary/${entry.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});

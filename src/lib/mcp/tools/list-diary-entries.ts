import { defineTool } from "@lovable.dev/mcp-js";
import { diaryEntries } from "@/content/site";

export default defineTool({
  name: "list_diary_entries",
  title: "List diary entries",
  description: "List every Blushbuild creator-diary entry with slug, title, date, mood, and summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = diaryEntries.map((d) => ({
      slug: d.slug,
      title: d.title,
      date: d.date,
      mood: d.mood,
      summary: d.summary,
      url: `/diary/${d.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});

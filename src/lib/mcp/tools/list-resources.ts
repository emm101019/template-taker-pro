import { defineTool } from "@lovable.dev/mcp-js";
import { resources } from "@/content/site";

export default defineTool({
  name: "list_resources",
  title: "List free resources (freebies)",
  description:
    "List every free Blushbuild resource / freebie PDF with slug, title, summary, and category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = resources.map((r) => ({
      slug: r.slug,
      title: r.title,
      text: r.text,
      type: r.type,
      url: `/resources/${r.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});

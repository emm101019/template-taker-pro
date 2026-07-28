import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products } from "@/content/site";

export default defineTool({
  name: "list_products",
  title: "List Blushbuild products",
  description:
    "List all Blushbuild digital products (shop items) with slug, title, tagline, status, phase, and price.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = products.map((p) => ({
      slug: p.slug,
      title: p.title,
      tagline: p.tagline,
      status: p.status,
      phase: p.phase,
      price: p.price,
      url: `/shop/${p.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});

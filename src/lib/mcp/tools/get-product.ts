import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products, productExtras } from "@/content/site";

export default defineTool({
  name: "get_product",
  title: "Get product details",
  description:
    "Fetch the full details for one Blushbuild product by slug: pitch, what you get, who it's for, FAQ, and CTA.",
  inputSchema: {
    slug: z.string().min(1).describe("Product slug, e.g. 'canva-crash-course'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) {
      return {
        content: [{ type: "text", text: `No product found with slug "${slug}".` }],
        isError: true,
      };
    }
    const extras = productExtras[slug] ?? null;
    const payload = { ...product, extras, url: `/shop/${product.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});

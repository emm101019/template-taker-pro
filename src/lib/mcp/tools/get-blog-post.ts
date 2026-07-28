import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts, blogPostExtras } from "@/content/site";

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description: "Fetch the full body of one Blushbuild blog post by slug, including takeaways and action plan.",
  inputSchema: {
    slug: z.string().min(1).describe("Blog post slug."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
      return {
        content: [{ type: "text", text: `No blog post found with slug "${slug}".` }],
        isError: true,
      };
    }
    const extras = blogPostExtras[slug] ?? null;
    const payload = { ...post, extras, url: `/blog/${post.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});

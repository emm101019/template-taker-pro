import { defineTool } from "@lovable.dev/mcp-js";
import { blogPosts } from "@/content/site";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "List every Blushbuild blog post with slug, title, excerpt, category, and read time.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = blogPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      readTime: p.readTime,
      url: `/blog/${p.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});

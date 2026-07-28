import { defineMcp } from "@lovable.dev/mcp-js";
import listProducts from "./tools/list-products";
import getProduct from "./tools/get-product";
import listResources from "./tools/list-resources";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";
import listDiaryEntries from "./tools/list-diary-entries";
import getDiaryEntry from "./tools/get-diary-entry";

export default defineMcp({
  name: "blushbuild-mcp",
  title: "Blushbuild",
  version: "0.1.0",
  instructions:
    "Read-only tools for exploring Blushbuild's public catalog: digital products, free resources (PDF freebies), blog posts, and creator diary entries. Use list_* tools to discover slugs, then get_* tools to fetch full content.",
  tools: [
    listProducts,
    getProduct,
    listResources,
    listBlogPosts,
    getBlogPost,
    listDiaryEntries,
    getDiaryEntry,
  ],
});

import { createFileRoute } from "@tanstack/react-router";
import { resourceDownloads } from "@/content/resource-downloads";

export const Route = createFileRoute("/freebies/$slug.pdf")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const assetPath = resourceDownloads[params.slug];

        if (!assetPath) {
          return new Response("PDF not found", {
            status: 404,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
          });
        }

        const pdfUrl = new URL(assetPath, request.url);

        if (pdfUrl.protocol !== "http:" && pdfUrl.protocol !== "https:") {
          return new Response("Invalid PDF URL", {
            status: 400,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
          });
        }

        return Response.redirect(pdfUrl.href, 302);
      },
    },
  },
});
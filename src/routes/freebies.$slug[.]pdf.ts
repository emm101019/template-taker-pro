import { createFileRoute } from "@tanstack/react-router";
import { resourceDownloads } from "@/content/resource-downloads";

export const Route = createFileRoute("/freebies/$slug.pdf")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const slug = params["slug.pdf"].replace(/\.pdf$/, "");
        const assetPath = resourceDownloads[slug];

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

        const pdfResponse = await fetch(pdfUrl.href);

        if (!pdfResponse.ok || !pdfResponse.body) {
          return new Response("PDF unavailable", {
            status: 502,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
          });
        }

        return new Response(pdfResponse.body, {
          status: 200,
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="${slug}.pdf"`,
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
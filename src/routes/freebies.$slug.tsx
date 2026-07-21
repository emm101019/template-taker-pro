import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { resources } from "@/content/site";
import { resourceDownloads } from "@/content/resource-downloads";

export const Route = createFileRoute("/freebies/$slug")({
  loader: ({ params }) => {
    const resource = resources.find((r) => r.slug === params.slug);
    const pdfUrl = resourceDownloads[params.slug];
    if (!resource || !pdfUrl) throw notFound();
    return { resource, pdfUrl };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.resource.title} — Blushbuild Freebie`
          : "Freebie — Blushbuild",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: FreebieViewer,
  notFoundComponent: FreebieNotFound,
  errorComponent: ({ error, reset }) => (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="page-shell">
        <h1 className="page-hero-title">Something broke.</h1>
        <p className="prose-note mt-4">{error.message}</p>
        <button className="button-solid mt-6" onClick={reset}>
          Try again
        </button>
      </section>
      <SiteFooter />
    </main>
  ),
});

function FreebieNotFound() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Freebie not found</p>
        <h1 className="page-hero-title mt-2">This freebie isn&apos;t available.</h1>
        <Link to="/resources" className="button-solid mt-6 inline-flex">
          Back to resources →
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}

function FreebieViewer() {
  const { resource, pdfUrl } = Route.useLoaderData();
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const pdfjs = await import("pdfjs-dist");
        const workerMod = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
        pdfjs.GlobalWorkerOptions.workerSrc = workerMod.default;

        const doc = await pdfjs.getDocument({ url: pdfUrl }).promise;
        if (cancelled) return;
        setPageCount(doc.numPages);

        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = "";

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const availableWidth = Math.max(280, Math.min(container.clientWidth, 900));

        for (let i = 1; i <= doc.numPages; i++) {
          if (cancelled) return;
          const page = await doc.getPage(i);
          const baseViewport = page.getViewport({ scale: 1 });
          const scale = availableWidth / baseViewport.width;
          const viewport = page.getViewport({ scale });

          const wrapper = document.createElement("div");
          wrapper.className = "pdf-page";

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width * dpr);
          canvas.height = Math.floor(viewport.height * dpr);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;

          wrapper.appendChild(canvas);

          const label = document.createElement("div");
          label.className = "pdf-page-label";
          label.textContent = `Page ${i} of ${doc.numPages}`;
          wrapper.appendChild(label);

          container.appendChild(wrapper);

          const transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined;
          await page.render({
            canvasContext: ctx,
            viewport,
            transform,
          } as Parameters<typeof page.render>[0]).promise;
        }

        if (!cancelled) setStatus("ready");
      } catch (err) {
        console.error("[pdf-viewer]", err);
        if (!cancelled) {
          setErrorMsg(err instanceof Error ? err.message : "Failed to load PDF");
          setStatus("error");
        }
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="page-shell">
        <Link
          to="/resources/$slug"
          params={{ slug: resource.slug }}
          className="eyebrow"
        >
          ← Back to {resource.title}
        </Link>
        <h1 className="page-hero-title mt-3">{resource.title}</h1>
        <p className="prose-note mt-3">{resource.text}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={pdfUrl}
            download={`${resource.slug}.pdf`}
            className="button-solid"
          >
            Download PDF ↓
          </a>
          <span className="text-sm text-muted-foreground" aria-live="polite">
            {status === "ready"
              ? `${pageCount} page${pageCount === 1 ? "" : "s"} · scroll to read`
              : status === "loading"
                ? "Rendering pages…"
                : "Preview unavailable — use Download PDF."}
          </span>
        </div>

        {status === "error" && errorMsg ? (
          <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
        ) : null}

        <div ref={containerRef} className="pdf-viewer mt-8" aria-label="PDF pages" />

        {status === "loading" ? (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Loading your freebie…
          </p>
        ) : null}
      </section>
      <SiteFooter />
    </main>
  );
}

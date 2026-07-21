import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { resources } from "@/content/site";
import { getResourcePdfRoute } from "@/content/resource-downloads";
import { EmailGateModal, navigateToPdf } from "@/components/email-gate-modal";


export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const resource = resources.find((r) => r.slug === params.slug);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Resource not found — Blushbuild" }] };
    const { resource } = loaderData;
    return {
      meta: [
        { title: `${resource.title} — Blushbuild Freebies` },
        { name: "description", content: resource.text },
        { property: "og:title", content: `${resource.title} — Blushbuild` },
        { property: "og:description", content: resource.text },
        ...(resource.cover ? [{ property: "og:image", content: resource.cover }] : []),
      ],
    };
  },
  component: ResourceDetailPage,
  notFoundComponent: ResourceNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="page-shell">
      <h1 className="page-hero-title">Something broke.</h1>
      <p className="prose-note mt-4">{error.message}</p>
      <button className="button-solid mt-6" onClick={reset}>
        Try again
      </button>
    </div>
  ),
});

function ResourceNotFound() {
  const { slug } = Route.useParams();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Freebie not found</p>
        <h1 className="page-hero-title mt-2">We couldn't find "{slug}".</h1>
        <Link to="/resources" className="button-solid mt-6 inline-flex">
          Back to resources →
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}

function ResourceDetailPage() {
  const { resource } = Route.useLoaderData();
  const related = resources.filter((r) => r.slug !== resource.slug).slice(0, 3);
  const pdfUrl = getResourcePdfRoute(resource.slug) ?? undefined;
  const [gateOpen, setGateOpen] = useState(false);


  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <Link to="/resources" className="eyebrow">
          ← All resources
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <span className="status-tag">{resource.type}</span>
            <h1 className="page-hero-title mt-4">{resource.title}</h1>
            <p className="prose-note mt-5">{resource.text}</p>

            <h2 className="mt-10 font-serif-alt text-3xl leading-none text-foreground">
              What's inside
            </h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
              {resource.whatsInside.map((item: string) => (
                <li key={item}>♡ {item}</li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif-alt text-3xl leading-none text-foreground">
              A quick peek
            </h2>
            <ol className="mt-4 space-y-2 text-base leading-7 text-muted-foreground">
              {resource.preview.map((line: string) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>

          <aside className="spotlight-card overflow-hidden">
            {resource.cover ? (
              <img
                src={resource.cover}
                alt={resource.title}
                className="spotlight-image"
                loading="lazy"
              />
            ) : null}
          </aside>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="eyebrow">Get it free</p>
          <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">
            Download the PDF.
          </h2>
          <p className="prose-note mt-3">
            Enter your email to unlock this download.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={pdfUrl}
              onClick={(e) => {
                e.preventDefault();
                if (!pdfUrl) return;
                setGateOpen(true);
              }}
              className="button-solid"
            >
              Download the PDF →
            </a>
            <span className="text-sm text-muted-foreground">
              We ask for your email each time.
            </span>
          </div>

        </div>


        <div className="mt-12">
          <p className="eyebrow">Also free</p>
          <div className="resource-grid mt-4">
            {related.map((r) => (
              <Link key={r.slug} to="/resources/$slug" params={{ slug: r.slug }} className="resource-card block">
                <div className="resource-cover">
                  <span className="resource-type">{r.type}</span>
                  <p className="font-serif-alt text-3xl leading-tight text-foreground">{r.title}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{r.text}</p>
                <span className="product-link">Get it free →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EmailGateModal
        open={gateOpen}
        resourceSlug={resource.slug}
        resourceTitle={resource.title}
        downloadUrl={pdfUrl}
        filename={`${resource.slug}.pdf`}
        onUnlock={() => {}}
        onClose={() => setGateOpen(false)}
      />

      <SiteFooter />
    </main>
  );
}

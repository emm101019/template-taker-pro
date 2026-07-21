import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { resources } from "@/content/site";
import { getResourcePdfRoute } from "@/content/resource-downloads";
import { EmailGateModal } from "@/components/email-gate-modal";



export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Free Resources — Blushbuild" },
      {
        name: "description",
        content:
          "A library of free PDFs, guides, and templates for creators building digital products, from Etsy setup to Pinterest scripts.",
      },
      { property: "og:title", content: "Free Resources — Blushbuild" },
      {
        property: "og:description",
        content:
          "A free library for creators — PDFs, guides, and templates for digital products, Pinterest, and launches.",
      },
    ],
  }),
  component: ResourcesPage,
});

const types = ["All", "PDF", "GUIDE", "TEMPLATE", "DOC", "FREE"] as const;

function ResourcesPage() {
  const [gate, setGate] = useState<{ slug: string; title: string; url: string } | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <p className="eyebrow">Free resources ♡</p>
        <h1 className="page-hero-title mt-3">Beautiful freebies to help you start.</h1>
        <p className="prose-note mt-5">
          A quietly-growing library of PDFs, guides, and templates I use in Blushbuild every week.
          Every freebie here is real work I've reused across launches, not a lead magnet padded with
          filler.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {types.map((type) => (
            <span
              key={type}
              className={`category-chip ${type === "All" ? "is-active" : ""}`}
            >
              {type}
            </span>
          ))}
        </div>

        <div className="resource-grid mt-8">
          {resources.map((resource) => {
            const pdfUrl = getResourcePdfRoute(resource.slug) ?? undefined;
            return (
              <div key={resource.slug} className="resource-card flex flex-col">
                <Link
                  to="/resources/$slug"
                  params={{ slug: resource.slug }}
                  className="block"
                >
                  <div className="resource-cover">
                    <span className="resource-type">{resource.type}</span>
                    <p className="font-serif-alt text-3xl leading-tight text-foreground">
                      {resource.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{resource.text}</p>
                </Link>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={pdfUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!pdfUrl) return;
                      setGate({ slug: resource.slug, title: resource.title, url: pdfUrl });
                    }}
                    className="button-solid"
                  >
                    Download PDF ↓
                  </a>
                  <Link
                    to="/resources/$slug"
                    params={{ slug: resource.slug }}
                    className="product-link"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>


        <div className="mt-12 border-t border-border pt-8">
          <p className="eyebrow">A quick note</p>
          <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">
            Every download asks for an email.
          </h2>
          <p className="prose-note mt-3">
            We ask for your email each time so we can keep track of who's grabbing what — the form pops up on every download.
          </p>
        </div>

      </section>

      <EmailGateModal
        open={gate !== null}
        resourceSlug={gate?.slug ?? ""}
        resourceTitle={gate?.title ?? ""}
        downloadUrl={gate?.url}
        filename={gate ? `${gate.slug}.pdf` : undefined}
        onUnlock={() => {}}
        onClose={() => setGate(null)}
      />

      <SiteFooter />
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { resources } from "@/content/site";
import { resourcePdfs } from "@/content/resource-pdfs";
import { downloadResourcePdf } from "@/lib/pdf/build-resource-pdf";


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
            const pdf = resourcePdfs[resource.slug];
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
                  <button
                    type="button"
                    className="button-solid"
                    onClick={(e) => {
                      e.preventDefault();
                      if (pdf) downloadResourcePdf(resource.slug, resource.title, pdf);
                    }}
                    disabled={!pdf}
                  >
                    Download PDF ↓
                  </button>
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
          <p className="eyebrow">Join the studio</p>
          <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">
            One email, all the freebies.
          </h2>
          <p className="prose-note mt-3">
            Drop your email and get instant access to the full library, plus any new freebies I
            add.
          </p>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row sm:max-w-lg">
            <input
              type="email"
              className="input-shell"
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button type="submit" className="button-solid">
              Send me the library →
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

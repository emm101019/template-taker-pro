import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products, productExtras } from "@/content/site";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    const extras = productExtras[params.slug];
    const related = products.filter((p) => p.slug !== params.slug).slice(0, 3);
    return { product, extras, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Product not found — Blushbuild" }] };
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.title} — Blushbuild` },
        { name: "description", content: product.pitch },
        { property: "og:title", content: `${product.title} — Blushbuild` },
        { property: "og:description", content: product.pitch },
        { property: "og:image", content: product.image },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: ProductNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="page-shell">
      <h1 className="page-hero-title">Something broke.</h1>
      <p className="prose-note mt-4">{error.message}</p>
      <button className="button-solid mt-6" onClick={reset}>Try again</button>
    </div>
  ),
});

function ProductNotFound() {
  const { slug } = Route.useParams();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Product not found</p>
        <h1 className="page-hero-title mt-2">We couldn't find "{slug}".</h1>
        <Link to="/shop" className="button-solid mt-6 inline-flex">Back to shop →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}

function ProductPage() {
  const { product, extras, related } = Route.useLoaderData();
  const gallery = extras?.gallery ?? [product.image];
  const [active, setActive] = useState(gallery[0]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <Link to="/shop" className="eyebrow">← All products</Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <aside>
            <div className="spotlight-card overflow-hidden">
              <img src={active} alt={product.title} className="spotlight-image" loading="lazy" />
            </div>
            {gallery.length > 1 ? (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {gallery.map((src: string, i: number) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActive(src)}
                    className={`aspect-square overflow-hidden border transition ${
                      active === src ? "border-foreground" : "border-border hover:border-foreground/60"
                    }`}
                    aria-label={`Gallery image ${i + 1}`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            ) : null}
          </aside>

          <div>
            <span className="status-tag">{product.status}</span>
            <h1 className="page-hero-title mt-4">{product.title}</h1>
            <p className="mt-3 font-serif-alt text-2xl leading-tight text-muted-foreground">
              {product.tagline}
            </p>
            <p className="prose-note mt-5">{product.pitch}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="font-serif-alt text-4xl text-foreground">{product.price}</span>
              <span className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                {product.phase}
              </span>
            </div>

            <Link to="/resources" className="button-solid mt-6">
              {product.cta} →
            </Link>
          </div>
        </div>

        {extras?.description ? (
          <div className="mt-14">
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">Description</h2>
            <div className="prose-note mt-4">
              {extras.description.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        ) : null}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">What's included</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
              {product.whatYouGet.map((item: string) => (
                <li key={item}>♡ {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">Who it's for</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
              {product.whoItsFor.map((item: string) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {extras?.features ? (
          <div className="mt-12">
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">Features &amp; benefits</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {extras.features.map((f: { title: string; detail: string }) => (
                <div key={f.title} className="border border-border bg-panel p-5">
                  <p className="font-serif-alt text-xl leading-tight text-foreground">{f.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {extras?.howItWorks ? (
          <div className="mt-12">
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">How it works</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-4">
              {extras.howItWorks.map((step: { step: string; detail: string }, i: number) => (
                <div key={step.step} className="border border-border bg-background/60 p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Step {i + 1}
                  </p>
                  <p className="mt-3 font-serif-alt text-xl leading-tight text-foreground">
                    {step.step}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12">
          <h2 className="font-serif-alt text-3xl leading-none text-foreground">FAQ</h2>
          <div className="mt-4 divide-y divide-border border-y border-border">
            {product.faq.map((item: { q: string; a: string }) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
                  {item.q}
                  <span className="float-right opacity-60 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mt-14">
            <p className="eyebrow">You might also like</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r: typeof products[number]) => (
                <Link
                  key={r.slug}
                  to="/shop/$slug"
                  params={{ slug: r.slug }}
                  className="product-card block"
                >
                  <div className="product-visual">
                    <img src={r.image} alt={r.title} className="product-image" loading="lazy" />
                    <span className="product-tag">{r.status}</span>
                  </div>
                  <h3 className="mt-4 font-serif-alt text-2xl leading-tight text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.tagline}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-serif-alt text-lg text-foreground">{r.price}</span>
                    <span className="product-link">See page →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="buy-bar mt-10">
          <div className="min-w-0">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {product.status}
            </p>
            <p className="truncate font-serif-alt text-xl text-foreground">
              {product.title} — {product.price}
            </p>
          </div>
          <Link to="/resources" className="button-solid">
            {product.cta} →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

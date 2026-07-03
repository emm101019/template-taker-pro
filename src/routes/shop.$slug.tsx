import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products } from "@/content/site";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
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
  const { product } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <Link to="/shop" className="eyebrow">← All products</Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
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
          </div>

          <aside className="spotlight-card overflow-hidden">
            <img src={product.image} alt={product.title} className="spotlight-image" loading="lazy" />
          </aside>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">What you get</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
              {product.whatYouGet.map((item) => (
                <li key={item}>♡ {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">Who it's for</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
              {product.whoItsFor.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-serif-alt text-3xl leading-none text-foreground">FAQ</h2>
          <div className="mt-4 divide-y divide-border border-y border-border">
            {product.faq.map((item) => (
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

        <div className="buy-bar mt-10">
          <div className="min-w-0">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {product.status}
            </p>
            <p className="truncate font-serif-alt text-xl text-foreground">
              {product.title} — {product.price}
            </p>
          </div>
          <button type="button" className="button-solid">
            {product.cta} →
          </button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

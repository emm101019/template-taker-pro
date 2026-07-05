import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products } from "@/content/site";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop — Blushbuild" },
      {
        name: "description",
        content:
          "Digital products, mini courses, and templates for creators building small, sustainable online businesses.",
      },
      { property: "og:title", content: "Shop — Blushbuild" },
      {
        property: "og:description",
        content:
          "Digital products, mini courses, and templates for creators building sustainable online businesses.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <p className="eyebrow">The shop ♡</p>
        <h1 className="page-hero-title mt-3">Digital products, made in public.</h1>
        <p className="prose-note mt-5">
          Every product here was built out in the open on the diary. Nothing is theoretical. Nothing
          is drop-shipped. Everything is something I use in Blushbuild myself.
        </p>

        <div className="journey-products mt-10">
          {products.map((product) => (
            <article key={product.slug} className="product-card">
              <div className="product-visual">
                <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
                <span className="product-tag">{product.status}</span>
              </div>
              <h2 className="mt-4 font-serif-alt text-2xl leading-tight text-foreground">
                {product.title}
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{product.tagline}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-serif-alt text-xl text-foreground">{product.price}</span>
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {product.phase}
                </span>
              </div>
              <Link to="/shop/$slug" params={{ slug: product.slug }} className="product-link">
                See the page →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

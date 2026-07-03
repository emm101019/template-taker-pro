import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { blogPosts } from "@/content/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Blushbuild" },
      {
        name: "description",
        content:
          "The Blushbuild blog — strategy, launches, mindset, and behind-the-scenes essays for creators building digital products.",
      },
      { property: "og:title", content: "Blog — Blushbuild" },
      {
        property: "og:description",
        content:
          "Strategy, launches, and mindset essays for creators building small digital-product businesses.",
      },
    ],
  }),
  component: BlogIndex,
});

const categories = ["All", "Strategy", "Launches", "Mindset", "Behind the scenes"] as const;

function BlogIndex() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <p className="eyebrow">The blog ✧</p>
        <h1 className="page-hero-title mt-3">Notes on building a small creator business.</h1>
        <p className="prose-note mt-5">
          Slower, quieter essays about strategy, launches, and the mindset stuff nobody edits into
          their reels. New posts every two weeks.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className={`category-chip ${c === "All" ? "is-active" : ""}`}>
              {c}
            </span>
          ))}
        </div>

        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="mt-10 grid gap-6 border border-border bg-panel p-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:p-6"
        >
          <div className="overflow-hidden border border-border">
            <img
              src={featured.cover}
              alt={featured.title}
              className="h-56 w-full object-cover sm:h-72 lg:h-80"
              loading="eager"
            />
          </div>
          <div>
            <p className="eyebrow">Featured · {featured.category}</p>
            <h2 className="mt-3 font-serif-alt text-4xl leading-tight text-foreground">
              {featured.title}
            </h2>
            <p className="prose-note mt-4">{featured.excerpt}</p>
            <p className="mt-4 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
              {featured.date} · {featured.readingTime}
            </p>
            <span className="product-link mt-6">Read the post →</span>
          </div>
        </Link>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="product-card block"
            >
              <div className="product-visual">
                <img src={post.cover} alt={post.title} className="product-image" loading="lazy" />
                <span className="product-tag">{post.category}</span>
              </div>
              <h3 className="mt-4 font-serif-alt text-2xl leading-tight text-foreground">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                {post.date} · {post.readingTime}
              </p>
              <span className="product-link">Read →</span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

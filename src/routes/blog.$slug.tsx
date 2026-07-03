import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { blogPosts } from "@/content/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const index = blogPosts.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    return { post: blogPosts[index], next: blogPosts[index + 1] ?? blogPosts[0] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Post not found — Blushbuild" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Blushbuild Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — Blushbuild Blog` },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.cover },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: BlogNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="page-shell">
      <h1 className="page-hero-title">Something broke.</h1>
      <p className="prose-note mt-4">{error.message}</p>
      <button className="button-solid mt-6" onClick={reset}>Try again</button>
    </div>
  ),
});

function BlogNotFound() {
  const { slug } = Route.useParams();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Post not found</p>
        <h1 className="page-hero-title mt-2">We couldn't find "{slug}".</h1>
        <Link to="/blog" className="button-solid mt-6 inline-flex">Back to blog →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}

function BlogPostPage() {
  const { post, next } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="page-shell">
        <Link to="/blog" className="eyebrow">← All posts</Link>

        <header className="mt-6">
          <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
            {post.category} · {post.date} · {post.readingTime}
          </p>
          <h1 className="page-hero-title mt-3">{post.title}</h1>
          <p className="prose-note mt-5">{post.excerpt}</p>
        </header>

        <figure className="mt-8 overflow-hidden border border-border">
          <img src={post.cover} alt={post.title} className="w-full object-cover" loading="lazy" />
        </figure>

        <div className="prose-note mt-10">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="eyebrow">Next up</p>
          <Link
            to="/blog/$slug"
            params={{ slug: next.slug }}
            className="mt-3 block border border-border bg-panel p-5 transition hover:-translate-y-0.5"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
              {next.category} · {next.date}
            </p>
            <p className="mt-2 font-serif-alt text-2xl leading-tight text-foreground">{next.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{next.excerpt}</p>
          </Link>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { progressBoard, progressDetails, progressStages, products } from "@/content/site";

export const Route = createFileRoute("/progress/$slug")({
  loader: ({ params }) => {
    const index = progressBoard.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    const item = progressBoard[index];
    const detail = progressDetails[params.slug];
    if (!detail) throw notFound();
    const stage = progressStages.find((s) => s.id === item.stage);
    const shopMatch = products.find((p) => p.slug === params.slug);
    return {
      item,
      detail,
      stage,
      shopMatch,
      previous: progressBoard[index - 1],
      next: progressBoard[index + 1],
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Progress not found — Blushbuild" }] };
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.title} — Progress · Blushbuild` },
        { name: "description", content: item.update },
        { property: "og:title", content: `${item.title} — Progress · Blushbuild` },
        { property: "og:description", content: item.update },
        { property: "og:image", content: item.image },
      ],
    };
  },
  component: ProgressDetailPage,
  notFoundComponent: ProgressNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="page-shell">
      <h1 className="page-hero-title">Something broke.</h1>
      <p className="prose-note mt-4">{error.message}</p>
      <button className="button-solid mt-6" onClick={reset}>Try again</button>
    </div>
  ),
});

function ProgressNotFound() {
  const { slug } = Route.useParams();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Progress not found</p>
        <h1 className="page-hero-title mt-2">We couldn't find "{slug}".</h1>
        <Link to="/progress" className="button-solid mt-6 inline-flex">Back to the board →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}

function ProgressDetailPage() {
  const { item, detail, stage, shopMatch, previous, next } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="page-shell">
        <Link to="/progress" className="eyebrow">← All progress</Link>

        <header className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <span className="status-tag">{stage?.label ?? item.stage}</span>
            <h1 className="page-hero-title mt-4">{item.title}</h1>
            <p className="prose-note mt-4">{item.update}</p>

            <div className="mt-8">
              <div className="progress-bar">
                <span className="progress-bar-fill" style={{ width: `${item.percent}%` }} />
              </div>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                {item.percent}% complete · updated {item.updated}
              </p>
            </div>
          </div>

          <aside className="spotlight-card overflow-hidden">
            <img src={item.image} alt={item.title} className="spotlight-image" loading="lazy" />
          </aside>
        </header>

        <section className="mt-12">
          <h2 className="font-serif-alt text-3xl leading-none text-foreground">The story so far</h2>
          <div className="prose-note mt-4">
            {detail.story.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">What's shipped</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
              {detail.shipped.map((s: string) => <li key={s}>✓ {s}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-serif-alt text-3xl leading-none text-foreground">What's next</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
              {detail.next.map((s: string) => <li key={s}>→ {s}</li>)}
            </ul>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-serif-alt text-3xl leading-none text-foreground">Weekly updates</h2>
          <ol className="mt-4 divide-y divide-border border-y border-border">
            {detail.updates.map((u: { date: string; note: string }, i: number) => (
              <li key={i} className="py-4">
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {u.date}
                </p>
                <p className="mt-1 text-base leading-7 text-foreground/85">{u.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-12 border-t border-border pt-8">
          {shopMatch ? (
            <>
              <p className="eyebrow">Available in the shop</p>
              <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">
                {shopMatch.title} is {shopMatch.status === "Selling" ? "live" : shopMatch.status.toLowerCase()}.
              </h2>
              <Link
                to="/shop/$slug"
                params={{ slug: shopMatch.slug }}
                className="button-solid mt-5 inline-flex"
              >
                See the product page →
              </Link>
            </>
          ) : (
            <>
              <p className="eyebrow">Get notified when it drops</p>
              <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">
                Join the waitlist.
              </h2>
              <form className="mt-5 flex flex-col gap-3 sm:flex-row sm:max-w-lg">
                <input
                  type="email"
                  className="input-shell"
                  placeholder="Your email address"
                  aria-label="Email address"
                />
                <button type="submit" className="button-solid">Join waitlist →</button>
              </form>
            </>
          )}
        </div>

        <div className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {previous ? (
            <Link
              to="/progress/$slug"
              params={{ slug: previous.slug }}
              className="product-card block"
            >
              <p className="eyebrow">← Previous</p>
              <p className="mt-2 font-serif-alt text-xl text-foreground">{previous.title}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/progress/$slug"
              params={{ slug: next.slug }}
              className="product-card block sm:text-right"
            >
              <p className="eyebrow">Next →</p>
              <p className="mt-2 font-serif-alt text-xl text-foreground">{next.title}</p>
            </Link>
          ) : <div />}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

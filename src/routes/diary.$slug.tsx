import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { diaryEntries, diaryEntryExtras } from "@/content/site";

export const Route = createFileRoute("/diary/$slug")({
  loader: ({ params }) => {
    const index = diaryEntries.findIndex((e) => e.slug === params.slug);
    if (index === -1) throw notFound();
    return {
      entry: diaryEntries[index],
      extra: diaryEntryExtras[params.slug],
      previous: diaryEntries[index + 1],
      next: diaryEntries[index - 1],
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Entry not found — Blushbuild" }] };
    const { entry } = loaderData;
    return {
      meta: [
        { title: `${entry.title} — Blushbuild Diary` },
        { name: "description", content: entry.excerpt },
        { property: "og:title", content: `${entry.title} — Blushbuild Diary` },
        { property: "og:description", content: entry.excerpt },
        { property: "og:image", content: entry.cover },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: DiaryEntryPage,
  notFoundComponent: DiaryNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="page-shell">
      <h1 className="page-hero-title">Something broke.</h1>
      <p className="prose-note mt-4">{error.message}</p>
      <button className="button-solid mt-6" onClick={reset}>Try again</button>
    </div>
  ),
});

function DiaryNotFound() {
  const { slug } = Route.useParams();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Entry not found</p>
        <h1 className="page-hero-title mt-2">We couldn't find "{slug}".</h1>
        <Link to="/diary" className="button-solid mt-6 inline-flex">Back to the diary →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}

function DiaryEntryPage() {
  const { entry, extra, previous, next } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="page-shell">
        <Link to="/diary" className="eyebrow">← All entries</Link>

        <header className="mt-6">
          <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
            {entry.month} · {entry.date}
          </p>
          <h1 className="page-hero-title mt-3">{entry.title}</h1>
          <p className="prose-note mt-5">{entry.excerpt}</p>
        </header>

        <figure className="mt-8 overflow-hidden border border-border">
          <img src={entry.cover} alt={entry.title} className="w-full object-cover" loading="lazy" />
        </figure>

        <div className="prose-note mt-10">
          {entry.body.map((paragraph: string, i: number) => {
            if (entry.pullQuote && i === Math.floor(entry.body.length / 2)) {
              return (
                <div key={i}>
                  <p>{paragraph}</p>
                  <blockquote className="pull-quote">"{entry.pullQuote}"</blockquote>
                </div>
              );
            }
            return <p key={i}>{paragraph}</p>;
          })}
        </div>

        {extra ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <section>
              <h2 className="font-serif-alt text-3xl leading-none text-foreground">What I learned</h2>
              <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
                {extra.lessons.map((item: string) => (
                  <li key={item}>♡ {item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-serif-alt text-3xl leading-none text-foreground">Next steps</h2>
              <ul className="mt-4 space-y-2 text-base leading-7 text-foreground/85">
                {extra.nextSteps.map((item: string) => (
                  <li key={item}>→ {item}</li>
                ))}
              </ul>
            </section>
          </div>
        ) : null}

        <div className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {previous ? (
            <Link
              to="/diary/$slug"
              params={{ slug: previous.slug }}
              className="product-card block"
            >
              <p className="eyebrow">← Previous entry</p>
              <p className="mt-2 font-serif-alt text-xl text-foreground">{previous.title}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/diary/$slug"
              params={{ slug: next.slug }}
              className="product-card block sm:text-right"
            >
              <p className="eyebrow">Next entry →</p>
              <p className="mt-2 font-serif-alt text-xl text-foreground">{next.title}</p>
            </Link>
          ) : <div />}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

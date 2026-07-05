import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { diaryEntries } from "@/content/site";

export const Route = createFileRoute("/diary/")({
  head: () => ({
    meta: [
      { title: "Diary — Blushbuild" },
      {
        name: "description",
        content:
          "The Blushbuild creator diary — long-form entries about digital products, launches, and small-business life.",
      },
      { property: "og:title", content: "Diary — Blushbuild" },
      {
        property: "og:description",
        content:
          "Long-form diary entries from Blushbuild — digital products, quiet launches, and small-business life.",
      },
    ],
  }),
  component: DiaryPage,
});

function DiaryPage() {
  const grouped = diaryEntries.reduce<Record<string, typeof diaryEntries>>((acc, entry) => {
    (acc[entry.month] ||= []).push(entry);
    return acc;
  }, {});
  const months = Object.keys(grouped);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <p className="eyebrow">The diary ♡</p>
        <h1 className="page-hero-title mt-3">Notes from the week, kept honest.</h1>
        <p className="prose-note mt-5">
          A slow-burn diary about running Blushbuild — messy first drafts, launch reflections,
          numbers that surprised me, and things I'd do differently next month.
        </p>

        <div className="mt-10 space-y-12">
          {months.map((month) => (
            <section key={month}>
              <h2 className="section-kicker">{month}</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[month].map((entry) => (
                  <Link
                    key={entry.slug}
                    to="/diary/$slug"
                    params={{ slug: entry.slug }}
                    className="product-card block transition hover:-translate-y-0.5"
                  >
                    <div className="product-visual">
                      <img
                        src={entry.cover}
                        alt={entry.title}
                        className="product-image"
                        loading="lazy"
                      />
                      <span className="product-tag">{entry.date}</span>
                    </div>
                    <h3 className="mt-4 font-serif-alt text-2xl leading-tight text-foreground">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{entry.excerpt}</p>
                    <span className="product-link">Read entry →</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { images } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Blushbuild" },
      {
        name: "description",
        content:
          "The story behind Blushbuild — one creator, one laptop, and a slow-built digital product studio.",
      },
      { property: "og:title", content: "About — Blushbuild" },
      {
        property: "og:description",
        content:
          "How Blushbuild started — the timeline, the values, and the plan.",
      },
      { property: "og:image", content: images.coquette1 },
    ],
  }),
  component: AboutPage,
});

const timeline: [string, string][] = [
  ["Fall 2024", "Opened a tiny shop with one $9 listing. Sold three copies to friends."],
  ["Spring 2025", "First real launch: Canva Crash Course v1. Made $2,100 in the first week."],
  ["Summer 2025", "Full-time. Quit the day job. Cried a little. Kept posting."],
  ["Winter 2025", "12K followers, 4 products, first $10k month."],
  ["Now — 2026", "Rebuilt as Blushbuild. Public roadmap, editorial diary, and a small library."],
];

const values = [
  { title: "Small and specific", note: "One product, one job, one buyer. Bundles come later." },
  { title: "Quiet marketing", note: "Search-first, email-second. No shouting required." },
  { title: "Made in public", note: "Every product has a public progress bar you can watch." },
  { title: "Editorial, not corporate", note: "It should feel like a magazine, not a funnel." },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="eyebrow">About Blushbuild</p>
            <h1 className="page-hero-title mt-3">One laptop, one small studio, one slow build.</h1>
            <p className="prose-note mt-5">
              Blushbuild is a one-person digital product studio and a public creator diary. I make
              small, editorial-feeling products for creators — Canva templates, mini guides, and
              launch tools — and I document every step of building the business in the diary.
            </p>
            <p className="prose-note mt-4">
              There's no team, no VC, no fake-it-till-you-make-it. Just a slow, honest build I hope
              is useful to watch.
            </p>
            <Link to="/resources" className="button-solid mt-6 inline-flex">
              Start with a freebie →
            </Link>
          </div>
          <aside className="spotlight-card overflow-hidden">
            <img src={images.coquette1} alt="Blushbuild studio" className="spotlight-image" loading="lazy" />
          </aside>
        </div>

        <div className="mt-14">
          <p className="eyebrow">The timeline</p>
          <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">
            Two years, one long slow curve.
          </h2>
          <ol className="mt-6 space-y-4">
            {timeline.map(([when, what]) => (
              <li key={when} className="grid gap-2 border-l-2 border-primary/40 pl-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {when}
                </p>
                <p className="text-base leading-7 text-foreground/85">{what}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14">
          <p className="eyebrow">What Blushbuild is about</p>
          <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">Four rules I keep coming back to.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <article key={v.title} className="product-card">
                <h3 className="font-serif-alt text-2xl leading-tight text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{v.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="eyebrow">Join the studio ♡</p>
          <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">
            Weekly notes, freebies, and first access.
          </h2>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row sm:max-w-lg">
            <input type="email" className="input-shell" placeholder="Your email address" aria-label="Email address" />
            <button type="submit" className="button-solid">Join the list →</button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

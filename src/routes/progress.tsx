import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { progressBoard, progressStages } from "@/content/site";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Progress — Blushbuild" },
      {
        name: "description",
        content:
          "Every Blushbuild product, from Notes-app idea to live in the shop. Public progress bars, weekly updates, and honest status.",
      },
      { property: "og:title", content: "Progress — Blushbuild" },
      {
        property: "og:description",
        content:
          "Public progress bars and weekly updates on every Blushbuild product — idea, building, beta, live.",
      },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <p className="eyebrow">Building in public ✧</p>
        <h1 className="page-hero-title mt-3">Everything I'm building, in one board.</h1>
        <p className="prose-note mt-5">
          Idea to shop, updated every week. If a product is stuck, it stays here. If it ships,
          it moves to <Link to="/shop" className="underline underline-offset-4">the shop</Link>.
        </p>

        <div className="kanban-board mt-10">
          {progressStages.map((stage) => {
            const items = progressBoard.filter((item) => item.stage === stage.id);
            return (
              <div key={stage.id} className="kanban-column">
                <div className="kanban-heading">
                  <h2 className="font-serif-alt text-2xl leading-none text-foreground">
                    {stage.label}
                  </h2>
                  <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {items.length}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{stage.note}</p>

                <div className="mt-4 space-y-3">
                  {items.map((item) => (
                    <article
                      key={item.slug}
                      className="border border-border bg-background/60 p-3"
                    >
                      <div className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-14 w-14 shrink-0 object-cover"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <p className="truncate font-serif-alt text-lg leading-tight text-foreground">
                            {item.title}
                          </p>
                          <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                            {item.updated}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-foreground/80">{item.update}</p>
                      <div className="mt-3">
                        <div className="progress-bar">
                          <span
                            className="progress-bar-fill"
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                        <p className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                          {item.percent}% complete
                        </p>
                      </div>
                    </article>
                  ))}
                  {items.length === 0 ? (
                    <p className="text-xs italic text-muted-foreground">Nothing here right now.</p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="eyebrow">This week's focus</p>
          <h2 className="mt-2 font-serif-alt text-4xl leading-none text-foreground">
            Ship the Bundle beta, tighten the Growth Kit outline.
          </h2>
          <p className="prose-note mt-3">
            Beta feedback for the Digital Product Bundle closes Friday. Next week the Pinterest
            Growth Kit outline gets its first walkthrough on the diary.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

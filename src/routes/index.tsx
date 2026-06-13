import { createFileRoute } from "@tanstack/react-router";

import social2026Asset from "@/assets/social-2026.png.asset.json";
import bootsAsset from "@/assets/boots.png.asset.json";
import facelessBizAsset from "@/assets/faceless-biz.png.asset.json";
import latteOfferAsset from "@/assets/latte-offer.png.asset.json";
import clarityAsset from "@/assets/clarity.png.asset.json";
import brandingTipsAsset from "@/assets/branding-tips.png.asset.json";
import contentStrategyAsset from "@/assets/content-strategy.png.asset.json";
import brandStandsOutAsset from "@/assets/brand-stands-out.png.asset.json";

const products = [
  {
    title: "Canva Crash Course",
    phase: "73% sold",
    note: "Step-by-step templates and launch lessons.",
    cta: "See progress",
    image: facelessBizAsset.url,
  },
  {
    title: "Etsy Success Guide",
    phase: "50% complete",
    note: "Positioning, listings, and offer tweaks that convert.",
    cta: "See progress",
    image: brandStandsOutAsset.url,
  },
  {
    title: "Digital Product Bundle",
    phase: "Scalable pack",
    note: "My best-selling prompts, pages, and launch assets.",
    cta: "See progress",
    image: latteOfferAsset.url,
  },
  {
    title: "Pinterest Growth Kit",
    phase: "Early access",
    note: "Weekly visibility system for creators building quietly.",
    cta: "See progress",
    image: contentStrategyAsset.url,
  },
];

const resources = [
  {
    title: "Etsy Starter Kit",
    type: "PDF",
    text: "Everything you need to open your shop with confidence.",
  },
  {
    title: "Canva Prompt Ideas",
    type: "FREE",
    text: "50 content ideas laid out for reels, pins, and posts.",
  },
  {
    title: "Product Launch Checklist",
    type: "DOC",
    text: "A simple launch flow to batch, post, and sell faster.",
  },
  {
    title: "Pinterest Script Notes",
    type: "GUIDE",
    text: "Hooks and mini scripts that turn saves into clicks.",
  },
];

const diaryEntries = [
  { title: "How I priced my first digital product", date: "May 12" },
  { title: "What actually moved my Etsy sales", date: "May 9" },
  { title: "Designing a Canva pack people finish", date: "May 6" },
  { title: "The five systems I wish I built sooner", date: "May 3" },
  { title: "Planning content like a full-time creator", date: "Apr 29" },
];

const stripImages = [
  brandingTipsAsset.url,
  social2026Asset.url,
  latteOfferAsset.url,
  clarityAsset.url,
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blushbuild | Creator Diary" },
      {
        name: "description",
        content:
          "A creator diary homepage for digital products, content strategy, and warm editorial resources.",
      },
      { property: "og:title", content: "Blushbuild | Creator Diary" },
      {
        property: "og:description",
        content:
          "A creator diary homepage for digital products, content strategy, and warm editorial resources.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-highlight">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 text-center text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
          New here? Get the free creator starter kit ✨
        </div>
      </section>

      <section className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-4 py-5 lg:px-6">
          <div>
            <p className="font-display text-3xl leading-none text-foreground">Blushbuild</p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              Studio
            </p>
          </div>

          <nav aria-label="Primary" className="order-3 w-full lg:order-2 lg:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/80">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#journey">Journey</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
              <li>
                <a href="#resources">Freebies</a>
              </li>
              <li>
                <a href="#journey">Shop</a>
              </li>
              <li>
                <a href="#join">About</a>
              </li>
            </ul>
          </nav>

          <div className="order-2 flex items-center gap-3 lg:order-3">
            <button type="button" className="icon-shell" aria-label="Search">
              ⌕
            </button>
            <button type="button" className="icon-shell" aria-label="Bag">
              ♡
            </button>
            <a href="#join" className="button-solid">
              Join the list
            </a>
          </div>
        </div>
      </section>

      <section id="home" className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.55fr] lg:items-start">
          <aside className="paper-panel flex h-full flex-col justify-center px-6 py-8 sm:px-8 lg:min-h-[36rem] lg:px-10">
            <p className="eyebrow">Welcome to my</p>
            <h1 className="mt-4 max-w-[10ch] font-display text-balance text-6xl leading-[0.88] text-foreground sm:text-7xl">
              Creator Diary ♡
            </h1>
            <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
              Real journey. Real numbers. Building a digital product business from my laptop, one
              offer, post, and launch at a time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#journey" className="button-solid">
                Follow the journey →
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["A", "C", "R"].map((item) => (
                  <span key={item} className="avatar-chip">
                    {item}
                  </span>
                ))}
              </div>
              <p className="max-w-[16rem] text-sm leading-6 text-muted-foreground">
                Join 12,000+ creators building freedom online.
              </p>
            </div>
          </aside>

          <div className="grid gap-4 lg:grid-cols-[1.5fr_0.9fr_0.95fr]">
            <article className="hero-card lg:row-span-2">
              <img
                src={social2026Asset.url}
                alt="Editorial creator image with a social media growth tip overlay"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-dots" aria-hidden="true">
                <span className="hero-dot is-active" />
                <span className="hero-dot" />
                <span className="hero-dot" />
              </div>
            </article>

            <article className="stack-card">
              <img
                src={bootsAsset.url}
                alt="Cream boots editorial content prompt graphic"
                className="tile-image"
                loading="lazy"
              />
            </article>

            <article className="stack-card tall-copy justify-end bg-photo-ink">
              <div className="soft-overlay" />
              <div className="relative z-10 p-5 text-right">
                <p className="font-display text-4xl leading-[0.95] text-cream-foreground">
                  Content prompts
                </p>
                <p className="mt-2 font-serif-alt text-5xl leading-[0.95] text-cream-foreground">
                  you need
                </p>
                <p className="font-serif-alt text-5xl leading-[0.95] text-cream-foreground">
                  this month
                </p>
              </div>
              <img
                src={bootsAsset.url}
                alt="Fashion boots editorial background"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </article>

            <article className="mini-note lg:col-start-2">
              <span className="note-chip">Workbook</span>
              <h2 className="mt-4 max-w-[14ch] font-serif-alt text-3xl leading-tight text-foreground">
                This is what’s actually working on Instagram right now
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                <div className="mini-file">Vocab vault</div>
                <div className="mini-file">Template bundle</div>
                <div className="mini-file">Content calendar</div>
                <div className="mini-file">Offer notes</div>
              </div>
            </article>

            <article className="stack-card lg:col-start-3">
              <img
                src={brandingTipsAsset.url}
                alt="Branding tips graphic on a soft neutral background"
                className="tile-image"
                loading="lazy"
              />
              <div className="floating-pill">Viral trends for January 2026</div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-panel">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-px sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["42+", "Products in progress"],
            ["12K+", "Followers across Pinterest & IG"],
            ["$12K+", "Generated with digital products"],
            ["1 Goal", "Build freedom online"],
          ].map(([value, label]) => (
            <div key={label} className="stat-card">
              <p className="font-serif-alt text-4xl leading-none text-foreground">{value}</p>
              <p className="mt-3 max-w-[18ch] text-sm leading-6 text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">What I’m building right now ✧</p>
            <h2 className="section-title">
              Behind the scenes of my digital product empire in the making.
            </h2>
          </div>
        </div>

        <div className="mt-7 grid gap-4 xl:grid-cols-[1.4fr_1.4fr_1.4fr_1.4fr_1.8fr]">
          {products.map((product) => (
            <article key={product.title} className="product-card">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-border bg-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <span className="product-tag">{product.phase}</span>
              </div>
              <h3 className="mt-4 font-serif-alt text-2xl leading-tight text-foreground">
                {product.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.note}</p>
              <a href="#shop" className="product-link">
                {product.cta} →
              </a>
            </article>
          ))}

          <aside className="journal-card">
            <div className="journal-binding" aria-hidden="true" />
            <div className="journal-body">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="eyebrow">Recent diary entries</p>
                  <h3 className="mt-2 font-serif-alt text-3xl leading-none text-foreground">
                    Notes from the week
                  </h3>
                </div>
                <a
                  href="#about"
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                >
                  View all
                </a>
              </div>

              <ul className="mt-6 space-y-4">
                {diaryEntries.map((entry) => (
                  <li
                    key={entry.title}
                    className="flex items-start justify-between gap-4 border-b border-border/70 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="max-w-[17rem] text-sm leading-6 text-foreground/85">
                      {entry.title}
                    </span>
                    <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {entry.date}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="#join" className="button-solid mt-8 inline-flex">
                Read the diary →
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="resources" className="border-t border-border bg-panel">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <div>
            <p className="section-kicker">Free resources to help you start ♡</p>
            <h2 className="section-title">
              Beautiful freebies to help you create, launch, and call in your digital products.
            </h2>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {resources.map((resource) => (
                <article key={resource.title} className="resource-card">
                  <div className="resource-cover">
                    <span className="resource-type">{resource.type}</span>
                    <p className="font-serif-alt text-3xl leading-tight text-foreground">
                      {resource.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{resource.text}</p>
                  <a href="#freebies" className="product-link">
                    Get it free →
                  </a>
                </article>
              ))}
            </div>

            <aside className="feature-collage">
              <img
                src={facelessBizAsset.url}
                alt="Notebook style content planning graphic"
                className="feature-collage-main"
                loading="lazy"
              />
              <img
                src={brandStandsOutAsset.url}
                alt="Brand building editorial graphic"
                className="feature-collage-float feature-collage-left"
                loading="lazy"
              />
              <img
                src={clarityAsset.url}
                alt="Brand clarity editorial graphic"
                className="feature-collage-float feature-collage-right"
                loading="lazy"
              />
            </aside>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stripImages.map((image, index) => (
              <figure key={image} className="strip-frame">
                <img
                  src={image}
                  alt={`Creator lifestyle detail ${index + 1}`}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="join-band">
          <div className="join-polaroids" aria-hidden="true">
            <img
              src={contentStrategyAsset.url}
              alt=""
              className="join-polaroid rotate-[-8deg]"
              loading="lazy"
            />
            <img
              src={clarityAsset.url}
              alt=""
              className="join-polaroid rotate-[6deg]"
              loading="lazy"
            />
          </div>

          <div className="join-copy">
            <p className="section-kicker">Join the studio ♡</p>
            <h2 className="font-serif-alt text-5xl leading-none text-foreground">
              Weekly creator notes
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Get weekly creator updates, behind-the-scenes, free resources, and first access to new
              products.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="input-shell"
                aria-label="Email address"
              />
              <button type="submit" className="button-solid">
                Join the list →
              </button>
            </form>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-foreground/80">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms &amp; Conditions</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="join-side">
            <img
              src={latteOfferAsset.url}
              alt="Iced latte editorial graphic"
              className="join-side-image"
              loading="lazy"
            />
            <div className="quote-card">One idea + one laptop can change your whole life.</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-footer py-5 text-center text-xs tracking-[0.16em] text-footer-foreground uppercase">
        © 2026 Blushbuild — all rights reserved
      </footer>
    </main>
  );
}

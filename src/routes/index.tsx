import { createFileRoute, Link } from "@tanstack/react-router";
import { diaryEntries as allDiaryEntries, resources as allResources, products as allProducts } from "@/content/site";

import social2026Asset from "@/assets/social-2026.png.asset.json";
import bootsAsset from "@/assets/boots.png.asset.json";
import coquette1Asset from "@/assets/coquette-1.png.asset.json";
import coquette2Asset from "@/assets/coquette-2.png.asset.json";
import coquette5Asset from "@/assets/coquette-5.png.asset.json";
import coquette6Asset from "@/assets/coquette-6.png.asset.json";
import coquette7Asset from "@/assets/coquette-7.png.asset.json";
import iced1Asset from "@/assets/iced-1.png.asset.json";
import iced2Asset from "@/assets/iced-2.png.asset.json";
import iced6Asset from "@/assets/iced-6.png.asset.json";
import iced8Asset from "@/assets/iced-8.png.asset.json";

const products = allProducts.slice(0, 4).map((p) => ({
  slug: p.slug,
  title: p.title,
  phase: p.phase,
  note: p.note,
  cta: "See progress",
  image: p.image,
}));

const resources = allResources.slice(0, 4).map((r) => ({
  slug: r.slug,
  title: r.title,
  type: r.type,
  text: r.text,
}));

const diaryEntries = allDiaryEntries.slice(0, 5).map((e) => ({
  slug: e.slug,
  title: e.title,
  date: e.date,
}));


const stripImages = [coquette2Asset.url, social2026Asset.url, bootsAsset.url, iced6Asset.url];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blushbuild | Creator Diary" },
      {
        name: "description",
        content:
          "Blushbuild is a creator diary website for digital products, content strategy, freebies, and behind-the-scenes updates.",
      },
      { property: "og:title", content: "Blushbuild | Creator Diary" },
      {
        property: "og:description",
        content:
          "Blushbuild is a creator diary website for digital products, content strategy, freebies, and behind-the-scenes updates.",
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
          New here? Get the free Etsy starter kit ✨
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
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground/80 sm:gap-5 sm:text-[0.72rem] sm:tracking-[0.18em]">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/diary">Diary</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/progress">Journey</Link></li>
              <li><Link to="/resources">Freebies</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>

          <div className="order-2 flex items-center gap-3 lg:order-3">
            <button type="button" className="icon-shell" aria-label="Search">
              ⌕
            </button>
            <button type="button" className="icon-shell" aria-label="Bag">
              ♡
            </button>
            <Link to="/about" className="button-solid">
              Join the list
            </Link>
          </div>
        </div>
      </section>

      <section id="home" className="home-shell mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-10">
        <div className="hero-layout">
          <aside className="hero-intro">
            <p className="eyebrow">Welcome to my</p>
            <h1 className="mt-4 max-w-[10ch] font-display text-balance text-5xl leading-[0.9] text-foreground sm:text-6xl lg:text-7xl">
              Creator Diary♡
            </h1>
            <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
              Real journey. Real numbers. Building a digital product empire from my laptop.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/diary" className="button-solid">
                Follow the journey →
              </Link>
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

          <div className="hero-board">
            <article className="hero-main-card">
              <img
                src={social2026Asset.url}
                alt="Editorial creator social media growth collage"
                className="hero-main-image"
                loading="eager"
              />
              <div className="hero-dots" aria-hidden="true">
                <span className="hero-dot is-active" />
                <span className="hero-dot" />
                <span className="hero-dot" />
              </div>
            </article>

            <article className="hero-top-card">
              <img
                src={coquette2Asset.url}
                alt="Neutral creator lifestyle image with iced coffee"
                className="tile-image"
                loading="lazy"
              />
            </article>

            <article className="hero-copy-card">
              <img
                src={bootsAsset.url}
                alt="Fashion editorial boots image"
                className="hero-copy-image"
                loading="lazy"
              />
              <div className="hero-copy-overlay" />
              <div className="hero-copy-text">
                <p className="font-display text-4xl leading-[0.95] text-cream-foreground">
                  Content prompts
                </p>
                <p className="mt-1 font-serif-alt text-5xl leading-[0.94] text-cream-foreground">
                  you need
                </p>
                <p className="font-serif-alt text-5xl leading-[0.94] text-cream-foreground">
                  this month
                </p>
              </div>
            </article>

            <article className="hero-note-card">
              <div className="hero-note-icons" aria-hidden="true">
                <div className="mini-folder">UGC-style content</div>
                <div className="mini-folder">Interactive stories</div>
              </div>
              <img
                src={coquette6Asset.url}
                alt="Instagram strategy graphic with phone"
                className="hero-note-image"
                loading="lazy"
              />
            </article>

            <article className="hero-pill-card">
              <img
                src={coquette7Asset.url}
                alt="Calendar content planning creator graphic"
                className="tile-image"
                loading="lazy"
              />
              <div className="floating-pill">Viral trends for January 2026</div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-panel">
        <div className="stats-band mx-auto max-w-7xl">
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
        <div>
          <p className="section-kicker">What I’m building right now ✧</p>
          <h2 className="section-title">
            Behind the scenes of my digital product empire in the making.
          </h2>
        </div>

        <div className="journey-grid mt-7">
          <div className="journey-products">
            {products.map((product) => (
              <article key={product.title} className="product-card">
                <div className="product-visual">
                  <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
                  <span className="product-tag">{product.phase}</span>
                </div>
                <h3 className="mt-4 font-serif-alt text-2xl leading-tight text-foreground">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.note}</p>
                <Link to="/shop/$slug" params={{ slug: product.slug }} className="product-link">
                  {product.cta} →
                </Link>
              </article>
            ))}
          </div>

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
                <Link
                  to="/diary"
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                >
                  View all
                </Link>
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

              <a href="/about" className="button-solid mt-8 inline-flex">
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

          <div className="resource-layout mt-7">
            <div className="resource-grid">
              {resources.map((resource) => (
                <article key={resource.title} className="resource-card">
                  <div className="resource-cover">
                    <span className="resource-type">{resource.type}</span>
                    <p className="font-serif-alt text-3xl leading-tight text-foreground">
                      {resource.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{resource.text}</p>
                  <a href="/resources" className="product-link">
                    Get it free →
                  </a>
                </article>
              ))}
            </div>

            <aside className="spotlight-card">
              <img
                src={coquette1Asset.url}
                alt="Creator collage with laptop, coffee, and fashion accessories"
                className="spotlight-image"
                loading="lazy"
              />
            </aside>
          </div>

          <div className="strip-grid mt-8">
            {stripImages.map((image, index) => (
              <figure key={image} className="strip-frame">
                <img
                  src={image}
                  alt={`Creator lifestyle detail ${index + 1}`}
                  className="strip-image"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="join-editorial">
          <div className="join-strip">
            <img src={iced2Asset.url} alt="Creator portrait card" className="join-mini-card rotate-[-7deg]" loading="lazy" />
            <img src={coquette5Asset.url} alt="Floral creator inspiration photo" className="join-mini-card rotate-[4deg]" loading="lazy" />
          </div>

          <div className="join-copy-panel">
            <p className="section-kicker">Join the studio ♡</p>
            <h2 className="font-serif-alt text-5xl leading-none text-foreground">Join The Studio</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Get weekly creator updates, behind-the-scenes, free resources, and first access to
              new products.
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
              <a href="/about">Privacy Policy</a>
              <a href="/about">Terms &amp; Conditions</a>
              <a href="/about">Contact</a>
            </div>
          </div>

          <div className="join-side-stack">
            <img
              src={iced1Asset.url}
              alt="Content creation strategy inspiration graphic"
              className="join-side-photo"
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

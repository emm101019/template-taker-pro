import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/starter-kit")({
  head: () => ({
    meta: [
      { title: "Pretty & Unforgettable Brand™ Starter Kit — Blushbuild" },
      {
        name: "description",
        content:
          "An interactive Starter Kit to build a brand that feels authentic, premium, and impossible to forget. Free instant access.",
      },
      { property: "og:title", content: "Pretty & Unforgettable Brand™ Starter Kit" },
      {
        property: "og:description",
        content:
          "Not another PDF — an interactive experience with the 17-step framework, worksheets, and a personalized brand assessment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StarterKitPage,
});

const schema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(255),
});

type ConversationCard = {
  text: string;
  tone: "blush" | "cream" | "plum" | "lavender";
  side: "left" | "right";
  glyph: string;
};

const conversationCards: ConversationCard[] = [
  { text: "My brand feels all over the place.", tone: "plum", side: "right", glyph: "✦" },
  { text: "I don't know why people aren't connecting.", tone: "lavender", side: "left", glyph: "❁" },
  { text: "I want a brand that feels premium.", tone: "blush", side: "right", glyph: "♡" },
  { text: "I'm tired of piecing everything together.", tone: "cream", side: "left", glyph: "✧" },
];

const experienceItems = [
  { label: "Chapter 01", title: "The 17-Step Brand Framework", text: "The exact sequence I use to build unforgettable brands — mapped step-by-step." },
  { label: "Chapter 02", title: "Live Brand Build", text: "Watch a real brand come to life in front of you, with every decision explained." },
  { label: "Chapter 03", title: "Real Brand Examples", text: "Case studies from brands built with this framework — what worked, what didn't." },
  { label: "Chapter 04", title: "Interactive Exercises", text: "Small, thoughtful prompts that shape your brand as you move through the kit." },
  { label: "Chapter 05", title: "Brand Worksheets", text: "Beautifully designed worksheets you'll actually want to fill out." },
  { label: "Chapter 06", title: "Messaging Walkthroughs", text: "Find the words that make your brand feel human, magnetic, and unmistakably yours." },
  { label: "Chapter 07", title: "Brand Audit", text: "A gentle, honest look at where your brand is right now — and where it's leaking magic." },
  { label: "Chapter 08", title: "Brand Assessment", text: "A personalized read on your brand's clarity, cohesion, and quiet power." },
] as const;

const pictureThis = [
  { title: "Your brand looks like it belongs on the shelf you dream of.", text: "Cohesive, styled, and unmistakably yours — the brand people screenshot for inspo." },
  { title: "You know exactly WHY every choice is there.", text: "Not decoration — intention. Every colour, word, and image answering a real buyer question." },
  { title: "You have a before/after you're proud to post.", text: "The kind of glow-up that makes people ask \u201cokay HOW?!\u201d" },
  { title: "You own a repeatable formula.", text: "Next launch? A weekend. The one after that? An afternoon. It compounds." },
];

const bonusTools = [
  { glyph: "❁", label: "Prompt Library" },
  { glyph: "✦", label: "Palette Cards" },
  { glyph: "♡", label: "Voice Recipes" },
  { glyph: "☾", label: "Mood Boards" },
  { glyph: "✧", label: "Layout Kits" },
  { glyph: "❋", label: "Launch Scripts" },
  { glyph: "✿", label: "Audit Sheets" },
];

const faqs = [
  { q: "I'm not a designer. Will this work for me?", a: "Yes — the whole kit is built for founders, creators, and shop owners with zero design background. Every framework is plug-and-play." },
  { q: "How much time do I need each day?", a: "Around 20–30 minutes per chapter. You can move faster or slower — everything is self-paced and saved as you go." },
  { q: "I sell printables / wall art / planners — does it apply?", a: "Absolutely. The framework works for digital products, physical goods, services, and personal brands. The language and worksheets adapt to what you sell." },
  { q: "Do I need paid Canva or fancy tools?", a: "No. Everything works with free Canva, Google Docs, or pen and paper. The magic is in the framework, not the software." },
  { q: "Is it live or can I do it at my own pace?", a: "Completely self-paced. Once you unlock Chapter One, it's yours forever — come and go as your life allows." },
  { q: "What happens after the 8 chapters?", a: "You'll receive gentle follow-ups with bonus prompts and the invitation to keep building with the Blushbuild library." },
  { q: "Is my email safe? Can I unsubscribe?", a: "Always. One-click unsubscribe on every email, and I never share your info. Ever." },
];

function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Sparkles({ count = 12, className = "" }: { count?: number; className?: string }) {
  const items = Array.from({ length: count });
  return (
    <div aria-hidden="true" className={`starter-sparkles ${className}`}>
      {items.map((_, i) => (
        <span
          key={i}
          className="starter-sparkle"
          style={{
            left: `${(i * 83) % 100}%`,
            top: `${(i * 47) % 100}%`,
            animationDelay: `${(i % 6) * 0.6}s`,
            animationDuration: `${4 + (i % 5)}s`,
            fontSize: `${0.7 + ((i % 4) * 0.3)}rem`,
          }}
        >
          {i % 3 === 0 ? "✦" : i % 3 === 1 ? "♡" : "✧"}
        </span>
      ))}
    </div>
  );
}

function StarterKitPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const formRef = useRef<HTMLFormElement>(null);

  useReveal();

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    const firstInput = formRef.current?.querySelector<HTMLInputElement>("input");
    setTimeout(() => firstInput?.focus({ preventScroll: true }), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ firstName, email });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSubmitting(true);
    try {
      const raw = window.localStorage.getItem("blushbuild.starterKit");
      const arr = raw ? JSON.parse(raw) : [];
      arr.push({ ...parsed.data, timestamp: new Date().toISOString() });
      window.localStorage.setItem("blushbuild.starterKit", JSON.stringify(arr));
      window.localStorage.setItem("blushbuild.starterKit.subscribed", "true");
    } catch {
      /* ignore */
    }
    navigate({ to: "/chapter-one" as never }).catch(() => {
      window.location.assign("/chapter-one");
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground starter-page">
      <SiteHeader />

      {/* HERO */}
      <section className="starter-hero">
        <div className="starter-hero-glow" aria-hidden="true" />
        <Sparkles count={14} />
        <div className="starter-hero-inner">
          <div className="starter-hero-copy reveal">
            <p className="starter-eyebrow starter-eyebrow-pill">✦ Free Starter Kit</p>
            <h1 className="starter-hero-title">
              <span className="starter-hero-script">the</span>
              <span className="starter-hero-shimmer">Pretty &amp; Unforgettable</span>
              <span className="starter-hero-italic">Brand™ Starter Kit</span>
            </h1>
            <div className="starter-hero-body">
              <p>Build a brand that feels authentic, premium, and impossible to forget.</p>
              <p className="starter-hero-emph">This isn't another PDF.</p>
              <p>
                It's an interactive experience designed to walk you through the exact framework I
                use to build unforgettable brands — with examples, exercises, worksheets, and a
                personalized brand assessment.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="button" onClick={scrollToForm} className="button-solid starter-cta-glow">
                Get Instant Access →
              </button>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Instant · Free · No spam
              </span>
            </div>
          </div>

          <div className="starter-hero-visual reveal" aria-hidden="true">
            <span className="starter-orbit starter-orbit-1">✦</span>
            <span className="starter-orbit starter-orbit-2">♡</span>
            <span className="starter-orbit starter-orbit-3">✧</span>
            <span className="starter-orbit starter-orbit-4">❁</span>
            <div className="starter-mockup">
              <div className="starter-mockup-shine" />
              <div className="starter-mockup-inner">
                <p className="starter-mockup-eyebrow">Blushbuild · Chapter One</p>
                <p className="starter-mockup-title">
                  Pretty &amp;<br />
                  Unforgettable<br />
                  <span>Brand™</span>
                </p>
                <p className="starter-mockup-note">An interactive Starter Kit</p>
                <div className="starter-mockup-line" />
                <p className="starter-mockup-foot">8 chapters · worksheets · assessment</p>
              </div>
            </div>
            <div className="starter-mockup-shadow" />
          </div>
        </div>
      </section>

      {/* IS THIS YOU — chat style */}
      <section className="starter-section starter-section-lavender">
        <div className="starter-bokeh" aria-hidden="true" />
        <div className="starter-section-inner">
          <div className="reveal text-center">
            <p className="starter-eyebrow">Straight from my inbox</p>
            <h2 className="starter-section-title">
              The whispers I hear
              <span className="starter-script-accent"> every single week…</span>
            </h2>
            <p className="starter-section-lede">
              If you've ever thought any of these — you're in very good company, and this kit was
              built for you. ♡
            </p>
          </div>
          <div className="starter-chat">
            {conversationCards.map((c, i) => (
              <div
                key={c.text}
                className={`starter-chat-row is-${c.side} reveal`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {c.side === "left" && <span className={`starter-avatar starter-avatar-${c.tone}`}>{c.glyph}</span>}
                <div className={`starter-chat-bubble starter-bubble-${c.tone}`}>
                  <p>{c.text}</p>
                </div>
                {c.side === "right" && <span className={`starter-avatar starter-avatar-${c.tone}`}>{c.glyph}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOUND LIKE YOU */}
      <section className="starter-section starter-section-blush">
        <div className="starter-section-inner starter-sound">
          <p className="starter-script-big reveal">Sound like you?</p>
          <p className="starter-sound-body reveal">
            Then the next eight chapters are going to feel like a little bit of magic. Every one of
            these whispers gets answered inside the kit — with frameworks, worksheets, and words
            you can actually use. ✨
          </p>
        </div>
      </section>

      {/* WHAT YOU'LL EXPERIENCE */}
      <section className="starter-section starter-section-panel">
        <Sparkles count={8} className="is-subtle" />
        <div className="starter-section-inner">
          <div className="reveal text-center">
            <p className="starter-eyebrow">What you'll experience</p>
            <h2 className="starter-section-title">Eight quiet chapters. One unforgettable brand.</h2>
          </div>
          <div className="starter-experience-grid">
            {experienceItems.map((item, i) => (
              <article
                key={item.title}
                className="starter-experience-card reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="starter-card-shine" aria-hidden="true" />
                <p className="starter-experience-label">{item.label}</p>
                <h3 className="starter-experience-title">{item.title}</h3>
                <p className="starter-experience-text">{item.text}</p>
                <span className="starter-experience-arrow">→</span>
                <span className="starter-card-sparkle" aria-hidden="true">✦</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PICTURE THIS */}
      <section className="starter-section starter-section-cream">
        <div className="starter-section-inner">
          <div className="reveal text-center">
            <p className="starter-eyebrow">Picture this</p>
            <h2 className="starter-section-title">Eight chapters from now…</h2>
          </div>
          <div className="starter-picture-grid">
            {pictureThis.map((p, i) => (
              <article key={p.title} className="starter-picture-card reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="starter-check" aria-hidden="true">✓</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS TOOLS */}
      <section className="starter-section starter-section-plum">
        <Sparkles count={10} className="is-light" />
        <div className="starter-section-inner text-center">
          <p className="starter-eyebrow starter-eyebrow-light reveal">Unlocked inside</p>
          <h2 className="starter-section-title starter-title-light reveal">
            Bonus tools &amp; templates
            <span className="starter-script-accent starter-script-light"> at every chapter</span>
          </h2>
          <p className="starter-sound-body starter-body-light reveal">
            With every framework you'll unlock a matching Blushbuild tool — prompts, palettes, and
            plug-in worksheets to make it even easier.
          </p>
          <div className="starter-bonus-row">
            {bonusTools.map((b, i) => (
              <div
                key={b.label}
                className="starter-bonus-card reveal"
                style={{ transitionDelay: `${i * 70}ms`, animationDelay: `${i * 0.4}s` }}
              >
                <span className="starter-bonus-lock">◉</span>
                <span className="starter-bonus-glyph">{b.glyph}</span>
                <span className="starter-bonus-label">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="starter-section">
        <div className="starter-section-inner starter-story reveal">
          <p className="starter-eyebrow">What makes this different</p>
          <h2 className="starter-story-title">
            You don't just read it.<br />
            <em>You build your brand inside it.</em>
          </h2>
          <div className="starter-story-body">
            <p>This isn't another downloadable guide.</p>
            <p>You'll actually build your brand as you move through the experience.</p>
            <p>
              By the time you finish, you'll understand exactly why your current brand isn't
              connecting — and you'll know exactly what to do next.
            </p>
          </div>
          <div className="starter-progress" aria-hidden="true">
            <span className="starter-progress-dot is-on" />
            <span className="starter-progress-line" />
            <span className="starter-progress-dot is-on" />
            <span className="starter-progress-line" />
            <span className="starter-progress-dot is-current">01</span>
            <span className="starter-progress-line is-dim" />
            <span className="starter-progress-dot" />
          </div>
          <p className="starter-progress-caption">Next: Chapter One</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="starter-section starter-section-panel">
        <div className="starter-section-inner">
          <div className="reveal text-center">
            <p className="starter-eyebrow">Quick questions</p>
            <h2 className="starter-section-title">Everything you're wondering</h2>
          </div>
          <div className="starter-faq">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`starter-faq-item reveal ${open ? "is-open" : ""}`} style={{ transitionDelay: `${i * 50}ms` }}>
                  <button
                    type="button"
                    className="starter-faq-question"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="starter-faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                  <div className="starter-faq-answer" hidden={!open}>
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAKE IT PRETTY / FINAL CTA */}
      <section className="starter-final">
        <div className="starter-aurora" aria-hidden="true">
          <span className="starter-aurora-blob b1" />
          <span className="starter-aurora-blob b2" />
          <span className="starter-aurora-blob b3" />
        </div>
        <Sparkles count={16} className="is-light" />
        <div className="starter-final-inner">
          <p className="starter-eyebrow starter-eyebrow-light reveal">Your beginning starts today</p>
          <p className="starter-script-big starter-script-light reveal">so… shall we</p>
          <h2 className="starter-final-title reveal">
            Make It <em>Pretty?</em>
          </h2>
          <p className="starter-final-body reveal">
            Enter your details below and I'll instantly unlock your Pretty &amp; Unforgettable
            Brand™ Starter Kit, where you'll begin Chapter One of your brand transformation.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="starter-form reveal" noValidate>
            <label className="starter-field">
              <span>First name</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                maxLength={80}
                placeholder="Your first name"
                autoComplete="given-name"
                required
              />
            </label>
            <label className="starter-field">
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
            {error ? <p className="starter-form-error">{error}</p> : null}
            <button type="submit" className="button-solid starter-form-submit starter-cta-glow" disabled={submitting}>
              {submitting ? "Unlocking…" : "Unlock Chapter One →"}
            </button>
            <p className="starter-form-note">
              By continuing you'll join the Blushbuild list. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

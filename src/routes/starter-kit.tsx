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
  { text: "How do I make my brand look more premium?", tone: "plum", side: "right", glyph: "✦" },
  { text: "I don't want to show my face… can I still build a successful brand?", tone: "lavender", side: "left", glyph: "❁" },
  { text: "My content feels all over the place.", tone: "blush", side: "right", glyph: "♡" },
  { text: "I want my brand to actually stand out.", tone: "cream", side: "left", glyph: "✧" },
  { text: "I have so many ideas… I just don't know where to start.", tone: "plum", side: "right", glyph: "☾" },
];

const experienceItems = [
  { label: "Inside 01", title: "The complete 17-Step Brand Framework", text: "The exact sequence I use to build unforgettable brands — mapped step-by-step." },
  { label: "Inside 02", title: "Real brand examples and breakdowns", text: "See the framework applied to real brands, with every choice explained." },
  { label: "Inside 03", title: "Before & after transformations", text: "The visible glow-up — what changed, why it worked, and how to do the same." },
  { label: "Inside 04", title: "Interactive exercises", text: "Small, thoughtful prompts that shape your brand as you move through the kit." },
  { label: "Inside 05", title: "Guided implementation prompts", text: "Turn strategy into actual next steps — no guessing, no blank pages." },
  { label: "Inside 06", title: "Brand-building worksheets", text: "Beautifully designed worksheets you'll actually want to fill out." },
  { label: "Inside 07", title: "A personalized Brand Assessment", text: "A quiet, honest read on your brand's clarity, cohesion, and pulling power." },
] as const;

const pictureThis = [
  { title: "Your brand finally feels cohesive.", text: "Every touchpoint speaks the same language — visually, emotionally, quietly premium." },
  { title: "You know exactly what makes your business different.", text: "No more copying trends. You have language for the thing only you can offer." },
  { title: "Creating content feels easier because your brand has direction.", text: "You'll stop starting from scratch. Every post flows from a clear brand core." },
  { title: "Your Instagram actually reflects the business you're building.", text: "A feed that looks like the brand in your head — finally on the outside too." },
];

const bonusTools = [
  { glyph: "❁", label: "Brand Worksheets" },
  { glyph: "✦", label: "Brand Examples" },
  { glyph: "♡", label: "Visual Breakdowns" },
  { glyph: "☾", label: "Swipe Files" },
  { glyph: "✧", label: "Reflection Prompts" },
  { glyph: "❋", label: "Brand Assessment" },
];

const faqs = [
  { q: "I'm not creative. Will this still work?", a: "Yes — this kit is built for founders and creators, not designers. Every framework is plug-and-play, with prompts that do the heavy lifting for you." },
  { q: "I don't want to show my face. Is this for me?", a: "Completely. The whole kit is designed for faceless and personal brands alike — the framework works whether or not you ever appear on camera." },
  { q: "Do I need Canva Pro?", a: "No. Everything inside works with free Canva, Google Docs, or even pen and paper. The magic is in the framework, not the software." },
  { q: "How long does it take?", a: "You can move through it in a weekend or stretch it over a few weeks — it's fully self-paced. Most people feel a real shift within the first sitting." },
  { q: "Is this really free?", a: "Yes — 100% free, instant access, no card required. Just your first name and email so I can unlock it for you." },
  { q: "What happens after I finish?", a: "You'll leave with a clear, cohesive brand foundation and an invitation into the full Pretty & Unforgettable Brand™ experience if you want to keep building." },
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
        <div className="starter-hero-inner">
          <div className="starter-hero-copy reveal">
            <p className="starter-eyebrow starter-eyebrow-pill">✦ Free Interactive Starter Kit</p>
            <h1 className="starter-hero-title">
              Pretty <em>&amp;</em> Unforgettable
              <span className="starter-hero-title-line">Brand™ Starter Kit</span>
            </h1>
            <p className="starter-hero-sub">
              Build a faceless brand people can't forget — premium, authentic, unmistakably yours.
            </p>
            <div className="starter-hero-body">
              <p className="starter-hero-emph">Not another free PDF.</p>
              <p>
                An interactive Starter Kit that walks you through the complete branding framework
                — with real examples, visual breakdowns, exercises, and a personalized brand
                assessment.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="button" onClick={scrollToForm} className="button-solid">
                Unlock My Starter Kit →
              </button>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Instant Access · Free · No Spam
              </span>
            </div>
          </div>

          <div className="starter-hero-visual reveal" aria-hidden="true">
            <div className="starter-mockup">
              <div className="starter-mockup-inner">
                <p className="starter-mockup-eyebrow">Blushbuild · Chapter One</p>
                <p className="starter-mockup-title">
                  Pretty <em>&amp;</em><br />
                  Unforgettable<br />
                  <span>Brand™</span>
                </p>
                <p className="starter-mockup-note">An interactive Starter Kit</p>
                <div className="starter-mockup-line" />
                <p className="starter-mockup-foot">Framework · Worksheets · Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* IS THIS YOU — chat style */}
      <section className="starter-section starter-section-lavender">
        <div className="starter-bokeh" aria-hidden="true" />
        <div className="starter-section-inner">
          <div className="reveal text-center">
            <p className="starter-eyebrow">Is this you?</p>
            <h2 className="starter-section-title">
              The messages I get
              <span className="starter-script-accent"> every single week…</span>
            </h2>
            <p className="starter-section-lede">
              If any of these sound familiar — you're in exactly the right place. ♡
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
            If you've ever thought one of those things, you're exactly who I created this Starter
            Kit for. Because building a memorable brand isn't about having the prettiest logo or
            the perfect Instagram feed — it's about creating a brand people trust, remember, and
            can't stop thinking about. That's exactly what you'll start building inside. ✨
          </p>
        </div>
      </section>

      {/* WHAT YOU'LL EXPERIENCE */}
      <section className="starter-section starter-section-panel">
        <Sparkles count={8} className="is-subtle" />
        <div className="starter-section-inner">
          <div className="reveal text-center">
            <p className="starter-eyebrow">What you'll experience</p>
            <h2 className="starter-section-title">Inside the Starter Kit, you'll unlock…</h2>
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
            <p className="starter-eyebrow">Picture this…</p>
            <h2 className="starter-section-title">Imagine where your brand could be just seven days from now…</h2>
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
          <p className="starter-eyebrow starter-eyebrow-light reveal">You'll also get access to</p>
          <h2 className="starter-section-title starter-title-light reveal">
            Bonus tools &amp; templates
            <span className="starter-script-accent starter-script-light"> to make it click</span>
          </h2>
          <p className="starter-sound-body starter-body-light reveal">
            Because seeing the strategy in action makes everything click.
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
          <p className="starter-eyebrow">What makes this different?</p>
          <h2 className="starter-story-title">
            Most free guides give you information.<br />
            <em>This Starter Kit gives you clarity.</em>
          </h2>
          <div className="starter-story-body">
            <p>
              Instead of reading pages of theory, you'll walk through the exact framework I use to
              build memorable brands — with examples, guided exercises, and practical
              implementation every step of the way.
            </p>
            <p>By the end, you won't just know what to do. You'll know exactly where to start.</p>
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
            <p className="starter-eyebrow">FAQ</p>
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
          <p className="starter-script-big starter-script-light reveal">ready to</p>
          <h2 className="starter-final-title reveal">
            Make It <em>Pretty?</em>
          </h2>
          <p className="starter-final-body reveal">
            Then let's make it unforgettable. Because the brands people remember aren't built by
            accident. They're built with intention. They're built with strategy. And yours is next.
          </p>
          <p className="starter-final-body reveal">
            Enter your email below and unlock the complete Pretty &amp; Unforgettable Brand™
            Starter Kit.
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
              <span>Email address</span>
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
              {submitting ? "Unlocking…" : "✨ Unlock My Starter Kit →"}
            </button>
            <p className="starter-form-note">
              Instant Access · Free · Start Building Today
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

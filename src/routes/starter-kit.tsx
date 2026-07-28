import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
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

const conversationCards = [
  { text: "My brand feels all over the place.", tone: "blush" },
  { text: "I don't know why people aren't connecting.", tone: "cream" },
  { text: "I want a brand that feels premium.", tone: "plum" },
  { text: "I'm tired of piecing everything together.", tone: "lavender" },
] as const;

const experienceItems = [
  {
    label: "Chapter 01",
    title: "The 17-Step Brand Framework",
    text: "The exact sequence I use to build unforgettable brands — mapped step-by-step.",
  },
  {
    label: "Chapter 02",
    title: "Live Brand Build",
    text: "Watch a real brand come to life in front of you, with every decision explained.",
  },
  {
    label: "Chapter 03",
    title: "Real Brand Examples",
    text: "Case studies from brands built with this framework — what worked, what didn't.",
  },
  {
    label: "Chapter 04",
    title: "Interactive Exercises",
    text: "Small, thoughtful prompts that shape your brand as you move through the kit.",
  },
  {
    label: "Chapter 05",
    title: "Brand Worksheets",
    text: "Beautifully designed worksheets you'll actually want to fill out.",
  },
  {
    label: "Chapter 06",
    title: "Messaging Walkthroughs",
    text: "Find the words that make your brand feel human, magnetic, and unmistakably yours.",
  },
  {
    label: "Chapter 07",
    title: "Brand Audit",
    text: "A gentle, honest look at where your brand is right now — and where it's leaking magic.",
  },
  {
    label: "Chapter 08",
    title: "Brand Assessment",
    text: "A personalized read on your brand's clarity, cohesion, and quiet power.",
  },
] as const;

function StarterKitPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      // ignore storage errors
    }
    navigate({ to: "/chapter-one" as never }).catch(() => {
      window.location.assign("/chapter-one");
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="starter-hero">
        <div className="starter-hero-inner">
          <div className="starter-hero-copy">
            <p className="starter-eyebrow">Free Starter Kit</p>
            <h1 className="starter-hero-title">
              Pretty &amp; Unforgettable Brand™ Starter Kit
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
              <button type="button" onClick={scrollToForm} className="button-solid">
                Get Instant Access →
              </button>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Instant · Free · No spam
              </span>
            </div>
          </div>

          <div className="starter-hero-visual" aria-hidden="true">
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
                <p className="starter-mockup-foot">17 chapters · worksheets · assessment</p>
              </div>
            </div>
            <div className="starter-mockup-shadow" />
          </div>
        </div>
      </section>

      {/* IS THIS YOU */}
      <section className="starter-section">
        <div className="starter-section-inner">
          <p className="starter-eyebrow">Is this you?</p>
          <h2 className="starter-section-title">Whispers I hear all the time.</h2>
          <div className="starter-conversation">
            {conversationCards.map((c, i) => (
              <div
                key={c.text}
                className={`starter-bubble starter-bubble-${c.tone}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <span className="starter-bubble-quote">"</span>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL EXPERIENCE */}
      <section className="starter-section starter-section-panel">
        <div className="starter-section-inner">
          <p className="starter-eyebrow">What you'll experience</p>
          <h2 className="starter-section-title">Eight quiet chapters. One unforgettable brand.</h2>
          <div className="starter-experience-grid">
            {experienceItems.map((item) => (
              <article key={item.title} className="starter-experience-card">
                <p className="starter-experience-label">{item.label}</p>
                <h3 className="starter-experience-title">{item.title}</h3>
                <p className="starter-experience-text">{item.text}</p>
                <span className="starter-experience-arrow">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="starter-section">
        <div className="starter-section-inner starter-story">
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

      {/* FINAL CTA */}
      <section className="starter-final">
        <div className="starter-final-inner">
          <p className="starter-eyebrow starter-eyebrow-light">Begin here</p>
          <h2 className="starter-final-title">
            Ready to begin your Pretty &amp; Unforgettable Brand™ journey?
          </h2>
          <p className="starter-final-body">
            Enter your email below and I'll instantly unlock your Pretty &amp; Unforgettable
            Brand™ Starter Kit, where you'll begin Chapter One of your brand transformation.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="starter-form" noValidate>
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
            <button type="submit" className="button-solid starter-form-submit" disabled={submitting}>
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

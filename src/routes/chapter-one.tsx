import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { sections, stages, auditItems, type Block, type Section } from "@/content/chapter-one";

export const Route = createFileRoute("/chapter-one")({
  head: () => ({
    meta: [
      { title: "Chapter One™ — The Interactive Starter Kit | Blushbuild" },
      {
        name: "description",
        content:
          "An interactive luxury workbook: walk the Pretty Method™ framework, complete reflections and exercises, and finish with your personalized Brand Assessment.",
      },
      { property: "og:title", content: "Chapter One™ — The Interactive Starter Kit" },
      {
        property: "og:description",
        content:
          "Slow down, reflect, and build a brand people can't forget — the complete framework as an immersive experience.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChapterOnePage,
});

const STORE_KEY = "blushbuild.chapterOne";

type Answers = Record<string, string | string[] | number>;

function useAnswers() {
  const [answers, setAnswers] = useState<Answers>({});
  const loaded = useRef(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORE_KEY);
      if (raw) setAnswers(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(answers));
    } catch {
      /* ignore */
    }
  }, [answers]);

  const set = useCallback((key: string, value: string | string[] | number) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  return { answers, set };
}

function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
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
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/* ---------------- Blocks ---------------- */

function Checklist({
  block,
  answers,
  set,
}: {
  block: Extract<Block, { t: "checklist" }>;
  answers: Answers;
  set: (k: string, v: string[]) => void;
}) {
  const selected = (answers[block.id] as string[]) ?? [];
  const toggle = (item: string) =>
    set(block.id, selected.includes(item) ? selected.filter((s) => s !== item) : [...selected, item]);
  return (
    <div className="ch-panel reveal">
      <p className="ch-panel-kicker">Reflection</p>
      <h4 className="ch-panel-title">{block.title}</h4>
      <ul className="ch-check-list">
        {block.items.map((item) => {
          const on = selected.includes(item);
          return (
            <li key={item}>
              <button type="button" className={`ch-check ${on ? "is-on" : ""}`} onClick={() => toggle(item)} aria-pressed={on}>
                <span className="ch-check-box" aria-hidden="true">{on ? "✓" : ""}</span>
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Prompts({
  block,
  answers,
  set,
}: {
  block: Extract<Block, { t: "prompts" }>;
  answers: Answers;
  set: (k: string, v: string) => void;
}) {
  return (
    <div className="ch-panel ch-panel-note reveal">
      <p className="ch-panel-kicker">Notebook</p>
      <h4 className="ch-panel-title">{block.title}</h4>
      <div className="ch-fields">
        {block.fields.map((f, i) => {
          const key = `${block.id}.${i}`;
          return (
            <label key={f} className="ch-field">
              <span>{f}</span>
              <textarea
                rows={2}
                value={(answers[key] as string) ?? ""}
                onChange={(e) => set(key, e.target.value)}
                placeholder="Write it here…"
              />
            </label>
          );
        })}
      </div>
      {block.note ? <p className="ch-panel-foot">{block.note}</p> : null}
    </div>
  );
}

function Words({
  block,
  answers,
  set,
}: {
  block: Extract<Block, { t: "words" }>;
  answers: Answers;
  set: (k: string, v: string[]) => void;
}) {
  const selected = (answers[block.id] as string[]) ?? [];
  const toggle = (w: string) => {
    if (selected.includes(w)) return set(block.id, selected.filter((s) => s !== w));
    if (selected.length >= 3) return set(block.id, [...selected.slice(1), w]);
    set(block.id, [...selected, w]);
  };
  return (
    <div className="ch-panel reveal">
      <p className="ch-panel-kicker">Brand DNA</p>
      <h4 className="ch-panel-title">{block.title}</h4>
      <div className="ch-words">
        {block.words.map((w) => (
          <button
            key={w}
            type="button"
            className={`ch-word ${selected.includes(w) ? "is-on" : ""}`}
            onClick={() => toggle(w)}
            aria-pressed={selected.includes(w)}
          >
            {w}
          </button>
        ))}
      </div>
      <p className="ch-panel-foot">
        {selected.length ? `Your three words: ${selected.join(" · ")}` : "Now narrow it down to only three."}
      </p>
      {block.note ? <p className="ch-panel-foot">{block.note}</p> : null}
    </div>
  );
}

function Rating({
  block,
  answers,
  set,
}: {
  block: Extract<Block, { t: "rating" }>;
  answers: Answers;
  set: (k: string, v: number) => void;
}) {
  return (
    <div className="ch-panel ch-panel-audit reveal">
      <p className="ch-panel-kicker">Brand Audit</p>
      <div className="ch-audit">
        {block.items.map((item) => {
          const key = `${block.id}.${item.key}`;
          const value = (answers[key] as number) ?? 0;
          return (
            <div key={item.key} className="ch-audit-row">
              <div>
                <h4>{item.label}</h4>
                <p>{item.text}</p>
              </div>
              <div className="ch-stars" role="group" aria-label={item.label}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`ch-star ${value >= n ? "is-on" : ""}`}
                    aria-label={`${item.label}: ${n} of 5`}
                    aria-pressed={value === n}
                    onClick={() => set(key, n)}
                  >
                    ✦
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BeforeAfter({ block }: { block: Extract<Block, { t: "ba" }> }) {
  return (
    <div className="ch-ba reveal">
      {block.label ? <p className="ch-ba-label">{block.label}</p> : null}
      <div className="ch-ba-grid">
        {[block.before, block.after].map((col, i) => (
          <article key={col.title} className={`ch-ba-card ${i === 0 ? "is-before" : "is-after"}`}>
            <h4>{col.title}</h4>
            {col.caption ? <p className="ch-ph ch-ph-inline">{col.caption}</p> : null}
            <ul>
              {col.items.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">{i === 0 ? "✕" : "✓"}</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <span className="ch-ba-arrow" aria-hidden="true">↓</span>
    </div>
  );
}

function Changed({ block }: { block: Extract<Block, { t: "changed" }> }) {
  return (
    <div className="ch-changed reveal">
      <h4>{block.title}</h4>
      <ul>
        {block.items.map((i) => (
          <li key={i}>
            <span aria-hidden="true">✕</span>
            {i}
          </li>
        ))}
      </ul>
      <div className="ch-changed-out">
        {block.conclusion.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>
    </div>
  );
}

function BlockView({
  block,
  answers,
  set,
}: {
  block: Block;
  answers: Answers;
  set: (k: string, v: string | string[] | number) => void;
}) {
  switch (block.t) {
    case "p":
      return <p className="ch-p reveal">{block.text}</p>;
    case "lead":
      return <p className="ch-lead reveal">{block.text}</p>;
    case "beats":
      return (
        <div className="ch-beats reveal">
          {block.lines.map((l, i) => (
            <p key={l} style={{ transitionDelay: `${i * 60}ms` }}>
              {l}
            </p>
          ))}
        </div>
      );
    case "h3":
      return (
        <div className="ch-h3-wrap reveal">
          {block.kicker ? <p className="ch-kicker">{block.kicker}</p> : null}
          <h3 className="ch-h3">{block.text}</h3>
        </div>
      );
    case "quote":
      return (
        <blockquote className="ch-quote reveal">
          <span aria-hidden="true">“</span>
          <p>{block.text}</p>
          {block.cite ? <cite>{block.cite}</cite> : null}
        </blockquote>
      );
    case "checklist":
      return <Checklist block={block} answers={answers} set={set as (k: string, v: string[]) => void} />;
    case "prompts":
      return <Prompts block={block} answers={answers} set={set as (k: string, v: string) => void} />;
    case "words":
      return <Words block={block} answers={answers} set={set as (k: string, v: string[]) => void} />;
    case "rating":
      return <Rating block={block} answers={answers} set={set as (k: string, v: number) => void} />;
    case "ba":
      return <BeforeAfter block={block} />;
    case "changed":
      return <Changed block={block} />;
    case "ph":
      return <div className="ch-ph reveal">{block.label}</div>;
    case "cards":
      return (
        <div className="ch-cards reveal">
          {block.items.map((c, i) => (
            <article key={c.title} className="ch-card" style={{ transitionDelay: `${i * 60}ms` }}>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      );
    case "formula":
      return (
        <div className="ch-formula reveal">
          <p className="ch-kicker">The Pretty Formula™</p>
          {block.lines.map((l) => (
            <p key={l} className="ch-formula-line">
              {l}
            </p>
          ))}
        </div>
      );
    case "note":
      return <p className="ch-note reveal">{block.text}</p>;
    case "divider":
      return <div className="ch-divider reveal" aria-hidden="true" />;
    default:
      return null;
  }
}

function SectionView({
  section,
  answers,
  set,
}: {
  section: Section;
  answers: Answers;
  set: (k: string, v: string | string[] | number) => void;
}) {
  return (
    <section id={section.id} data-stage={section.stage} className={`ch-section ch-tone-${section.tone ?? "plain"}`}>
      <div className="ch-inner">
        <header className="ch-head reveal">
          <p className="ch-eyebrow">{section.eyebrow}</p>
          <h2 className="ch-h2">
            {section.title}
            {section.italic ? <em> {section.italic}</em> : null}
          </h2>
        </header>
        <div className="ch-body">
          {section.blocks.map((b, i) => (
            <BlockView key={i} block={b} answers={answers} set={set} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

function ChapterOnePage() {
  const { answers, set } = useAnswers();
  const [activeStage, setActiveStage] = useState<string>("welcome");
  const [progress, setProgress] = useState(0);
  const [revealResults, setRevealResults] = useState(false);

  useReveal([]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveStage((visible.target as HTMLElement).dataset.stage ?? "welcome");
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scores = useMemo(
    () => auditItems.map((i) => ({ ...i, value: Number(answers[`audit.${i.key}`] ?? 0) })),
    [answers],
  );
  const answered = scores.filter((s) => s.value > 0);
  const total = answered.reduce((a, s) => a + s.value, 0);
  const strongest = answered.length ? [...answered].sort((a, b) => b.value - a.value)[0] : null;
  const blindSpot = answered.length ? [...answered].sort((a, b) => a.value - b.value)[0] : null;
  const dna = (answers["brand-dna"] as string[]) ?? [];

  const personality = useMemo(() => {
    if (!answered.length) return null;
    const avg = total / answered.length;
    if (avg >= 4.2)
      return {
        name: "The Refined Signature",
        text: "Your brand already has a recognizable centre. Your next chapter is depth — turning consistency into a signature people can name.",
      };
    if (avg >= 3)
      return {
        name: "The Emerging Icon",
        text: "The foundation is there, but it isn't repeating often enough to become memorable. Lock one visual direction and repeat it relentlessly.",
      };
    if (avg >= 2)
      return {
        name: "The Beautiful Scatter",
        text: "You have taste and ideas — they're just pulling in different directions. Your growth comes from subtraction, not more inspiration.",
      };
    return {
      name: "The Quiet Beginning",
      text: "You're at chapter one, exactly where every unforgettable brand starts. Define before you decorate, and the rest gets easier fast.",
    };
  }, [answered.length, total]);

  return (
    <main className="min-h-screen bg-background text-foreground ch-page">
      <SiteHeader />

      <div className="ch-progressbar" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <nav className="ch-rail" aria-label="Chapter progress">
        <ol>
          {stages.map((s) => (
            <li key={s.id} className={activeStage === s.id ? "is-active" : ""}>
              <span className="ch-rail-dot" aria-hidden="true" />
              <span className="ch-rail-label">{s.label}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* WELCOME */}
      <section id="welcome" data-stage="welcome" className="ch-open">
        <div className="ch-open-glow" aria-hidden="true" />
        <div className="ch-inner ch-open-inner">
          <p className="ch-eyebrow reveal">Her Story Unfolding™ · The Starter Kit</p>
          <h1 className="ch-title reveal">
            <span className="ch-title-script">Chapter</span>
            <span className="ch-title-big">One</span>
          </h1>
          <p className="ch-open-lede reveal">
            Welcome in. This isn't a PDF you skim — it's an experience you move through. Read slowly.
            Answer honestly. Everything you write is saved right here on your device as you scroll.
          </p>
          <div className="ch-open-meta reveal">
            <span>5 stages</span>
            <span>·</span>
            <span>Self-paced</span>
            <span>·</span>
            <span>Ends with your Brand Assessment</span>
          </div>
          <a href="#s1-mirror" className="button-solid ch-open-cta reveal">
            Begin Chapter One →
          </a>
        </div>
      </section>

      {sections.map((s) => (
        <SectionView key={s.id} section={s} answers={answers} set={set} />
      ))}

      {/* ASSESSMENT */}
      <section id="assessment" data-stage="assessment" className="ch-section ch-tone-assessment">
        <div className="ch-inner">
          <header className="ch-head reveal">
            <p className="ch-eyebrow">Ready for the next step?</p>
            <h2 className="ch-h2">
              The Pretty &amp; Unforgettable Brand Assessment<em>™</em>
            </h2>
          </header>
          <div className="ch-body">
            <p className="ch-p reveal">
              If you've been nodding your head while reading this… if you've realized your brand deserves
              more than random templates and guesswork… then I have one more thing for you.
            </p>
            <div className="ch-cards reveal">
              {[
                { title: "✨ Your Brand Personality", text: "The character your brand is already becoming." },
                { title: "✨ Your biggest strength", text: "The thing worth doubling down on." },
                { title: "✨ Your biggest blind spot", text: "The quiet leak costing you recognition." },
                { title: "✨ What's making you forgettable", text: "Named plainly, so you can fix it." },
                { title: "✨ Your next step", text: "The one recommendation I'd give you today." },
              ].map((c) => (
                <article key={c.title} className="ch-card">
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>

            <div className="ch-panel ch-panel-audit reveal">
              <p className="ch-panel-kicker">Your answers</p>
              <h4 className="ch-panel-title">Confirm your Brand Audit ratings</h4>
              <div className="ch-audit">
                {auditItems.map((item) => {
                  const key = `audit.${item.key}`;
                  const value = Number(answers[key] ?? 0);
                  return (
                    <div key={item.key} className="ch-audit-row">
                      <div>
                        <h4>{item.label}</h4>
                        <p>{item.text}</p>
                      </div>
                      <div className="ch-stars" role="group" aria-label={item.label}>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            type="button"
                            className={`ch-star ${value >= n ? "is-on" : ""}`}
                            aria-label={`${item.label}: ${n} of 5`}
                            onClick={() => set(key, n)}
                          >
                            ✦
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                className="button-solid ch-assess-cta"
                onClick={() => setRevealResults(true)}
                disabled={answered.length < auditItems.length}
              >
                {answered.length < auditItems.length
                  ? `Rate all five to continue (${answered.length}/5)`
                  : "Reveal my results →"}
              </button>
            </div>

            {revealResults && personality ? (
              <div className="ch-results">
                <p className="ch-kicker">Your results</p>
                <h3 className="ch-results-name">{personality.name}</h3>
                <p className="ch-results-score">
                  Brand clarity score <strong>{total}</strong> / 25
                </p>
                <p className="ch-results-text">{personality.text}</p>
                <div className="ch-results-grid">
                  <div>
                    <p className="ch-kicker">Biggest strength</p>
                    <h4>{strongest?.label}</h4>
                    <p>{strongest?.text}</p>
                  </div>
                  <div>
                    <p className="ch-kicker">Biggest blind spot</p>
                    <h4>{blindSpot?.label}</h4>
                    <p>{blindSpot?.text}</p>
                  </div>
                  <div>
                    <p className="ch-kicker">Your three words</p>
                    <h4>{dna.length ? dna.join(" · ") : "Not chosen yet"}</h4>
                    <p>{dna.length ? "Use these as the filter for every design decision." : "Scroll back to Step Two to choose them."}</p>
                  </div>
                </div>
                <p className="ch-results-next">
                  My recommended next step: rebuild your{" "}
                  <strong>{blindSpot?.label.toLowerCase()}</strong> first — it's the fastest route from
                  pretty to unforgettable.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="ch-final" data-stage="assessment">
        <div className="ch-final-glow" aria-hidden="true" />
        <div className="ch-inner ch-final-inner">
          <p className="ch-eyebrow ch-eyebrow-light reveal">Your beginning starts today</p>
          <h2 className="ch-final-title reveal">
            Ready to Make It <em>Pretty?</em>
          </h2>
          <p className="ch-final-body reveal">Then let's make it unforgettable.</p>
          <p className="ch-final-body reveal">
            Because pretty gets attention. Unforgettable builds brands. Your story deserves both.
          </p>
          <Link to="/shop" className="button-solid ch-final-cta reveal">
            ✨ Explore the Pretty &amp; Unforgettable Brand™ program →
          </Link>
          <p className="ch-final-note reveal">
            Take a few minutes. Answer honestly. And let's uncover the next chapter of your story.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useFreebieCart } from "@/lib/freebie-cart";
import { getResourcePdfRoute, getResourcePdfAsset } from "@/content/resource-downloads";
import { saveLead } from "@/components/email-gate-modal";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Freebie Cart — Blushbuild" },
      {
        name: "description",
        content:
          "Review the free Blushbuild resources you've collected, remove anything you don't need, and unlock every download at once — always $0.",
      },
      { property: "og:title", content: "Your Freebie Cart — Blushbuild" },
      {
        property: "og:description",
        content: "Collect several free creator resources and unlock them all in one free checkout.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CartPage,
});

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
  name: z.string().trim().max(80).optional(),
});

function CartPage() {
  const { items, remove, clear } = useFreebieCart();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState<typeof items | null>(null);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const parsed = schema.safeParse({ email, name: name || undefined });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setError(null);
    items.forEach((item) =>
      saveLead({
        email: parsed.data.email,
        name: parsed.data.name,
        resourceSlug: item.slug,
        resourceTitle: item.title,
      }),
    );
    setUnlocked(items);
    clear();
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="page-shell">
        <Link to="/resources" className="eyebrow">
          ← Keep browsing freebies
        </Link>

        {unlocked ? (
          <div className="mt-6">
            <p className="eyebrow">Checkout complete ♡</p>
            <h1 className="page-hero-title mt-3">You&apos;re all set — everything&apos;s unlocked.</h1>
            <p className="prose-note mt-5">
              {unlocked.length} freebie{unlocked.length === 1 ? "" : "s"} unlocked, total paid $0.00.
              Open each one below — they load right here in the app, and you can save the PDF too.
            </p>

            <div className="mt-8 space-y-4">
              {unlocked.map((item) => {
                const viewer = getResourcePdfRoute(item.slug);
                const asset = getResourcePdfAsset(item.slug);
                return (
                  <div
                    key={item.slug}
                    className="rounded-3xl border border-border bg-highlight/40 p-5 sm:p-6"
                  >
                    <p className="font-serif-alt text-2xl leading-tight text-foreground">
                      {item.title}
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                      {viewer ? (
                        <a href={viewer} className="button-solid">
                          Open PDF →
                        </a>
                      ) : null}
                      {asset ? (
                        <a href={asset} download={`${item.slug}.pdf`} className="product-link">
                          Download the file ↓
                        </a>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <Link to="/resources" className="button-solid inline-flex">
                Grab more freebies →
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p className="eyebrow mt-6">Your cart ♡</p>
            <h1 className="page-hero-title mt-3">Free downloads, all in one go.</h1>
            <p className="prose-note mt-5">
              Add as many freebies as you like — no card, no payment, ever. One email and every
              download unlocks at once.
            </p>

            {items.length === 0 ? (
              <div className="mt-10 rounded-3xl border border-border bg-highlight/40 p-8 text-center">
                <p className="font-serif-alt text-3xl leading-tight text-foreground">
                  Your cart is empty.
                </p>
                <p className="prose-note mt-3">
                  Browse the free library and tap “Add to cart” on anything you want.
                </p>
                <Link to="/resources" className="button-solid mt-6 inline-flex">
                  Browse free resources →
                </Link>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.slug}
                      className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-background p-5"
                    >
                      <div className="min-w-0">
                        {item.type ? <span className="resource-type">{item.type}</span> : null}
                        <Link
                          to="/resources/$slug"
                          params={{ slug: item.slug }}
                          className="mt-2 block font-serif-alt text-2xl leading-tight text-foreground"
                        >
                          {item.title}
                        </Link>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-serif-alt text-xl text-foreground">$0</span>
                        <button
                          type="button"
                          onClick={() => remove(item.slug)}
                          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                          aria-label={`Remove ${item.title} from cart`}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <aside className="rounded-3xl border border-border bg-highlight/40 p-6">
                  <p className="eyebrow">Order summary</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      {items.length} item{items.length === 1 ? "" : "s"}
                    </span>
                    <span>$0.00</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                    <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                      Total
                    </span>
                    <span className="font-serif-alt text-2xl text-foreground">$0.00</span>
                  </div>

                  <form onSubmit={handleCheckout} className="mt-5 flex flex-col gap-3">
                    <input
                      type="text"
                      className="input-shell"
                      placeholder="First name (optional)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-label="First name"
                      maxLength={80}
                    />
                    <input
                      type="email"
                      required
                      className="input-shell"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email address"
                      maxLength={255}
                    />
                    {error ? <p className="text-sm text-red-600">{error}</p> : null}
                    <button type="submit" className="button-solid">
                      Complete free checkout →
                    </button>
                    <p className="text-xs leading-5 text-muted-foreground">
                      No payment or card details needed — everything here is free.
                    </p>
                  </form>
                </aside>
              </div>
            )}
          </>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}

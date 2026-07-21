import { useEffect, useState } from "react";
import { z } from "zod";

const LEADS_KEY = "blushbuild.leads";
const SUB_KEY = "blushbuild.subscribed";

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
  name: z.string().trim().max(80).optional(),
});

export function hasSubscribed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(SUB_KEY) === "true";
  } catch {
    return false;
  }
}

export function saveLead(entry: {
  email: string;
  name?: string;
  resourceSlug: string;
  resourceTitle: string;
}) {
  try {
    const raw = window.localStorage.getItem(LEADS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    arr.push({ ...entry, timestamp: new Date().toISOString() });
    window.localStorage.setItem(LEADS_KEY, JSON.stringify(arr));
    window.localStorage.setItem(SUB_KEY, "true");
  } catch {
    // ignore
  }
}

export function getAbsolutePdfUrl(url?: string): string | null {
  if (typeof window === "undefined" || !url) return null;
  try {
    const absoluteUrl = new URL(url, window.location.origin);
    if (absoluteUrl.protocol !== "http:" && absoluteUrl.protocol !== "https:") return null;
    return absoluteUrl.href;
  } catch {
    return null;
  }
}

export function navigateToPdf(url?: string): boolean {
  const absoluteUrl = getAbsolutePdfUrl(url);
  if (!absoluteUrl) return false;
  window.location.assign(absoluteUrl);
  return true;
}

type Props = {
  open: boolean;
  resourceSlug: string;
  resourceTitle: string;
  downloadUrl?: string;
  filename?: string;
  onUnlock: () => void;
  onClose: () => void;
};

export function EmailGateModal({
  open,
  resourceSlug,
  resourceTitle,
  downloadUrl,
  filename,
  onUnlock,
  onClose,
}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!open) {
      setEmail("");
      setName("");
      setError(null);
      setUnlocked(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email, name: name || undefined });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    saveLead({
      email: parsed.data.email,
      name: parsed.data.name,
      resourceSlug,
      resourceTitle,
    });
    setUnlocked(true);
    onUnlock();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(60, 40, 40, 0.45)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-border bg-background p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl leading-none text-muted-foreground hover:text-foreground"
        >
          ×
        </button>
        {unlocked ? (
          <div>
            <p className="eyebrow">You&apos;re in ♡</p>
            <h2
              id="email-gate-title"
              className="mt-2 font-serif-alt text-3xl leading-tight text-foreground"
            >
              Your PDF is ready.
            </h2>
            <p className="prose-note mt-3 text-sm">
              Tap the button below to open your PDF in this same tab.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="button-solid"
                onClick={() => {
                  if (!navigateToPdf(downloadUrl)) {
                    setError("This PDF link is unavailable right now.");
                  }
                }}
              >
                Open PDF →
              </button>
              <button type="button" className="product-link text-left" onClick={onClose}>
                Done
              </button>
            </div>
            {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
          </div>
        ) : (
          <>
            <p className="eyebrow">Almost yours ♡</p>
            <h2
              id="email-gate-title"
              className="mt-2 font-serif-alt text-3xl leading-tight text-foreground"
            >
              Get the {resourceTitle} — free.
            </h2>
            <p className="prose-note mt-3 text-sm">
              Drop your email and we&apos;ll unlock this freebie for you.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
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
                autoFocus
              />
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <button type="submit" className="button-solid">
                Unlock & download →
              </button>
              <p className="text-xs text-muted-foreground">
                We&apos;ll only send occasional freebies. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

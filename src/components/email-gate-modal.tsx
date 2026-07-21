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

type Props = {
  open: boolean;
  resourceSlug: string;
  resourceTitle: string;
  onUnlock: () => void;
  onClose: () => void;
};

export function EmailGateModal({ open, resourceSlug, resourceTitle, onUnlock, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setEmail("");
      setName("");
      setError(null);
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
        <p className="eyebrow">Almost yours ♡</p>
        <h2
          id="email-gate-title"
          className="mt-2 font-serif-alt text-3xl leading-tight text-foreground"
        >
          Get the {resourceTitle} — free.
        </h2>
        <p className="prose-note mt-3 text-sm">
          Drop your email once and we'll unlock every Blushbuild freebie on this device.
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
            We'll only send occasional freebies. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}

export function triggerPdfDownload(url: string, filename: string) {
  if (typeof window === "undefined") return;
  const ua = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as unknown as { MSStream?: unknown }).MSStream;
  if (isIOS) {
    // iOS Safari ignores `download` for cross-origin URLs; open in a new tab
    // so the user can Share → Save to Files.
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener noreferrer";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

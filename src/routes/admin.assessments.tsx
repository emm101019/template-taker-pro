import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import { listSubmissions, updateSubmission } from "@/lib/api/assessment.functions";

export const Route = createFileRoute("/admin/assessments")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Assessment Submissions | Admin" },
      { name: "description", content: "Private admin review of brand assessment submissions." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Assessment Submissions" },
      { property: "og:description", content: "Private admin area." },
    ],
  }),
  component: AdminAssessments,
});

const OWNER_EMAIL = "cocoberrymerry@gmail.com";

const STATUSES = ["New", "Reviewing", "Followed Up", "Qualified", "Not a Fit"] as const;

const LABELS: Record<string, string> = {
  first_name: "First name",
  email: "Email",
  instagram_username: "Instagram",
  current_stage: "Current stage",
  current_situation: "Current situation",
  desired_90_day_result: "Desired 90-day result",
  biggest_challenges: "Biggest challenges",
  previous_attempts: "What she has already tried",
  what_has_not_worked: "What has not worked",
  perceived_block: "What she thinks is blocking her",
  cost_of_inaction: "Cost of staying stuck",
  desired_transformation: "Desired transformation",
  help_needed: "Help needed",
  commitment_score: "Commitment score (1-10)",
  why_now: "Why now",
  open_to_support: "Open to support",
  additional_information: "Anything else",
  created_at: "Submitted",
};

const HIDDEN_KEYS = ["id", "status", "private_notes", "updated_at"];

type Row = Record<string, unknown> & { id: string; created_at: string };

function csvCell(value: unknown) {
  const text = Array.isArray(value) ? value.join(" | ") : String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function formatValue(key: string, value: unknown) {
  if (Array.isArray(value)) return value.length ? value.join(", ") : "—";
  if (value === null || value === undefined || value === "") return "—";
  if (key === "created_at") return new Date(String(value)).toLocaleString();
  return String(value);
}

function friendlyError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error ?? "");
  if (/provider is not enabled|Unsupported provider|validation_failed/i.test(message)) {
    return "Google sign-in isn't turned on for this site yet. Enable the Google provider in your Supabase authentication settings, then try again.";
  }
  if (/Forbidden/i.test(message)) {
    return "This Google account isn't authorised. Sign out and continue with the owner's Google account.";
  }
  if (/Unauthorized/i.test(message)) {
    return "Your session expired. Please sign in with Google again.";
  }
  if (/Missing Supabase environment|SUPABASE_/i.test(message)) {
    return `Server configuration problem: ${message}`;
  }
  if (/Database error/i.test(message)) {
    return message;
  }
  return `Something went wrong: ${message || "unknown error"}`;
}

function AdminAssessments() {
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSessionEmail(data.session?.user.email ?? null);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionEmail(session?.user.email ?? null);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await listSubmissions();
      setRows(result.rows as Row[]);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (sessionEmail) void load();
    else setRows(null);
  }, [sessionEmail, load]);

  const sendLink = async () => {
    setSending(true);
    setError(null);
    try {
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email: OWNER_EMAIL,
        options: { emailRedirectTo: `${window.location.origin}/admin/assessments` },
      });
      if (otpError) throw otpError;
      setSent(true);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setSending(false);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setRows(null);
    setSent(false);
  };

  const patch = async (id: string, values: { status?: string; private_notes?: string }) => {
    try {
      await updateSubmission({
        data: {
          id,
          status: values.status as (typeof STATUSES)[number] | undefined,
          private_notes: values.private_notes,
        },
      });
      setRows((prev) => (prev ? prev.map((r) => (r.id === id ? { ...r, ...values } : r)) : prev));
    } catch (err) {
      setError(friendlyError(err));
    }
  };

  const exportCsv = () => {
    if (!rows?.length) return;
    const keys = Object.keys(rows[0]);
    const csv = [
      keys.join(","),
      ...rows.map((row) => keys.map((k) => csvCell(row[k])).join(",")),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `brand-assessments-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (checking) {
    return (
      <main className="as-page">
        <div className="as-shell as-welcome">
          <p className="as-label">Private</p>
          <h1 className="as-title">Assessment submissions</h1>
          <p>Checking your session…</p>
        </div>
      </main>
    );
  }

  if (!sessionEmail) {
    return (
      <main className="as-page">
        <div className="as-shell as-welcome">
          <p className="as-label">Private</p>
          <h1 className="as-title">Assessment submissions</h1>
          <p>
            This dashboard is owner-only. Continue with the owner&rsquo;s Google account to view
            submissions — no password needed.
          </p>
          {error ? <p className="as-error">{error}</p> : null}
          <button type="button" className="as-button" disabled={sending} onClick={signInGoogle}>
            {sending ? "Opening Google…" : "Continue with Google"}
          </button>
        </div>
      </main>
    );
  }


  return (
    <main className="as-page">
      <div className="as-shell as-admin">
        <div className="as-admin-head">
          <div>
            <p className="as-label">Signed in as {sessionEmail}</p>
            <h1 className="as-title as-title-sm">
              {rows ? `${rows.length} assessment${rows.length === 1 ? "" : "s"}` : "Loading…"}
            </h1>
          </div>
          <div className="as-admin-actions">
            <button type="button" className="as-button-ghost" onClick={exportCsv}>
              Export CSV
            </button>
            <button type="button" className="as-button-ghost" onClick={signOut}>
              Sign out
            </button>
          </div>
        </div>

        {error ? <p className="as-error">{error}</p> : null}
        {loading && !rows ? <p>Loading submissions…</p> : null}
        {rows && rows.length === 0 ? <p>No submissions yet.</p> : null}

        {(rows ?? []).map((row) => {
          const open = openId === row.id;
          return (
            <article key={row.id} className="as-admin-row">
              <button
                type="button"
                className="as-admin-summary"
                onClick={() => setOpenId(open ? null : row.id)}
              >
                <span className="as-admin-name">{String(row.first_name)}</span>
                <span className="as-admin-meta">{String(row.email)}</span>
                <span className="as-admin-meta">
                  {new Date(row.created_at).toLocaleDateString()}
                </span>
                <span className="as-admin-meta">
                  {LABELS.help_needed}: {formatValue("help_needed", row.help_needed)}
                </span>
                <span className="as-admin-status">{String(row.status)}</span>
              </button>

              {open ? (
                <div className="as-admin-detail">
                  <div className="as-admin-controls">
                    <label className="as-field">
                      <span>Status</span>
                      <select
                        className="as-input"
                        value={String(row.status)}
                        onChange={(e) => patch(row.id, { status: e.target.value })}
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="as-field">
                      <span>Private notes</span>
                      <textarea
                        className="as-textarea"
                        rows={3}
                        defaultValue={String(row.private_notes ?? "")}
                        onBlur={(e) => patch(row.id, { private_notes: e.target.value })}
                      />
                    </label>
                  </div>
                  <dl className="as-admin-answers">
                    {Object.entries(row)
                      .filter(([k]) => !HIDDEN_KEYS.includes(k))
                      .map(([k, v]) => (
                        <div key={k}>
                          <dt>{LABELS[k] ?? k.replace(/_/g, " ")}</dt>
                          <dd>{formatValue(k, v)}</dd>
                        </div>
                      ))}
                  </dl>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </main>
  );
}

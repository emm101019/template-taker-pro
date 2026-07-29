import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { listSubmissions, updateSubmission } from "@/lib/api/assessment.functions";

export const Route = createFileRoute("/admin/assessments")({
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

const STATUSES = ["New", "Reviewing", "Followed Up", "Qualified", "Not a Fit"] as const;

type Row = Record<string, unknown> & { id: string; created_at: string };

function csvCell(value: unknown) {
  const text = Array.isArray(value) ? value.join(" | ") : String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function AdminAssessments() {
  const [code, setCode] = useState("");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const load = async (accessCode: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await listSubmissions({ data: { code: accessCode } });
      setRows(result.rows as Row[]);
    } catch {
      setError("That access code did not work.");
    } finally {
      setLoading(false);
    }
  };

  const patch = async (id: string, values: { status?: string; private_notes?: string }) => {
    await updateSubmission({
      data: {
        code,
        id,
        status: values.status as (typeof STATUSES)[number] | undefined,
        private_notes: values.private_notes,
      },
    });
    setRows((prev) => (prev ? prev.map((r) => (r.id === id ? { ...r, ...values } : r)) : prev));
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

  if (!rows) {
    return (
      <main className="as-page">
        <div className="as-shell as-welcome">
          <p className="as-label">Private</p>
          <h1 className="as-title">Assessment submissions</h1>
          <label className="as-field">
            <span>Admin access code</span>
            <input
              className="as-input"
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
          {error ? <p className="as-error">{error}</p> : null}
          <button type="button" className="as-button" disabled={loading} onClick={() => load(code)}>
            {loading ? "Checking…" : "Open dashboard"}
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
            <p className="as-label">Private</p>
            <h1 className="as-title as-title-sm">
              {rows.length} assessment{rows.length === 1 ? "" : "s"}
            </h1>
          </div>
          <button type="button" className="as-button-ghost" onClick={exportCsv}>
            Export CSV
          </button>
        </div>

        {rows.map((row) => {
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
                      .filter(([k]) => !["id", "status", "private_notes", "updated_at"].includes(k))
                      .map(([k, v]) => (
                        <div key={k}>
                          <dt>{k.replace(/_/g, " ")}</dt>
                          <dd>{Array.isArray(v) ? v.join(", ") : String(v ?? "—")}</dd>
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

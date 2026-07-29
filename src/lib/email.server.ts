type Submission = {
  first_name: string;
  email: string;
  instagram_username?: string | null;
  current_stage: string;
  current_situation: string;
  desired_90_day_result: string;
  biggest_challenges: string[];
  previous_attempts?: string | null;
  what_has_not_worked?: string | null;
  perceived_block?: string | null;
  cost_of_inaction?: string | null;
  desired_transformation?: string | null;
  help_needed: string;
  commitment_score: number;
  why_now?: string | null;
  open_to_support: string;
  additional_information?: string | null;
};

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

async function send(payload: { to: string[]; subject: string; html: string; replyTo?: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ASSESSMENT_FROM_EMAIL ?? "Her Story Unfolding <onboarding@resend.dev>";
  if (!apiKey) return;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
      }),
    });
    if (!res.ok) console.error(`[assessment email] ${res.status}: ${await res.text()}`);
  } catch (error) {
    console.error("[assessment email] failed", error);
  }
}

export async function sendAssessmentEmails(data: Submission) {
  const confirmation = `
    <div style="font-family:Georgia,serif;color:#3b2b23;line-height:1.7;max-width:560px">
      <p style="letter-spacing:.18em;font-size:11px;text-transform:uppercase;color:#a8836f">Her Story Unfolding</p>
      <h1 style="font-weight:400;font-size:26px">Your assessment has been received</h1>
      <p>Hi ${esc(data.first_name)},</p>
      <p>Thank you for taking the time to share your story and current brand journey with me.</p>
      <p>I have received your answers and will review everything carefully to better understand what
      may be keeping your brand stuck and what next step could help you move forward.</p>
      <p>If I believe I can genuinely help, I will contact you at this email address with my thoughts
      and the most relevant recommendation for your situation.</p>
      <p style="color:#a8836f">— Her Story Unfolding</p>
    </div>`;

  const rows = Object.entries(data)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#a8836f;white-space:nowrap">${esc(
          k,
        )}</td><td style="padding:6px 0">${esc(Array.isArray(v) ? v.join(", ") : v)}</td></tr>`,
    )
    .join("");

  const internal = `
    <div style="font-family:Arial,sans-serif;color:#2f2320">
      <h2>New brand assessment — ${esc(data.first_name)}</h2>
      <table style="border-collapse:collapse;font-size:14px">${rows}</table>
    </div>`;

  const notify = process.env.ASSESSMENT_NOTIFY_EMAIL;

  await Promise.all([
    send({ to: [data.email], subject: "Your assessment has been received ♡", html: confirmation }),
    notify
      ? send({
          to: [notify],
          subject: `New brand assessment — ${data.first_name}`,
          html: internal,
          replyTo: data.email,
        })
      : Promise.resolve(),
  ]);
}

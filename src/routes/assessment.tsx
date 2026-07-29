import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

import { submitAssessment } from "@/lib/api/assessment.functions";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "The Pretty & Unforgettable Brand Assessment | Her Story Unfolding" },
      {
        name: "description",
        content:
          "A personalised brand assessment for women building a digital brand — uncover your biggest brand gap and the next step toward a clear, cohesive, unforgettable brand.",
      },
      { property: "og:title", content: "The Pretty & Unforgettable Brand Assessment" },
      {
        property: "og:description",
        content:
          "Share where your brand stands today and I'll personally review your answers and recommend your next step.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssessmentPage,
});

type Answers = {
  first_name: string;
  email: string;
  instagram_username: string;
  current_stage: string;
  current_stage_other: string;
  current_situation: string;
  desired_90_day_result: string;
  biggest_challenges: string[];
  biggest_challenges_other: string;
  previous_attempts: string;
  what_has_not_worked: string;
  perceived_block: string;
  cost_of_inaction: string;
  desired_transformation: string;
  help_needed: string;
  commitment_score: number;
  why_now: string;
  open_to_support: string;
  additional_information: string;
};

const initialAnswers: Answers = {
  first_name: "",
  email: "",
  instagram_username: "",
  current_stage: "",
  current_stage_other: "",
  current_situation: "",
  desired_90_day_result: "",
  biggest_challenges: [],
  biggest_challenges_other: "",
  previous_attempts: "",
  what_has_not_worked: "",
  perceived_block: "",
  cost_of_inaction: "",
  desired_transformation: "",
  help_needed: "",
  commitment_score: 7,
  why_now: "",
  open_to_support: "",
  additional_information: "",
};

const STAGES = [
  "I have an idea, but I have not started yet",
  "I have started, but my niche still feels unclear",
  "I have a brand, but it does not feel cohesive",
  "I post content, but my messaging feels inconsistent",
  "My brand looks good, but it is not attracting the right people",
  "I am rebuilding or rebranding",
  "Something else",
];

const CHALLENGES = [
  "Choosing the right niche",
  "Knowing who my ideal audience is",
  "Explaining clearly what my brand does",
  "Creating a memorable brand message",
  "Choosing colors, fonts, and visual direction",
  "Making my content look cohesive",
  "Creating content that sounds like me",
  "Becoming recognizable",
  "Building confidence in my brand",
  "Knowing what to focus on first",
  "Staying consistent",
  "Turning my brand into income",
  "Something else",
];

const HELP = [
  "Help choosing and validating my niche",
  "Help defining my ideal audience",
  "Help clarifying my message",
  "Help creating my visual brand identity",
  "Help making my entire brand cohesive",
  "A clear step-by-step brand roadmap",
  "Personal feedback on my current brand",
  "Accountability and implementation support",
  "I am not sure yet",
];

const SUPPORT = [
  "Yes, I would love personalised guidance",
  "Yes, but I would like more information first",
  "Maybe, depending on the recommendation",
  "Not right now",
];

const emailSchema = z.string().trim().email();

type StepKey =
  | "contact"
  | "stage"
  | "situation"
  | "result"
  | "challenges"
  | "tried"
  | "notworked"
  | "block"
  | "cost"
  | "transformation"
  | "help"
  | "commitment"
  | "why"
  | "support"
  | "final";

const STEPS: { key: StepKey; transition?: string }[] = [
  { key: "contact", transition: "Let's begin gently." },
  { key: "stage" },
  { key: "situation", transition: "A little more about your vision." },
  { key: "result" },
  { key: "challenges", transition: "Now let's uncover what may be keeping you stuck." },
  { key: "tried" },
  { key: "notworked" },
  { key: "block", transition: "You're doing beautifully." },
  { key: "cost" },
  { key: "transformation", transition: "This is the part I love most." },
  { key: "help" },
  { key: "commitment" },
  { key: "why", transition: "You're almost there." },
  { key: "support" },
  { key: "final" },
];

function AssessmentPage() {
  const [phase, setPhase] = useState<"welcome" | "form" | "done">("welcome");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const current = STEPS[step];
  const progress = Math.round(((step + 1) / STEPS.length) * 100);

  const validate = (): string | null => {
    switch (current.key) {
      case "contact":
        if (!answers.first_name.trim()) return "Please share your first name.";
        if (!emailSchema.safeParse(answers.email).success) return "Please enter a valid email address.";
        return null;
      case "stage":
        if (!answers.current_stage) return "Please choose the option closest to where you are.";
        if (answers.current_stage === "Something else" && !answers.current_stage_other.trim())
          return "Please tell me a little more.";
        return null;
      case "situation":
        if (answers.current_situation.trim().length < 10) return "Please share a little more here.";
        return null;
      case "result":
        if (answers.desired_90_day_result.trim().length < 10) return "Please share a little more here.";
        return null;
      case "challenges":
        if (answers.biggest_challenges.length === 0) return "Please choose at least one.";
        if (
          answers.biggest_challenges.includes("Something else") &&
          !answers.biggest_challenges_other.trim()
        )
          return "Please tell me a little more.";
        return null;
      case "help":
        if (!answers.help_needed) return "Please choose the support that would help most.";
        return null;
      case "support":
        if (!answers.open_to_support) return "Please choose an option.";
        return null;
      default:
        return null;
    }
  };

  const next = async () => {
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (submitting) return;
    setSubmitting(true);
    try {
      const challenges = answers.biggest_challenges.map((c) =>
        c === "Something else" ? `Something else: ${answers.biggest_challenges_other.trim()}` : c,
      );
      await submitAssessment({
        data: {
          first_name: answers.first_name.trim(),
          email: answers.email.trim(),
          instagram_username: answers.instagram_username.trim() || null,
          current_stage:
            answers.current_stage === "Something else"
              ? `Something else: ${answers.current_stage_other.trim()}`
              : answers.current_stage,
          current_situation: answers.current_situation.trim(),
          desired_90_day_result: answers.desired_90_day_result.trim(),
          biggest_challenges: challenges,
          previous_attempts: answers.previous_attempts.trim() || null,
          what_has_not_worked: answers.what_has_not_worked.trim() || null,
          perceived_block: answers.perceived_block.trim() || null,
          cost_of_inaction: answers.cost_of_inaction.trim() || null,
          desired_transformation: answers.desired_transformation.trim() || null,
          help_needed: answers.help_needed,
          commitment_score: answers.commitment_score,
          why_now: answers.why_now.trim() || null,
          open_to_support: answers.open_to_support,
          additional_information: answers.additional_information.trim() || null,
        },
      });
      setPhase("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Something went wrong sending your answers. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  if (phase === "welcome") {
    return (
      <main className="as-page">
        <div className="as-shell as-welcome">
          <p className="as-label">Personalised Brand Assessment</p>
          <h1 className="as-title">
            The Pretty &amp; <em>Unforgettable</em> Brand Assessment
          </h1>
          <div className="as-lede">
            <p>
              This assessment is for women who are building or growing a digital brand but still feel
              unclear about their niche, messaging, visual identity, or next steps.
            </p>
            <p>
              It will help me understand what you are currently building, where you feel stuck, what you
              have already tried, and what may be missing from your brand foundation.
            </p>
            <p>Please answer each question as honestly and openly as possible.</p>
            <p>
              Once you submit your answers, I will personally review them and use what you share to
              identify your biggest brand gap, the area that needs the most attention, and the next step I
              believe could help you move forward with more clarity and confidence.
            </p>
          </div>
          <p className="as-note">Estimated time: 5–8 minutes</p>
          <button type="button" className="as-button" onClick={() => setPhase("form")}>
            Begin My Assessment
          </button>
        </div>
      </main>
    );
  }

  if (phase === "done") {
    return (
      <main className="as-page">
        <div className="as-shell as-welcome">
          <p className="as-label">Thank you ♡</p>
          <h1 className="as-title">Your Assessment Has Been Received</h1>
          <div className="as-lede">
            <p>Thank you for taking the time to share your story and current brand journey with me.</p>
            <p>
              I have received your answers and will review everything carefully to better understand what
              may be keeping your brand stuck and what next step could help you move forward.
            </p>
            <p>
              If I believe I can genuinely help, I will contact you using the email address you provided
              with my thoughts and the most relevant recommendation for your situation.
            </p>
            <p>Please keep an eye on your inbox.</p>
          </div>
          <div className="as-actions">
            <Link to="/" className="as-button">
              Return to Her Story Unfolding
            </Link>
            <a
              className="as-button-ghost"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="as-page">
      <div className="as-shell">
        <div className="as-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <p className="as-step-count">
          Question {step + 1} of {STEPS.length}
        </p>
        {current.transition ? <p className="as-transition">{current.transition}</p> : null}

        <div className="as-card" key={current.key}>
          {current.key === "contact" ? (
            <>
              <h2 className="as-question">First, a little about you.</h2>
              <label className="as-field">
                <span>First name</span>
                <input
                  className="as-input"
                  value={answers.first_name}
                  maxLength={120}
                  onChange={(e) => set("first_name", e.target.value)}
                />
              </label>
              <label className="as-field">
                <span>Email address</span>
                <input
                  className="as-input"
                  type="email"
                  value={answers.email}
                  maxLength={255}
                  onChange={(e) => set("email", e.target.value)}
                />
              </label>
              <label className="as-field">
                <span>Instagram username or brand link (optional)</span>
                <input
                  className="as-input"
                  value={answers.instagram_username}
                  maxLength={255}
                  onChange={(e) => set("instagram_username", e.target.value)}
                />
              </label>
            </>
          ) : null}

          {current.key === "stage" ? (
            <>
              <h2 className="as-question">
                Which statement best describes where you are in your brand journey right now?
              </h2>
              <div className="as-options">
                {STAGES.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`as-option${answers.current_stage === option ? " is-selected" : ""}`}
                    onClick={() => set("current_stage", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {answers.current_stage === "Something else" ? (
                <input
                  className="as-input as-input-inline"
                  placeholder="Tell me a little more"
                  value={answers.current_stage_other}
                  maxLength={300}
                  onChange={(e) => set("current_stage_other", e.target.value)}
                />
              ) : null}
            </>
          ) : null}

          {current.key === "situation" ? (
            <LongText
              question="Tell me more about what you are currently building."
              helper="Share what your brand is about, who you hope to help, what you currently offer or hope to offer, and where things currently stand."
              value={answers.current_situation}
              onChange={(v) => set("current_situation", v)}
            />
          ) : null}

          {current.key === "result" ? (
            <LongText
              question="What would you most like to achieve with your brand over the next 90 days?"
              helper="For example, gaining clarity on your niche, creating a cohesive identity, becoming more recognizable, launching an offer, building confidence, or attracting the right audience."
              value={answers.desired_90_day_result}
              onChange={(v) => set("desired_90_day_result", v)}
            />
          ) : null}

          {current.key === "challenges" ? (
            <>
              <h2 className="as-question">
                Which parts of your brand feel the most unclear, weak, or frustrating right now?
              </h2>
              <p className="as-helper">Choose as many as feel true.</p>
              <div className="as-options">
                {CHALLENGES.map((option) => {
                  const selected = answers.biggest_challenges.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`as-option as-option-check${selected ? " is-selected" : ""}`}
                      onClick={() =>
                        set(
                          "biggest_challenges",
                          selected
                            ? answers.biggest_challenges.filter((c) => c !== option)
                            : [...answers.biggest_challenges, option],
                        )
                      }
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {answers.biggest_challenges.includes("Something else") ? (
                <input
                  className="as-input as-input-inline"
                  placeholder="Tell me a little more"
                  value={answers.biggest_challenges_other}
                  maxLength={300}
                  onChange={(e) => set("biggest_challenges_other", e.target.value)}
                />
              ) : null}
            </>
          ) : null}

          {current.key === "tried" ? (
            <LongText
              question="What have you already tried to create more clarity or improve your brand?"
              helper="You may have used templates, changed your niche, followed online advice, bought courses, created mood boards, redesigned your page, or tried to figure it out alone."
              value={answers.previous_attempts}
              onChange={(v) => set("previous_attempts", v)}
            />
          ) : null}

          {current.key === "notworked" ? (
            <LongText
              question="What have you been doing that has not worked the way you hoped?"
              helper="Tell me what still feels confusing, inconsistent, or disappointing despite the effort you have already made."
              value={answers.what_has_not_worked}
              onChange={(v) => set("what_has_not_worked", v)}
            />
          ) : null}

          {current.key === "block" ? (
            <LongText
              question="What do you believe is currently stopping you from building the brand you really want?"
              helper="There is no perfect answer. Share what feels true for you right now."
              value={answers.perceived_block}
              onChange={(v) => set("perceived_block", v)}
            />
          ) : null}

          {current.key === "cost" ? (
            <LongText
              question="If nothing changes over the next six months, what will that cost you?"
              helper="Think about your confidence, time, motivation, audience growth, business goals, or the opportunities you may continue delaying."
              value={answers.cost_of_inaction}
              onChange={(v) => set("cost_of_inaction", v)}
            />
          ) : null}

          {current.key === "transformation" ? (
            <LongText
              question="If your brand finally felt clear, cohesive, and unmistakably yours, what would become possible for you?"
              helper="Describe how you would feel, what you would do differently, and what this clarity could help you create."
              value={answers.desired_transformation}
              onChange={(v) => set("desired_transformation", v)}
            />
          ) : null}

          {current.key === "help" ? (
            <>
              <h2 className="as-question">What kind of support would help you most right now?</h2>
              <div className="as-options">
                {HELP.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`as-option${answers.help_needed === option ? " is-selected" : ""}`}
                    onClick={() => set("help_needed", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          {current.key === "commitment" ? (
            <>
              <h2 className="as-question">
                How committed are you to creating a brand you feel confident growing?
              </h2>
              <p className="as-helper">
                1 means, “I am only exploring.” 10 means, “I am ready to take action and make the
                necessary changes.”
              </p>
              <div className="as-scale">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`as-scale-dot${answers.commitment_score === n ? " is-selected" : ""}`}
                    onClick={() => set("commitment_score", n)}
                    aria-label={`${n} out of 10`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          {current.key === "why" ? (
            <LongText
              question="Why is creating clarity in your brand important to you right now?"
              value={answers.why_now}
              onChange={(v) => set("why_now", v)}
            />
          ) : null}

          {current.key === "support" ? (
            <>
              <h2 className="as-question">
                If I believe I can help you, would you be open to hearing about the next step I recommend?
              </h2>
              <div className="as-options">
                {SUPPORT.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`as-option${answers.open_to_support === option ? " is-selected" : ""}`}
                    onClick={() => set("open_to_support", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          {current.key === "final" ? (
            <LongText
              question="Is there anything else you would like me to know before I review your assessment?"
              value={answers.additional_information}
              onChange={(v) => set("additional_information", v)}
            />
          ) : null}

          {error ? <p className="as-error">{error}</p> : null}

          <div className="as-nav">
            {step > 0 ? (
              <button
                type="button"
                className="as-button-ghost"
                onClick={() => {
                  setError(null);
                  setStep(step - 1);
                }}
                disabled={submitting}
              >
                ← Back
              </button>
            ) : (
              <span />
            )}
            <button type="button" className="as-button" onClick={next} disabled={submitting}>
              {submitting
                ? "Sending your answers…"
                : step === STEPS.length - 1
                  ? "Submit My Assessment"
                  : "Continue →"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function LongText({
  question,
  helper,
  value,
  onChange,
}: {
  question: string;
  helper?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <h2 className="as-question">{question}</h2>
      {helper ? <p className="as-helper">{helper}</p> : null}
      <textarea
        className="as-textarea"
        rows={7}
        maxLength={5000}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Take your time…"
      />
    </>
  );
}

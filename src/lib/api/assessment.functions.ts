import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submissionSchema = z.object({
  first_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  instagram_username: z.string().trim().max(255).optional().nullable(),
  current_stage: z.string().trim().min(1).max(500),
  current_situation: z.string().trim().min(1).max(5000),
  desired_90_day_result: z.string().trim().min(1).max(5000),
  biggest_challenges: z.array(z.string().max(500)).max(30).default([]),
  previous_attempts: z.string().trim().max(5000).optional().nullable(),
  what_has_not_worked: z.string().trim().max(5000).optional().nullable(),
  perceived_block: z.string().trim().max(5000).optional().nullable(),
  cost_of_inaction: z.string().trim().max(5000).optional().nullable(),
  desired_transformation: z.string().trim().max(5000).optional().nullable(),
  help_needed: z.string().trim().min(1).max(500),
  commitment_score: z.number().int().min(1).max(10),
  why_now: z.string().trim().max(5000).optional().nullable(),
  open_to_support: z.string().trim().min(1).max(500),
  additional_information: z.string().trim().max(5000).optional().nullable(),
});

const adminSchema = z.object({ code: z.string().min(1).max(200) });

const updateSchema = adminSchema.extend({
  id: z.string().uuid(),
  status: z.enum(["New", "Reviewing", "Followed Up", "Qualified", "Not a Fit"]).optional(),
  private_notes: z.string().max(10000).optional(),
});

export const submitAssessment = createServerFn({ method: "POST" })
  .inputValidator(submissionSchema)
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
    const client = createClient(process.env.SUPABASE_URL!, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await client.from("brand_assessment_submissions").insert({
      ...data,
      instagram_username: data.instagram_username || null,
    });
    if (error) throw new Error(error.message);

    const { sendAssessmentEmails } = await import("../email.server");
    await sendAssessmentEmails(data);

    return { ok: true as const };
  });

export const listSubmissions = createServerFn({ method: "POST" })
  .inputValidator(adminSchema)
  .handler(async ({ data }) => {
    const expected = process.env.ADMIN_ACCESS_CODE?.trim();
    if (!expected || data.code.trim() !== expected) throw new Error("Invalid access code");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("brand_assessment_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) throw new Error(error.message);
    return { rows: rows ?? [] };
  });

export const updateSubmission = createServerFn({ method: "POST" })
  .inputValidator(updateSchema)
  .handler(async ({ data }) => {
    const expected = process.env.ADMIN_ACCESS_CODE;
    if (!expected || data.code !== expected) throw new Error("Invalid access code");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const patch: { status?: string; private_notes?: string } = {};
    if (data.status) patch.status = data.status;
    if (data.private_notes !== undefined) patch.private_notes = data.private_notes;

    const { error } = await supabaseAdmin
      .from("brand_assessment_submissions")
      .update(patch)
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

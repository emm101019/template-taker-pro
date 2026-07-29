CREATE TABLE public.brand_assessment_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  first_name text NOT NULL,
  email text NOT NULL,
  instagram_username text,
  current_stage text NOT NULL,
  current_situation text NOT NULL,
  desired_90_day_result text NOT NULL,
  biggest_challenges text[] NOT NULL DEFAULT '{}',
  previous_attempts text,
  what_has_not_worked text,
  perceived_block text,
  cost_of_inaction text,
  desired_transformation text,
  help_needed text NOT NULL,
  commitment_score integer NOT NULL DEFAULT 5,
  why_now text,
  open_to_support text NOT NULL,
  additional_information text,
  status text NOT NULL DEFAULT 'New',
  private_notes text
);

GRANT INSERT ON public.brand_assessment_submissions TO anon, authenticated;
GRANT ALL ON public.brand_assessment_submissions TO service_role;

ALTER TABLE public.brand_assessment_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an assessment"
ON public.brand_assessment_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_brand_assessment_submissions_updated_at
BEFORE UPDATE ON public.brand_assessment_submissions
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
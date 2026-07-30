GRANT SELECT, UPDATE ON public.brand_assessment_submissions TO authenticated;

CREATE OR REPLACE FUNCTION public.is_site_owner()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT lower(coalesce((auth.jwt() ->> 'email'), '')) = 'cocoberrymerry@gmail.com'
$$;

CREATE POLICY "Owner can view submissions"
ON public.brand_assessment_submissions
FOR SELECT
TO authenticated
USING (public.is_site_owner());

CREATE POLICY "Owner can update submissions"
ON public.brand_assessment_submissions
FOR UPDATE
TO authenticated
USING (public.is_site_owner())
WITH CHECK (public.is_site_owner());
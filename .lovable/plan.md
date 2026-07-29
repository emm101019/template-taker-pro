## What's going on

`ADMIN_ACCESS_CODE` does exist in the project's secrets, so a value is stored — but I can't read it back to confirm which value it holds. Two likely reasons the dashboard still rejects your code:

1. The secure form wasn't submitted (or was submitted with a different value than you're typing).
2. The value was updated but the running preview server still holds the old environment, so `/admin/assessments` compares against the previous code.

## Plan

1. Open the secure secret form again for `ADMIN_ACCESS_CODE` so you can type the exact code you want. Nothing is saved until you submit that form.
2. Restart the preview server so the new value is loaded into the environment that the admin server function reads.
3. Verify end-to-end: hit `/admin/assessments`, enter the code, and confirm the dashboard opens and lists submissions (0 rows is a valid pass).
4. If it still fails, add a temporary server-side check that reports only whether the env var is present and its length — never the value — to pinpoint whether the secret reached the runtime.

## Technical detail

`src/lib/api/assessment.functions.ts` reads `process.env.ADMIN_ACCESS_CODE` inside the handlers of `listSubmissions` and `updateSubmission` and does a strict string compare, so whitespace or a trailing newline in the saved value would also cause a mismatch — worth entering the code with no leading/trailing spaces.

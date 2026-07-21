## What's happening

Your iPhone Safari is showing a blank page. Server-side the home page renders fine (34 KB of HTML, status 200), but the browser reports:

> `TypeError: Importing a module script failed.` at `/` and `/resources`

That's a client-side module load failing during hydration, so React never mounts and the screen stays blank. This is almost always one of:

1. **Stale Safari cache** pointing at an old chunk URL that no longer exists after recent edits.
2. A **route/component chunk that fails to parse on iOS Safari** (usually a large lib like `jspdf`, or a top-level side effect).
3. A broken import path introduced in a recent edit.

## Plan

1. **Reproduce & pinpoint** — open the preview via Playwright with an iOS Safari user agent, capture the exact failing module URL from the network tab and console, and screenshot the blank state. This tells us whether it's a missing chunk (cache) or a real parse/runtime error, and which file.
2. **If it's a stale-cache miss** — add a small root-level "reload on chunk load failure" handler in `src/routes/__root.tsx` so future stale-chunk errors self-recover instead of leaving a blank page. Also confirm the current build serves cleanly after a hard refresh.
3. **If it's a real import failure** — trace it to the offending module (most likely candidate: `jspdf` pulled in by `resources.index.tsx` / `resources.$slug.tsx`) and fix by:
   - Converting `downloadResourcePdf` to a **dynamic `import()`** inside the button click handler so `jspdf` never loads at route-init time, and
   - Removing any top-level side effects that break on iOS.
4. **Verify** on the preview at `/` and `/resources` (Playwright + a manual iPhone reload), confirm no unhandled rejections in `/tmp/runtime-errors.log`, and confirm content renders.

## Immediate workaround for you

While I fix this, on your iPhone do a **hard reload**: tap and hold the reload button in Safari → "Request Website" or close the tab and reopen the preview URL. That alone often clears the stale-chunk error.

## Technical notes

- SSR output is healthy, so the bug is strictly client hydration.
- The only heavy client-only dep in the tree is `jspdf`; making its import dynamic removes it from the initial route chunk and eliminates the most likely iOS parse/timeout failure.
- The chunk-error auto-reload guard is a small `window.addEventListener("error", …)` in `__root.tsx` that reloads once per session when a module script import fails.

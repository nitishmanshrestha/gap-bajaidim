# GAP Bajaidim: project rules

GAP Bajaidim is a single-file tool (`view/le-promotion-evidence-tagger.html`, provisional filename) that helps QAs organize and showcase a year of achievements for the GAP interview. Each claim has a high-level one-liner and, in its "utility belt", links, images and metrics for the detailed artifact. Created by Nitish Man Shrestha.

## Sources of truth

- Policy and competency facts: `knowledge/GAP-competency-matrix-knowledge-base.md`. Never invent policy. Check the tier lists in section 9 and Appendix E before touching competency or tier logic.
- `source-deck/` holds the original deck (`.pptx`) and its text export (`.md`). Read-only; do not edit.
- User data lives in the user's own JSON file (File System Access API). Never write real claims into this repo.

## Before writing code

1. Read the matching file in `.github/instructions/` (design system, app architecture).
2. Re-read the exact lines you will edit. The formatter rewraps lines, so stale context breaks replacements.
3. Reuse existing tokens, helpers and classes before adding new ones.

## Hard rules

- One self-contained HTML file. No build step, no scripts from CDNs. The only allowed external request is the Google Fonts stylesheet for Figtree and Newsreader in the page `<head>`; the UI must still look fine with the system fallbacks, and the PDF never depends on it.
- Vanilla HTML, CSS and JS only. Target Edge and Chrome on Windows.
- Escape every user string with `esc()`. Rich text goes through `sanitizeHtml()`. Never put user text into `innerHTML` raw.
- Do not add dependencies, frameworks or an API key field.
- Keep the PDF writer dependency-free. Text widths come from `PDF_FONTS`; do not estimate them.
- Keep stored claim fields backward compatible. Add optional fields; never rename or remove existing ones.

## Working style

- Short, impersonal answers. No emojis. No markdown docs unless asked.
- Label any suggested filename as provisional.
- After editing, run `get_errors`, then verify in the browser (reload the page, exercise the feature, screenshot UI changes). Say plainly what was not verified.
- Do not delete files without asking; the folder is not a git repository.

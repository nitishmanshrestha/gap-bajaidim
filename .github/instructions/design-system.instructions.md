---
description: Visual design system for GAP Bajaidim. Use when editing HTML, CSS or UI markup in the tool.
applyTo: "**/*.html"
---

# Design system

Warm, paper-like, calm. Restrained colour. Colour carries meaning (tier), not decoration.

## Tokens (use `var(--token)`, do not hardcode)

| Token                     | Value                                       | Use                                   |
| ------------------------- | ------------------------------------------- | ------------------------------------- |
| `--bg`                    | `#f3ecdd`                                   | page background                       |
| `--surface`               | `#fffdf7`                                   | cards, popovers                       |
| `--surface-alt`           | `#f8f2e5`                                   | inputs, tiles                         |
| `--border`                | `#e5d9c2`                                   | all borders; hover `#cdbd9c`          |
| `--text` / `--text-muted` | `#141413` / `#73726c`                       | body / secondary                      |
| `--primary`               | `#c6613f` (hover `#ae5130`, soft `#f8e9e1`) | main actions, selection               |
| `--danger`                | `#8f3a22` (soft `#f3e6df`)                  | destructive                           |
| `--radius-sm/md/lg`       | 10 / 14 / 20 px                             | inputs and buttons / popovers / cards |
| `--space-1..6`            | 4 / 8 / 12 / 16 / 24 / 32 px                | all spacing                           |
| `--shadow-sm/md`          | warm brown shadows                          | no cool or black shadows              |

## Typography

- Sans: `var(--font)` = Figtree, then Segoe UI. Body 16px, labels 13px at weight 600, hints 13px muted.
- Serif: `var(--serif)` = Newsreader, for headings and claim text only.
- Weights: 400 body, 600 labels and buttons, 700 only for headings. No other weights.
- Devanagari text inherits the same font, weight, size and colour as the surrounding text.

## Tier colours (meaning, not decoration)

- Critical red, Important yellow, Supporting blue, untiered grey. Defined by `TIER_BASE`, applied through `tierPalette`, `compPalette`, `compVars`.
- Never use these colours for anything except tier or competency state. Covered tiles stay neutral; only uncovered critical gaps are red-tinted.

## Components

- Inputs: min-height 44px, `--surface-alt` background, `--border`, `--radius-sm`, focus ring `0 0 0 3px var(--primary-soft)` with `--primary` border.
- Buttons: `.btn` primary, `.btn-ghost` secondary, `.btn-small` for inline. One primary action per card.
- Pickers and popovers: reuse the `.mp` month-picker pattern (trigger styled like an input, popover on `--surface` with `--shadow-md`, closes on outside click and Esc).
- Badges and tags: `.comp-tag` family; muted dashed `.warn-tag` for missing proof or numbers.
- Layout: `.page` max-width 1360px, cards padded 28px, grid gaps from `--space-*`.

## Accessibility

- Every control has a visible label or `aria-label`. Popovers set `aria-expanded`. Keep focus rings. Contrast at least 4.5:1 for text.

## Copy

- Plain, professional, slightly warm; a touch of QA humour is fine in one place (the header), nowhere else.
- Sentence case. No exclamation marks, no emojis.

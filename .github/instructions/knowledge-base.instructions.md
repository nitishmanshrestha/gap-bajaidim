---
description: Conventions for editing the GAP knowledge base markdown. Use when changing GAP-competency-matrix-knowledge-base.md.
applyTo: "knowledge/GAP-competency-matrix-knowledge-base.md"
---

# Knowledge base rules

- The KB restructures the deck losslessly. Do not add or change policy. Anything inferred must carry a `[Derived]` tag.
- Each H2 is a self-contained chunk that opens with a `**Context:**` line. Keep stable IDs on facts; never renumber existing IDs.
- Tier lists live in section 9 and Appendix E. If one changes, update both and the `COMPETENCIES` / `LEVEL_TIERS` data in the HTML app.
- Keep Appendix D (information-loss audit) accurate if sections are added or removed.
- `source-deck/` (`.pptx` and `.md`) is the source deck. Do not edit them; change the KB only to correct a mismatch with the deck.

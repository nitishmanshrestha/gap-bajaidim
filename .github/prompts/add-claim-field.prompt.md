---
description: Add a new optional field to a claim end to end.
---

Add a new optional claim field: ${input:field:name and purpose}

Follow `.github/instructions/app-architecture.instructions.md`. Checklist:

1. Form control in the Add/Edit card, styled per the design system.
2. `readEvidenceFields` and `fillEvidenceFields` (default to empty so old files still load).
3. A row in `impactRows` so the card, markdown pack and PDF all show it.
4. Reset behaviour in `resetForm`.
5. How-to page text if the field changes the workflow.
6. Reload the page, save a claim, edit it, and confirm round-trip and PDF output.

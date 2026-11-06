---
description: Architecture, data model and PDF rules for the GAP Handim single-file app. Use when editing JavaScript, saving or loading claims, or the PDF/markdown export.
applyTo: "**/*.html"
---

# App architecture

## Data

- Stored as `{ version: 1, candidate: {name, project}, claims: [...] }` in a user-owned JSON file via the File System Access API. `commitClaims()` is the only write path; it checks `lastModified` before writing.
- Claim fields: `id, point, claim, description (sanitized HTML), competencies[], links[{url,label}], images[] (data URLs), problem, before, after, consequence, method, figureStatus, proofStatus (`verified|self-reported|needs-proof`or absent), cycle, doneOn (YYYY-MM), selectedForPack, level, dataset (legacy: kept if present in saved JSON, no longer created or edited;`{name, headers[], rows[][], valueCol, chart}` or null), createdAt`.
- Links may be legacy strings; read them through `asLink`.
- New fields must be optional and defaulted when reading.

## Where things live

- Competencies, levels and tiers: `COMPETENCIES`, `LEVELS`, `LEVEL_TIERS`, `tierOf()`. Must match the knowledge base (section 9, Appendix E).
- Form read/write: `readEvidenceFields`, `fillEvidenceFields`, `saveClaim`, `editClaim`, `resetForm`.
- Shared row builder: `impactRows(claim)` feeds the card, the markdown pack and the PDF. Add new evidence fields there once.

## PDF writer

- Hand-written PDF 1.4 with embedded subset TrueType fonts (Figtree 400/600, Newsreader 400/600) from `<script id="pdfFonts">`. Widths come from that data.
- Two-pass `layout` in `buildPdf`. Supports link annotations, internal GoTo links, outlines, and DCT images at original pixels.
- Text must stay WinAnsi-encodable; map or strip anything else.
- Do not add libraries. Test changes by generating a PDF from sample claims and rendering it (see the `verify-pdf` prompt).

## Safety

- Escape with `esc()`, sanitize rich text with `sanitizeHtml()`, restrict image data URLs with `SAFE_IMAGE`, only allow `http(s)` links.
- No network calls from app logic. UI fonts come from the Google Fonts links in `<head>`; the PDF uses its own embedded fonts. No secrets in the file.

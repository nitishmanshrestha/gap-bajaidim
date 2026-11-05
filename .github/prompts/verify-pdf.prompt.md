---
description: Generate a sample PDF from the app and render it to PNG for visual review.
---

Verify the PDF export of `view/le-promotion-evidence-tagger.html`.

1. Open the page in the integrated browser.
2. In the page, set `state.level`, `state.candidate` and two or three sample claims (one with links, nested bullets, images and numbers; one minimal). Call `buildPdf(claims)` and base64 the Blob.
3. Send the bytes to a throwaway local HTTP server (POST to 127.0.0.1) that saves `out.pdf` under the system temp folder, then stop the server.
4. Render each page with PyMuPDF (`pip install pymupdf`) at about 80 dpi and view the PNGs.
5. Check: embedded fonts (Figtree, Newsreader), tier colours (red, yellow, blue, grey), alignment and padding consistency, Contents page numbers, links, footer.
6. Report what was checked and what was not. Do not leave files in the workspace.

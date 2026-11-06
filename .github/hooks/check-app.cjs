// Postcondition check for the single-file app: JS syntax, duplicate ids, forbidden patterns.
// Reads the hook event from stdin, always exits 0, and returns additionalContext only on problems.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

try {
  fs.readFileSync(0, "utf8");
} catch {}

const file = path.resolve(
  __dirname,
  "..",
  "..",
  "view",
  "gap-bajaidim-tagger.html",
);
const problems = [];

if (fs.existsSync(file)) {
  const html = fs.readFileSync(file, "utf8");

  const scripts = [
    ...html.matchAll(/<script(?![^>]*\bid=)[^>]*>([\s\S]*?)<\/script>/g),
  ];
  scripts.forEach((m, i) => {
    try {
      new vm.Script(m[1], { filename: `inline-script-${i + 1}` });
    } catch (e) {
      problems.push(`JS syntax error in inline script ${i + 1}: ${e.message}`);
    }
  });

  const ids = [...html.matchAll(/\sid="([^"$]+)"/g)].map((m) => m[1]);
  const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  if (dupes.length) problems.push(`Duplicate element ids: ${dupes.join(", ")}`);

  if (
    /<script[^>]+src=|<link[^>]+href="https?:\/\/(?!fonts\.(googleapis|gstatic)\.com)/i.test(
      html,
    )
  )
    problems.push(
      "External script or stylesheet found. Only the Google Fonts links are allowed.",
    );
}

process.stdout.write(
  problems.length
    ? JSON.stringify({
        additionalContext: `Post-edit check failed:\n- ${problems.join("\n- ")}`,
      })
    : "{}",
);

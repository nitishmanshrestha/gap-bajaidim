# GAP Handim: Claude Code instructions

This file is the Claude Code entry point. The rules live in the Copilot files, so they are imported here rather than copied.

@.github/copilot-instructions.md

## Competency and policy sources

- Read `knowledge/GAP-competency-matrix-knowledge-base.md` before any competency, tier or claim work.
- Claim-writing workflow: `.github/agents/gap-artifact-polisher.agent.md`. The Claude subagent `.claude/agents/gap-artifact-polisher.md` follows it.

## Claude-specific notes

- Use the `gap-artifact-polisher` subagent for turning artifact notes into claims.
- Personal data in `source/` is git-ignored. Do not commit or print it in full.

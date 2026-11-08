---
description: Weekly, read-only review of the static site and its Pages deployment.
on:
  schedule: weekly
  workflow_dispatch:

permissions:
  contents: read
  issues: read
  pull-requests: read
  copilot-requests: write

max-ai-credits: 25
timeout-minutes: 10

network:
  allowed: []

tools:
  github:
    mode: gh-proxy
    toolsets: [default]

safe-outputs:
  create-issue:
    title-prefix: "[Weekly site review] "
    labels: [bug]
    max: 1
    close-older-issues: true
---

# Weekly site review

Review this repository's `index.html`, `README.md`, and Pages deployment
workflow for confirmed, actionable problems that could prevent the site from
working as intended. You may also inspect existing issues and pull requests to
avoid reporting work that is already tracked.

Create at most one issue, and only for a specific problem supported by evidence
in the repository. Include the affected file or workflow and a concise,
verifiable explanation. Do not edit files or propose speculative, cosmetic, or
personal-content changes. If there are no actionable findings, or every
finding is already tracked, take no action.

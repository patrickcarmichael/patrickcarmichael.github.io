# GitHub Copilot instructions

This is a single-page, no-build static website. The entire site is `index.html`,
which contains the HTML, inline CSS (in `<style>`), and a small inline script.

When making changes:

- Keep the site self-contained in `index.html`; do not add a build step, bundler,
  package manager, or `node_modules`.
- Keep CSS and JS inline, and indent with two spaces.
- Preserve the System 7 / classic Mac aesthetic and existing accessibility
  attributes (`aria-label`, `aria-hidden`, heading order).
- Do not add analytics, trackers, or external script/CSS dependencies.
- Keep changes minimal and focused; do not refactor unrelated code.

Validate changes by opening `index.html` in a browser (or `python3 -m http.server`)
and confirming layout, menu links, and the clock work. The `checks.yml` workflow
runs HTML validation and link checking in CI.

See [AGENTS.md](../AGENTS.md) for full guidance.

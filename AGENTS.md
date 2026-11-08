# AGENTS.md

Guidance for AI coding agents working in this repository. Human contributors may
also find it useful. For the broader convention, see https://agents.md.

## What this repo is

Source for [patrickcarmichael.github.io](https://patrickcarmichael.github.io): a
one-page, System 7-flavored landing page. It is plain HTML and CSS with a tiny
inline script. There is **no build step**, no framework, no package manager, and
no tracking.

Key files:

- `index.html` — the entire site (HTML, inline CSS in `<style>`, inline JS in `<script>`).
- `README.md` — short human-facing description.
- `.github/workflows/pages.yml` — deploys the site to GitHub Pages on push to `master`.
- `.github/workflows/checks.yml` — passive checks (HTML validation + link check) on push, PR, and a schedule.
- `.github/dependabot.yml` — keeps GitHub Actions versions current.

## Conventions

- Keep the site a single self-contained `index.html`. Do not introduce a build
  step, bundler, or `node_modules` unless the task explicitly asks for it.
- Keep CSS and JS inline in `index.html`, matching the current structure.
- Preserve the System 7 / classic Mac aesthetic (CSS custom properties in
  `:root`, the dither background, window/titlebar styling).
- Indent with two spaces, matching `index.html`.
- Keep accessibility intact: `aria-label` on nav, `aria-hidden` on decorative
  elements, meaningful heading order (`h1` then `h2`).
- The site is intentionally `noindex` (`<meta name="robots" content="noindex">`).
  Leave this unless asked to change it.

## How to validate changes

There is no test suite. Validate HTML/site changes by:

1. Opening `index.html` in a browser (or serving it: `python3 -m http.server`)
   and confirming the layout, menu links, and clock still work.
2. Checking that the workflows in `.github/workflows/` have valid YAML, e.g.:

   ```sh
   python3 -c "import yaml,sys; [yaml.safe_load(open(f)) for f in sys.argv[1:]]" .github/workflows/*.yml
   ```

3. The passive `checks.yml` workflow runs HTML validation and a link check in CI;
   let it run on the PR rather than duplicating heavy tooling locally.

## Guardrails

- Keep changes minimal and focused on the task. Do not refactor unrelated code.
- Do not add analytics, trackers, or external script/CSS dependencies.
- Do not commit secrets, build artifacts, or dependency directories.
- The deploy workflow (`pages.yml`) runs on pushes to `master`; be deliberate
  about any change there since it publishes the live site.

# patrickcarmichael.github.io

Source for [patrickcarmichael.github.io](https://patrickcarmichael.github.io): a one-page, System 7-flavored landing page. Plain HTML and CSS, no build step, no tracking.

Other repos with GitHub Pages enabled publish under this domain, for example [`/personal-spo/`](https://patrickcarmichael.github.io/personal-spo/).

The browser start pages that used to live here are kept on the [`archive/startpages-2026`](https://github.com/patrickcarmichael/patrickcarmichael.github.io/tree/archive/startpages-2026) branch.

## Agentic workflow

The weekly site review is defined in `.github/workflows/weekly-site-review.md`;
its compiled Actions workflow is committed alongside it. It runs weekly and can
also be started from the Actions tab. Running it requires GitHub Actions and
Copilot agent access; inference is capped at 25 AI credits per run. Edit the
Markdown source and recompile it with `gh aw compile weekly-site-review`.

# patrickcarmichael.github.io

Source for [patrickcarmichael.github.io](https://patrickcarmichael.github.io): a one-page, System 7-flavored landing page. Plain HTML and CSS, no build step, no tracking.

Other repos with GitHub Pages enabled publish under this domain, for example [`/personal-spo/`](https://patrickcarmichael.github.io/personal-spo/).

The browser start pages that used to live here are kept on the [`archive/startpages-2026`](https://github.com/patrickcarmichael/patrickcarmichael.github.io/tree/archive/startpages-2026) branch.

## Agentic Workflows

This repo includes a passive workflow at `.github/workflows/agentic-passive.yml` for lightweight agent-ready operations:

- Runs automatically on pull requests and pushes to `master` when site/workflow files change
- Runs daily on a schedule for passive health checks
- Supports dynamic manual runs via `workflow_dispatch` with:
  - `mode=quick|full`
  - optional `include_link_scan=true`

The workflow is intentionally read-only (`contents: read`) and does not change repository state.

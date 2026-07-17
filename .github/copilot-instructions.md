# Copilot Instructions for patrickcarmichael.github.io

## Repository summary
- This is a static GitHub Pages repository with multiple customizable browser start pages (HTML/CSS/JS). The root `index.html` is the primary “Tilde” start page. Additional variants live under `bash/`, `flow/`, and `win95/`.
- The repo is small (~40 files plus fonts/icons). It uses plain HTML, CSS, and vanilla JavaScript with a few CDN scripts (jQuery, Moment.js) in the `win95/` variant.
- There is **no** package manager, build system, or compiled assets; changes are made directly in source files.

## Build / run / test / lint instructions
- **Bootstrap:** None. There is no `package.json`, `Makefile`, or build tooling.
- **Build:** None. Static assets are served as-is.
- **Lint:** None configured.
- **Tests:** None configured.
- **Run/Preview:** Open the desired HTML file directly in a browser (e.g., `index.html`, `bash/index.html`, `flow/index.html`, or `win95/index.html`). No command is required.
- **CI/validation:** There is no `.github/workflows` directory in this repo; no automated CI is defined here.

If you need to validate a UI change, manually open the affected HTML file in a browser and exercise the UI. Otherwise, no automated validation is available.

## Project layout and architecture
- **Root start page:** `index.html` contains **all** config, CSS, and JS inline. The `CONFIG` object at the top defines themes, commands, and search behavior. It also defines suggestion influencers and defaults.
- **Root styling:** `style.css` is used by the legacy `index_old.html` page; the primary `index.html` embeds its own styles.
- **Legacy assets:** `index_old.html` and `css_old.css` are older variants kept for reference.
- **Fonts:** `FiraCode-*.ttf` and `SFMono-Light.otf` are referenced by CSS in the root and `bash/` variant.

### Subprojects
- **`bash/`** – terminal-style start page.
  - Entry: `bash/index.html`.
  - JS: `bash/js/main.js` (command parsing, localStorage persistence), plus command modules in `bash/js/commands/*.js`.
  - CSS: `bash/style.css` and `bash/style/style.css`.
- **`flow/`** – hover/keyboard/numeric navigation start page.
  - Entry: `flow/index.html`.
  - JS: `flow/main.js` (keyboard navigation and search logic).
  - CSS/fonts: `flow/styles/style.css`, `flow/styles/*.ttf`.
- **`win95/`** – Windows 95-inspired start page.
  - Entry: `win95/index.html`.
  - Data: `win95/folderData.js` defines the menu and URLs.
  - JS: `win95/script.js` uses jQuery + Moment.js from CDN.
  - CSS: `win95/style.css`, assets in `win95/res/`.

## Key files and snippets
- **`index.html` (root)**
  - CONFIG-driven start page. Look near the top for:
    - `CONFIG.theme`, `CONFIG.commands`, `CONFIG.suggestionInfluencers`, `CONFIG.suggestionDefaults`.
  - The inline JS defines `Clock`, `Help`, `QueryParser`, `Suggester`, and `Form` classes.
- **`bash/js/main.js`**
  - Defines commands and `parseQuery()` for terminal-style interactions; uses localStorage to persist directories and links.
- **`flow/main.js`**
  - Handles keyboard navigation (arrow keys, numbers) and search field toggling.
- **`win95/folderData.js`**
  - Pure data file listing folders and URLs for the Win95 menu.

## Root file inventory (top level)
- `CNAME`
- `LICENSE`
- `README.md` (Tilde start page usage)
- `index.html` (primary start page)
- `index_old.html`, `css_old.css` (legacy)
- `style.css` (legacy styling)
- Fonts: `FiraCode-*.ttf`, `SFMono-Light.otf`
- Directories: `bash/`, `flow/`, `win95/`

## README highlights
- Describes “Tilde” start page usage and command syntax.
- Examples for direct navigation (`t`), search (`g'tilde`), and paths (`r/r/startpages`).

## Next-level directory inventory (high-level)
- `bash/`: `index.html`, `style.css`, `style/`, `js/`, `README.md`
- `flow/`: `index.html`, `main.js`, `styles/`, `README.md`
- `win95/`: `index.html`, `script.js`, `folderData.js`, `style.css`, `res/`, `README.md`, `LICENSE`

## Guidance for future agents
- Prefer editing the specific variant’s HTML/JS/CSS; there is no build step.
- Update links/menu data in the dedicated data files where applicable (e.g., `win95/folderData.js`).
- Trust these instructions and avoid extra repository searches unless this file is incomplete or incorrect.

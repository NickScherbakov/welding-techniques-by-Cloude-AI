# Redirect site (for user-site `username.github.io`)

This small static site provides redirects for language-root paths like `/en/`, `/zh/`, `/ar/`, and `/ru/` to the translated project pages at `https://nickscherbakov.github.io/welding-techniques-by-Cloude-AI/en/` and so on.

How to publish:

1. Create (or use) a repo named `username.github.io` for the user `username` you control.
2. Add two secrets to this repo's origin repository or to this repo's Settings -> Secrets & Variables -> Actions:
   - `PUBLISH_PAT` — a personal access token with `repo` scope.
   - `TARGET_REPO` — the full repo name of the target user site (for example `NickScherbakov/nickscherbakov.github.io`).
3. Run the action `Publish redirect site to user repo` from `Actions` -> `Publish redirect site to user repo` -> `Run workflow`, or push to `main` to trigger it automatically.

The workflow will copy the `redirect` folder and push it to the `main` branch of the configured `TARGET_REPO`.

Notes:
- Publishing requires that you have admin access to the `TARGET_REPO` repo and that the repo is enabled for GitHub Pages.
- For more complex redirects or additional paths, edit `redirect/index.html` to add mapping rules.

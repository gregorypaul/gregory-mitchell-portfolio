# Gregory Mitchell portfolio

React and Vite site for [gregory-mitchell.com](https://gregory-mitchell.com). Contact details live in `src/data/site.js`.

## Local development

```bash
npm ci
npm run dev
```

Other scripts:

- `npm run build` writes the static site to `dist/`
- `npm run preview` serves that build
- `npm run lint` runs ESLint

The page uses in-page anchors (`#projects`, `#services`, `#contact`). It does not use React Router, so Apache does not need a rewrite to `index.html`. This repo does not ship an `.htaccess`. Whatever `.htaccess` is already on the server stays there.

## Local business page

`websites/index.html` is a second Vite entry. The build writes `dist/websites/index.html`. HostGator serves that file at [https://gregory-mitchell.com/websites/](https://gregory-mitchell.com/websites/) with DirectoryIndex, so no rewrite rule is required. Relative asset URLs (`../assets/...`) come from `base: "./"`.

The deploy workflow uploads the whole `dist/` folder and does not exclude `websites/`. The portfolio homepage is still `dist/index.html`.

In local dev the page is at [http://localhost:5173/websites/](http://localhost:5173/websites/). The Services section links to it with “For local businesses →”.

## Deploy to HostGator

`.github/workflows/deploy.yml` installs dependencies, builds, and uploads `dist/` with [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action) v4.4.0 (pinned to commit `110f9186c050f71550953127052e77650219c287`).

It runs on every push to `main`. Starting it by hand from the Actions tab uploads only when the selected branch is `main`. A run from any other branch is skipped, so a pull request cannot write to the server.

`.github/workflows/ftp-dry-run.yml` is a separate check for the pull-request branch. It uses the same action with `dry-run: true` and `server-dir: ./public_html/`. That logs in and prints what would be uploaded. It does not create, replace, or delete files. It does not run on `main`.

`dangerous-clean-slate` is `false`. The action uploads changed files. It does not wipe the remote folder, so subdomain directories that already live on the host (for example `dishly`) are left in place.

### Secrets

In the GitHub repository, open **Settings → Secrets and variables → Actions → Secrets** and add:

| Secret | Value |
| --- | --- |
| `FTP_SERVER` | HostGator FTP hostname |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |

Do not put these values in the workflow file.

### Remote directory

The upload folder is the `FTP_SERVER_DIR` environment variable. It defaults to `./public_html/`.

Gregory confirmed the live site directory is `public_html/`, and the dry run uses `./public_html/`. If that FTP account is already jailed inside `public_html`, this path would create `public_html/public_html` on a real upload. The dry-run log is the place to see whether the server accepts that folder before anything is published. If the account is jailed, set `FTP_SERVER_DIR` to `./` before merging.

To change it without editing the workflow, add a repository **variable** named `FTP_SERVER_DIR` (Settings → Secrets and variables → Actions → Variables). The value must end with `/`.

### Files the deploy will not touch

The exclude list keeps these out of the upload and out of the sync-delete pass:

- `.git` metadata and `node_modules`
- `.htaccess`
- `dishly`, `movie-app`, `bon-appetit`, and `bon-appetite`
- `cgi-bin` and `.well-known`

Hashed files from older builds can remain on the server. That is intentional. Do not turn on `dangerous-clean-slate` to remove them. That option deletes the whole remote directory, including the excluded subdomain folders.

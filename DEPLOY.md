# Deploy this site

These steps are for Gregory, on his own machine. The live site is `https://gregory-mitchell.com/`. Staging is `https://staging.gregory-mitchell.com/` and asks for a password.

## 1. One-time setup

Install Node.js 22 (the GitHub workflows use Node 22).

```bash
git clone https://github.com/gregorypaul/gregory-mitchell-portfolio.git
cd gregory-mitchell-portfolio
npm ci
```

## 2. Where the local-business page lives

The portfolio homepage and the `/websites/` page are the same Vite app.

- Page layout: `src/websites/WebsitesPage.jsx`
- Copy and prices: `src/websites/content.js`
- Case-study slider: `src/websites/CaseStudy.jsx`
- Summit Air sample: `src/websites/SummitSample.jsx`
- Styles: `src/websites/websites.css`
- HTML shell, title, and meta: `websites/index.html`
- Images: `src/assets/websites/`
- Phone, email, and city: `src/data/site.js`

The dev server serves the page at `http://localhost:5173/websites/`.

## 3. Run it locally

```bash
npm run dev
```

Open `http://localhost:5173/websites/`.

To preview the production build instead:

```bash
npm run build
npm run preview
```

Open `http://localhost:4173/websites/`.

## 4. Change the page on a feature branch

```bash
git checkout main
git pull origin main
git checkout -b my-change
```

Edit the files above. Check the page in the browser. Then:

```bash
git add -A
git commit -m "Describe the change"
git push -u origin my-change
```

Open a pull request when you want a review. Do not commit `node_modules` or `dist`.

## 5. Deploy to staging

Staging deploys when `staging` is pushed. The workflow is `.github/workflows/deploy-staging.yml`. It builds the site and uploads `dist/` to `public_html/website_89bff753` on HostGator.

```bash
git checkout staging
git pull origin staging
git merge my-change
git push origin staging
```

That push starts the deploy. The site is `https://staging.gregory-mitchell.com/` (and `/websites/` for this page). cPanel Directory Privacy asks for a username and password. The workflow does not know that password.

Watch the run:

```bash
gh run list --branch staging --limit 3
gh run watch
```

Or open the Actions tab, workflow “Deploy staging to HostGator”.

## 6. Promote staging to production

Production deploys when `main` is pushed. The workflow is `.github/workflows/deploy.yml`. It uploads `dist/` to `public_html`.

Preferred: open a pull request from `staging` into `main`, review it, and merge it.

Or, from your machine, after you are sure staging looks right:

```bash
git checkout main
git pull origin main
git merge staging
git push origin main
```

The push to `main` starts “Deploy to HostGator”.

## 7. Roll back

Find the commit that caused the problem, then:

```bash
git revert <commit-sha>
git push origin <branch>
```

Pushing `staging` redeploys staging. Pushing `main` redeploys production. `git revert` adds a new commit that undoes the old one. It does not rewrite history.

## 8. GitHub secrets

Both workflows read these repository secrets (Settings → Secrets and variables → Actions). Names only:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Optional repository variable:

- `FTP_SERVER_DIR` — default `./public_html/`. Set this to `./` only if the FTP account is already inside `public_html`. Staging then uploads to `./website_89bff753/`.

## 9. Pitfalls

- The staging upload excludes `.htaccess` and `.htpasswd`, and `dangerous-clean-slate` is false. cPanel’s password file is left alone. Do not delete those excludes.
- Staging writes `robots.txt` with `Disallow: /` and adds `<meta name="robots" content="noindex, nofollow">` after the build. Production does not. Do not copy that step into `deploy.yml`.
- Image URLs in the built HTML are relative (`./assets/...` on the homepage, `../assets/...` on `/websites/`). That works when the site is the document root, which is true for both `gregory-mitchell.com` and `staging.gregory-mitchell.com`. Do not set Vite `base` to a path that only exists on one host.
- A manual workflow run only uploads when it is started from `main` (production) or `staging` (staging). Starting it from another branch does nothing.
- If files land in `public_html/public_html`, `FTP_SERVER_DIR` is wrong for this FTP account. See the comment at the top of `deploy.yml`.

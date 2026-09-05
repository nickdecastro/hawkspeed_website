# HawkSpeed Website

[**Open the site locally**](http://localhost:3000) — run `npm run dev` first if it's not already running.

Public site for HawkSpeed, with two main sections:

- **Games** (`/games`) — apps and games we've made
- **Game Guides** (`/guides`) — walkthroughs and reference guides, one per game

It also hosts the privacy policy for the Android app "Endings Guide for Elden
Ring" at `/privacy/endings-guide-for-elden-ring`, which is the URL to submit
to the Google Play Console listing once this site is deployed.

Built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Structure

```text
app/
  layout.tsx                            Root layout (Header + Footer on every page)
  page.tsx                              Home
  games/page.tsx                        Games section
  games/[slug]/page.tsx                 Individual game
  games/data.ts                         Game entries
  guides/page.tsx                       Game Guides section
  guides/data.ts                        Guide entries
  guides/elden-ring/                    Elden Ring walkthrough (components + endings.json)
  privacy/endings-guide-for-elden-ring/ Privacy policy for the Elden Ring app
components/                             Header, Footer, GameCard, GuideCard, StatusBadge
public/logo/                            HawkSpeed logo (amber = in use, black = future use)
```

## Deployment

The site is a [static export](https://nextjs.org/docs/app/guides/static-exports)
(`output: "export"` in `next.config.ts`) hosted on Network Solutions and served
at <https://hawkspeed.com>.

### 1. Build and package

```bash
npm run build
```

This regenerates `out/`, which is the complete deployable site. Everything in
`public/` is copied in as-is, so `public/logo/hawkspeed-amber.svg` becomes
`https://hawkspeed.com/logo/hawkspeed-amber.svg` once live.

> `out/` is only refreshed by `npm run build`. Editing files under `public/` or
> `app/` and re-uploading a previously built `site.zip` will not include those
> changes.

Package the **contents** of `out/`, not the folder itself:

```powershell
Compress-Archive -Path out\* -DestinationPath site.zip -Force
```

`index.html` must sit at the top level of the archive — there should be no
wrapper folder inside the zip.

### 2. Upload to Network Solutions

1. Log in to <https://www.networksolutions.com/>
2. If HawkSpeed was not the last project, click **Change Project** and select HawkSpeed
3. Click **Hosting**
4. Click **File Manager**
5. Click **Upload File** (upper right corner)
6. Select the file to upload
7. After upload, navigate to the `htdocs` folder
8. Click on the `site.zip` file
9. Click **Unzip**
10. Navigate back to the `htdocs` folder
11. Click the `site` subfolder
12. Select all files and click **Copy**
13. On the copy screen, check the **Move** checkbox and change the destination
    folder to `htdocs`

**Why steps 10–13 are needed:** the File Manager's Unzip always extracts into a
subfolder named after the archive, so `site.zip` unpacks to `htdocs/site/`
rather than `htdocs/`. This is the hosting tool's behaviour — the zip itself
contains no `site/` folder. Until the files are moved up into `htdocs/`, the
live site keeps serving the previous version, which looks exactly like the
upload having silently failed.

### 3. Verify

Load a file you know is new, for example
<https://hawkspeed.com/logo/hawkspeed-amber.svg>. A 404 usually means the files
are still sitting in `htdocs/site/`.

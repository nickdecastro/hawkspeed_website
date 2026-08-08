# HawkSpeed Website

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
  page.tsx                              Home
  games/page.tsx                        Games section
  guides/page.tsx                       Game Guides section
  guides/[slug]/page.tsx                Individual guide
  privacy/endings-guide-for-elden-ring/ Privacy policy for the Elden Ring app
components/                             Header, Footer, GameCard, GuideCard
```

## Deployment

Hosting isn't decided yet. This is a standard Next.js app and deploys
without changes to [Vercel](https://vercel.com/new) or Netlify; deploying to
GitHub Pages would additionally require configuring
[static export](https://nextjs.org/docs/app/guides/static-exports).

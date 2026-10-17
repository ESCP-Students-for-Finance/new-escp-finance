# ESCP Students for Finance – Turin Campus

This is the code for our society's website, [escpstudentsforfinance.com](https://www.escpstudentsforfinance.com). It has our articles, research, team page, a news page and a small stock ticker that updates every day.

It's a React app built with Vite and Tailwind, and it's hosted on Vercel.

## Running it locally

You need Git and Node.js (20.19 or newer, we use 22).

```bash
git clone https://github.com/ESCP-Students-for-Finance/new-escp-finance.git
cd new-escp-finance
npm install
npm run dev
```

Then open http://localhost:5173.

Other commands:

- `npm run build` builds the site into `dist/` and then runs `scripts/prerender.js`, which creates a page for every article and research project so links shared on LinkedIn/WhatsApp get the right title and image.
- `npm run preview` serves the built site so you can check it before pushing.
- `npm run lint` runs ESLint.

## How it gets deployed

Vercel is connected to this repo. Whatever is on `main` is what's live, and every push to `main` triggers a new deploy (takes a minute or two). Pull requests also get their own Vercel preview link, which is the easiest way to check something before merging.

So the normal flow is: make a branch, open a PR, check the preview, merge.

Please don't work from a fork's `main` branch. We had an article go live with the wrong cover image because of a messy merge between a fork and this repo. Branches in this repo avoid that.

The old GitHub Pages setup (`deploy.sh` and `.github/workflows/deploy.yml.disabled`) isn't used anymore.

## Adding an article

Most changes to the site are new articles. Each one needs three things:

1. **The cover image** goes in `public/`, e.g. `public/my-article.jpg`. Keep it reasonably small (under ~500 KB) and use lowercase with hyphens in the name.
2. **The card** goes at the top of the `articles` list in `src/data/siteData.js`. The order of that list is the order on the site, so newest first:

   ```js
   {
       title: "Full title of the article",
       excerpt: "One or two sentences for the card and link previews.",
       category: "M&A",
       series: "Market Momentum | Week 41",
       author: "Name Surname and Name Surname",
       date: "Oct 17, 2026",
       image: "/my-article.jpg",
       slug: "my-article-slug-2026"
   },
   ```

3. **The article itself** goes in `articleContents` in `src/pages/ArticleDetailPage.jsx`, under the same slug. The easiest way is to copy an existing article and replace the text. You can use `LeadParagraph`, `SectionHeading`, `BodyParagraph`, `TableCard`, `StatGrid`/`StatCard`, `QuoteBlock` and normal `<figure><img /></figure>` for images. Search the file for any of these to see how they're used.

The slug has to match exactly in steps 2 and 3, otherwise the card shows up but the article page says it can't be found.

Research projects work the same way, with `researchProjects` in `siteData.js` and `ResearchDetailPage.jsx`.

## Stock ticker

The prices in the ticker come from `src/data/stockData.json`. A GitHub Action (`.github/workflows/update-stocks.yml`) runs every morning at 9:00 UTC, gets fresh numbers using `scripts/updateStocksGemini.js`, and commits them to `main`. That's why you'll see a lot of "Update stock prices" commits. Pull before you start working so you don't get conflicts with them.

Bitcoin is fetched live in the browser from CoinGecko.

## Search

The search bar looks through our articles, team members and pages, and can also ask Gemini for an answer. The Gemini call goes through a small serverless function in `api/gemini.js` so the API key never reaches the browser.

It needs these environment variables (see `.env.example`):

- `GEMINI_API_KEY` – set in Vercel, and as a repo secret for the stock update Action.
- `ALLOWED_ORIGINS` – optional, extra sites allowed to call `/api/gemini`.

Never commit a real key.

## Where things are

```
src/
  pages/          one file per page (Home, Articles, ArticleDetail, Research, Team, News, About, Contact)
  components/     header, footer, hero, ticker, search, etc.
    articles/     layout pieces shared by all article pages
    ui/           building blocks used inside articles (tables, stat cards, quotes...)
  data/
    siteData.js   articles, research projects and the team list
    stockData.json  ticker prices (updated by the Action)
public/           images, team photos, the hero video, favicons
api/gemini.js     serverless function for AI search
scripts/          prerender + stock update scripts
```

There's also a small easter egg hidden somewhere. Press S then L on any page.

## Contact

Questions about the site go to the Tech team. For anything else: escpstudentsforfinance@gmail.com, or find us on [LinkedIn](https://www.linkedin.com/company/escp-studenst-for-finance/) and [Instagram](https://www.instagram.com/escpstudentsforfinance/).

© ESCP Students for Finance – Turin Campus

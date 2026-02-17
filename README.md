# Somm.Tips

**A sommelier in your pocket.** Wine recommendations, classic food pairings, cocktails, and beverage education — no signup required.

## About

Somm.Tips is a content-driven web application that helps users discover wines, learn classic pairings, explore cocktails, and deepen their beverage knowledge. Built with a zero-friction philosophy: no accounts, no popups, no paywalls.

Part of the [Informative Media](https://informativemedia.com) ecosystem, alongside [Somm.Site](https://somm.site), [Beverage.fyi](https://beverage.fyi), and [Backbar.fyi](https://backbar.fyi).

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** CSS Modules, mobile-first
- **Font:** Inter (Google Fonts)
- **Data:** Static JSON (English + Spanish)
- **Hosting:** Vercel
- **Analytics:** Google Analytics (gtag)
- **i18n:** Custom bilingual system (EN/ES) via React Context

## Bilingual Support

The app supports English and Spanish via a toggle in the header. The system uses:

- **`LanguageContext.js`** — React Context provider storing the active language (session-only, defaults to English)
- **`LanguageToggle.js`** — Header toggle button that switches between EN and ES
- **`translations.js`** — All UI strings (buttons, headings, labels) in both languages
- **`.es.json` data files** — Full Spanish translations of all wine, pairing, cocktail, vintage, and education content

Filter logic uses English keys internally so data matching works regardless of display language.

## Pages

- `/` — Homepage hub with navigation cards
- `/wine-recommendations` — Filterable wine recommendation engine
- `/classic-pairings` — Food and wine pairings by continent
- `/ordering-wine` — Style-based ordering guidance
- `/vintages` — Notable vintages by region
- `/education` — Grapes, regions, and tasting terms
- `/cocktails` — Recipes organized by base spirit
- `/about` — App info, philosophy, and ecosystem links
- `/privacy` — Privacy policy
- `/terms` — Terms of use
- `/cookies` — Cookies policy
- `/content-policy` — Editorial standards

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushes to `main` auto-deploy via Vercel. The `legacy` branch preserves the previous React/Vite build.

## License

© Informative Media. All rights reserved.
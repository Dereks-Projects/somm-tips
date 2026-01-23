# Somm Tips

A React-based wine and beverage recommendation app that helps users discover wines, learn pairings, and navigate the world of wine with confidence.

**Part of the Provenance Media Holdings ecosystem** — connecting wine enthusiasts with educational resources across [Somm.Site](https://somm.site), [Beverage.fyi](https://beverage.fyi), [Hospitality.fyi](https://hospitality.fyi), and [Backbar.fyi](https://backbar.fyi).

## Features

- **Wine Recommendations** — Interactive filters for discovering wines by color, body, dryness, and origin
- **Classic Pairings** — Curated wine pairings for international cuisines
- **Vintages** — Quality ratings and notes for major wine regions over the past 20 years
- **Ordering Guide** — Professional tips for navigating wine lists and restaurants
- **Wine Education** — Guides on wine regions, grapes, and tasting techniques
- **Cocktails** — Classic and modern cocktail collection

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/somm-tips
cd somm-tips

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
npx vercel --prod
```

## Project Structure

```
somm-tips/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BottomNav.jsx
│   │   ├── DesktopFooter.jsx
│   │   ├── WineAccordion.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── WinesForMePage.jsx
│   │   ├── WineEducationPage.jsx
│   │   ├── ClassicPairingsPage.jsx
│   │   ├── VintagesPage.jsx
│   │   ├── OrderingWinePage.jsx
│   │   ├── CocktailsPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   ├── TermsOfUsePage.jsx
│   │   ├── CookiesPolicyPage.jsx
│   │   └── ContentPolicyPage.jsx
│   ├── data/
│   │   ├── wineRecommendations.json
│   │   ├── wineEducation.json
│   │   ├── classicPairings.json
│   │   ├── vintages.json
│   │   ├── orderingWine.json
│   │   └── cocktails.json
│   ├── styles/
│   │   ├── main.css
│   │   ├── base/
│   │   │   ├── _variables.css
│   │   │   ├── _global.css
│   │   │   └── _typography.css
│   │   ├── components/
│   │   │   ├── _header.css
│   │   │   ├── _bottom-nav.css
│   │   │   ├── _desktopfooter.css
│   │   │   ├── _accordion.css
│   │   │   └── _buttons.css
│   │   └── pages/
│   │       ├── _homepage.css
│   │       ├── _wines-page.css
│   │       ├── _about-page.css
│   │       └── _legal-pages.css
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json
```

## Technology Stack

- **React 18** — UI framework
- **React Router v6** — Client-side routing
- **Vite** — Build tool and dev server
- **React GA4** — Google Analytics integration
- **CSS3** — Custom styling (no framework dependency)
- **Vercel** — Deployment platform

## Design System

### Colors
```css
--primary-blue: #121c2b    /* Navy - headers, footers */
--light-gray: #f5f5f5      /* Page backgrounds */
--accent-gold: #F4C542     /* CTAs, highlights */
--dark-gray: #2d2d2d       /* Hero sections */
```

### Typography
- Font Family: Inter, system fonts fallback
- Responsive sizing with rem units

### Breakpoints
- Mobile: up to 767px
- Tablet: 768px – 1199px
- Desktop: 1200px+

## Responsive Design

- **Mobile**: Bottom navigation bar, single-column layouts, touch-optimized
- **Tablet**: Single-column with wider content, no bottom nav
- **Desktop**: Sticky header with hamburger menu, two-column grids, full footer with ecosystem links

## Deployment

### Vercel (Primary)
- Auto-deploys from GitHub main branch
- Production URL: somm.tips

### Manual Deployment
```bash
npx vercel --prod
```

## Development Guidelines

### CSS
- Mobile-first media queries
- CSS variables for theming
- Component-scoped styles
- No inline styles in JSX

### Components
- Functional components with hooks
- Data-driven patterns (arrays for nav links, etc.)
- Consistent file organization

### Adding New Pages
1. Create page component in `/src/pages/`
2. Add styles to `/src/styles/pages/`
3. Import styles in `main.css`
4. Add route in `App.jsx`
5. Add navigation links to Header/Footer/BottomNav as needed

## The Ecosystem

Somm Tips is part of a larger educational network:

- **[Somm.Site](https://somm.site)** — Wine education, articles, courses
- **[Beverage.fyi](https://beverage.fyi)** — Deep dives into beverages
- **[Hospitality.fyi](https://hospitality.fyi)** — Hospitality industry insights
- **[Backbar.fyi](https://backbar.fyi)** — Bar and spirits knowledge

## License

Private project - All rights reserved

## Author

Derek Engles — [derekengles.com](https://www.derekengles.com)

---

**Last Updated:** January 2026
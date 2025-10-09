# Somm Tips - Wine Education & Recommendation App

A React-based wine education platform that helps users discover wines, learn pairings, and navigate the world of wine with confidence.

## 🍷 Features

- **Wine Recommendations** - Interactive filters for discovering wines by color, body, dryness, and origin
- **Wine Education** - Comprehensive guides on wine regions, grapes, and tasting techniques
- **Classic Pairings** - Curated wine pairings for international cuisines
- **Vintages** - Quality ratings and notes for major wine regions over the past decade
- **Ordering Guide** - Professional tips for navigating wine lists and restaurants
- **Cocktail Recipes** - Classic and modern cocktail collection

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/wine-recommendation-app
cd wine-recommendation-app

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

# Deploy to Vercel (if connected)
git push origin main

# Manual deploy to Vercel
npx vercel --prod
```

## 📁 Project Structure

```
wine-recommendation-app/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx      # Desktop/mobile header navigation
│   │   ├── BottomNav.jsx   # Mobile bottom navigation
│   │   ├── DesktopFooter.jsx # Desktop footer navigation
│   │   ├── WineAccordion.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── CustomButton.jsx
│   ├── pages/             # Route components
│   │   ├── HomePage.jsx
│   │   ├── WinesForMePage.jsx
│   │   ├── WineEducationPage.jsx
│   │   ├── ClassicPairingsPage.jsx
│   │   ├── VintagesPage.jsx
│   │   ├── OrderingWinePage.jsx
│   │   ├── CocktailsPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   └── TermsOfUsePage.jsx
│   ├── data/              # JSON data files
│   │   ├── wineRecommendations.json
│   │   ├── wineEducation.json
│   │   ├── classicPairings.json
│   │   ├── vintages.json
│   │   ├── orderingWine.json
│   │   └── cocktails.json
│   ├── styles/            # Organized CSS architecture
│   │   ├── main.css       # Main import aggregator
│   │   ├── base/          # Global styles & variables
│   │   │   ├── _variables.css
│   │   │   ├── _global.css
│   │   │   └── _typography.css
│   │   ├── components/    # Component-specific styles
│   │   │   ├── _header.css
│   │   │   ├── _bottom-nav.css
│   │   │   ├── _desktopfooter.css
│   │   │   ├── _accordion.css
│   │   │   └── _buttons.css
│   │   └── pages/         # Page-specific styles
│   │       ├── _homepage.css
│   │       ├── _wines-page.css
│   │       └── _about-page.css
│   ├── assets/           # Images and static files
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # App entry point
├── public/              # Public assets
└── package.json
```

## 🛠 Technology Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **React GA4** - Google Analytics integration
- **CSS3** - Custom styling (no framework dependency)
- **Vercel** - Deployment platform

## 🎨 Design System

### Colors
- Primary Navy: `#121c2b`
- White: `#ffffff`
- Light Gray: `#fafafa`
- Border Gray: `#cccccc`

### Typography
- Font Family: Inter, system fonts fallback
- Responsive sizing with rem units

### Breakpoints
- Mobile: < 768px (mobile-first approach)
- Desktop: ≥ 768px

## 📱 Responsive Features

- **Mobile**: Bottom navigation bar, touch-optimized buttons, single-column layouts
- **Desktop**: Header navigation, footer links, multi-column grids
- **Universal**: Accordion components, responsive typography, flexible containers

## ✅ Current Status

### Recently Completed
- ✅ Header component for all pages
- ✅ Desktop footer navigation
- ✅ Mobile bottom nav with 5 sections
- ✅ Privacy Policy and Terms pages
- ✅ CSS architecture reorganization
- ✅ Filter button styling consistency
- ✅ Responsive padding for mobile/desktop

### Active Development
- 🔨 Progressive Web App capabilities
- 🔨 Search functionality
- 🔨 User preferences system

### Known Issues
- GitHub webhook delays may affect auto-deployment (use `npx vercel --prod` as workaround)
- Some pages need header/footer integration

## 🚦 Development Guidelines

### CSS Best Practices
- Mobile-first media queries
- CSS variables for consistent theming
- Component-scoped styles
- No inline styles in JSX

### Component Standards
- Functional components with hooks
- Consistent prop naming
- Self-contained component styles
- Clear file organization

### Git Workflow
```bash
# Standard commit and deploy
git add .
git commit -m "Description of changes"
git push origin main

# Manual Vercel deploy if needed
npx vercel --prod
```

### Adding New Features
1. Create component in appropriate folder
2. Add styles to `/styles/components/` or `/styles/pages/`
3. Import styles in `main.css`
4. Update routing in `App.jsx` if needed
5. Add navigation links to Header/Footer/BottomNav

## 📦 Deployment

### Vercel (Primary)
- Auto-deploys from GitHub main branch
- Preview deployments for pull requests
- Environment: Production at somm.tips

### Manual Deployment
```bash
npx vercel login
npx vercel --prod
```

## 🔧 Maintenance

### Regular Tasks
- Update wine data seasonally
- Review and refresh vintage ratings
- Add new classic pairings based on trends
- Update cocktail collection

### Performance Monitoring
- Google Analytics 4 for user behavior
- Vercel Analytics for performance metrics
- Regular lighthouse audits

## 📄 License

Private project - All rights reserved

## 👤 Author

Derek Engles - Somm Tips

## 🤝 Contributing

This is a private project. For bug reports or feature requests, please contact through the app.

## 📞 Support

- Website: somm.tips
- App Store: [Coming Soon]
- Contact: Through app feedback system

---

**Version:** 1.0.0  
**Last Updated:** October 2025  
**Status:** Production
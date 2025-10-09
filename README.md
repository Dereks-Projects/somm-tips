# Somm Tips - Wine Recommendation App

A React-based wine recommendation engine that provides smart wine pairings, education, and discovery tools for wine lovers and curious drinkers.

## 🍷 Features

- **Wine Recommendations** - Filter wines by type (Red, White, Sparkling, etc.) and get personalized suggestions
- **Classic Pairings** - Traditional wine pairings for international cuisines
- **Wine Education** - Learn about wine regions, grapes, and tasting techniques
- **Ordering Guide** - Tips for navigating wine lists and working with sommeliers
- **Vintage Information** - Quality ratings for wines from the past 20 years
- **Cocktail Recipes** - Curated collection of classic and modern cocktails

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]
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
```

## 📁 Project Structure

```
wine-recommendation-app/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BottomNav.jsx  # Mobile navigation
│   │   ├── WineAccordion.jsx
│   │   └── CustomButton.jsx
│   ├── pages/             # Route components
│   │   ├── HomePage.jsx
│   │   ├── WinesForMePage.jsx
│   │   ├── ClassicPairingsPage.jsx
│   │   └── ...
│   ├── data/              # JSON data files
│   │   ├── wineRecommendations.json
│   │   ├── classicPairings.json
│   │   └── ...
│   ├── styles/            # Organized CSS structure
│   │   ├── main.css      # Main import file
│   │   ├── base/         # Global styles
│   │   ├── components/   # Component styles
│   │   └── pages/        # Page-specific styles
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
- **Google Analytics 4** - Usage tracking
- **CSS3** - Styling (no CSS framework)

## 🎨 Design System

### Colors
- Primary Blue: `#00004d`
- Light Gray: `#fafafa`

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 📱 Responsive Design

The app features:
- Mobile-first approach (in progress)
- Bottom navigation for mobile devices
- Responsive grid layouts for desktop
- Touch-friendly interface elements

## 🔄 Current Status

### Completed
- ✅ Core functionality and routing
- ✅ All main pages implemented
- ✅ CSS architecture reorganized
- ✅ Mobile bottom navigation
- ✅ Data structure established

### In Progress
- 🔨 Button design system modernization
- 🔨 Header component for desktop/mobile
- 🔨 True mobile-first CSS refactor

### To-Do
- ⏳ Add search functionality
- ⏳ Implement user preferences/favorites
- ⏳ Add wine detail pages
- ⏳ Integrate external wine API
- ⏳ Add PWA capabilities

## 🧹 Maintenance Notes

These have been replaced by the organized structure in `/src/styles/`.

## 🚦 Known Issues

1. Filter buttons on wine pages need visual redesign
2. Desktop view lacks header navigation
3. Some pages missing dedicated CSS files
4. CSS not truly mobile-first (currently desktop with mobile patches)

## 📝 Development Guidelines

### CSS Organization
- Global styles → `/styles/base/`
- Component styles → `/styles/components/`
- Page-specific styles → `/styles/pages/`
- All imports managed through `/styles/main.css`

### Component Guidelines
- Keep components small and focused
- Use functional components with hooks
- Place reusable components in `/components`
- Page components go in `/pages`

### Adding New Pages
1. Create component in `/pages`
2. Add route in `App.jsx`
3. Create corresponding CSS in `/styles/pages/`
4. Import CSS in `/styles/main.css`
5. Add navigation link if needed

## 📄 License

[License Type] - See LICENSE file for details

## 👤 Author

[Your Name/Organization]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email [support email] or open an issue in the repository.

---

**Note:** This is a work in progress. The app is functional but undergoing UI/UX improvements.
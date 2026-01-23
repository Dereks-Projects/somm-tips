// 📄 FILE: src/App.jsx
// 🧠 PURPOSE: Main app router, controls which page loads based on URL
// 📝 NOTE: Header is rendered here so it appears on ALL pages

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";          // ✅ Global header with hamburger menu
import BottomNav from "./components/BottomNav";    // ✅ Bottom nav bar (mobile)
import ScrollToTop from './components/ScrollToTop'; // ✅ Scroll restoration

// 📄 Pages
import HomePage from './pages/HomePage';
import WinesForMePage from './pages/WinesForMePage';
import ClassicPairingsPage from './pages/classicPairingsPage';
import WineEducationPage from './pages/WineEducationPage';
import OrderingWinePage from './pages/OrderingWinePage';
import CocktailsPage from './pages/CocktailsPage';
import VintagesPage from './pages/VintagesPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import ContentPolicyPage from './pages/ContentPolicyPage';

// ✅ Google Analytics (Basic Site Tracking)
import ReactGA from 'react-ga4';
ReactGA.initialize('G-4JT9FBG39M');
ReactGA.send({ hitType: 'pageview', page: '/' });

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* ✅ Global Header - appears on all pages */}
      <Header />

      <Routes>
        {/* 🏠 Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* 🍷 Wine Recommendations */}
        <Route path="/wines-for-me" element={<WinesForMePage />} />

        {/* 🍽️ Classic Pairings */}
        <Route path="/classic-pairings" element={<ClassicPairingsPage />} />

        {/* 🎓 Wine Education */}
        <Route path="/wine-education" element={<WineEducationPage />} />

        {/* 🧾 Ordering Wine */}
        <Route path="/ordering-wine" element={<OrderingWinePage />} />

        {/* 📅 Vintages */}
        <Route path="/vintages" element={<VintagesPage />} />

        {/* 🍸 Cocktails */}
        <Route path="/cocktails" element={<CocktailsPage />} />

        {/* 📘 About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* 🔒 Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        {/* 📄 Terms of Use */}
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />

        {/* 🍪 Cookies Policy */}
        <Route path="/cookies-policy" element={<CookiesPolicyPage />} />

        {/* 📝 Content Policy */}
        <Route path="/content-policy" element={<ContentPolicyPage />} />
      </Routes>

      {/* ✅ Bottom navigation bar (visible only on mobile) */}
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
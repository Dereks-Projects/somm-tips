// 📄 FILE: src/App.jsx
// 🧠 PURPOSE: Main app router, controls which page loads based on URL

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNav from "./components/BottomNav"; // ✅ Bottom nav bar
import ScrollToTop from './components/ScrollToTop'; // ✅ Scroll restoration

// 📄 Pages
import HomePage from './pages/HomePage';
import WinesForMePage from './pages/WinesForMePage';
import ClassicPairingsPage from './pages/classicPairingsPage';
import WineEducationPage from './pages/WineEducationPage';
import OrderingWinePage from './pages/OrderingWinePage';
import CocktailsPage from './pages/CocktailsPage';
import VintagesPage from './pages/VintagesPage';
import AboutPage from './pages/AboutPage'; // ✅ NEW
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // ✅ NEW
import TermsOfUsePage from './pages/TermsOfUsePage'; // ✅ NEW

// ✅ Google Analytics (Basic Site Tracking)
import ReactGA from 'react-ga4';
ReactGA.initialize('G-4JT9FBG39M'); // ← replace with your actual Measurement ID
ReactGA.send({ hitType: 'pageview', page: '/' });

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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
      </Routes>

      {/* ✅ Bottom navigation bar (visible only on mobile) */}
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;

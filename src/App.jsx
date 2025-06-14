// 📄 FILE: src/App.jsx
// 🧠 PURPOSE: Main app router, controls which page loads based on URL

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages (importing each page as a component)
import HomePage from './pages/HomePage';
import WinesForMePage from './pages/WinesForMePage';
import ClassicPairingsPage from './pages/classicPairingsPage';
import WineEducationPage from './pages/WineEducationPage';
import OrderingWinePage from './pages/OrderingWinePage';
import CocktailsPage from './pages/CocktailsPage'; // ✅ NEW

function App() {
  return (
    <BrowserRouter>
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

        {/* 🍸 Cocktails */}
        <Route path="/cocktails" element={<CocktailsPage />} /> {/* ✅ NEW */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

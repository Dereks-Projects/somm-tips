// 📄 FILE: src/App.jsx
// 🧠 PURPOSE: Main app router, controls which page loads based on URL

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages (importing each page as a component)
import HomePage from './pages/HomePage';
import WinesForMePage from './pages/WinesForMePage';
import WinesNearMePage from './pages/WinesNearMePage';
import ClassicPairingsPage from './pages/classicPairingsPage';
import WineEducationPage from './pages/WineEducationPage';
import OrderingWinePage from './pages/OrderingWinePage'; // ✅ NEW

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🏠 Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* 🍷 Wine Recommendations */}
        <Route path="/wines-for-me" element={<WinesForMePage />} />

        {/* 🌍 Wines Near Me */}
        <Route path="/wines-near-me" element={<WinesNearMePage />} />

        {/* 🍽️ Classic Pairings */}
        <Route path="/classic-pairings" element={<ClassicPairingsPage />} />

        {/* 🎓 Wine Education */}
        <Route path="/wine-education" element={<WineEducationPage />} />

        {/* 🧾 Ordering Wine */}
        <Route path="/ordering-wine" element={<OrderingWinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

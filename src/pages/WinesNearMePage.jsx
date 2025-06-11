// 📄 FILE: src/pages/WinesNearMePage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WinesNearMePage() {
  const navigate = useNavigate();
  const [showShops, setShowShops] = useState(false);

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        <h1 className="wines-title">Wine Shops Near Me</h1>
        <p className="wines-subtitle">Click the button below to see nearby wine shops.</p>

        {/* 📍 Toggle Button */}
        {!showShops && (
          <button className="somm-button" onClick={() => setShowShops(true)}>
            Show Wine Shops
          </button>
        )}

        {/* 🛒 Placeholder List */}
        {showShops && (
          <div className="wine-list">
            <ul>
              <li><strong>Local Wine Co.</strong> — 123 Vine St</li>
              <li><strong>Bottle Boutique</strong> — 456 Cabernet Ln</li>
              <li><strong>The Cellar</strong> — 789 Merlot Ave</li>
            </ul>
          </div>
        )}

        {/* 🔄 Reset Button */}
        {showShops && (
          <button className="reset-button" onClick={() => setShowShops(false)}>
            Reset
          </button>
        )}

        {/* 🏠 Home Button */}
        <div className="home-button-container">
          <button className="home-button inverse-home-button" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinesNearMePage;

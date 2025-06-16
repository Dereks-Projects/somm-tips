// 📄 FILE: src/pages/HomePage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-web-container">
      <h1 className="homepage-title">Somm Tips</h1>
      <p className="homepage-subtitle">Smart recommendations for<br />wine lovers and curious drinkers.</p>

      <div className="homepage-button-group">
        <button className="somm-button" onClick={() => navigate('/wines-for-me')}>
          Wine Recommendations
        </button>

        <button className="somm-button" onClick={() => navigate('/classic-pairings')}>
          Classic Pairings
        </button>

        <button className="somm-button" onClick={() => navigate('/ordering-wine')}>
          Ordering Wine
        </button>

        <button className="somm-button" onClick={() => navigate('/wine-education')}>
          Wine Education
        </button>

        <button className="somm-button" onClick={() => navigate('/cocktails')}>
          Cocktails
        </button>
      </div>
    </div>
  );
}

export default HomePage;

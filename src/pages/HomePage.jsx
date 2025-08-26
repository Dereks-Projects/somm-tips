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

      <button className="somm-button" onClick={() => navigate('/vintages')}>
          Vintages
        </button>

        <button className="somm-button" onClick={() => navigate('/cocktails')}>
          Cocktails
        </button>

        <button className="somm-button" onClick={() => navigate('/wine-education')}>
          Wine Education
        </button>


      </div>
      
      <footer style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#fafafa' }}>
        <p>Get our new book here: <a href="https://www.amazon.com/dp/B0FMQMRSXZ" style={{ color: '#fafafa', textDecoration: 'underline' }}>Amazon Kindle</a></p>
        <p>
          Presented by <a href="https://www.derekengles.com" style={{ color: '#fafafa', textDecoration: 'underline' }}>Derek Engles</a>
        </p>
        
      </footer>
      
    </div>
  );
}

export default HomePage;

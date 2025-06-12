// 📁 FILE: src/pages/WinesNearMePage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WinesNearMePage() {
  const navigate = useNavigate();
  const [fallbackLocation, setFallbackLocation] = useState('');
  const [locationError, setLocationError] = useState(false);

  const handleFindStoresNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://www.google.com/maps/search/wine+shops/@${latitude},${longitude},14z`;
          window.open(mapsUrl, '_blank');
        },
        () => setLocationError(true)
      );
    } else {
      setLocationError(true);
    }
  };

  const handleFallbackSearch = () => {
    if (!fallbackLocation.trim()) return;
    const query = encodeURIComponent(`wine shops in ${fallbackLocation}`);
    const googleUrl = `https://www.google.com/search?q=${query}`;
    window.open(googleUrl, '_blank');
  };

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        <h1 className="wines-title">Wine Shops Near Me</h1>

        <div className="location-button-container">
          <button className="somm-button" onClick={handleFindStoresNearMe}>
            Find Wine Stores Near Me
          </button>
        </div>

        {locationError && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p>We couldn’t access your location. Type your city or ZIP code below:</p>
            <input
              type="text"
              value={fallbackLocation}
              onChange={(e) => setFallbackLocation(e.target.value)}
              placeholder="Enter city or ZIP code"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                width: '80%',
                maxWidth: '400px',
                marginTop: '1rem',
              }}
            />
            <div style={{ marginTop: '1rem' }}>
              <button className="reset-button" onClick={handleFallbackSearch}>
                Search in Google
              </button>
            </div>
          </div>
        )}

        <div className="home-button-container">
          <button className="home-button" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinesNearMePage;

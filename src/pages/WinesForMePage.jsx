// 📁 FILE: src/pages/WinesForMePage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import allWines from '../data/wineRecommendations.json';
import WineAccordion from '../components/WineAccordion';

function WinesForMePage() {
  const navigate = useNavigate();

  const [color, setColor] = useState(null);
  const [body, setBody] = useState(null);
  const [dryness, setDryness] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [filteredWines, setFilteredWines] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // ✅ Track open accordion

  useEffect(() => {
    const filtered = allWines.filter((wine) => {
      return (
        (!color || wine.color === color) &&
        (!body || wine.body === body) &&
        (!dryness || wine.dryness === dryness) &&
        (!origin || wine.origin === origin)
      );
    });

    setFilteredWines(filtered);
    setFiltersActive(!!(color || body || dryness || origin));
  }, [color, body, dryness, origin]);

  const resetFilters = () => {
    setColor(null);
    setBody(null);
    setDryness(null);
    setOrigin(null);
    setFiltersActive(false);
    setOpenIndex(null); // ✅ Close all accordions
  };

  const ToggleButton = ({ label, value, selected, onClick }) => (
    <button
      className={`toggle-button ${selected ? 'active' : ''}`}
      onClick={() => onClick(selected ? null : value)}
    >
      {label}
    </button>
  );

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        <h1 className="wines-title">Wine Recommendations</h1>
        <p className="wines-subtitle" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Explore the world of wine with confidence. Use the filters below to find your next great bottle.
        </p>

        {/* 🎛️ Filters */}
        <div className="filter-grid">
          <ToggleButton label="White" value="White" selected={color === 'White'} onClick={setColor} />
          <ToggleButton label="Red" value="Red" selected={color === 'Red'} onClick={setColor} />
          <ToggleButton label="Lighter Body" value="Lighter Body" selected={body === 'Lighter Body'} onClick={setBody} />
          <ToggleButton label="Fuller Body" value="Fuller Body" selected={body === 'Fuller Body'} onClick={setBody} />
          <ToggleButton label="Less Dry" value="Less Dry" selected={dryness === 'Less Dry'} onClick={setDryness} />
          <ToggleButton label="More Dry" value="More Dry" selected={dryness === 'More Dry'} onClick={setDryness} />
          <ToggleButton label="New World" value="New World" selected={origin === 'New World'} onClick={setOrigin} />
          <ToggleButton label="Old World" value="Old World" selected={origin === 'Old World'} onClick={setOrigin} />
        </div>

        {/* 🔄 Reset */}
        <div className="reset-button-container">
          <button className="reset-button" onClick={resetFilters}>Reset</button>
        </div>

        {/* 🍷 Wine List */}
        <div className={`accordion-list ${filtersActive ? 'show' : 'hidden'}`}>
          {filtersActive &&
            filteredWines.map((wine, index) => (
              <WineAccordion
                key={index}
                title={wine.name}
                line1={wine.description}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          }
        </div>

        {/* 🏠 Home */}
        <div className="home-button-container">
          <button className="home-button inverse-home-button" onClick={() => navigate('/')}>Home</button>
        </div>
      </div>
    </div>
  );
}

export default WinesForMePage;

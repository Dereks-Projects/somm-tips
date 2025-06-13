// 📄 FILE: src/pages/CocktailsPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cocktailData from '../data/cocktails.json';
import WineAccordion from '../components/WineAccordion';

function CocktailsPage() {
  const navigate = useNavigate();
  const [selectedSpirit, setSelectedSpirit] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // ✅ Track which accordion is open

  // ✅ Filter cocktails by selected base spirit
  const filteredCocktails = selectedSpirit
    ? cocktailData.filter(
        item =>
          item.baseSpirit.toLowerCase().trim() ===
          selectedSpirit.toLowerCase().trim()
      )
    : [];

  // ✅ List of filter buttons
  const spiritOptions = ['Vodka', 'Gin', 'Rum', 'Tequila', 'Whiskey', 'More'];

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        <h1 className="wines-title">Cocktails</h1>

        <div className="filter-grid">
          {spiritOptions.map(spirit => (
            <button
              key={spirit}
              className="toggle-button"
              onClick={() => {
                setSelectedSpirit(spirit);
                setOpenIndex(null); // Reset any open accordion when switching filters
              }}
            >
              {spirit}
            </button>
          ))}
        </div>

        {selectedSpirit && (
          <div className="accordion-list">
            {filteredCocktails.map((cocktail, index) => (
              <WineAccordion
                key={index}
                title={cocktail.cocktail} // ✅ matches your JSON field
                line1={cocktail.recipe1}
                line2={cocktail.recipe2}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        )}

        <div className="home-button-container">
          <button
            className="home-button inverse-home-button"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default CocktailsPage;

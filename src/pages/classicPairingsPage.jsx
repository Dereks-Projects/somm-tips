// 📄 FILE: src/pages/ClassicPairingsPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pairings from '../data/classicPairings.json';
import WineAccordion from '../components/WineAccordion';


function ClassicPairingsPage() {
  const navigate = useNavigate();
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const filteredPairings = selectedContinent
    ? pairings.filter(item => item.continent === selectedContinent)
    : [];

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        <h1 className="wines-title">Classic Pairings</h1>
        <p className="wines-subtitle" style={{ textAlign: 'center', maxWidth: '450px', margin: '0 auto 2rem' }}>
          Here you will find some classic dishes from around the world and some great ideas for pairing them with wine.
        </p>

        {/* 🌍 Filter Buttons (2x2 Grid) */}
        <div className="filter-grid">
          {['Americas', 'Europe', 'Asia', 'Africa'].map(continent => (
            <button
              key={continent}
              className="toggle-button"
              onClick={() => setSelectedContinent(continent)}
            >
              {continent}
            </button>
          ))}
        </div>

        {/* 🍷 Accordion List */}
        {selectedContinent && (
          <div className="accordion-list">
            {filteredPairings.map((item, index) => (
            <WineAccordion
              key={index}
              title={item.food}
              line1={item.about}
              line2={item.pairing}
              line3={item.why}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}

          </div>
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

export default ClassicPairingsPage;

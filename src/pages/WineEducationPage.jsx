// 📄 FILE: src/pages/WineEducationPage.jsx
// 📘 LANGUAGE: React JSX
// 🧠 PURPOSE: Shows filtered educational content based on selected wine category

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wineEducationData from '../data/wineEducation.json'; // ✅ our new JSON file
import WineAccordion from '../components/WineAccordion'; // ✅ reused component for accordion UI

function WineEducationPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  // 🧠 Track which category is selected — only one active at a time
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 🎯 When a category is selected, filter entries by that category
  const filteredItems = wineEducationData.filter(
    (item) => item.category === selectedCategory
  );

  // 🧱 Reusable button component
  const CategoryButton = ({ label }) => (
    <button
      className={`somm-button ${selectedCategory === label ? 'active' : ''}`}
      onClick={() => setSelectedCategory(label)}
    >
      {label}
    </button>
  );

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        {/* 📍 Page Title */}
        <h1 className="wines-title">Wine Education</h1>
        <p className="wines-subtitle" style={{ textAlign: 'center', maxWidth: '450px', margin: '0 auto 2rem' }}>
          Explore our educational content on wine, from grape varieties to tasting terms. 
          </p>

        {/* 🎛️ Filter Button Grid */}
        <div className="filter-grid">
          <CategoryButton label="White Grapes" />
          <CategoryButton label="Red Grapes" />
          <CategoryButton label="Wine Regions" />
          <CategoryButton label="Tasting Terms" />
        </div>

        {/* 📋 Show accordion list only if a category is selected */}
        {selectedCategory && (
          <div className="accordion-list">
            {filteredItems.map((item, index) => (
          <WineAccordion
            key={index}
            title={item.topic}
            line1={item.info}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}

          </div>
        )}

        {/* ⬅️ Home Button (bottom of page, matches other pages) */}
        <div className="home-button-container">
          <button className="home-button inverse-home-button" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default WineEducationPage;

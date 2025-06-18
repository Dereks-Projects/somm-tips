import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wineEducationData from '../data/wineEducation.json';
import WineAccordion from '../components/WineAccordion';

function WineEducationPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredItems = wineEducationData.filter(
    (item) => item.category === selectedCategory
  );

  const CategoryButton = ({ label }) => (
    <button
      className={`toggle-button ${selectedCategory === label ? 'active' : ''}`}
      onClick={() => {
        setSelectedCategory(label);
        setOpenIndex(null); // ✅ Close accordion when filter changes
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        <h1 className="wines-title">Wine Education</h1>
        <p className="wines-subtitle" style={{ textAlign: 'center', maxWidth: '450px', margin: '0 auto 2rem' }}>
          Explore our educational content on wine, from grape varieties to tasting terms. 
        </p>

        <div className="filter-grid">
          <CategoryButton label="White Grapes" />
          <CategoryButton label="Red Grapes" />
          <CategoryButton label="Wine Regions" />
          <CategoryButton label="Tasting Terms" />
        </div>

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

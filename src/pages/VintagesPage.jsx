// 📄 FILE: src/pages/VintagesPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vintagesData from '../data/vintages.json';
import WineAccordion from '../components/WineAccordion';

function VintagesPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null); // ⬅️ Track which accordion is open

  const handleAccordionClick = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        <h1 className="wines-title">Vintages</h1>

        <p className="wines-subtitle">
          Here is a collection of some of the great wine regions from around the globe, and their best vintages over the past decade.
        </p>

        <div className="accordion-list">
          {vintagesData.map((item, index) => (
            <WineAccordion
              key={index}
              title={item.region}
              line1={item.greatVintages}
              line2={item.poorVintages}
              line3={item.notes}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>

        <div className="home-button-container">
          <button className="home-button inverse-home-button" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default VintagesPage;

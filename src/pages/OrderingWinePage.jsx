// 📄 FILE: src/pages/OrderingWinePage.jsx
// 📘 LANGUAGE: React JSX
// 🧠 PURPOSE: Helps user understand their wine "archetype" when ordering wine at restaurants or shops

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import orderingData from '../data/orderingWine.json'; // ✅ new JSON source
import WineAccordion from '../components/WineAccordion'; // ✅ reused component

function OrderingWinePage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null); // ✅ Only one accordion open at a time

  return (
    <div className="page-wrapper">
      <div className="wines-page-container">
        {/* 📍 Page Title */}
        <h1 className="wines-title">Ordering Wine</h1>

        {/* 🧾 Page Tagline */}
        <p className="wines-subtitle" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Enlisting the sommelier to guide you? Knowing your preferred wine style guides them to making a better recommendation.
        </p>

        {/* 🔽 Accordions for each wine archetype */}
        <div className="accordion-list">
          {orderingData.map((item, index) => (
            <WineAccordion
              key={index}
              title={item.category}
              line1={
                <>
                  {/* Top line: Preferred Style */}
                  <p style={{ marginBottom: '0.5rem' }}>{item.preferred}</p>

                  {/* Middle line: Archetype Traits */}
                  <p style={{ marginBottom: '0.5rem' }}>{item.traits}</p>

                  {/* Bottom: Recommendations in bold */}
                  {item.recommendations.map((rec, i) => (
                    <p key={i} style={{ fontWeight: 'bold' }}>{rec}</p>
                  ))}
                </>
              }
              isOpen={openIndex === index} // ✅ Control open/close state
              onClick={() => setOpenIndex(openIndex === index ? null : index)} // ✅ Toggle open/close
            />
          ))}
        </div>
        <br />
        <p className="section-subtitle">
          The next time you are searching for a bottle of wine, let the server, bartender or sommelier know your archetype.
        </p>

        {/* ⬅️ Home Button (same as all other sections) */}
        <div className="home-button-container">
          <button className="home-button inverse-home-button" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderingWinePage;

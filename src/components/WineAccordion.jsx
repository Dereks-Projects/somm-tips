// 📄 FILE: src/components/WineAccordion.jsx

import React from 'react';
import './WineAccordion.css';

function WineAccordion({ name, description, title, line1, line2, line3, isOpen, onClick }) {
  const heading = title || name;
  const content1 = line1 || description;
  const content2 = line2 || null;
  const content3 = line3 || null;

  return (
    <div className="wine-accordion">
      <button className="accordion-button" onClick={onClick}>
        {heading}
      </button>

      {isOpen && (
        <div className="accordion-content">
          {/* ✅ Handle both string and JSX safely */}
          {content1 && (
            typeof content1 === 'string' ? (
              <p style={{ marginBottom: content2 ? '0.5rem' : '0' }}>{content1}</p>
            ) : (
              <div style={{ marginBottom: content2 ? '0.5rem' : '0' }}>{content1}</div>
            )
          )}

          {content2 && <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{content2}</p>}
          {content3 && <p>{content3}</p>}
        </div>
      )}
    </div>
  );
}

export default WineAccordion;

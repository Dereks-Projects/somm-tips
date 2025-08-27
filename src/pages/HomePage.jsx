import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  // Button data with icons, titles, and subtitles
  const navigationButtons = [
    {
      path: '/wines-for-me',
      icon: '🍷',
      title: 'Wine Recommendations',
      subtitle: 'Wine pairing assistance.'
    },
    {
      path: '/ordering-wine',
      icon: '🍽️',
      title: 'Ordering Wine',
      subtitle: 'Enlisting the service team.'
    },
    {
      path: '/cocktails',
      icon: '🍹',
      title: 'Cocktails',
      subtitle: 'A collection of libations.'
    },
    {
      path: '/classic-pairings',
      icon: '🍖',
      title: 'Classic Pairings',
      subtitle: 'Classic international dishes.'
    },
    {
      path: '/vintages',
      icon: '📅',
      title: 'Vintages',
      subtitle: 'Over the past 20 years.'
    },
    {
      path: '/wine-education',
      icon: '💡',
      title: 'Wine Education',
      subtitle: 'Level-up your knowledge.'
    }
  ];

  return (
    <div className="homepage-web-container">
      <h1 className="homepage-title">Somm Tips</h1>
      <p className="homepage-subtitle">
        Smart recommendations for wine lovers and curious drinkers.
      </p>

      <div className="homepage-button-group desktop-grid">
        {navigationButtons.map((button, index) => (
          <button
            key={index}
            className="somm-button card-button"
            onClick={() => navigate(button.path)}
          >
            <span className="button-icon">{button.icon}</span>
            <div className="button-text">
              <span className="button-title">{button.title}</span>
              <span className="button-subtitle">{button.subtitle}</span>
            </div>
          </button>
        ))}
      </div>
      
      {/* Desktop-only footer links */}
      <footer className="footer desktop-only">
        <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>
          About this App
        </a>
        <span className="footer-divider"> | </span>
        <a href="https://www.amazon.com/dp/B0FMQMRSXZ" target="_blank" rel="noopener noreferrer">
          Get the Book
        </a>
      </footer>
    </div>
  );
}

export default HomePage;
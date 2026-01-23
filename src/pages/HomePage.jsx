// 📄 FILE: src/pages/HomePage.jsx
// 🎯 PURPOSE: Main landing page with navigation tiles
// 📍 LOCATION: This file goes in your src/pages/ folder
// 📝 NOTE: Header is now rendered globally in App.jsx, not here

import React from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopFooter from '../components/DesktopFooter';

function HomePage() {
  const navigate = useNavigate();

  // ============================================
  // NAVIGATION BUTTONS - Main app sections
  // Each button navigates to a different feature
  // ============================================
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
    },
    {
      path: '/cocktails',
      icon: '🍹',
      title: 'Cocktails',
      subtitle: 'A collection of libations.'
    },
  ];

  return (
    <div className="homepage-web-container">
      {/* Navigation Tiles */}
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

      {/* Desktop Footer - hidden on mobile, shows nav + ecosystem links */}
      <DesktopFooter />
    </div>
  );
}

export default HomePage;
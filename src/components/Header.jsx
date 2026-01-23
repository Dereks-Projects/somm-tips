// 📄 FILE: src/components/Header.jsx
// 🎯 PURPOSE: Sticky header with hamburger menu and slide-out navigation panel
// 📍 LOCATION: This file goes in your src/components/ folder

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/components/_header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // ============================================
  // STATE - Track if menu is open or closed
  // ============================================
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ============================================
  // CLOSE MENU ON ROUTE CHANGE
  // When user clicks a link, close the menu
  // ============================================
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // ============================================
  // PREVENT BODY SCROLL WHEN MENU IS OPEN
  // ============================================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // ============================================
  // NAVIGATION LINKS - Internal app pages
  // ============================================
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Recommendations', path: '/wines-for-me' },
    { label: 'Ordering', path: '/ordering-wine' },
    { label: 'Pairings', path: '/classic-pairings' },
    { label: 'Vintages', path: '/vintages' },
    { label: 'Education', path: '/wine-education' },
    { label: 'Cocktails', path: '/cocktails' },
    { label: 'About Us', path: '/about' },
  ];

  // ============================================
  // ECOSYSTEM LINKS - External portfolio sites
  // ============================================
  const ecosystemLinks = [
    { label: 'Somm.Site', url: 'https://somm.site' },
    { label: 'Beverage.fyi', url: 'https://beverage.fyi' },
    { label: 'Hospitality.fyi', url: 'https://hospitality.fyi' },
    { label: 'Backbar.fyi', url: 'https://backbar.fyi' },
  ];

  // ============================================
  // HANDLERS
  // ============================================
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleBrandClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ========== STICKY HEADER BAR ========== */}
      <header className="site-header">
        <div className="header-content">
          {/* Brand Name - Clickable to Home */}
          <button 
            className="header-brand"
            onClick={handleBrandClick}
            aria-label="Go to homepage"
          >
            Somm.Tips
          </button>

          {/* Hamburger / Close Button */}
          <button
            className="header-menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              // X icon when open
              <svg 
                className="menu-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger icon when closed
              <svg 
                className="menu-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ========== OVERLAY (behind panel, below header) ========== */}
      <div 
        className={`header-overlay ${isMenuOpen ? 'is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ========== SLIDE-OUT PANEL ========== */}
      <nav 
        className={`header-panel ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="panel-content">
          {/* Navigation Links */}
          <div className="panel-nav">
            {navLinks.map((link, index) => (
              <button
                key={index}
                className="panel-nav-link"
                onClick={() => handleNavClick(link.path)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/somm.tips/"
            target="_blank"
            rel="noopener noreferrer"
            className="panel-social-link"
            aria-label="Follow us on Instagram"
          >
            <svg 
              className="instagram-icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Divider Line */}
          <div className="panel-divider"></div>

          {/* Partner Sites Section */}
          <div className="panel-partners">
            <span className="panel-partners-label">Partner Sites</span>
            {ecosystemLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-partner-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
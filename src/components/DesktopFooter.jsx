// 📄 FILE: src/components/DesktopFooter.jsx
// 🎯 PURPOSE: Desktop-only footer with navigation, branding, legal links, and ecosystem strip
// 📍 LOCATION: This file goes in your src/components/ folder

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/_desktopfooter.css';

function DesktopFooter() {
  const navigate = useNavigate();

  // ============================================
  // NAVIGATION LINKS - Internal app pages
  // These use React Router's navigate() for SPA behavior
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
  // LEGAL LINKS - Policy pages
  // Content Policy and Cookies Policy routes to be created
  // ============================================
  const legalLinks = [
    { label: 'Content Policy', path: '/content-policy' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Use', path: '/terms-of-use' },
    { label: 'Cookies Policy', path: '/cookies-policy' },
  ];

  // ============================================
  // ECOSYSTEM LINKS - External portfolio sites
  // These open in new tabs (target="_blank")
  // ============================================
  const ecosystemLinks = [
    { label: 'Somm.Site', url: 'https://somm.site' },
    { label: 'Beverage.fyi', url: 'https://beverage.fyi' },
    { label: 'Hospitality.fyi', url: 'https://hospitality.fyi' },
    { label: 'Backbar.fyi', url: 'https://backbar.fyi' },
    { label: 'Somm.Tips', url: 'https://somm.tips' },
  ];

  // ============================================
  // SMOOTH SCROLL TO TOP
  // Called when user clicks "Back to Top"
  // ============================================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // ============================================
  // DYNAMIC COPYRIGHT YEAR
  // Automatically updates each year
  // ============================================
  const currentYear = new Date().getFullYear();

  return (
    <footer className="desktop-footer">
      {/* ========== MAIN FOOTER SECTION ========== */}
      <div className="desktop-footer-main">
        <div className="desktop-footer-content">
          
          {/* Navigation Links - Vertical Stack */}
          <nav className="desktop-footer-nav">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => navigate(link.path)}
                className="desktop-footer-nav-link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Brand Name - Clickable to Home */}
          <button 
            className="desktop-footer-brand"
            onClick={() => navigate('/')}
          >
            Somm.Tips
          </button>

          {/* Legal Links - Horizontal Row */}
          <div className="desktop-footer-legal">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => navigate(link.path)}
                  className="desktop-footer-legal-link"
                >
                  {link.label}
                </button>
                {/* Add separator between links, but not after the last one */}
                {index < legalLinks.length - 1 && (
                  <span className="legal-separator"> </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Copyright */}
          <p className="desktop-footer-copyright">
            Copyright {currentYear} - All Rights Reserved
          </p>

          {/* Back to Top */}
          <button 
            className="desktop-footer-back-to-top"
            onClick={scrollToTop}
          >
            Back to Top
          </button>

        </div>
      </div>

      {/* ========== ECOSYSTEM STRIP ========== */}
      <div className="desktop-footer-ecosystem">
        <div className="desktop-footer-ecosystem-content">
          {ecosystemLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="desktop-footer-ecosystem-link"
              >
                {link.label}
              </a>
              {/* Add bullet separator between links, but not after the last one */}
              {index < ecosystemLinks.length - 1 && (
                <span className="ecosystem-separator">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default DesktopFooter;
// 📄 FILE: src/components/DesktopFooter.jsx
// 🎯 PURPOSE: Desktop-only footer with navigation links and copyright

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/_desktopfooter.css';

function DesktopFooter() {
  const navigate = useNavigate();

  return (
    <footer className="desktop-footer">
      <div className="desktop-footer-content">
        <nav className="desktop-footer-links">
          <button onClick={() => navigate('/')} className="desktop-footer-link">
            Home
          </button>
          <span className="footer-separator">•</span>
          <button onClick={() => navigate('/wines-for-me')} className="desktop-footer-link">
            Wine Recommendations
          </button>
          <span className="footer-separator">•</span>
          <button onClick={() => navigate('/wine-education')} className="desktop-footer-link">
            Wine Education
          </button>
          <span className="footer-separator">•</span>
          <button onClick={() => navigate('/classic-pairings')} className="desktop-footer-link">
            Classic Pairings
          </button>
          <span className="footer-separator">•</span>
          <button onClick={() => navigate('/vintages')} className="desktop-footer-link">
            Vintages
          </button>
          <span className="footer-separator">•</span>
          <button onClick={() => navigate('/ordering-wine')} className="desktop-footer-link">
            Ordering Wine
          </button>
          <span className="footer-separator">•</span>
          <button onClick={() => navigate('/cocktails')} className="desktop-footer-link">
            Cocktails
          </button>
          <span className="footer-separator">•</span>
          <button onClick={() => navigate('/about')} className="desktop-footer-link">
            About
          </button>
        </nav>
        <div className="desktop-footer-copyright">
          © 2025 Somm Tips. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default DesktopFooter;
// 📄 FILE: src/pages/AboutPage.jsx
// 🎯 PURPOSE: About page with app info, ecosystem links, and creator details
// 📍 LOCATION: src/pages/

import React from "react";
import { useNavigate } from "react-router-dom";
import DesktopFooter from "../components/DesktopFooter";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="about-page-wrapper">
        
        <div className="about-page-container">
          {/* Hero Section */}
          <div className="about-hero">
            <div className="about-hero-title">Somm Tips</div>
            <p className="tagline">Demystifying wine, one recommendation at a time.</p>
          </div>

          {/* Main Content */}
          <div className="about-content">
            <section className="about-section">
              <h2>About the App</h2>
              <p>
                Somm Tips transforms the often intimidating world of wine into an accessible, 
                enjoyable experience. Whether you're ordering at a restaurant, shopping for 
                a dinner party, or simply curious about wine, our app provides clear, 
                practical guidance without the pretension.
              </p>
              <p>
                Using simple filters and straightforward language, we help you discover wines 
                that match your taste preferences, learn classic food pairings, and understand 
                what makes certain vintages special—all in the palm of your hand.
              </p>
            </section>

            <section className="about-section">
              <h2>The Ecosystem</h2>
              <div className="ecosystem-content">
                <p>
                  Somm Tips is part of a larger learning ecosystem dedicated to beverage and 
                  hospitality education. Whether you're just getting started or looking to 
                  deepen your expertise, our partner sites offer comprehensive resources to 
                  continue your journey.
                </p>
                <div className="ecosystem-links">
                  <a 
                    href="https://somm.site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ecosystem-link"
                  >
                    Somm.Site — Wine education, articles, and courses →
                  </a>
                  <a 
                    href="https://beverage.fyi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ecosystem-link"
                  >
                    Beverage.fyi — Deep dives into the world of drinks →
                  </a>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2>Our Philosophy</h2>
              <p>
                Wine should be a pleasure, not a puzzle. We believe everyone deserves to feel 
                confident when choosing wine, whether you're a complete beginner or an enthusiastic 
                amateur. Our approach strips away unnecessary jargon while preserving the knowledge 
                that actually matters for your enjoyment.
              </p>
            </section>

            <section className="about-section">
              <h2>Created By</h2>
              <p>
                Derek Engles brings years of wine expertise and a passion for making wine 
                approachable to everyone. His experience spans from restaurant service to 
                wine education, always with a focus on practical, real-world application.
              </p>
              <a 
                href="https://www.derekengles.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="creator-link"
              >
                Learn more at derekengles.com
              </a>
            </section>
          </div>

          {/* Footer Info */}
          <div className="about-footer">
            <div className="footer-links">
              <button onClick={() => navigate("/privacy-policy")} className="footer-link">
                Privacy Policy
              </button>
              <span className="divider">•</span>
              <button onClick={() => navigate("/terms-of-use")} className="footer-link">
                Terms of Use
              </button>
              <span className="divider">•</span>
              <button onClick={() => navigate("/cookies-policy")} className="footer-link">
                Cookies Policy
              </button>
              <span className="divider">•</span>
              <button onClick={() => navigate("/content-policy")} className="footer-link">
                Content Policy
              </button>
            </div>
          </div>

          {/* Desktop Home Button */}
          <div className="desktop-home-button">
            <button onClick={() => navigate("/")} className="home-btn">
              Back to Home
            </button>
          </div>
        </div>

      </div>

      {/* Desktop Footer - Outside wrapper so it spans full width */}
      <DesktopFooter />
    </>
  );
}

export default AboutPage;
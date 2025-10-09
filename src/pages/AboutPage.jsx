import React from "react";
import { useNavigate } from "react-router-dom";


function AboutPage() {
  const navigate = useNavigate();

  return (
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
            <h2>The Book</h2>
            <div className="book-content">
              <p>
                Take your wine knowledge further with our comprehensive guide, now available 
                on Amazon Kindle. The book expands on the app's foundation with detailed 
                tasting notes, regional guides, and insider tips from years of sommelier experience.
              </p>
              <a 
                href="https://www.amazon.com/dp/B0FMQMRSXZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="book-link"
              >
                Get the Book on Amazon →
              </a>
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
            
         
          </div>
          <p className="version">Version 1.0</p>
        </div>

        {/* Desktop Home Button */}
        <div className="desktop-home-button">
          <button onClick={() => navigate("/")} className="home-btn">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
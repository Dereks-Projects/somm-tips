// 📄 FILE: src/pages/AboutPage.jsx
// 🧠 PURPOSE: App info and legal links for store compliance

import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/AboutPage.css"; // ✅ Updated path for correct CSS location

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page-container">
      <h1>Somm Tips</h1>
      <h2>About</h2>

      <section>
        <h3>About the App</h3>
        <p>Somm Tips offers users the ability to select wines that align with their tastes with ease.</p>
      </section>

      <section>
        <h3>Website</h3>
        <p>
          <a
            href="https://www.somm.tips"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.somm.tips
          </a>
        </p>
      </section>

      <section>
        <h3>Privacy & Terms</h3>
        <p className="legal-links">
          <button onClick={() => navigate("/privacy-policy")}>Privacy Policy</button>
          <br />
          <button onClick={() => navigate("/terms-of-use")}>Terms of Use</button>
        </p>
      </section>

      <section>
        <h3>App Version</h3>
        <p>1.0</p>
      </section>

      <section>
        <h3>Developer</h3>
        <p>
          <a
            href="https://www.derekengles.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.derekengles.com
          </a>
        </p>
      </section>

      {/* ✅ Desktop-only Home button (not visible on mobile due to media query) */}
      <div className="desktop-home-button">
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
}

export default AboutPage;

// 📄 FILE: src/pages/CookiesPolicyPage.jsx
// 🎯 PURPOSE: Cookies Policy legal page
// 📍 LOCATION: src/pages/

import React from "react";
import { useNavigate } from "react-router-dom";
import DesktopFooter from "../components/DesktopFooter";

function CookiesPolicyPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="legal-page-wrapper">
        <div className="legal-page-container">
          
          {/* Hero Section */}
          <div className="legal-hero">
            <h1 className="legal-hero-title">Cookies Policy</h1>
            <p className="legal-updated">Last Updated: January 2026</p>
          </div>

          {/* Main Content */}
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile 
                device when you visit a website or use an application. They are widely 
                used to make websites and applications work more efficiently and to 
                provide information to the owners of the site or app.
              </p>
              <p>
                Somm Tips uses cookies and similar tracking technologies to enhance your 
                experience, analyze usage patterns, and improve our services.
              </p>
            </section>

            <section className="legal-section">
              <h2>How We Use Cookies</h2>
              <p>
                We use cookies for several purposes, including remembering your preferences 
                and settings, understanding how you use our Application, improving our 
                services based on usage patterns, and providing analytics to help us 
                understand our audience.
              </p>
            </section>

            <section className="legal-section">
              <h2>Types of Cookies We Use</h2>
              <p>
                <strong>Essential Cookies:</strong> These cookies are necessary for the 
                Application to function properly. They enable basic features and cannot 
                be disabled.
              </p>
              <p>
                <strong>Analytics Cookies:</strong> These cookies help us understand how 
                visitors interact with our Application by collecting and reporting 
                information anonymously. This helps us improve our content and user experience.
              </p>
              <p>
                <strong>Functional Cookies:</strong> These cookies enable enhanced 
                functionality and personalization, such as remembering your preferences 
                and choices within the Application.
              </p>
            </section>

            <section className="legal-section">
              <h2>Third-Party Cookies</h2>
              <p>
                We may use third-party services, such as Google Analytics, that place 
                cookies on your device to help us analyze how users interact with our 
                Application. These third parties may have their own privacy policies 
                governing how they use this information.
              </p>
            </section>

            <section className="legal-section">
              <h2>Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. 
                You can typically set your browser to refuse cookies or to alert you 
                when cookies are being sent. Please note that disabling cookies may 
                affect the functionality of our Application and your user experience.
              </p>
              <p>
                To learn more about cookies and how to manage them, visit your browser's 
                help documentation or websites such as www.allaboutcookies.org.
              </p>
            </section>

            <section className="legal-section">
              <h2>Local Storage</h2>
              <p>
                In addition to cookies, we may use local storage technologies to store 
                preferences and improve performance. Local storage functions similarly 
                to cookies but can store larger amounts of data. You can clear local 
                storage through your browser settings.
              </p>
            </section>

            <section className="legal-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Cookies Policy from time to time to reflect changes 
                in our practices or for operational, legal, or regulatory reasons. We 
                encourage you to review this policy periodically for any updates.
              </p>
            </section>

            <section className="legal-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions about our use of cookies or this policy, please 
                contact us through the information provided on our website.
              </p>
            </section>

          </div>

          {/* Back Button */}
          <div className="legal-back-button">
            <button onClick={() => navigate(-1)} className="back-btn">
              ← Back
            </button>
          </div>

        </div>
      </div>

      <DesktopFooter />
    </>
  );
}

export default CookiesPolicyPage;
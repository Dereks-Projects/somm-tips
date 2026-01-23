// 📄 FILE: src/pages/ContentPolicyPage.jsx
// 🎯 PURPOSE: Content Policy legal page
// 📍 LOCATION: src/pages/

import React from "react";
import { useNavigate } from "react-router-dom";
import DesktopFooter from "../components/DesktopFooter";

function ContentPolicyPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="legal-page-wrapper">
        <div className="legal-page-container">
          
          {/* Hero Section */}
          <div className="legal-hero">
            <h1 className="legal-hero-title">Content Policy</h1>
            <p className="legal-updated">Last Updated: January 2026</p>
          </div>

          {/* Main Content */}
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>Content Overview</h2>
              <p>
                Somm Tips provides educational content related to wine, beverages, and 
                hospitality. All content is created for informational and educational 
                purposes and represents the views and expertise of our content creators.
              </p>
              <p>
                This Content Policy outlines how our content is created, sourced, and 
                presented, as well as our standards and practices.
              </p>
            </section>

            <section className="legal-section">
              <h2>Educational Purpose</h2>
              <p>
                The content provided through Somm Tips is intended to educate and inform 
                users about wine and beverage topics. Our recommendations, descriptions, 
                and educational materials are based on industry knowledge, professional 
                experience, and generally accepted practices within the wine and 
                hospitality industry.
              </p>
              <p>
                Content is not intended as professional advice and should not be relied 
                upon as the sole basis for making decisions.
              </p>
            </section>

            <section className="legal-section">
              <h2>Content Accuracy</h2>
              <p>
                We strive to provide accurate and up-to-date information. However, the 
                wine industry is constantly evolving, and information about wines, regions, 
                vintages, and recommendations may change over time. We make reasonable 
                efforts to keep our content current but cannot guarantee that all 
                information is accurate at all times.
              </p>
              <p>
                Users are encouraged to verify important information through additional 
                sources when making purchasing decisions.
              </p>
            </section>

            <section className="legal-section">
              <h2>Subjective Recommendations</h2>
              <p>
                Wine appreciation is inherently subjective. Our recommendations are based 
                on general taste profiles and widely accepted characteristics, but 
                individual preferences vary significantly. What we recommend as suitable 
                for a particular occasion or taste preference may not align with every 
                user's personal experience.
              </p>
              <p>
                We encourage users to explore and develop their own preferences using 
                our content as a starting point.
              </p>
            </section>

            <section className="legal-section">
              <h2>Intellectual Property</h2>
              <p>
                All content within Somm Tips, including text, graphics, logos, images, 
                and software, is the property of Somm Tips or its content suppliers and 
                is protected by intellectual property laws. You may not reproduce, 
                distribute, modify, or create derivative works from our content without 
                explicit written permission.
              </p>
            </section>

            <section className="legal-section">
              <h2>Third-Party Content</h2>
              <p>
                Our Application may reference third-party products, brands, or services. 
                Any mention of third-party products is for informational purposes only 
                and does not constitute an endorsement or affiliation unless explicitly 
                stated. Trademarks and brand names belong to their respective owners.
              </p>
            </section>

            <section className="legal-section">
              <h2>Responsible Consumption</h2>
              <p>
                Somm Tips promotes responsible alcohol consumption. Our content is intended 
                for adults of legal drinking age. We do not encourage excessive consumption, 
                underage drinking, or any illegal activity. Please enjoy alcohol responsibly 
                and be aware of the laws in your jurisdiction.
              </p>
            </section>

            <section className="legal-section">
              <h2>Content Updates</h2>
              <p>
                We may update, modify, or remove content at any time without prior notice. 
                This includes adding new features, changing recommendations, or revising 
                educational materials to reflect current knowledge and best practices.
              </p>
            </section>

            <section className="legal-section">
              <h2>Feedback</h2>
              <p>
                We welcome feedback about our content. If you believe any content is 
                inaccurate, misleading, or inappropriate, please contact us through the 
                information provided on our website.
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

export default ContentPolicyPage;
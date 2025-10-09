// 📄 FILE: src/pages/PrivacyPolicyPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';


function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      
      <div className="about-page-wrapper">
        <div className="about-page-container">
          <div className="about-hero">
            <h1 className="about-hero-title">Privacy Policy</h1>
            <p className="tagline">Your privacy matters to us</p>
          </div>

          <div className="about-content">
            <div className="about-section">
              <h2>Information We Collect</h2>
              <p>
                Somm Tips is designed with your privacy in mind. We collect minimal information to provide 
                you with the best wine education experience possible. We do not collect, store, or share 
                any personal identifying information.
              </p>
              <p>
                We may collect anonymous usage analytics to understand how the app is used and to improve 
                features. This data includes general information such as app opens, feature usage patterns, 
                and device type, but never includes names, emails, or other personal identifiers.
              </p>
            </div>

            <div className="about-section">
              <h2>How We Use Information</h2>
              <p>
                Any anonymous data collected is used solely to:
              </p>
              <ul style={{ marginLeft: '1.5rem', color: '#333', lineHeight: '1.7' }}>
                <li>Improve app functionality and user experience</li>
                <li>Identify and fix technical issues</li>
                <li>Understand which features are most valuable to users</li>
                <li>Guide future development priorities</li>
              </ul>
            </div>

            <div className="about-section">
              <h2>Data Security</h2>
              <p>
                Since we don't collect personal data, there's no personal information to secure. 
                The app operates entirely on your device without transmitting personal information 
                to external servers. Your wine preferences and browsing within the app remain 
                completely private to you.
              </p>
            </div>

            <div className="about-section">
              <h2>Third-Party Services</h2>
              <p>
                We may use third-party analytics services that comply with privacy regulations. 
                These services help us understand app usage patterns without identifying individual users. 
                We do not sell, trade, or transfer any information to third parties.
              </p>
            </div>

            <div className="about-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be reflected 
                in the app with an updated revision date. Continued use of Somm Tips after any 
                modifications indicates acceptance of the updated policy.
              </p>
            </div>

            <div className="about-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how Somm Tips handles information, 
                please contact us through the App Store or visit our website at somm.tips.
              </p>
            </div>
          </div>

          <div className="about-footer">
            <p className="version">Last Updated: January 2025</p>
            <p className="version">Effective Date: January 2025</p>
          </div>

          <div className="desktop-home-button">
            <button className="home-btn" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
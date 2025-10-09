// 📄 FILE: src/pages/TermsOfUsePage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

function TermsOfUsePage() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="about-page-wrapper">
        <div className="about-page-container">
          <div className="about-hero">
            <h1 className="about-hero-title">Terms of Use</h1>
            <p className="tagline">Please read these terms carefully</p>
          </div>

          <div className="about-content">
            <div className="about-section">
              <h2>Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using Somm Tips ("the App"), you agree to be bound by 
                these Terms of Use. If you do not agree to these terms, please do not use the App.
              </p>
              <p>
                Somm Tips is provided for personal, educational, and non-commercial use only. 
                The App is designed to enhance your wine knowledge and appreciation through 
                curated educational content.
              </p>
            </div>

            <div className="about-section">
              <h2>Use License</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to use 
                Somm Tips on your personal devices for your personal, non-commercial use. This license 
                does not include the right to:
              </p>
              <ul style={{ marginLeft: '1.5rem', color: '#333', lineHeight: '1.7' }}>
                <li>Modify, copy, or create derivative works from the App</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Sell, rent, lease, or sublicense the App</li>
                <li>Use the App for commercial purposes</li>
                <li>Remove or alter any proprietary notices or labels</li>
              </ul>
            </div>

            <div className="about-section">
              <h2>Intellectual Property</h2>
              <p>
                All content within Somm Tips, including but not limited to text, graphics, logos, 
                images, and software, is the property of Somm Tips or its content suppliers and is 
                protected by intellectual property laws. The compilation of all content in this App 
                is the exclusive property of Somm Tips.
              </p>
              <p>
                Wine recommendations, educational content, and pairing suggestions are provided for 
                informational purposes and represent curated knowledge from various sources in the 
                wine industry.
              </p>
            </div>

            <div className="about-section">
              <h2>User Conduct</h2>
              <p>
                You agree to use Somm Tips responsibly and in compliance with all applicable laws. 
                You must be of legal drinking age in your jurisdiction to use this App. The App is 
                for educational purposes only and does not promote excessive alcohol consumption.
              </p>
              <p>
                You agree not to:
              </p>
              <ul style={{ marginLeft: '1.5rem', color: '#333', lineHeight: '1.7' }}>
                <li>Use the App in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with the proper functioning of the App</li>
                <li>Use the App to infringe upon the rights of others</li>
                <li>Redistribute content from the App without permission</li>
              </ul>
            </div>

            <div className="about-section">
              <h2>Disclaimer of Warranties</h2>
              <p>
                Somm Tips is provided "as is" and "as available" without warranties of any kind, 
                either express or implied. We do not warrant that the App will be uninterrupted, 
                error-free, or free from viruses or other harmful components.
              </p>
              <p>
                Wine information and recommendations are educational in nature and should not replace 
                professional sommelier advice for specific occasions or health considerations. Always 
                drink responsibly and in accordance with local laws.
              </p>
            </div>

            <div className="about-section">
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Somm Tips and its creators shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages resulting from 
                your use or inability to use the App.
              </p>
            </div>

            <div className="about-section">
              <h2>Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective 
                immediately upon posting. Your continued use of the App following any changes constitutes 
                acceptance of the new terms.
              </p>
            </div>

            <div className="about-section">
              <h2>Governing Law</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of 
                the United States, without regard to conflict of law principles. Any disputes arising 
                from these terms shall be resolved through binding arbitration.
              </p>
            </div>

            <div className="about-section">
              <h2>Contact Information</h2>
              <p>
                For questions about these Terms of Use, please contact us through the App Store 
                or visit our website at somm.tips.
              </p>
            </div>
          </div>

          <div className="about-footer">
            <p className="version">Last Updated: January 2025</p>
            <p className="version">Version 1.0</p>
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

export default TermsOfUsePage;
// 📄 FILE: src/pages/PrivacyPolicyPage.jsx
// 🎯 PURPOSE: Privacy Policy legal page
// 📍 LOCATION: src/pages/

import React from "react";
import { useNavigate } from "react-router-dom";
import DesktopFooter from "../components/DesktopFooter";

function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="legal-page-wrapper">
        <div className="legal-page-container">
          
          {/* Hero Section */}
          <div className="legal-hero">
            <h1 className="legal-hero-title">Privacy Policy</h1>
            <p className="legal-updated">Last Updated: January 2026</p>
          </div>

          {/* Main Content */}
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>Introduction</h2>
              <p>
                Somm Tips ("we," "our," or "us") respects your privacy and is committed to 
                protecting your personal information. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you use our 
                application and related services.
              </p>
              <p>
                By accessing or using Somm Tips, you agree to the terms of this Privacy Policy. 
                If you do not agree with the practices described herein, please do not use our services.
              </p>
            </section>

            <section className="legal-section">
              <h2>Information We Collect</h2>
              <p>
                We may collect information that you voluntarily provide when using our application, 
                including but not limited to preferences, selections, and interactions with our 
                recommendation features. We may also automatically collect certain technical 
                information such as device type, browser type, operating system, and general 
                usage patterns to improve our services.
              </p>
              <p>
                We use common tracking technologies such as cookies and analytics tools to 
                understand how users interact with our application. This helps us enhance 
                user experience and improve our content and features.
              </p>
            </section>

            <section className="legal-section">
              <h2>How We Use Your Information</h2>
              <p>
                We may use the information we collect to operate and maintain our application, 
                improve and personalize your experience, understand and analyze usage trends, 
                develop new features and functionality, and communicate with you about updates 
                or changes to our services.
              </p>
              <p>
                We do not sell your personal information to third parties. We may share 
                aggregated, non-identifiable information for analytical purposes.
              </p>
            </section>

            <section className="legal-section">
              <h2>Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information from 
                unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the internet or electronic storage is completely 
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="legal-section">
              <h2>Third-Party Services</h2>
              <p>
                Our application may contain links to third-party websites or services that 
                are not operated by us. We have no control over and assume no responsibility 
                for the content, privacy policies, or practices of any third-party sites or 
                services. We encourage you to review the privacy policies of any third-party 
                sites you visit.
              </p>
            </section>

            <section className="legal-section">
              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 21. We do not 
                knowingly collect personal information from anyone under 21 years of age. If 
                you are a parent or guardian and believe your child has provided us with 
                personal information, please contact us.
              </p>
            </section>

            <section className="legal-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be 
                posted on this page with an updated revision date. Your continued use of 
                our services after any modifications indicates your acceptance of the 
                updated Privacy Policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data 
                practices, please contact us through the information provided on our website.
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

export default PrivacyPolicyPage;
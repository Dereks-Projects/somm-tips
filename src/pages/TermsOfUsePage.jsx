// 📄 FILE: src/pages/TermsOfUsePage.jsx
// 🎯 PURPOSE: Terms of Use legal page
// 📍 LOCATION: src/pages/

import React from "react";
import { useNavigate } from "react-router-dom";
import DesktopFooter from "../components/DesktopFooter";

function TermsOfUsePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="legal-page-wrapper">
        <div className="legal-page-container">
          
          {/* Hero Section */}
          <div className="legal-hero">
            <h1 className="legal-hero-title">Terms of Use</h1>
            <p className="legal-updated">Last Updated: January 2026</p>
          </div>

          {/* Main Content */}
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using Somm Tips ("the Application"), you accept and agree 
                to be bound by these Terms of Use and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using 
                or accessing this Application.
              </p>
            </section>

            <section className="legal-section">
              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily access and use the Application for 
                personal, non-commercial purposes only. This is the grant of a license, 
                not a transfer of title, and under this license you may not modify or copy 
                the materials, use the materials for any commercial purpose, attempt to 
                reverse engineer any software contained in the Application, remove any 
                copyright or proprietary notations, or transfer the materials to another 
                person or "mirror" the materials on any other server.
              </p>
              <p>
                This license shall automatically terminate if you violate any of these 
                restrictions and may be terminated by Somm Tips at any time.
              </p>
            </section>

            <section className="legal-section">
              <h2>Disclaimer</h2>
              <p>
                The information and recommendations provided through Somm Tips are for 
                general educational and entertainment purposes only. The materials are 
                provided on an "as is" basis. Somm Tips makes no warranties, expressed 
                or implied, and hereby disclaims and negates all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
              <p>
                Wine and beverage recommendations are subjective and based on general 
                characteristics. Individual tastes and preferences vary, and we cannot 
                guarantee that any recommendation will suit your specific preferences.
              </p>
            </section>

            <section className="legal-section">
              <h2>Alcohol-Related Content</h2>
              <p>
                The Application provides information about alcoholic beverages. By using 
                this Application, you confirm that you are of legal drinking age in your 
                jurisdiction. We encourage responsible consumption of alcohol. The information 
                provided is not intended to encourage excessive or underage drinking.
              </p>
            </section>

            <section className="legal-section">
              <h2>Limitations</h2>
              <p>
                In no event shall Somm Tips or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or 
                due to business interruption) arising out of the use or inability to use 
                the Application, even if Somm Tips has been notified of the possibility 
                of such damage.
              </p>
            </section>

            <section className="legal-section">
              <h2>Accuracy of Materials</h2>
              <p>
                The materials appearing in the Application may include technical, 
                typographical, or photographic errors. Somm Tips does not warrant that 
                any of the materials are accurate, complete, or current. We may make 
                changes to the materials at any time without notice.
              </p>
            </section>

            <section className="legal-section">
              <h2>Links</h2>
              <p>
                Somm Tips has not reviewed all sites linked to its Application and is 
                not responsible for the contents of any such linked site. The inclusion 
                of any link does not imply endorsement by Somm Tips. Use of any linked 
                website is at the user's own risk.
              </p>
            </section>

            <section className="legal-section">
              <h2>Modifications</h2>
              <p>
                Somm Tips may revise these Terms of Use at any time without notice. By 
                using this Application, you agree to be bound by the current version of 
                these Terms of Use.
              </p>
            </section>

            <section className="legal-section">
              <h2>Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance 
                with applicable laws, and you irrevocably submit to the exclusive 
                jurisdiction of the courts in that location.
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

export default TermsOfUsePage;
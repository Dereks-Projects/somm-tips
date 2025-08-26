// 📄 FILE: src/components/BottomNav.jsx
// 🧠 PURPOSE: A mobile-only persistent bottom navigation bar
// 💡 App Store compliant: allows persistent access to key sections of the app

import React from "react";
import { useNavigate } from "react-router-dom";
import "./BottomNav.css"; // CSS will be created in the next step

function BottomNav() {
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      <button className="nav-button" onClick={() => navigate("/")}>
        🏠<span>Home</span>
      </button>
      <button className="nav-button" onClick={() => navigate("/wines-for-me")}>
        ✅<span>Recommendations</span>
      </button>
      <button className="nav-button" onClick={() => navigate("/wine-education")}>
        📚<span>Education</span>
      </button>
      <button className="nav-button" onClick={() => navigate("/about")}>
        ℹ️<span>About</span>
      </button>
    </nav>
  );
}

export default BottomNav;

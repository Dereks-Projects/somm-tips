// 📄 FILE: src/components/CustomButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomButton.css';

// ✅ Universal button for all app buttons (navigating and non-navigating)
function CustomButton({ text, path, onClick, isActive = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`somm-button ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;

// src/main.jsx
import React from 'react'; // React core library
import ReactDOM from 'react-dom/client'; // DOM manipulation for React
import App from './App'; // Main App component
import './styles/main.css';

/**
 * This is the main entry point for your React app.
 * It grabs the root element in index.html and injects your entire app into it.
 * React 18 uses createRoot (instead of ReactDOM.render) for improved performance.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

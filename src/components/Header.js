"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ecosystemRef = useRef(null);
  const menuRef = useRef(null);

  /* Close dropdowns when clicking outside */
  useEffect(() => {
    function handleClickOutside(e) {
      if (ecosystemRef.current && !ecosystemRef.current.contains(e.target)) {
        setEcosystemOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close one dropdown when the other opens */
  function toggleEcosystem() {
    setEcosystemOpen((prev) => !prev);
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
    setEcosystemOpen(false);
  }

  return (
    <header className={styles.header}>
      {/* Left — Ecosystem dropdown */}
      <div className={styles.dropdownWrapper} ref={ecosystemRef}>
        <button
          className={styles.iconButton}
          onClick={toggleEcosystem}
          aria-label="Explore ecosystem"
          aria-expanded={ecosystemOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 8 10 12 14 8" />
          </svg>
        </button>

        {ecosystemOpen && (
          <div className={styles.dropdown}>
            <span className={styles.dropdownLabel}>Explore</span>
            <a
              href="https://somm.site"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dropdownLink}
            >
              <span className={styles.linkTitle}>Somm.Site</span>
              <span className={styles.linkDesc}>Wine education & courses</span>
            </a>
            <a
              href="https://beverage.fyi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dropdownLink}
            >
              <span className={styles.linkTitle}>Beverage.fyi</span>
              <span className={styles.linkDesc}>
                Encyclopedic reference
              </span>
            </a>
            <a
              href="https://backbar.fyi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dropdownLink}
            >
              <span className={styles.linkTitle}>Backbar.fyi</span>
              <span className={styles.linkDesc}>Spirits & cocktails</span>
            </a>
            <div className={styles.dropdownDivider}></div>
            <a
              href="https://informativemedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dropdownLinkSmall}
            >
              Informative Media
            </a>
          </div>
        )}
      </div>

      {/* Center — Site title */}
      <Link href="/" className={styles.title}>
        Somm.Tips
      </Link>

      {/* Right — Hamburger menu */}
      <div className={styles.dropdownWrapper} ref={menuRef}>
        <button
          className={styles.iconButton}
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <line x1="3" y1="5" x2="17" y2="5" />
            <line x1="3" y1="10" x2="17" y2="10" />
            <line x1="3" y1="15" x2="17" y2="15" />
          </svg>
        </button>

        {menuOpen && (
          <div className={`${styles.dropdown} ${styles.dropdownRight}`}>
            <Link
              href="/"
              className={styles.dropdownLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.linkTitle}>Home</span>
            </Link>
            <Link
              href="/about"
              className={styles.dropdownLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.linkTitle}>About</span>
            </Link>
            <Link
              href="/content-policy"
              className={styles.dropdownLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.linkTitle}>Content Policy</span>
            </Link>
            <Link
              href="/privacy"
              className={styles.dropdownLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.linkTitle}>Privacy</span>
            </Link>
            <Link
              href="/terms"
              className={styles.dropdownLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.linkTitle}>Terms</span>
            </Link>
            <Link
              href="/cookies"
              className={styles.dropdownLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.linkTitle}>Cookies</span>
            </Link>
            <div className={styles.dropdownDivider}></div>
            <a
              href="mailto:derekengles@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dropdownLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.linkTitle}>Contact</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
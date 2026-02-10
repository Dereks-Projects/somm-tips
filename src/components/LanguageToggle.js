"use client";

import { useLanguage } from "./LanguageContext";
import styles from "./LanguageToggle.module.css";

/*
  LanguageToggle — the guest-facing language switch.

  How it works:
  - Displays the CURRENT language as a compact pill button (EN / ES).
  - Clicking it toggles to the other language instantly.
  - Placed in the Header, near the left side (ecosystem chevron area).

  Why show the current language instead of the target?
  - It mirrors how most international sites work (e.g. airline sites).
  - The guest sees what they're currently viewing, and tapping switches.
*/

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className={styles.toggle}
      onClick={toggleLanguage}
      aria-label={
        language === "en" ? "Cambiar a español" : "Switch to English"
      }
      title={language === "en" ? "Cambiar a español" : "Switch to English"}
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
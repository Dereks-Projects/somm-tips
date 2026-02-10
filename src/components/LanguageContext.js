"use client";

import { createContext, useContext, useState, useCallback } from "react";

/*
  LanguageContext — the single source of truth for the active language.

  How it works (restaurant analogy):
  - Think of this as the host stand deciding whether to hand guests
    an English or Spanish menu.
  - The LanguageProvider wraps the entire app in layout.js.
  - Any component can call useLanguage() to read the current language
    or toggle it.
  - State lives in React only (session-based) — refreshing the page
    resets to English. No localStorage, no cookies.

  Usage in any component:
    import { useLanguage } from "@/components/LanguageContext";
    const { language, toggleLanguage } = useLanguage();
*/

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
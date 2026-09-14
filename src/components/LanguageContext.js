/* src/components/LanguageContext.js */

"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

/*
  LanguageContext — the single source of truth for the active language.

  - The LanguageProvider wraps the entire app in layout.js.
  - Any component can call useLanguage() to read the current language
    or toggle it.
  - State lives in React only (session-based). Refreshing the page
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

  /*
    layout.js renders <html lang="en"> on the server and cannot
    know the client language, so we keep the document attribute
    in sync here. Without this, assistive technology and crawlers
    read Spanish content as English.
  */
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
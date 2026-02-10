"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import wineDataEn from "@/data/wineRecommendations.json";
import wineDataEs from "@/data/wineRecommendations.es.json";
import styles from "./page.module.css";

/*
  Wine Recommendations — the flagship subpage.
  
  Bilingual approach:
  - Filter buttons DISPLAY translated labels ("Blanco" / "Tinto")
  - Filter logic COMPARES against English keys ("White" / "Red")
    because the JSON data uses English keys for color/body/dryness/origin.
  - The correct language JSON is loaded for descriptions/style notes.
  
  filterGroups maps each option with:
  - value: the English key used in JSON data (never changes)
  - labelKey: the translations.js key for the display text
*/

const filterGroups = [
  {
    key: "color",
    options: [
      { value: "White", labelKey: "white" },
      { value: "Red", labelKey: "red" },
    ],
  },
  {
    key: "body",
    options: [
      { value: "Lighter Body", labelKey: "lighterBody" },
      { value: "Fuller Body", labelKey: "fullerBody" },
    ],
  },
  {
    key: "dryness",
    options: [
      { value: "Less Dry", labelKey: "lessDry" },
      { value: "More Dry", labelKey: "moreDry" },
    ],
  },
  {
    key: "origin",
    options: [
      { value: "New World", labelKey: "newWorld" },
      { value: "Old World", labelKey: "oldWorld" },
    ],
  },
];

export default function WineRecommendationsPage() {
  const { language } = useLanguage();
  const t = translations[language].wineRecs;
  const wineData = language === "es" ? wineDataEs : wineDataEn;

  /* Filter state — one value per category, or null if unselected */
  const [filters, setFilters] = useState({
    color: null,
    body: null,
    dryness: null,
    origin: null,
  });

  /* Track which wine card is expanded (by index) */
  const [expandedIndex, setExpandedIndex] = useState(null);

  /* Toggle a filter value on/off */
  function handleFilter(key, value) {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
    setExpandedIndex(null);
  }

  /* Reset all filters */
  function resetFilters() {
    setFilters({ color: null, body: null, dryness: null, origin: null });
    setExpandedIndex(null);
  }

  /* Check if any filter is active */
  const hasActiveFilters = Object.values(filters).some((v) => v !== null);

  /* Filter the wine data — compares against English keys */
  const filteredWines = useMemo(() => {
    if (!hasActiveFilters) return [];
    return wineData.filter((wine) => {
      if (filters.color && wine.color !== filters.color) return false;
      if (filters.body && wine.body !== filters.body) return false;
      if (filters.dryness && wine.dryness !== filters.dryness) return false;
      if (filters.origin && wine.origin !== filters.origin) return false;
      return true;
    });
  }, [filters, hasActiveFilters, wineData]);

  /* Toggle expanded card */
  function toggleExpand(index) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

  return (
    <main className={styles.main}>
      {/* Page header */}
      <section className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </section>

      {/* Filter toggles */}
      <section className={styles.filters}>
        {filterGroups.map((group) => (
          <div key={group.key} className={styles.filterRow}>
            {group.options.map((option) => (
              <button
                key={option.value}
                className={`${styles.filterButton} ${
                  filters[group.key] === option.value
                    ? styles.filterActive
                    : ""
                }`}
                onClick={() => handleFilter(group.key, option.value)}
              >
                {t[option.labelKey]}
              </button>
            ))}
          </div>
        ))}

        {/* Reset button */}
        <button
          className={styles.resetButton}
          onClick={resetFilters}
          disabled={!hasActiveFilters}
        >
          {t.reset}
        </button>
      </section>

      {/* Results */}
      <section className={styles.results}>
        {hasActiveFilters && filteredWines.length === 0 && (
          <p className={styles.noResults}>{t.noResults}</p>
        )}

        {filteredWines.map((wine, index) => (
          <div
            key={wine.name}
            className={`${styles.wineCard} ${
              expandedIndex === index ? styles.wineCardExpanded : ""
            }`}
          >
            {/* Clickable header row */}
            <button
              className={styles.wineHeader}
              onClick={() => toggleExpand(index)}
              aria-expanded={expandedIndex === index}
            >
              <span className={styles.wineName}>{wine.name}</span>
              <svg
                className={`${styles.chevron} ${
                  expandedIndex === index ? styles.chevronOpen : ""
                }`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Expandable detail panel */}
            {expandedIndex === index && (
              <div className={styles.wineDetail}>
                <p className={styles.wineDescription}>{wine.description}</p>
                {wine.description2 && (
                  <p className={styles.wineDescription2}>
                    {wine.description2}
                  </p>
                )}
                {wine["style notes"] && wine["style notes"].length > 0 && (
                  <div className={styles.styleTags}>
                    {wine["style notes"].map((note) => (
                      <span key={note} className={styles.styleTag}>
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Ecosystem link */}
      <footer className={styles.ecosystemLink}>
        <p>
          {t.ecosystemText}{" "}
          <a
            href="https://somm.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Somm.Site
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
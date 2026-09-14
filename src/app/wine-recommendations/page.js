/* src/app/wine-recommendations/page.js */

"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import wineDataEn from "@/data/wineRecommendations.json";
import wineDataEs from "@/data/wineRecommendations.es.json";
import styles from "./page.module.css";

/*
  Wine Recommendations — the flagship subpage.

  Four questions, two answers each. Each pair renders as one segmented
  control so it reads as a single either/or choice rather than two
  unrelated buttons.

  Bilingual approach, unchanged:
  - Buttons DISPLAY translated labels ("Blanco" / "Tinto")
  - Filter logic COMPARES against English keys ("White" / "Red")
    because the JSON data uses English keys for color/body/dryness/origin.
  - The correct language JSON supplies descriptions and style notes.
*/

const filterGroups = [
  {
    key: "color",
    groupLabelKey: "groupColor",
    options: [
      { value: "White", labelKey: "white" },
      { value: "Red", labelKey: "red" },
    ],
  },
  {
    key: "body",
    groupLabelKey: "groupBody",
    options: [
      { value: "Lighter Body", labelKey: "lighterBody" },
      { value: "Fuller Body", labelKey: "fullerBody" },
    ],
  },
  {
    key: "dryness",
    groupLabelKey: "groupDryness",
    options: [
      { value: "Less Dry", labelKey: "lessDry" },
      { value: "More Dry", labelKey: "moreDry" },
    ],
  },
  {
    key: "origin",
    groupLabelKey: "groupOrigin",
    options: [
      { value: "New World", labelKey: "newWorld" },
      { value: "Old World", labelKey: "oldWorld" },
    ],
  },
];

const emptyFilters = {
  color: null,
  body: null,
  dryness: null,
  origin: null,
};

export default function WineRecommendationsPage() {
  const { language } = useLanguage();
  const t = translations[language].wineRecs;
  const wineData = language === "es" ? wineDataEs : wineDataEn;

  const [filters, setFilters] = useState(emptyFilters);

  /* Track the expanded card by name rather than index, so the open
     card cannot follow a stale position when the result set changes. */
  const [expandedName, setExpandedName] = useState(null);

  function handleFilter(key, value) {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
    setExpandedName(null);
  }

  function resetFilters() {
    setFilters(emptyFilters);
    setExpandedName(null);
  }

  const hasActiveFilters = Object.values(filters).some((v) => v !== null);

  const matches = useMemo(() => {
    if (!hasActiveFilters) return [];
    return wineData.filter((wine) => {
      if (filters.color && wine.color !== filters.color) return false;
      if (filters.body && wine.body !== filters.body) return false;
      if (filters.dryness && wine.dryness !== filters.dryness) return false;
      if (filters.origin && wine.origin !== filters.origin) return false;
      return true;
    });
  }, [filters, hasActiveFilters, wineData]);

  function toggleExpand(name) {
    setExpandedName((prev) => (prev === name ? null : name));
  }

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </section>

      {/* Four questions */}
      <section className={styles.groups}>
        {filterGroups.map((group) => {
          const groupLabel = t[group.groupLabelKey];
          return (
            <div key={group.key} className={styles.group}>
              <span className={styles.groupLabel}>{groupLabel}</span>
              <div
                className={styles.segment}
                role="group"
                aria-label={groupLabel}
              >
                {group.options.map((option) => {
                  const isActive = filters[group.key] === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`${styles.segmentButton} ${
                        isActive ? styles.segmentActive : ""
                      }`}
                      aria-pressed={isActive}
                      onClick={() => handleFilter(group.key, option.value)}
                    >
                      {t[option.labelKey]}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Reset appears only once something is selected */}
      {hasActiveFilters && (
        <div className={styles.resetRow}>
          <button
            type="button"
            className={styles.resetButton}
            onClick={resetFilters}
          >
            {t.reset}
          </button>
        </div>
      )}

      {/* Results */}
      {!hasActiveFilters ? (
        <section className={styles.empty} aria-hidden="true">
          <svg
            className={styles.emptyGlass}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 2h8l-1 9a5 5 0 01-10 0L8 2z" />
            <path d="M7 6.5h10" />
            <path d="M12 11v8" />
            <path d="M8 22h8" />
          </svg>
        </section>
      ) : matches.length === 0 ? (
        <section className={styles.empty}>
          <p className={styles.emptyText}>{t.noResults}</p>
        </section>
      ) : (
        <section className={styles.results}>
          {matches.map((wine) => {
            const isOpen = expandedName === wine.name;
            return (
              <div
                key={wine.name}
                className={`${styles.wineCard} ${
                  isOpen ? styles.wineCardExpanded : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.wineHeader}
                  onClick={() => toggleExpand(wine.name)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.wineName}>{wine.name}</span>
                  <svg
                    className={`${styles.chevron} ${
                      isOpen ? styles.chevronOpen : ""
                    }`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isOpen && (
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
            );
          })}
        </section>
      )}
    </main>
  );
}
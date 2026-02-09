"use client";

import { useState, useMemo } from "react";
import wineData from "@/data/wineRecommendations.json";
import styles from "./page.module.css";

/*
  Wine Recommendations — the flagship subpage.
  
  How the filter works (like a restaurant POS):
  - 4 filter categories: Color, Body, Dryness, Origin
  - Each has 2 options (toggle buttons)
  - Clicking a button selects it; clicking again deselects
  - Only one option per category at a time
  - Wines must match ALL active filters to appear
  - No filters = show nothing (user needs to make at least one selection)
  
  Results appear as collapsible cards that expand to show
  description, description2, and style notes.
*/

const filterGroups = [
  { key: "color", options: ["White", "Red"] },
  { key: "body", options: ["Lighter Body", "Fuller Body"] },
  { key: "dryness", options: ["Less Dry", "More Dry"] },
  { key: "origin", options: ["New World", "Old World"] },
];

export default function WineRecommendationsPage() {
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
    setExpandedIndex(null); /* collapse any open card when filters change */
  }

  /* Reset all filters */
  function resetFilters() {
    setFilters({ color: null, body: null, dryness: null, origin: null });
    setExpandedIndex(null);
  }

  /* Check if any filter is active */
  const hasActiveFilters = Object.values(filters).some((v) => v !== null);

  /* Filter the wine data */
  const filteredWines = useMemo(() => {
    if (!hasActiveFilters) return [];
    return wineData.filter((wine) => {
      if (filters.color && wine.color !== filters.color) return false;
      if (filters.body && wine.body !== filters.body) return false;
      if (filters.dryness && wine.dryness !== filters.dryness) return false;
      if (filters.origin && wine.origin !== filters.origin) return false;
      return true;
    });
  }, [filters, hasActiveFilters]);

  /* Toggle expanded card */
  function toggleExpand(index) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

  return (
    <main className={styles.main}>
      {/* Page header */}
      <section className={styles.header}>
        <h1 className={styles.title}>Wine Recommendations</h1>
        <p className={styles.subtitle}>
          Use the filters below to find your next great bottle.
        </p>
      </section>

      {/* Filter toggles */}
      <section className={styles.filters}>
        {filterGroups.map((group) => (
          <div key={group.key} className={styles.filterRow}>
            {group.options.map((option) => (
              <button
                key={option}
                className={`${styles.filterButton} ${
                  filters[group.key] === option ? styles.filterActive : ""
                }`}
                onClick={() => handleFilter(group.key, option)}
              >
                {option}
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
          Reset
        </button>
      </section>

      {/* Results */}
      <section className={styles.results}>
        {hasActiveFilters && filteredWines.length === 0 && (
          <p className={styles.noResults}>
            No wines match your current filters. Try adjusting your selections.
          </p>
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
                  <p className={styles.wineDescription2}>{wine.description2}</p>
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
          Learn the fundamentals behind these styles on{" "}
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
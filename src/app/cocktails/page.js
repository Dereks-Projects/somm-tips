"use client";

import { useState, useMemo } from "react";
import cocktailsData from "@/data/cocktails.json";
import styles from "@/components/Subpage.module.css";

const spirits = ["All", "Vodka", "Gin", "Rum", "Tequila", "Whiskey", "More"];

export default function CocktailsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return cocktailsData;
    return cocktailsData.filter((item) => item.baseSpirit === activeFilter);
  }, [activeFilter]);

  function handleFilter(spirit) {
    setActiveFilter(spirit);
    setExpandedIndex(null);
  }

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Cocktails</h1>
        <p className={styles.subtitle}>
          Classic and fun libations, organized by base spirit.
        </p>
      </section>

      <div className={styles.filterBar}>
        {spirits.map((s) => (
          <button
            key={s}
            className={`${styles.filterPill} ${
              activeFilter === s ? styles.filterPillActive : ""
            }`}
            onClick={() => handleFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <section className={styles.results}>
        {filtered.map((item, index) => (
          <div
            key={item.cocktail}
            className={`${styles.card} ${
              expandedIndex === index ? styles.cardExpanded : ""
            }`}
          >
            <button
              className={styles.cardHeader}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              aria-expanded={expandedIndex === index}
            >
              <div>
                <span className={styles.cardName}>{item.cocktail}</span>
                <div className={styles.cardMeta}>{item.baseSpirit}</div>
              </div>
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

            {expandedIndex === index && (
              <div className={styles.cardDetail}>
                <p className={styles.detailLabel}>Ingredients</p>
                <p className={styles.detailPrimary}>{item.recipe1}</p>
                <div className={styles.detailDivider}></div>
                <p className={styles.detailLabel}>Preparation</p>
                <p className={styles.detailPrimary}>{item.recipe2}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className={styles.ecosystemLink}>
        <p>
          Explore more at{" "}
          <a
            href="https://backbar.fyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backbar.fyi
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
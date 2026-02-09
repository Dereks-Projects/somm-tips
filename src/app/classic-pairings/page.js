"use client";

import { useState, useMemo } from "react";
import pairingsData from "@/data/classicPairings.json";
import styles from "@/components/Subpage.module.css";

const continents = ["All", "Americas", "Europe", "Asia", "Africa"];

export default function ClassicPairingsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return pairingsData;
    return pairingsData.filter((item) => item.continent === activeFilter);
  }, [activeFilter]);

  function handleFilter(continent) {
    setActiveFilter(continent);
    setExpandedIndex(null);
  }

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Classic Pairings</h1>
        <p className={styles.subtitle}>
          Timeless food and wine combinations from around the world.
        </p>
      </section>

      <div className={styles.filterBar}>
        {continents.map((c) => (
          <button
            key={c}
            className={`${styles.filterPill} ${
              activeFilter === c ? styles.filterPillActive : ""
            }`}
            onClick={() => handleFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <section className={styles.results}>
        {filtered.map((item, index) => (
          <div
            key={item.food}
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
                <span className={styles.cardName}>{item.food}</span>
                <div className={styles.cardMeta}>{item.continent}</div>
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
                <p className={styles.detailPrimary}>{item.about}</p>
                <p className={styles.detailHighlight}>{item.pairing}</p>
                <p className={styles.detailSecondary}>{item.why}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className={styles.ecosystemLink}>
        <p>
          Visit{" "}
          <a
            href="https://beverage.fyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beverage.fyi
          </a>{" "}
          for more knowledge on topics like this.
        </p>
      </footer>
    </main>
  );
}
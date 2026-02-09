"use client";

import { useState, useMemo } from "react";
import educationData from "@/data/wineEducation.json";
import styles from "@/components/Subpage.module.css";

const categories = [
  "All",
  "White Grapes",
  "Red Grapes",
  "Wine Regions",
  "Tasting Terms",
];

export default function EducationPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return educationData;
    return educationData.filter(
      (item) => item.category.trim() === activeFilter
    );
  }, [activeFilter]);

  function handleFilter(category) {
    setActiveFilter(category);
    setExpandedIndex(null);
  }

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Wine Education</h1>
        <p className={styles.subtitle}>
          Level up your knowledge of grapes, regions, and tasting.
        </p>
      </section>

      <div className={styles.filterBar}>
        {categories.map((c) => (
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
            key={`${item.category}-${item.topic}`}
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
                <span className={styles.cardName}>{item.topic}</span>
                <div className={styles.cardMeta}>{item.category.trim()}</div>
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
                <p className={styles.detailPrimary}>{item.info}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className={styles.ecosystemLink}>
        <p>
          Learn more in-depth on{" "}
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
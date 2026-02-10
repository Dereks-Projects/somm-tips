"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import pairingsDataEn from "@/data/classicPairings.json";
import pairingsDataEs from "@/data/classicPairings.es.json";
import styles from "@/components/Subpage.module.css";

/*
  Classic Pairings — bilingual version.
  
  Filter pills display translated labels but compare
  against English continent keys in the JSON data.
*/

const continentOptions = [
  { value: "All", labelKey: "all" },
  { value: "Americas", labelKey: "americas" },
  { value: "Europe", labelKey: "europe" },
  { value: "Asia", labelKey: "asia" },
  { value: "Africa", labelKey: "africa" },
];

export default function ClassicPairingsPage() {
  const { language } = useLanguage();
  const t = translations[language].pairings;
  const pairingsData = language === "es" ? pairingsDataEs : pairingsDataEn;

  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return pairingsData;
    return pairingsData.filter((item) => item.continent === activeFilter);
  }, [activeFilter, pairingsData]);

  function handleFilter(value) {
    setActiveFilter(value);
    setExpandedIndex(null);
  }

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </section>

      <div className={styles.filterBar}>
        {continentOptions.map((opt) => (
          <button
            key={opt.value}
            className={`${styles.filterPill} ${
              activeFilter === opt.value ? styles.filterPillActive : ""
            }`}
            onClick={() => handleFilter(opt.value)}
          >
            {t[opt.labelKey]}
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
          {t.ecosystemText}{" "}
          <a
            href="https://beverage.fyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beverage.fyi
          </a>{" "}
          {t.ecosystemTextEnd}
        </p>
      </footer>
    </main>
  );
}
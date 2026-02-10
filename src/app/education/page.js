"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import educationDataEn from "@/data/wineEducation.json";
import educationDataEs from "@/data/wineEducation.es.json";
import styles from "@/components/Subpage.module.css";

/*
  Education — bilingual version.
  
  Filter pills display translated labels but compare
  against English category keys in the JSON data.
*/

const categoryOptions = [
  { value: "All", labelKey: "all" },
  { value: "White Grapes", labelKey: "whiteGrapes" },
  { value: "Red Grapes", labelKey: "redGrapes" },
  { value: "Wine Regions", labelKey: "wineRegions" },
  { value: "Tasting Terms", labelKey: "tastingTerms" },
];

export default function EducationPage() {
  const { language } = useLanguage();
  const t = translations[language].education;
  const educationData = language === "es" ? educationDataEs : educationDataEn;

  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return educationData;
    return educationData.filter(
      (item) => item.category.trim() === activeFilter
    );
  }, [activeFilter, educationData]);

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
        {categoryOptions.map((opt) => (
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
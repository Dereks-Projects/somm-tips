"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import cocktailsDataEn from "@/data/cocktails.json";
import cocktailsDataEs from "@/data/cocktails.es.json";
import styles from "@/components/Subpage.module.css";

/*
  Cocktails — bilingual version.
  
  Filter pills display translated labels but compare
  against English baseSpirit keys in the JSON data.
*/

const spiritOptions = [
  { value: "All", labelKey: "all" },
  { value: "Vodka", labelKey: "vodka" },
  { value: "Gin", labelKey: "gin" },
  { value: "Rum", labelKey: "rum" },
  { value: "Tequila", labelKey: "tequila" },
  { value: "Whiskey", labelKey: "whiskey" },
  { value: "More", labelKey: "more" },
];

export default function CocktailsPage() {
  const { language } = useLanguage();
  const t = translations[language].cocktails;
  const cocktailsData = language === "es" ? cocktailsDataEs : cocktailsDataEn;

  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return cocktailsData;
    return cocktailsData.filter((item) => item.baseSpirit === activeFilter);
  }, [activeFilter, cocktailsData]);

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
        {spiritOptions.map((opt) => (
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
                <p className={styles.detailLabel}>{t.ingredients}</p>
                <p className={styles.detailPrimary}>{item.recipe1}</p>
                <div className={styles.detailDivider}></div>
                <p className={styles.detailLabel}>{t.preparation}</p>
                <p className={styles.detailPrimary}>{item.recipe2}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className={styles.ecosystemLink}>
        <p>
          {t.ecosystemText}{" "}
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
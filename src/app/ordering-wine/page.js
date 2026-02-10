"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import orderingDataEn from "@/data/orderingWine.json";
import orderingDataEs from "@/data/orderingWine.es.json";
import styles from "@/components/Subpage.module.css";

export default function OrderingWinePage() {
  const { language } = useLanguage();
  const t = translations[language].ordering;
  const orderingData = language === "es" ? orderingDataEs : orderingDataEn;

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </section>

      <section className={styles.results}>
        {orderingData.map((item, index) => (
          <div
            key={item.category}
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
              <span className={styles.cardName}>{item.category}</span>
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
                <p className={styles.detailPrimary}>{item.preferred}</p>
                <p className={styles.detailSecondary}>{item.traits}</p>
                <div className={styles.detailDivider}></div>
                <p className={styles.detailLabel}>{t.tryThese}</p>
                <div className={styles.inlineList}>
                  {item.recommendations.map((rec) => (
                    <span key={rec} className={styles.inlineListItem}>
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <p className={styles.tip}>{t.tip}</p>

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
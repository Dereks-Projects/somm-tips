"use client";

import { useState } from "react";
import vintagesData from "@/data/vintages.json";
import styles from "@/components/Subpage.module.css";

export default function VintagesPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Vintages</h1>
        <p className={styles.subtitle}>
          Notable vintages from the world's most celebrated wine regions.
        </p>
      </section>

      <section className={styles.results}>
        {vintagesData.map((item, index) => (
          <div
            key={item.region}
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
              <span className={styles.cardName}>{item.region}</span>
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
                <p className={styles.detailHighlight}>{item.greatVintages}</p>
                <p className={styles.detailSecondary}>{item.poorVintages}</p>
                <div className={styles.detailDivider}></div>
                <p className={styles.detailPrimary}>{item.notes}</p>
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
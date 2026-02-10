"use client";

import { useState } from "react";
import orderingData from "@/data/orderingWine.json";
import styles from "@/components/Subpage.module.css";

export default function OrderingWinePage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Ordering Wine</h1>
        <p className={styles.subtitle}>
          Not sure what to order? Find your style and get pointed in the right
          direction.
        </p>
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
                <p className={styles.detailLabel}>Try these</p>
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
      <p className={styles.tip}>
        Give the somm or salesperson who is guiding you one of the styles from
        above, and they will lead you to a great selection!
      </p>  
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
"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import styles from "./page.module.css";

/*
  Homepage — the hub of Somm.Tips.
  
  Layout (matching mockup):
  - Hero tagline
  - Dominant card: Wine Recommendations (full-width, visually prominent)
  - 2-column grid: Classic Pairings, Ordering Wine, Vintages, Education, Cocktails
  
  Now bilingual — all guest-facing text pulls from translations.
*/

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language].home;

  const secondaryCards = [
    {
      title: t.classicPairings,
      desc: t.classicPairingsDesc,
      href: "/classic-pairings",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="18" rx="8" ry="3" />
          <path d="M12 15V9" />
          <circle cx="12" cy="6" r="3" />
        </svg>
      ),
    },
    {
      title: t.orderingWine,
      desc: t.orderingWineDesc,
      href: "/ordering-wine",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
    },
    {
      title: t.vintages,
      desc: t.vintagesDesc,
      href: "/vintages",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
        </svg>
      ),
    },
    {
      title: t.reference,
      desc: t.referenceDesc,
      href: "/education",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />
        </svg>
      ),
    },
    {
      title: t.cocktails,
      desc: t.cocktailsDesc,
      href: "/cocktails",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2l8 10 8-10" />
          <path d="M12 12v7" />
          <path d="M8 22h8" />
        </svg>
      ),
    },
  ];

  return (
    <main className={styles.main}>
      {/* Hero section */}
      <section className={styles.hero}>
        <h1 className={styles.tagline}>{t.tagline}</h1>
      </section>

      {/* Primary action — Wine Recommendations */}
      <section className={styles.primarySection}>
        <Link href="/wine-recommendations" className={styles.primaryCard}>
          <div className={styles.primaryContent}>
            <div className={styles.primaryIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2h8l-1 9a5 5 0 01-10 0L8 2z" />
                <path d="M7 6.5h10" />
                <path d="M12 11v8" />
                <path d="M8 22h8" />
              </svg>
            </div>
            <h2 className={styles.primaryTitle}>{t.primaryTitle}</h2>
            <p className={styles.primaryDesc}>{t.primaryDesc}</p>
          </div>
          <svg className={styles.primaryArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      {/* Secondary cards — 2-column grid */}
      <section className={styles.grid}>
        {secondaryCards.map((card) => (
          <Link key={card.href} href={card.href} className={styles.card}>
            <span className={styles.cardIcon}>{card.icon}</span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
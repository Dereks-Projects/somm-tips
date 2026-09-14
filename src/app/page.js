/* src/app/page.js */

"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import styles from "./page.module.css";

/*
  Homepage — the hub of Somm.Tips.

  Composition:
  - Left (desktop) / top (mobile): tagline + dominant Wine Recommendations card
  - Right (desktop) / below (mobile): the other five sections as a compact rail
  - Full width below, desktop only: portfolio band linking to the other properties

  The primary card is the page's single loud element. Everything around it
  stays quiet: the rail rows are flat until hovered, and the tagline is
  plain white. The card carries the gold.

  All guest facing text pulls from translations. The portfolio band reuses
  keys that already exist under translations[language].header, so
  translations.js needs no changes.
*/

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language].home;
  const th = translations[language].header;

  const railItems = [
    {
      title: t.classicPairings,
      desc: t.classicPairingsDesc,
      href: "/classic-pairings",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      ),
    },
    {
      title: t.orderingWine,
      desc: t.orderingWineDesc,
      href: "/ordering-wine",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: t.vintages,
      desc: t.vintagesDesc,
      href: "/vintages",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 2l8 10 8-10" />
          <path d="M12 12v7" />
          <path d="M8 22h8" />
        </svg>
      ),
    },
  ];

  const portfolioSites = [
    {
      name: "Somm.Site",
      desc: th.sommSiteDesc,
      href: "https://somm.site",
    },
    {
      name: "Beverage.fyi",
      desc: th.beverageFyiDesc,
      href: "https://beverage.fyi",
    },
    {
      name: "Hospitality.fyi",
      desc: th.hospitalityFyiDesc,
      href: "https://www.hospitality.fyi",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        {/* Lead column — tagline plus the dominant card */}
        <div className={styles.lead}>
          <h1 className={styles.tagline}>{t.tagline}</h1>

          <Link href="/wine-recommendations" className={styles.primaryCard}>
            {/* Oversized glass, bleeding off the top right corner */}
            <svg
              className={styles.primaryWatermark}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 2h8l-1 9a5 5 0 01-10 0L8 2z" />
              <path d="M7 6.5h10" />
              <path d="M12 11v8" />
              <path d="M8 22h8" />
            </svg>

            <span className={styles.primaryIcon}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2h8l-1 9a5 5 0 01-10 0L8 2z" />
                <path d="M7 6.5h10" />
                <path d="M12 11v8" />
                <path d="M8 22h8" />
              </svg>
            </span>

            <span className={styles.primaryTitle}>{t.primaryTitle}</span>
            <span className={styles.primaryDesc}>{t.primaryDesc}</span>

            <span className={styles.primaryCta} aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Rail — the remaining five sections as compact rows */}
        <nav className={styles.rail} aria-label={t.tagline}>
          {railItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.railItem}>
              <span className={styles.railIcon}>{item.icon}</span>
              <span className={styles.railBody}>
                <span className={styles.railTitle}>{item.title}</span>
                <span className={styles.railDesc}>{item.desc}</span>
              </span>
              <svg
                className={styles.railChevron}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ))}
        </nav>
      </div>

      {/* Portfolio band — desktop only, hidden under 769px by the stylesheet */}
      <section className={styles.portfolio}>
        <p className={styles.portfolioLabel}>{th.explore}</p>

        <div className={styles.portfolioGrid}>
          {portfolioSites.map((site) => (
            <a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioCard}
            >
              <span className={styles.portfolioName}>{site.name}</span>
              <span className={styles.portfolioDesc}>{site.desc}</span>
            </a>
          ))}
        </div>

        <p className={styles.portfolioParent}>
          <a
            href="https://informativemedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Informative Media
          </a>
        </p>
      </section>
    </main>
  );
}
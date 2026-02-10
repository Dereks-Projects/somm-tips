"use client";

import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import styles from "@/components/StaticPage.module.css";

/*
  About page — bilingual version.
  
  NOTE: This was previously a server component with export const metadata.
  Now it's a client component (for useLanguage), so metadata must live
  in a separate layout.js file in this route folder.
*/

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.aboutAppTitle}</h2>
        <p className={styles.paragraph}>{t.aboutAppP1}</p>
        <p className={styles.paragraph}>{t.aboutAppP2}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.philosophyTitle}</h2>
        <p className={styles.paragraph}>{t.philosophyP1}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.ecosystemTitle}</h2>
        <p className={styles.paragraph}>{t.ecosystemP1}</p>
        <div className={styles.ecosystemLinks}>
          <a
            href="https://somm.site"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ecosystemLink}
          >
            Somm.Site
            <span className={styles.ecosystemLinkDesc}>
              {t.sommSiteDesc}
            </span>
          </a>
          <a
            href="https://beverage.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ecosystemLink}
          >
            Beverage.fyi
            <span className={styles.ecosystemLinkDesc}>
              {t.beverageFyiDesc}
            </span>
          </a>
          <a
            href="https://backbar.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ecosystemLink}
          >
            Backbar.fyi
            <span className={styles.ecosystemLinkDesc}>
              {t.backbarFyiDesc}
            </span>
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.createdByTitle}</h2>
        <p className={styles.paragraph}>{t.createdByP1}</p>
        <p className={styles.paragraph}>
          <a
            href="https://www.derekengles.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t.createdByLink}
          </a>
        </p>
      </section>

      <div className={styles.meta}>
        <p>
          {t.meta}{" "}
          <a
            href="https://informativemedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Informative Media
          </a>
          .
        </p>
      </div>
    </main>
  );
}
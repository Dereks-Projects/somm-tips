"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/data/translations";
import styles from "./DesktopFooter.module.css";

export default function DesktopFooter() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <Link href="/about">{t.about}</Link>
          <Link href="/content-policy">{t.contentPolicy}</Link>
          <Link href="/privacy">{t.privacy}</Link>
          <Link href="/terms">{t.terms}</Link>
          <Link href="/cookies">{t.cookies}</Link>
          <a
            href="mailto:derekengles@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.contact}
          </a>
        </div>
        <p className={styles.legal}>
          &copy; {currentYear} Somm.Tips &middot;{" "}
          <a
            href="https://informativemedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Informative Media
          </a>
        </p>
      </div>
    </footer>
  );
}
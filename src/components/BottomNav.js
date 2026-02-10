"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/data/translations";
import styles from "./BottomNav.module.css";

/*
  Navigation items — 4 items max.
  Defined inside the component so labels can be translated.
*/

export default function BottomNav() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language].bottomNav;

  const navItems = [
    {
      label: t.home,
      href: "/",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
      ),
    },
    {
      label: t.wine,
      href: "/wine-recommendations",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2h8l-1 9a5 5 0 01-10 0L8 2z" />
          <path d="M12 11v8" />
          <path d="M8 22h8" />
        </svg>
      ),
    },
    {
      label: t.cocktails,
      href: "/cocktails",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2h8l-4 10-4-10z" />
          <path d="M12 12v7" />
          <path d="M8 22h8" />
          <line x1="2" y1="2" x2="22" y2="2" />
        </svg>
      ),
    },
    {
      label: t.learn,
      href: "/education",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
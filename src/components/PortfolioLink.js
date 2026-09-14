/* src/components/PortfolioLink.js */

import styles from "./PortfolioLink.module.css";

/*
  PortfolioLink — the outbound card at the bottom of a subpage.

  One card, pointing at whichever property matches the page content.
  Wine Recommendations points at Somm.Site. Cocktails and Pairings
  point at Beverage.fyi. The page supplies the strings so this stays
  language agnostic and reusable.

  Props:
    label       small heading above the card (pass translations.header.explore)
    name        the site name, e.g. "Somm.Site"
    description one line, e.g. translations.header.sommSiteDesc
    href        absolute URL

  Usage:
    <PortfolioLink
      label={th.explore}
      name="Somm.Site"
      description={th.sommSiteDesc}
      href="https://somm.site"
    />
*/

export default function PortfolioLink({ label, name, description, href }) {
  if (!name || !href) return null;

  return (
    <section className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        <span className={styles.body}>
          <span className={styles.name}>{name}</span>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </span>

        <svg
          className={styles.icon}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14L21 3" />
        </svg>
      </a>
    </section>
  );
}
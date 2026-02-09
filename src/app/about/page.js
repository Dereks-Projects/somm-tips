import styles from "@/components/StaticPage.module.css";

export const metadata = {
  title: "About — Somm.Tips",
  description: "Learn about Somm.Tips, our philosophy, and the Informative Media ecosystem.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>About Somm.Tips</h1>
        <p className={styles.subtitle}>
          Demystifying wine, one recommendation at a time.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About the App</h2>
        <p className={styles.paragraph}>
          Somm Tips transforms the often intimidating world of wine into an
          accessible, enjoyable experience. Whether you're ordering at a
          restaurant, shopping for a dinner party, or simply curious about wine,
          our app provides clear, practical guidance without the pretension.
        </p>
        <p className={styles.paragraph}>
          Using simple filters and straightforward language, we help you discover
          wines that match your taste preferences, learn classic food pairings,
          and understand what makes certain vintages special — all in the palm of
          your hand.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Philosophy</h2>
        <p className={styles.paragraph}>
          Wine should be a pleasure, not a puzzle. We believe everyone deserves
          to feel confident when choosing wine, whether you're a complete
          beginner or an enthusiastic amateur. Our approach strips away
          unnecessary jargon while preserving the knowledge that actually matters
          for your enjoyment.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Ecosystem</h2>
        <p className={styles.paragraph}>
          Somm.Tips is part of a larger learning ecosystem dedicated to beverage
          and hospitality education. Whether you're just getting started or
          looking to deepen your expertise, our partner sites offer comprehensive
          resources to continue your journey.
        </p>
        <div className={styles.ecosystemLinks}>
          <a
            href="https://somm.site"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ecosystemLink}
          >
            Somm.Site
            <span className={styles.ecosystemLinkDesc}>
              Wine education, articles, and courses
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
              Deep dives into the world of drinks
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
              Spirits and cocktails
            </span>
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Created By</h2>
        <p className={styles.paragraph}>
          Derek Engles brings years of wine expertise and a passion for making
          wine approachable to everyone. His experience spans from restaurant
          service to wine education, always with a focus on practical, real-world
          application.
        </p>
        <p className={styles.paragraph}>
          <a
            href="https://www.derekengles.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Learn more at derekengles.com →
          </a>
        </p>
      </section>

      <div className={styles.meta}>
        <p>
          Somm.Tips is a product of{" "}
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
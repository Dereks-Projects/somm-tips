import styles from "@/components/StaticPage.module.css";

export const metadata = {
  title: "Content Policy — Somm.Tips",
  description: "Content standards and editorial guidelines for Somm.Tips.",
};

export default function ContentPolicyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Content Policy</h1>
        <p className={styles.subtitle}>
          Our standards for the content published on Somm.Tips.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Editorial Standards</h2>
        <p className={styles.paragraph}>
          All content on Somm.Tips is written and reviewed by experienced
          beverage professionals. We strive for accuracy, clarity, and
          accessibility in every recommendation, pairing, and educational entry
          on the site.
        </p>
        <p className={styles.paragraph}>
          Our goal is to present wine and beverage knowledge in a way that is
          approachable for beginners while remaining useful and credible for
          experienced enthusiasts and industry professionals.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Accuracy & Sources</h2>
        <p className={styles.paragraph}>
          Wine recommendations, vintage assessments, food pairings, and cocktail
          recipes are based on established industry knowledge, professional
          tasting experience, and recognized educational resources. While we make
          every effort to ensure accuracy, wine is inherently subjective and
          regional variations exist.
        </p>
        <p className={styles.paragraph}>
          We update content periodically to reflect new vintages, evolving
          industry knowledge, and community feedback. If you notice an error or
          have a suggestion, we welcome your input.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>No Sponsored Content</h2>
        <p className={styles.paragraph}>
          Somm.Tips does not accept paid placements, sponsored recommendations,
          or advertising-driven content. Every recommendation on this site is
          made on the basis of quality and educational value, not commercial
          relationships.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Responsible Messaging</h2>
        <p className={styles.paragraph}>
          We present information about alcoholic beverages in a responsible and
          educational context. Somm.Tips does not promote excessive consumption,
          underage drinking, or irresponsible behavior related to alcohol.
          Content is intended for adults of legal drinking age.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Intellectual Property</h2>
        <p className={styles.paragraph}>
          All original content on Somm.Tips, including text, data structures,
          and editorial selections, is the intellectual property of Informative
          Media. Reproduction or distribution of content without written
          permission is prohibited. If you wish to reference or cite our
          content, please contact us.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.paragraph}>
          For questions about our content, corrections, or feedback, please
          reach out through{" "}
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
      </section>

      <p className={styles.meta}>Last updated: February 2026</p>
    </main>
  );
}
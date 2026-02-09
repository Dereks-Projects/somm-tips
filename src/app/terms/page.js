import styles from "@/components/StaticPage.module.css";

export const metadata = {
  title: "Terms of Use — Somm.Tips",
  description: "Terms and conditions for using Somm.Tips.",
};

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Terms of Use</h1>
        <p className={styles.subtitle}>
          Please review the following terms before using Somm.Tips.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
        <p className={styles.paragraph}>
          By accessing and using Somm.Tips, you agree to be bound by these Terms
          of Use. If you do not agree with any part of these terms, please
          discontinue use of the site immediately.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Use of the Site</h2>
        <p className={styles.paragraph}>
          Somm.Tips is provided for informational and educational purposes only.
          The content on this site, including wine recommendations, food
          pairings, cocktail recipes, and vintage information, is intended as
          general guidance and should not be considered professional advice.
        </p>
        <p className={styles.paragraph}>
          You agree to use the site in a lawful manner and not to engage in any
          activity that disrupts or interferes with the site's functionality,
          security, or availability.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Intellectual Property</h2>
        <p className={styles.paragraph}>
          All content on Somm.Tips, including text, graphics, logos, icons, and
          software, is the property of Informative Media or its content
          suppliers and is protected by applicable intellectual property laws.
          You may not reproduce, distribute, or create derivative works from this
          content without prior written consent.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Disclaimer of Warranties</h2>
        <p className={styles.paragraph}>
          Somm.Tips is provided on an "as is" and "as available" basis.
          Informative Media makes no warranties, expressed or implied, regarding
          the accuracy, reliability, or completeness of the content. We do not
          guarantee that the site will be uninterrupted, error-free, or free of
          harmful components.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
        <p className={styles.paragraph}>
          In no event shall Informative Media, its affiliates, or its content
          providers be liable for any direct, indirect, incidental, special, or
          consequential damages arising from your use of or inability to use the
          site or its content. This includes damages for loss of profits, data,
          or other intangible losses.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Alcohol-Related Content</h2>
        <p className={styles.paragraph}>
          Somm.Tips provides information about alcoholic beverages for
          educational purposes. You must be of legal drinking age in your
          jurisdiction to use the site. We encourage responsible consumption and
          do not promote excessive or underage drinking.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Changes to Terms</h2>
        <p className={styles.paragraph}>
          We reserve the right to modify these Terms of Use at any time. Changes
          will be posted on this page with an updated effective date. Your
          continued use of the site following any changes constitutes acceptance
          of the revised terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Governing Law</h2>
        <p className={styles.paragraph}>
          These terms shall be governed by and construed in accordance with the
          laws of the United States. Any disputes arising from these terms will
          be resolved in accordance with applicable federal and state law.
        </p>
      </section>

      <p className={styles.meta}>Last updated: February 2026</p>
    </main>
  );
}
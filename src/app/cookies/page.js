import styles from "@/components/StaticPage.module.css";

export const metadata = {
  title: "Cookies Policy — Somm.Tips",
  description: "How Somm.Tips uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Cookies Policy</h1>
        <p className={styles.subtitle}>
          How Somm.Tips uses cookies and similar technologies.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What Are Cookies</h2>
        <p className={styles.paragraph}>
          Cookies are small text files placed on your device when you visit a
          website. They are widely used to make websites function properly,
          improve performance, and provide information to site operators.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How We Use Cookies</h2>
        <p className={styles.paragraph}>
          Somm.Tips uses minimal cookies strictly for site functionality. We do
          not use cookies for advertising, behavioral tracking, or user
          profiling. Our approach reflects our broader philosophy: provide value
          without requiring personal data.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Types of Cookies We May Use</h2>
        <p className={styles.paragraph}>
          Essential cookies may be used to ensure basic site functionality, such
          as page navigation and access to secure areas. Analytics cookies may be
          used to collect anonymous, aggregated data about how visitors use the
          site, helping us understand traffic patterns and improve the user
          experience.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Third-Party Cookies</h2>
        <p className={styles.paragraph}>
          Some third-party services, such as hosting providers or analytics
          tools, may place their own cookies on your device. These cookies are
          governed by the respective third party's privacy and cookie policies.
          We do not control these cookies and recommend reviewing those policies
          independently.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Managing Cookies</h2>
        <p className={styles.paragraph}>
          Most web browsers allow you to control cookies through their settings.
          You can choose to block or delete cookies, though doing so may affect
          your experience on some websites. Refer to your browser's help
          documentation for instructions on managing cookie preferences.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
        <p className={styles.paragraph}>
          We may update this Cookies Policy from time to time. Any changes will
          be reflected on this page with an updated effective date.
        </p>
      </section>

      <p className={styles.meta}>Last updated: February 2026</p>
    </main>
  );
}
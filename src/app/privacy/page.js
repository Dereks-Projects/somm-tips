import styles from "@/components/StaticPage.module.css";

export const metadata = {
  title: "Privacy Policy — Somm.Tips",
  description: "Privacy policy for Somm.Tips, a product of Informative Media.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          How we handle your information on Somm.Tips.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p className={styles.paragraph}>
          Somm.Tips is designed to be used without accounts, sign-ups, or
          personal data collection. We believe in providing value without
          requiring your information in return.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Information We Collect</h2>
        <p className={styles.paragraph}>
          Somm.Tips does not require or collect personal information such as
          names, email addresses, or payment details. We do not use
          authentication or user accounts of any kind.
        </p>
        <p className={styles.paragraph}>
          We may collect anonymous, aggregated usage data through standard web
          analytics to understand how visitors interact with the site. This data
          does not identify individual users and is used solely to improve the
          experience.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookies</h2>
        <p className={styles.paragraph}>
          Somm.Tips may use minimal, functional cookies to ensure the site
          operates correctly. We do not use cookies for advertising, tracking, or
          profiling purposes. For more details, see our{" "}
          <a href="/cookies" className={styles.link}>
            Cookies Policy
          </a>
          .
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Third-Party Services</h2>
        <p className={styles.paragraph}>
          We may use third-party hosting, analytics, or content delivery
          services. These services may collect limited technical information such
          as IP addresses and browser type as part of their standard operation.
          We do not sell or share personal data with third parties.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>External Links</h2>
        <p className={styles.paragraph}>
          Somm.Tips contains links to other websites within the Informative
          Media ecosystem and to external resources. We are not responsible for
          the privacy practices of external sites and encourage you to review
          their policies independently.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
        <p className={styles.paragraph}>
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page with an updated effective date. Continued use
          of the site constitutes acceptance of the revised policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.paragraph}>
          If you have questions about this policy, please reach out through{" "}
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
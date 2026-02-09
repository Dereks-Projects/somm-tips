import Link from "next/link";
import styles from "./DesktopFooter.module.css";

export default function DesktopFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/content-policy">Content Policy</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
          <a
            href="mailto:derekengles@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
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
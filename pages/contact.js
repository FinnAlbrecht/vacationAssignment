import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>📧</div>
        <h1>Kontakt</h1>
        <p>Nimm Kontakt mit unserem Team auf - wir helfen gerne!</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

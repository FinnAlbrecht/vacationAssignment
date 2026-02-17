import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>🔒</div>
        <h1>Datenschutz</h1>
        <p>Erfahre wie wir deine Daten schützen und verarbeiten.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

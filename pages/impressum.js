import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>⚖️</div>
        <h1>Impressum</h1>
        <p>Rechtliche Informationen und Impressum der Plattform.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

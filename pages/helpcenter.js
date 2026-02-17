import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function HelpCenterPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>📚</div>
        <h1>Help Center</h1>
        <p>Finde umfangreiche Dokumentation und häufig gestellte Fragen.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

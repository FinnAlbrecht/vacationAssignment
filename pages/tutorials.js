import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function TutorialsPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>🎓</div>
        <h1>Tutorials</h1>
        <p>Lerne Schritt für Schritt, wie du die App optimal nutzt.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

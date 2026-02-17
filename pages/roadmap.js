import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function RoadmapPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>🗺️</div>
        <h1>Roadmap</h1>
        <p>Sieh, welche Features in Zukunft geplant sind.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

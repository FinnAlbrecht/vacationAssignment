import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>🏢</div>
        <h1>Über uns</h1>
        <p>Erfahre mehr über unsere Mission und das ToDoodle-Team.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

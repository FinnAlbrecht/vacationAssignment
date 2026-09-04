import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function CalendarPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>📅</div>
        <h1>Kalenderübersicht</h1>
        <p>Sehe alle deine Aufgaben übersichtlich in einem Kalender angeordnet.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/todos" className={styles.backButton}>
          ← Zurück zu Todos
        </Link>
      </div>
    </div>
  );
}

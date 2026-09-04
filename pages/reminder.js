import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function ReminderPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>🔔</div>
        <h1>Erinnerungen</h1>
        <p>Erhalte Benachrichtigungen für deine wichtigsten Aufgaben und Termine.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/todos" className={styles.backButton}>
          ← Zurück zu Todos
        </Link>
      </div>
    </div>
  );
}

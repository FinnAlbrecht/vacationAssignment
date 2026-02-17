import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function StatisticsPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>📊</div>
        <h1>Statistiken</h1>
        <p>Analysiere deine Produktivität und den Fortschritt deiner Aufgaben.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/todos" className={styles.backButton}>
          ← Zurück zu Todos
        </Link>
      </div>
    </div>
  );
}

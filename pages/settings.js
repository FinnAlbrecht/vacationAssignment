import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>⚙️</div>
        <h1>Einstellungen</h1>
        <p>Konfiguriere dein Konto und personalisiere dein Erlebnis.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/todos" className={styles.backButton}>
          ← Zurück zu Todos
        </Link>
      </div>
    </div>
  );
}

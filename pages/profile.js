import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>👤</div>
        <h1>Profil</h1>
        <p>Verwalte deine Benutzerinformationen und Präferenzen.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/todos" className={styles.backButton}>
          ← Zurück zu Todos
        </Link>
      </div>
    </div>
  );
}

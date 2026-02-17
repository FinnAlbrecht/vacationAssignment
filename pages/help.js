import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>❓</div>
        <h1>Hilfe & FAQ</h1>
        <p>Finde Antworten auf häufig gestellte Fragen und Anleitungen.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/todos" className={styles.backButton}>
          ← Zurück zu Todos
        </Link>
      </div>
    </div>
  );
}

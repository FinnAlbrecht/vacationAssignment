import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>📝</div>
        <h1>Blog</h1>
        <p>Lies spannende Artikel und Updates auf unserem Blog.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

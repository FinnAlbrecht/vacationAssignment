import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>👥</div>
        <h1>Community</h1>
        <p>Vernetze dich mit anderen ToDoodle-Nutzern und teile deine Erfahrungen.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

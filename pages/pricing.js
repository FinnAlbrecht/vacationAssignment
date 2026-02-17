import styles from "./coming-soon.module.css";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <div className={styles.icon}>💰</div>
        <h1>Preisgestaltung</h1>
        <p>Wähle den perfekten Plan für deine Bedürfnisse.</p>
        <p className={styles.subtext}>Diese Funktion kommt bald...</p>
        <Link href="/" className={styles.backButton}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

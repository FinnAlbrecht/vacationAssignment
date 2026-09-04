import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>ToDoodle</h2>
          <p>Deine Kreativität in Aktion</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Produkt</h3>
            <ul>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Preisgestaltung</Link></li>
              <li><Link href="/roadmap">Roadmap</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Hilfe & Support</h3>
            <ul>
              <li><Link href="/helpcenter">Help Center</Link></li>
              <li><Link href="/tutorials">Tutorials</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Unternehmen</h3>
            <ul>
              <li><Link href="/about">Über uns</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Rechtliches</h3>
            <ul>
              <li><Link href="/privacy">Datenschutz</Link></li>
              <li><Link href="/terms">Nutzungsbedingungen</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 ToDoodle. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

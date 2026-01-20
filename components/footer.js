import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <h2>ToDoodle. Deine Kreativität in Aktion!</h2>
        </div>
        <div>
          <Link href="/helpcenter">Help Center</Link>
          <Link href="/tutorials">Tutorials</Link>
          <Link href="/support">Support</Link>          
          <Link href="/impressum"> Impressum</Link>
        </div>
        <div>
          <p>&copy; 2024 ToDoodle. All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
}

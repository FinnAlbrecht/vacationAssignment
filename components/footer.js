import { useRouter } from "next/router";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ToDoodle}>
          <h2>ToDoodle. Deine Kreativität in Aktion!</h2>
        </div>

        <div>
          <Link href="/helpcenter">Help Center</Link>
          <Link href="/tutorials">Tutorials</Link>
          <Link href="/support">Support</Link>

          <div className={styles.impresum}>
            <Link href="/impressum"> Impressum</Link>
          </div>
        </div>

        <div className={styles.allRights}>
          <p>&copy; 2024 ToDoodle. All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
}

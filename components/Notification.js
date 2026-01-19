import styles from "./Notification.module.css";
import { useEffect, useState } from "react";

export default function Notification({ message, type = "info", duration = 4000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <div className={styles.content}>
        {type === "success" && <span className={styles.icon}>✓</span>}
        {type === "error" && <span className={styles.icon}>✕</span>}
        {type === "info" && <span className={styles.icon}>ℹ</span>}
        {type === "warning" && <span className={styles.icon}>⚠</span>}
        <p className={styles.message}>{message}</p>
      </div>
      <button
        className={styles.closeBtn}
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}

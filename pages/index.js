import styles from "./index.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Prüfe ob Benutzer angemeldet ist
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.mainTitle}>
                            Verwalte deine Ferien <span className={styles.highlight}>mühelos</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Organisiere, plane und verwalte deine Ferienaufträge an einem zentralen Ort.
                            Behalte den Überblick über alle deine Aufgaben und Zeitpläne.
                        </p>
                        <div className={styles.ctaButtons}>
                            {isLoggedIn ? (
                                <Link href="/todos" className={styles.ctaPrimary}>
                                    Zu meinen Aufträgen
                                </Link>
                            ) : (
                                <>
                                    <Link href="/register" className={styles.ctaPrimary}>
                                        Jetzt starten
                                    </Link>
                                    <Link href="/login" className={styles.ctaSecondary}>
                                        Anmelden
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <div className={styles.imagePlaceholder}>
                            <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="20" y="40" width="260" height="200" rx="10" fill="#E8F0FF" stroke="#667eea" strokeWidth="2"/>
                                <circle cx="80" cy="100" r="20" fill="#667eea"/>
                                <rect x="120" y="85" width="140" height="15" rx="7" fill="#667eea"/>
                                <rect x="120" y="110" width="120" height="10" rx="5" fill="#E0E7FF"/>
                                <rect x="40" y="150" width="50" height="50" rx="8" fill="#764ba2" opacity="0.2"/>
                                <rect x="110" y="160" width="50" height="40" rx="8" fill="#764ba2" opacity="0.3"/>
                                <rect x="180" y="155" width="50" height="45" rx="8" fill="#764ba2" opacity="0.15"/>
                                <text x="150" y="280" fontSize="14" fill="#667eea" textAnchor="middle" fontWeight="bold">
                                    Deine Aufträge übersichtlich
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>Warum Vacation Assignment?</h2>
                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📋</div>
                        <h3>Aufträge verwalten</h3>
                        <p>Erstelle, bearbeite und verwalte deine Ferienaufträge zentral. Halte alle deine Aufgaben immer im Griff.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>⏰</div>
                        <h3>Zeitmanagement</h3>
                        <p>Verwalte Zeitpläne und Fristen effizient. Bleibe immer auf dem Laufenden mit deinen anstehenden Aufgaben.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📊</div>
                        <h3>Übersichtliches Dashboard</h3>
                        <p>Hast einen Überblick über alle deine Aufträge auf einen Blick. Sortiere und filtere nach deinen Bedürfnissen.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🔒</div>
                        <h3>Sichere Verwaltung</h3>
                        <p>Deine Daten sind sicher und geschützt. Melde dich an und verwalte deine Aufträge privat.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>✏️</div>
                        <h3>Einfache Bearbeitung</h3>
                        <p>Passe deine Aufträge jederzeit an. Intuitive Bedienung für schnelle und einfache Verwaltung.</p>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🎯</div>
                        <h3>Fokussiert arbeiten</h3>
                        <p>Konzentriere dich auf das Wesentliche. Minimalistisches Design für maximale Produktivität.</p>
                    </div>
                </div>
            </section>

            {/* How it works Section */}
            <section className={styles.howItWorks}>
                <h2 className={styles.sectionTitle}>So funktioniert's</h2>
                <div className={styles.stepsContainer}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3>Registrieren</h3>
                        <p>Erstelle dein kostenloses Konto in wenigen Sekunden.</p>
                    </div>
                    <div className={styles.stepConnector}></div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3>Aufträge hinzufügen</h3>
                        <p>Erstelle neue Ferienaufträge mit allen wichtigen Details.</p>
                    </div>
                    <div className={styles.stepConnector}></div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3>Verwalten & organisieren</h3>
                        <p>Bearbeite, sortiere und überblicke alle deine Aufträge.</p>
                    </div>
                    <div className={styles.stepConnector}></div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>4</div>
                        <h3>Erfolg!</h3>
                        <p>Behalte alles im Griff und arbeite produktiv.</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.stats}>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>100%</div>
                    <div className={styles.statLabel}>Produktiv</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>∞</div>
                    <div className={styles.statLabel}>Aufträge</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>24/7</div>
                    <div className={styles.statLabel}>Verfügbar</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNumber}>🚀</div>
                    <div className={styles.statLabel}>Schnell</div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <h2>Bereit zu starten?</h2>
                <p>Vereinfache deine Ferienverwaltung heute noch!</p>
                {isLoggedIn ? (
                    <Link href="/todos" className={styles.ctaLarge}>
                        Zu meinen Aufträgen
                    </Link>
                ) : (
                    <Link href="/register" className={styles.ctaLarge}>
                        Kostenlos registrieren
                    </Link>
                )}
            </section>
        </div>
    );
}

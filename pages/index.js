import { useState, useEffect } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { useNotification } from "../components/NotificationContainer";
import { getAllPosts } from "../lib/api/posts";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    const { addNotification } = useNotification();

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const posts = await getAllPosts();
                
                // Sortiere die Beiträge nach Datum und Uhrzeit
                const sortedPosts = posts.sort((a, b) => {
                    // Kombiniere Datum und Uhrzeit in einem Format, das sortiert werden kann
                    const dateA = new Date(`${a.date} ${a.time}`);
                    const dateB = new Date(`${b.date} ${b.time}`);
                    return dateA - dateB;
                });

             
                setPosts(sortedPosts);
            } catch (e) {
                addNotification("Beiträge konnten nicht geladen werden", "error", 4000);
            }
        };
        loadPosts();
    }, [addNotification]);

    return (
        <div className={styles.placeholder}>
            <h1 className={styles.title}>Coming Soon</h1>
            <p className={styles.subtitle}>Etwas Großartiges ist in Arbeit. Bleib dran!</p>
        </div>
    );
}

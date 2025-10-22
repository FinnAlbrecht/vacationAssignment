import { getAllPosts } from "../lib/api/posts";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);

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
                alert("Could not load posts!");
            }
        };
        loadPosts();
    }, []);

    return (
        <div className={styles.todos}>
            <h1 className={styles.header}>Welcome to your Todolist!</h1>
            <section className={styles.todoSection}>
                {posts.map(post => {
                    return (
                        <article key={post.id} className={styles.todo}>
                            <h2 className={styles.postTitle}>
                                {post.title}
                            </h2>
                            <p className={styles.postDescription}>
                                {post.description.substring(0, 100) + "..."}
                            </p>
                            <p className={styles.postTime}>
                                {post.time} {post.date}
                            </p>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}

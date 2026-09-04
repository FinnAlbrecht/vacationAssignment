import { useSortedPosts } from "../lib/hooks/posts";
import styles from "./index.module.css";

export default function IndexPage() {
    const posts = useSortedPosts();

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

import { getAllPosts } from "../lib/api/posts";
import { useEffect, useState } from "react";
import styles from "./todos.module.css";
import Link from "next/link";

const getCategoryEmoji = (categorie) => {
  switch (categorie.toLowerCase()) {
    case 'haushalt':
      return '🏠';
    case 'gesundheit':
      return '💪';
    case 'arbeit':
      return '💼';
    case 'allgemein':
      return '📝';
    default:
      return '📌';
  }
};

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getAllPosts();

        const sortedPosts = posts.sort((a, b) => {
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
    <div className={styles.posts}>
      <h1 className={styles.header}>Welcome to your Todolist!</h1>
      <div className={styles.createButton}>
        <Link href="/todos/create">➕ Create new Todo</Link>
      </div>
      <section className={styles.postSection}>
        {posts.map((post) => {
          return (
            <article key={post.id} className={styles.post}>
              <div className={styles.postHeader}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.category}>{getCategoryEmoji(post.categorie)} {post.categorie}</span>
              </div>
              <p className={styles.postDescription}>
                {post.description.length > 100 ? post.description.substring(0, 100) + "..." : post.description}
              </p>
              <div className={styles.postFooter}>
                <p className={styles.postTime}>
                  🕒 {post.time} on {post.date}
                </p>
                <Link href={`/todos/${post.id}`} className={styles.readMore}>Read more</Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

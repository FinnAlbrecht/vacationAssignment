import { getAllPosts } from "../lib/api/posts";
import { useEffect, useState } from "react";
import styles from "./todos.module.css";
import Link from "next/link";

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
      <section className={styles.postSection}>
        {posts.map((post) => {
          return (
            <article key={post.id} className={styles.post}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDescription}>
                {post.description.substring(0, 100) + "..."}
              </p>
              <p className={styles.postTime}>
                {post.time} {post.date}
              </p>

              <Link href={`/todos/${post.id}`}> read more</Link>
              &nbsp;

              <Link href="./todos/create">Create new post</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";

function sortByDateTime(posts) {
  return [...posts].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });
}

export function useSortedPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(sortByDateTime(data));
      } catch (e) {
        alert("Could not load posts!");
      }
    };
    loadPosts();
  }, []);

  return posts;
}

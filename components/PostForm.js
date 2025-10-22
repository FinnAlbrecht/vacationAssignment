import { createPost, updatePost } from "../lib/api/posts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./PostForm.module.css";

const defaultModel = {
  title: "",
  time: "",
  date: "",
  description: "",
  categorie: "",
};

function validateModel(post) {
  const errors = {
    title: "",
    time: "",
    date: "",
    description: "",
    categorie: "",
  };
  let isValid = true;

  if (post.title.trim().length === 0) {
    errors.title = "Title cant't be empty";
    isValid = false;
  }

  if (post.time.trim().length === 0) {
    errors.time = "Time cant't be empty";
    isValid = false;
  }
  if (post.date.trim().length === 0) {
    errors.date = "date cant't be empty";
    isValid = false;
  }

  if (post.categorie.trim().length === 0) {
    errors.categorie = "categorie cant't be empty";
    isValid = false;
  }

  if (post.description.trim().length === 0) {
    errors.description = "description cant't be empty";
    isValid = false;
  }
  

  return { errors, isValid };
}

export default function PostForm({ postToEdit }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(defaultModel);
  const [post, setPost] = useState(defaultModel);

  useEffect(() => {
    if (postToEdit) {
      setPost(postToEdit);
    }
  }, [postToEdit]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(defaultModel);

    const result = validateModel(post);

    if (!result.isValid) {
      setErrors(result.errors);
      setIsLoading(false);
      return;
    }

    if (post.id) {
      try {
        await updatePost(post);
        alert("Post updated!");
        router.push(`/posts/${post.id}`);
      } catch (e) {
        alert("Could not update post");
      }
    } else {
      try {
        const newPost = await createPost(post);
        alert("Post created!");
      } catch (e) {
        alert("Could not create post");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.postform}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={post.title}
          />

          {errors.title && <div className={styles.error}>{errors.title}</div>}
        </fieldset>

        <fieldset>
          <label>time:</label>
          <input name="time" onChange={handleChange} value={post.time} />

          {errors.time && <div className={styles.error}>{errors.time}</div>}
        </fieldset>


        <fieldset>
          <label>date:</label>
          <input name="date" onChange={handleChange} value={post.date} />

          {errors.date && <div className={styles.error}>{errors.date}</div>}
        </fieldset>



        <fieldset>
          <label>description:</label>
          <input name="description" onChange={handleChange} value={post.description} />

          {errors.description && <div className={styles.error}>{errors.description}</div>}
        </fieldset>
        <fieldset>
          <label>categorie:</label>
          <input name="categorie" onChange={handleChange} value={post.categorie} />

          {errors.categorie && <div className={styles.error}>{errors.categorie}</div>}
        </fieldset>

        <button disabled={isLoading}>
          {isLoading ? "...Loading" : "Submit"}
        </button>
      </form>
    </div>
  );
}

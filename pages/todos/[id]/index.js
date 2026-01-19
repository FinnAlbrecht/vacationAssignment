import { deletePost, getPostById } from "../../../lib/api/posts"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./index.module.css"
import { useNotification } from "../../../components/NotificationContainer"

export default function ToDoPage() {
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState(null)
    const { addNotification } = useNotification()

    useEffect(() => {
        if (!id) return

        const loadPost = async () => {
            try {
                const post = await getPostById(id)
                setPost(post)
            } catch (e) {
                console.log(e)
                if (e.status === 404) router.push("/404")
            }
        }
        loadPost()
    }, [id])

    const handleDeleteClick = async (e) => {
        e.preventDefault()
        if (confirm("Post wirklich löschen?")) {
            try {
                await deletePost(post.id)
                addNotification("Post gelöscht!", "success", 3000)
                router.push("/")
            }
            catch (e) {
                addNotification("Ein Fehler ist aufgetreten", "error", 4000)
            }
        }
    }


    return post &&(
        <div className={styles.idPage}>
            <article>
            

            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.time} {post.date}</p>
            <p>{post.categorie}</p>

            <div className={styles.admin}>
                <Link href={`/todos/${post.id}/edit`} className="button">
                    Edit
                </Link>

                <a href="" className="button" onClick={handleDeleteClick}>Delete</a>
            </div>
          
            
        </article>

            
            
        </div>

    )
}
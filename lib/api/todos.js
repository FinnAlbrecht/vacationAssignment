export async function getAllPosts() {
    const response = await fetch(`/api/todos`)

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function getPostById(id) {
    const response = await fetch(`/api/todos/${id}`)

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function createPost(post) {
    const response = await fetch(`/api/todos`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function updatePost(post) {
    const response = await fetch(`/api/todos/${post.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function deletePost(id) {
    const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

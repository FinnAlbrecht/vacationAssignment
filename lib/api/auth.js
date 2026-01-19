const URL = process.env.NEXT_PUBLIC_API_URL

if (!URL) {
    throw new Error(
        "Environment variable NEXT_PUBLIC_API_URL is not set. Add .env.local with NEXT_PUBLIC_API_URL and restart the dev server."
    )
}

export async function login({ email, password }) {
    const response = await fetch(`/api/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ email, password })
    })

    const text = await response.text();
    let data;
    try {
        data = JSON.parse(text);
    } catch (e) {
        throw new Error(`Unexpected response: ${text.substring(0, 100)}`);
    }

    if (!response.ok) {
        throw new Error(data.message || `Login failed with status ${response.status}`);
    }

    return data
}

export async function register(model) {
    const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(model)
    })

    const text = await response.text();
    let data;
    try {
        data = JSON.parse(text);
    } catch (e) {
        throw new Error(`Unexpected response: ${text.substring(0, 100)}`);
    }

    if (!response.ok) {
        throw new Error(data.message || `Registration failed with status ${response.status}`);
    }

    return data
}


export async function checkoutPay(model) {
    const response = await fetch(`/api/checkout`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(model)
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}



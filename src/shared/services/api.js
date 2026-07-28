const BASE_URL = "http://localhost:3001";
// const BASE_URL = "https://fakestoreapi.com";

export async function api(endpoint, options = {}) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        // No Content (204)
        if (response.status === 204) {
            return null;
        }

        return await response.json();
    } catch (error) {
        if (error.name === "TypeError") {
            throw new Error("Network error. Please check your internet connection.", {
                cause: error,
            });
        }

        throw error;
    }
}
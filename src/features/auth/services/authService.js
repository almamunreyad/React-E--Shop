export async function login(email, password) {
    // Network Delay দেখানোর জন্য
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === "reyad@gmail.com" && password === "123456") {
        return {
            token: "fake-jwt-token",
            user: {
                id: 1,
                name: "Reyad",
                email: "reyad@gmail.com",
            }
        }
    }

    throw new Error("Invalid email or password!!");

}
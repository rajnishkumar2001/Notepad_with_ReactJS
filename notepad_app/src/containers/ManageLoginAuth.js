


export default async function LoginFetch(data) {
    // localStorage.removeItem("accessToken");
    const response = await fetch("http://127.0.0.1:8000/auth/login/", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
    if(response.ok === true){
        const result = await response.json()
        const accessToken = result.login_data.tokens.access
        localStorage.setItem("accessToken", accessToken)
    }
    return response
}


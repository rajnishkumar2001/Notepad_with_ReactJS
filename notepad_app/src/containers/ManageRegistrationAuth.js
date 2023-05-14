
export default async function RegisterFetch(data) {
    const responses = await fetch("http://127.0.0.1:8000/auth/register/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
    // if (responses.ok === true) {
    //     // return response.json()
    //     // const data ={email:responses.json().then(result=>{return result.email})} 
    //     // await fetch("http://127.0.0.1:8000/auth/register-notes/", {
    //     //     method: "POST",
    //     //     body: JSON.stringify(data),
    //     //     headers: {
    //     //         "Content-Type": "application/json",
    //     //     },
    //     // }).then(results=>{results.json()})
    // }

}
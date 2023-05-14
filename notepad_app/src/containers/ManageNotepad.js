import jwt from 'jwt-decode'

async function ManageNotepad(notes) {
    const token = localStorage.getItem('accessToken')
    const data = jwt(token)
    //Ckecking for user is active or not
    const response = await fetch(`http://127.0.0.1:8000/auth/notepad/${data.user_id}`, {
        method: "GET",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => { return response.json() }).then(result => { return result })
    if (response.msg === "notes account isn't available") {
        const payload = {user: data.user_id, notes: "Welcome to the AI Notepad."}
        await fetch(`http://127.0.0.1:8000/auth/notepad/${data.user_id}`, {
            method: "POST",
            cache: "no-cache",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    // setInterval(()=>{
    //     const payload = {user: data.user_id, notes: notes}
    //     fetch(`http://127.0.0.1:8000/auth/notepad/${data.user_id}`, {
    //         method: "PUT",
    //         cache: "no-cache",
    //         body: JSON.stringify(payload),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).then(response => { return response.json() })
    // },500000)
    
}
export default ManageNotepad
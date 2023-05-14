import React, { useState } from 'react'
import '../App.css'
import SpinnerComponent from './SpinnerComponent'

function NotepadHome() {
    const [data, setData] = useState("");
    const [responseData, setResponseData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('accessToken')
    var searchResult = Object;
    if (data !== "") {
        searchResult = () => {
            setResponseData("")
            setIsLoading(false)
            const payload = { query: data }
            fetch("http://127.0.0.1:8000/auth/openai/", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(response => response.json()
            ).then((data) => {
                if (data !== "") {
                    setIsLoading(true);
                    setResponseData(data);
                }
            });
        }
    } else {
        searchResult = () => {
            setResponseData("Please Search any query, your current search is invalid.")
        }
    }




    return (
        <>
            <div className='main'>
                <center><h1>AI Notepad</h1></center>
                <div>
                    <center>
                        <input type="text" value={data} onChange={(e) => setData(e.target.value)} style={{ width: "500px", border: "bold solid", borderRadius: "10px", backgroundColor: "antiquewhite", float: "inherit" }} placeholder="You can right any query here!" />
                        <button className='' onClick={searchResult} >Search</button>
                    </center>
                </div>
                {
                    (token) && (
                        <>
                            <button className='save' style={{ width: "10rem", float: "inherit", position: "relative", left: "35rem" }} onClick="">Clear Notes</button>
                            <button className='save' style={{ width: "10rem", float: "inherit", position: "relative", left: "35rem" }} onClick="">Notepad Editor</button>
                        </>
                    )
                }

                <div className='notepad-card container'>
                    {
                        (responseData !== "") && (
                            (<pre style={{ overflow: "initial" }}>{responseData}</pre>)
                        ) || (isLoading === false) && <SpinnerComponent />
                    }
                </div>
            </div>
        </>
    )
}

export default NotepadHome;
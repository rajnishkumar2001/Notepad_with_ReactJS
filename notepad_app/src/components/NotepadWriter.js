import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import '../Notepad.css'
import ManageNotepad from '../containers/ManageNotepad'

function NotepadWriter() {
    const [notes, setNotes] = useState("")
    const token = localStorage.getItem('accessToken')
    const notesData = [];

    if (token) {
        if (notes !== "") {
            ManageNotepad(notes)
        }
        const data = jwt(token)
        if (notesData[0] !== notes) {
            const payload = { user: data.user_id, notes: notes }
            fetch(`http://127.0.0.1:8000/auth/notepad/${data.user_id}`, {
                method: "PUT",
                cache: "no-cache",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        }

    }
    useEffect(() => {
        if (token) {
            const data = jwt(token)
            fetch(`http://127.0.0.1:8000/auth/notepad/${data.user_id}`, {
                method: "GET",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(response => { return response.json() }).then(result => {
                if (notesData.length === 0) {
                    notesData.push(result)
                }
                else {
                    notesData[0] = result
                }
                setNotes(result)
            })
        }
    }, [])

    return (
        <>
            <div className='natepad' style={{ height: "50rem" }}>
                {
                    (token) && (

                        <textarea id="area"
                            onChange={(e) => setNotes(e.target.value)}
                            name="S1"
                            className="notes"
                            style={{ fontSize: "14px", fontFamily: "Arial", fontWeight: "normal" }}
                            value={notes && notes}
                        />

                    ) || (!token) && (
                        <textarea
                            id="area"
                            onChange={(e) => setNotes(e.target.value)}
                            name="S1"
                            className="notes"
                            style={{ fontSize: "14px", fontFamily: "Arial", fontWeight: "normal" }}
                        />
                    )
                }
            </div>
        </>
    )
}

export { NotepadWriter }
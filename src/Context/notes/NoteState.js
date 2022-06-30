import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    // syantax = fetch(url, {method, headers, body});

    // ****************************************** Get all notes ******************************************
    const [notes, setNotes] = useState([]);

    const getAllNotes = async () => {
        let result = await fetch(`http://localhost:5000/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiODU4MDA0NDY5MjQ5YTgxZjZhZDUiLCJpYXQiOjE2NTY1ODQyNjl9._Nl6qyrkUOXLS130QbPYCZwGeeU11Sc2AwthCpBV4ws"
            }
        })
        result = await result.json();
        // console.log(result);
        setNotes(result);
    }

    // ****************************************** Add a note ******************************************
    const addNote = async (title, description) => {

        // API call
        let result = await fetch(`http://localhost:5000/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiODU4MDA0NDY5MjQ5YTgxZjZhZDUiLCJpYXQiOjE2NTY1ODQyNjl9._Nl6qyrkUOXLS130QbPYCZwGeeU11Sc2AwthCpBV4ws"
            },
            body: JSON.stringify({ title: title, description: description })
        })
        result = await result.json();
        console.log(result);

    }

    // ****************************************** Delete a note ******************************************
    const deleteNote = async (id) => {

        // API call
        let result = await fetch(`http://localhost:5000/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/JSON",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiODU4MDA0NDY5MjQ5YTgxZjZhZDUiLCJpYXQiOjE2NTY1ODQyNjl9._Nl6qyrkUOXLS130QbPYCZwGeeU11Sc2AwthCpBV4ws"
            }
        });
        result = await result.json();
        console.log(result);

    }

    // ****************************************** Edit a note ******************************************
    const updateNote = async (id, title, description) => {

        // API call
        let result = await fetch(`http://localhost:5000/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/JSON",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmFiODU4MDA0NDY5MjQ5YTgxZjZhZDUiLCJpYXQiOjE2NTY1ODQyNjl9._Nl6qyrkUOXLS130QbPYCZwGeeU11Sc2AwthCpBV4ws"
            },
            body: JSON.stringify({ title: title, description: description })
        });
        result = await result.json();
        console.log(result);
    }



    return (
        <NoteContext.Provider value={{ notes, getAllNotes, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NoteItem from "./NoteItem";
import noteContext from "../Context/notes/noteContext";

const Home = () => {

    const context = useContext(noteContext);
    const { notes, getAllNotes } = context;

    useEffect(()=>{
        getAllNotes();
    })

    return (
        <>
            <div className="container">
                <NavLink to="/addnote">Add New Note</NavLink>
                <h2>Your notes</h2>
                <div className="notes">
                    {
                        notes.length === 0 ? "No notes to display please add a note":
                        notes.map((note) => {
                            return (<NoteItem key={note._id} note={note} />)
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Home;
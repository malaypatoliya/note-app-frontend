import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NoteItem from "./NoteItem";
import noteContext from "../Context/notes/noteContext";

const Home = () => {

    const context = useContext(noteContext);
    const { notes, getAllNotes } = context;
    const nevigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            getAllNotes();
        }
        else{
            nevigate("/login");
        }
    })

    return (
        <>
            <div className="container">
                <NavLink to="/addnote">Add New Note</NavLink>
                <h2>Your notes</h2>
                <div className="notes">
                    {notes.length > 0 ?
                        notes.map((note) => {
                            return (<NoteItem key={note._id} note={note} />)
                        }) : ""
                    }
                    {notes.length < 0 ? "No notes to display please add a note" : ""}
                </div>
            </div>
        </>
    )
}
export default Home;
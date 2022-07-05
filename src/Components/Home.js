import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NoteItem from "./NoteItem";
import noteContext from "../Context/notes/noteContext";

const Home = () => {

    const context = useContext(noteContext);
    const { notes, getAllNotes } = context;
    const nevigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAllNotes();
        }
        else {
            nevigate("/login");
        }
    })

    return (
        <>
            <div className="main btnAddAlign">
                <NavLink to="/addnote" className="btn"><i className="fas fa-plus"></i>Add New Note</NavLink>
                {
                    notes.length > 0 ?
                        <h2 className="homeTitle">Your Notes</h2> : ""
                }
            </div>

            <div className="main">
                <div className="noteContainer">
                    {notes.length > 0 ?
                        notes.map((note) => {
                            return (<NoteItem key={note._id} note={note} />)
                        }) : ""
                    }
                </div>
                {notes.length === 0 ?
                    <>
                        <div className="noNote">
                            <i class="fas fa-book"></i>
                            <span>Please Add a Note</span>
                        </div>
                    </>
                    : ""}

            </div>
        </>
    )
}
export default Home;
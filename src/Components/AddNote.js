import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../Context/notes/noteContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const {addNote} = context;
    const nevigate = useNavigate();
    const [note, setNote] = useState({title:"", description:""});

    // getValue from states
    const getValues = (e)=>{
        setNote({...note, [e.target.name]: e.target.value});
    }

    // click handler
    const Handler = (e)=>{
        e.preventDefault();

        addNote(note.title, note.description);
        nevigate("/");
    }

    // close function
    const close = ()=>{
        nevigate("/");
    }


    return (
        <>
            <div className="container-fluid m-auto mt-5">
                <form className="formWidth m-auto">
                    <h2 className="Heading">Add a New Note</h2>
                    <label className="form-label" htmlFor="title">Note Title:</label>
                    <input className="form-control mb-3" type="text" id="title" name="title" minLength={3} required onChange={getValues} />

                    <label className="form-label" htmlFor="description">Note Description:</label>
                    <textarea className="form-control mb-3" rows="4" cols="50" type="text" id="description" minLength={5} required name="description" onChange={getValues} />

                    <button className="btn SKY" disabled={note.title.length<3 || note.description.length<5} onClick={Handler}>Add Note</button>
                    <button className='btn btn-danger mx-3' onClick={close}>close</button>
                </form>
            </div>
        </>
    )
}

export default AddNote;
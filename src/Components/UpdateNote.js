import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import noteContext from '../Context/notes/noteContext';

const UpdateNote = () => {

    const context = useContext(noteContext);
    const { notes, updateNote } = context;
    const params = useParams();
    const nevigate = useNavigate();
    const [editnote, setEditNote] = useState({title:"123", description:"12345"});

    // Get the title and description from user id
    useEffect(() => {
        const oneNote = notes.filter((note) => {
            return (note._id === params.id)
        })
        // console.log(oneNote);
        setEditNote({
            title: oneNote[0].title,
            description: oneNote[0].description
        })
        // eslint-disable-next-line
    }, [])

    // getValue from states (override the title & description value)
    const getValues = (e) => {
        setEditNote({ ...editnote, [e.target.name]: e.target.value });
    }

    // click handler
    const Handler = (e) => {
        e.preventDefault();
        // console.log(editnote.title.length);
        updateNote(params.id, editnote.title, editnote.description);
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
                    <h2 className="Heading">Update a Note</h2>
                    <label className="form-label" htmlFor="title">Title:</label>
                    <input className="form-control mb-3" type="text" id="title" name="title" minLength={3} required value={editnote.title} onChange={getValues} />

                    <label className="form-label" htmlFor="description">Description:</label>
                    <textarea className="form-control mb-3" rows="4" cols="50" type="text" id="description" name="description" minLength={5} required value={editnote.description} onChange={getValues} />

                    <button className="btn SKY" disabled={editnote.title.length<3 || editnote.description.length<5} onClick={Handler}>Update Note</button>
                    <button className='btn btn-danger mx-3' onClick={close}>close</button>
                </form>
            </div>
        </>
    )
}

export default UpdateNote;
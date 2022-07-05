import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import alertContext from '../Context/alerts/alertContext';
import noteContext from '../Context/notes/noteContext';

const UpdateNote = () => {

    const context = useContext(noteContext);
    const { notes, updateNote } = context;

    const AlertContext = useContext(alertContext);
    const { showAlert } = AlertContext;

    const params = useParams();
    const nevigate = useNavigate();
    const [editnote, setEditNote] = useState({ title: "123", description: "12345" });

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
    const Handler = async (e) => {
        e.preventDefault();
        let errMsg = "";
        if (editnote.title.length < 4) {
            errMsg = "Title must be more than 4 characters"
        } else if (editnote.description.length < 5) {
            errMsg = "Description  must be more than 5 characters"
        }
        if (errMsg) {
            showAlert("danger", errMsg, 3000);
        }
        if (errMsg === "") {
            const response = await updateNote(params.id, editnote.title, editnote.description);
            if (response.success) {
                showAlert("success", response.Msg, 3000);
                nevigate("/");
            } else {
                showAlert("danger", response.Error, 3000);
            }
        }
    }

    // close function
    const close = () => {
        nevigate("/");
    }

    return (
        <>
            <div className="main">
                <div className="formClass">

                    <h2 className="formTitle">Update a Note</h2>
                    <label className="formLabel" htmlFor="title">Note Title:</label>
                    <input className="formInput" type="email" id="title" name="title" required value={editnote.title} onChange={getValues} />

                    <label className="formLabel" htmlFor="description">Note Description:</label>
                    <textarea className="formInput"  rows="5" cols="50" type="text" id="description" name="description" required  value={editnote.description} onChange={getValues} />

                    <div className="btnContainer">
                        <button disabled={editnote.title.length < 1 || editnote.description.length < 1} className="btn" onClick={Handler}><i className="fas fa-sign-in-alt"></i>Update</button>
                        <button className='btn btn-red' onClick={close}><i class="fas fa-times"></i>close</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UpdateNote;
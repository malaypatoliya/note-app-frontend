import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import alertContext from '../Context/alerts/alertContext';
import noteContext from '../Context/notes/noteContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const { addNote } = context;

    const AlertContext = useContext(alertContext);
    const { showAlert } = AlertContext

    const nevigate = useNavigate();
    const [note, setNote] = useState({ title: "", description: "" });

    // getValue from states
    const getValues = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    // click handler
    const Handler = async (e) => {
        e.preventDefault();
        let errMsg = "";
        if (note.title.length < 4) {
            errMsg = "Note title should be more then 4 character"
        } else if (note.description.length < 5) {
            errMsg = "Note description should be more then 5 character"
        }
        if (errMsg) {
            showAlert("danger", errMsg, 3000);
        }

        if (errMsg === "") {
            const response = await addNote(note.title, note.description);
            if (response.success) {
                showAlert("success", response.Msg, 3000)
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
            {/* <div className="container-fluid m-auto mt-5">
                <form className="formWidth m-auto">
                    <h2 className="Heading">Add a New Note</h2>
                    <label className="form-label" htmlFor="title">Note Title:</label>
                    <input className="form-control mb-3" type="text" id="title" name="title" required onChange={getValues} />

                    <label className="form-label" htmlFor="description">Note Description:</label>
                    <textarea className="form-control mb-3" rows="4" cols="50" type="text" id="description" required name="description" onChange={getValues} />

                    <button className="btn SKY" disabled={note.title.length < 1 || note.description.length < 1} onClick={Handler}>Add Note</button>
                    <button className='btn btn-danger mx-3' onClick={close}>close</button>
                </form>
            </div> */}

            <div className="main">
                <div className="formClass">

                    <h2 className="title">Add a Note</h2>
                    <label className="formLabel" htmlFor="title">Note Title:</label>
                    <input className="formInput" type="email" id="title" name="title" required onChange={getValues} />

                    <label className="formLabel" htmlFor="description">Note Description:</label>
                    <textarea className="formInput"  rows="5" cols="50" type="text" id="description" name="description" required onChange={getValues} />

                    <div className="btnContainer">
                        <button disabled={note.title.length < 1 || note.description.length < 1} className="btn" onClick={Handler}><i className="fas fa-sign-in-alt"></i>Add</button>
                        <button className='btn' onClick={close}><i class="fas fa-times"></i>close</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddNote;
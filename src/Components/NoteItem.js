import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import alertContext from '../Context/alerts/alertContext';
import noteContext from '../Context/notes/noteContext';

const NoteItem = (props) => {

    const context = useContext(noteContext);
    const { deleteNote } = context;

    const AlertContext = useContext(alertContext);
    const { showAlert } = AlertContext;

    const { title, description, _id } = props.note;

    const deleteHandler = () => {
        deleteNote(_id);
        showAlert("danger", "Note deleted successfully", 3000)
    }

    return (
        <>
            <div className="note">
                <h5 className="noteTitle">{title}</h5>
                <p className="noteDesc">{description}</p>
                <div className="btnNoteContainer">
                    <p className="btn-note delete" onClick={deleteHandler}><i className="fas fa-trash-alt"></i></p>
                    <NavLink to={`/updatenote/${_id}`} className="btn-note update"><i className="fas fa-edit"></i></NavLink>
                    <NavLink to={`/view/${_id}`} className="btn-note view"><i className="fas fa-eye"></i></NavLink>
                </div>
            </div>
        </>
    )
}

export default NoteItem
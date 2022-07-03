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
            <div className="col-md-3">
                <div className="card my-2">
                    <div className="card-body">
                        <h5 className="card-title" style={{ height: "50px", textOverflow: "ellipsis", overflow: "hidden" }}>{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className='d-flex'>
                            <NavLink to={`/updatenote/${_id}`} >update</NavLink>
                            <p onClick={deleteHandler}>delete</p>
                            <NavLink to={`/view/${_id}`} >view</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
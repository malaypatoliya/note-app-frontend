import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import noteContext from '../Context/notes/noteContext';

const NoteItem = (props) => {

    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { title, description, _id } = props.note;

    return (
        <>
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex'>
                        <NavLink to={`/updatenote/${_id}`} >update</NavLink>
                        <p onClick={() => { deleteNote(_id) }}>delete</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import noteContext from '../Context/notes/noteContext';

const View = () => {

    const context = useContext(noteContext);
    const { notes } = context;

    const params = useParams();
    const [note, setNote] = useState({ title: "", description: "" })

    useEffect(() => {
        const oneNote = notes.filter((note) => {
            return (note._id === params.id)
        })
        // console.log(oneNote);
        setNote({
            title: oneNote[0].title,
            description: oneNote[0].description
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="main">
                <div className="containClass">
                    <h2 className="detailTitle">Note Title:</h2>
                    <p className='details'>{note.title}</p>
                    <h2 className="detailTitle">Note Description:</h2>
                    <p className='details'>{note.description}</p>
                    <div className="userContainer">
                        <NavLink className="btn" to="/" ><i class="fas fa-home"></i>Back to Home</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View
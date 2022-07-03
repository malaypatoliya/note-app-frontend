import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
            <p>Title : {note.title}</p>
            <p>Description: {note.description}</p>
        </>
    )
}

export default View
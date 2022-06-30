import React, { useState } from 'react';

const AddNote = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [err, setErr] = useState(false);
    const Handler = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            setErr(true);
            return false; // stop execution 
        }
        
        console.log("Title:",title,"  Description:", desc);
    }


    return (
        <>
            <div className="container-fluid m-auto mt-5">
                <form className="formWidth m-auto">
                    <h2 className="Heading">Add a New Note</h2>
                    <label className="form-label" htmlFor="title">Title:</label>
                    <input className="form-control mb-3" type="text" id="title" name="title" onChange={(e) => { setTitle(e.target.value) }} />
                    {err && !title && <p className="errMsg">Enter valid email</p>}

                    <label className="form-label" htmlFor="desc">Description:</label>
                    <textarea className="form-control mb-3" rows="4" cols="50" type="text" id="desc" name="desc" onChange={(e) => { setDesc(e.target.value) }} />
                    {err && !desc && <p className="errMsg">Enter valid password</p>}

                    <button className="btn SKY" onClick={Handler}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote
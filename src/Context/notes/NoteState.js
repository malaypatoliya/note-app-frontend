import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const s = {
        "name": "malay",
        "std": "12"
    }

    // define state for export
    const [state, setState] = useState(s);

    // update state fuction for export
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name": "malay patoliya",
                "std": "4th year"
            })
        }, 3000)
    }

    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
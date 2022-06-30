import { useContext, useEffect } from "react";
import noteContext from "../Context/notes/noteContext";

const About = ()=>{

    const a = useContext(noteContext);

    useEffect(()=>{
        a.update();
        // eslint-disable-next-line
    }, [])


    return(
        <div>
            name = {a.state.name}
            <br />
            std = {a.state.std}
        </div>
    )
}
export default About;
import { NavLink } from "react-router-dom";

const Home = ()=>{

    
    return(
        <>
            <div className="container">
                <NavLink to="/addnote">Add New Note</NavLink>
                <h2>Your notes</h2>
                <div className="notes">
                    
                </div>
            </div>
        </>
    )
}
export default Home;
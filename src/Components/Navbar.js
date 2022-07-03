import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const nevigate = useNavigate();

    const auth = localStorage.getItem("token")

    const logoutFunc = () => {
        localStorage.removeItem("token");
        nevigate("/login");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light SKY" >
                <div className="container-fluid">
                    <span className="navbar-brand">Notes App</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            auth ?
                                <ul className="navbar-nav mw-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link ls-none" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link ls-none" to="/profile" >Profile</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link" onClick={logoutFunc} >Logout</p>
                                    </li>
                                </ul>
                                :""
                                // <ul className="navbar-nav mw-auto mb-2 mb-lg-0">
                                //     <li className="nav-item">
                                //         <NavLink className="nav-link ls-none" aria-current="page" to="/login">Login</NavLink>
                                //     </li>
                                //     <li className="nav-item">
                                //         <NavLink className="nav-link ls-none" to="/register">Sign Up</NavLink>
                                //     </li>
                                // </ul>
                        }



                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
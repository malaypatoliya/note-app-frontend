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
            <div className="header">
                <h1 id="logo"><i className="far fa-clipboard"></i> Note App</h1>
                <div className="navbar">
                    {
                        auth ?
                            <ul>
                                <NavLink to="/profile" ><i className="fas fa-user-alt"></i>Profile</NavLink>
                                <p onClick={logoutFunc} ><i className="fas fa-sign-out-alt"></i>Logout</p>
                            </ul> :

                            <ul>
                                <NavLink aria-current="page" to="/login"><i className="fas fa-sign-in-alt"></i>Login</NavLink>
                                <NavLink className="nav-link ls-none" to="/register"><i className="fas fa-user-plus"></i>Sign Up</NavLink>
                            </ul>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
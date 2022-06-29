import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="container-fluid m-auto mt-5">
                <form className="formWidth m-auto">
                    <h2 className="Heading">Create a new account</h2>

                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="form-control mb-3" type="text" id="name" name="name" />

                    <label className="form-label" htmlFor="eid">Email ID:</label>
                    <input className="form-control mb-3" type="email" id="eid" name="eid" />

                    <label className="form-label" htmlFor="pass1">New Password:</label>
                    <input className="form-control mb-3" type="password" id="pass1" name="pass1" />

                    <label className="form-label" htmlFor="pass2">Confirm Password:</label>
                    <input className="form-control mb-3" type="password" id="pass2" name="pass2" />

                    <button className="btn SKY">Register</button>
                    <div className="mt-1">Already have an account ? <NavLink to="/login">login</NavLink></div>
                </form>
            </div>
        </>
    )
}

export default Register
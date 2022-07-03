import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import alertContext from "../Context/alerts/alertContext";
import authContext from "../Context/auth/authContext";

const Register = () => {

    const registerContext = useContext(authContext);
    const { registerFunc } = registerContext;

    const context = useContext(alertContext);
    const { showAlert } = context;

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const nevigate = useNavigate();

    const getValues = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const registerHandler = (e) => {
        e.preventDefault();
        // console.log(credentials);
        registerFunc(credentials.name, credentials.email, credentials.password);
        nevigate("/login");
        showAlert("success", "User Created Successfully !!!")

    }

    return (
        <>
            <div className="container-fluid m-auto mt-5">
                <form onSubmit={registerHandler} className="formWidth m-auto">
                    <h2 className="Heading">Create a new account</h2>

                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="form-control mb-3" type="text" id="name" name="name" minLength={3} required onChange={getValues} />

                    <label className="form-label" htmlFor="email">Email ID:</label>
                    <input className="form-control mb-3" type="email" id="email" name="email" minLength={5} required onChange={getValues} />

                    <label className="form-label" htmlFor="password">New Password:</label>
                    <input className="form-control mb-3" type="password" id="password" name="password" minLength={4} required onChange={getValues} />

                    <label className="form-label" htmlFor="cpassword">Confirm Password:</label>
                    <input className="form-control mb-3" type="password" id="cpassword" name="cpassword" minLength={4} required onChange={getValues} />

                    <button type="submit" disabled={credentials.name.length < 3 || credentials.email.length < 5 || credentials.password.length < 4 || credentials.cpassword.length < 4} className="btn SKY">Register</button>
                    <div className="mt-1">Already have an account ? <NavLink to="/login">login</NavLink></div>
                </form>
            </div>
        </>
    )
}

export default Register
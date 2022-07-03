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

    const registerHandler = async (e) => {
        e.preventDefault();
        // console.log(credentials);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        let errMsg = "";

        if (!regex.test(credentials.email)) {
            errMsg = "This is not a valid email format";
        } else if (credentials.password.length < 4) {
            errMsg = "Password must be more than 4 characters"
        } else if (credentials.password.length > 10) {
            errMsg = "Password cannot excced more than 10 characters"
        } else if (credentials.password !== credentials.cpassword) {
            errMsg = "Password and confirm password should be same"
        }
        if (errMsg) {
            showAlert("danger", errMsg, 3000);
        }
        if (errMsg === "") {
            const response = await registerFunc(credentials.name, credentials.email, credentials.password);
            if (response.success) {
                showAlert("success", response.Msg, 3000)
                nevigate("/login");
            } else {
                showAlert("danger", response.Error, 3000)
            }
        }


    }

    return (
        <>
            <div className="container-fluid m-auto mt-5">
                <form className="formWidth m-auto">
                    <h2 className="Heading">Create a new account</h2>

                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="form-control mb-3" type="text" id="name" name="name" required onChange={getValues} />

                    <label className="form-label" htmlFor="email">Email ID:</label>
                    <input className="form-control mb-3" type="email" id="email" name="email" required onChange={getValues} />

                    <label className="form-label" htmlFor="password">New Password:</label>
                    <input className="form-control mb-3" type="password" id="password" name="password" required onChange={getValues} />

                    <label className="form-label" htmlFor="cpassword">Confirm Password:</label>
                    <input className="form-control mb-3" type="password" id="cpassword" name="cpassword" required onChange={getValues} />

                    <button type="submit" disabled={credentials.name.length < 1 || credentials.email.length < 1 || credentials.password.length < 1 || credentials.cpassword.length < 1} className="btn SKY" onClick={registerHandler}>Register</button>
                    <div className="mt-1">Already have an account ? <NavLink to="/login">login</NavLink></div>
                </form>
            </div>
        </>
    )
}

export default Register
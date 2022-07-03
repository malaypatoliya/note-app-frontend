import { NavLink, useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import alertContext from "../Context/alerts/alertContext";
import authContext from "../Context/auth/authContext";

const Login = () => {
    const loginContext = useContext(authContext);
    const { loginFunc } = loginContext;

    const context = useContext(alertContext);
    const { showAlert } = context;

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const nevigate = useNavigate();

    const getValues = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        let errMsg = "";

        if (!regex.test(credentials.email)) {
            errMsg = "This is not a valid email format";
        } else if (credentials.password.length < 4) {
            errMsg = "Password must be more than 4 characters"
        } else if (credentials.password.length > 10) {
            errMsg = "Password cannot excced more than 10 characters"
        }
        if (errMsg) {
            showAlert("danger", errMsg, 3000);
        }

        if (errMsg === "") {
            const response = await loginFunc(credentials.email, credentials.password);

            if (response.success) {
                // save auth token & redirect home page
                localStorage.setItem("token", response.authToken);
                showAlert("success", "Logged in successfully", 3000);
                nevigate("/");
            } else {
                showAlert("danger", response.Error, 3000);
                nevigate("/login");
            }
        }
    }

    return (
        <>
            <div className="container-fluid m-auto mt-5">
                <form className="formWidth m-auto">
                    <h2 className="Heading">Login</h2>
                    <label className="form-label" htmlFor="email">Email ID:</label>
                    <input className="form-control mb-3" type="email" id="email" name="email" required onChange={getValues} />

                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-control mb-3" type="password" id="password" name="password" required onChange={getValues} />

                    <button disabled={credentials.email.length < 1 || credentials.password.length < 1} className="btn SKY" onClick={loginHandler}>login</button>
                    <div className="mt-1">Don't have an account ? <NavLink to="/register">create a new account</NavLink></div>
                </form>
            </div>
        </>
    )
}

export default Login

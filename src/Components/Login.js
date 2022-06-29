import { NavLink } from "react-router-dom"
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState(false);

    const loginHandler = (e)=>{
        e.preventDefault();
        if(!email || !pass){
            setErr(true);
            return false; // stop execution 
        }
        
        // console.log("email:",email,"  pass:", pass);
    }

    return (
        <>
            <div className="container-fluid m-auto mt-5">
                <form className="formWidth m-auto">
                    <h2 className="Heading">Login</h2>
                    <label className="form-label" htmlFor="eid">Email ID:</label>
                    <input className="form-control mb-3" type="email" id="eid" name="eid" onChange={(e)=>{setEmail(e.target.value)}} />
                    {err && !email && <p className="errMsg">Enter valid email</p>}

                    <label className="form-label" htmlFor="pass">Password:</label>
                    <input className="form-control mb-3" type="password" id="pass" name="pass" onChange={(e)=>{setPass(e.target.value)}} />
                    {err && !pass && <p className="errMsg">Enter valid password</p>}

                    <button className="btn SKY" onClick={loginHandler}>login</button>
                    <div className="mt-1">Don't have an account ? <NavLink to="/register">create a new account</NavLink></div>
                </form>
            </div>
        </>
    )
}

export default Login

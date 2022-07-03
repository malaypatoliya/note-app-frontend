import AuthContext from "./authContext";

const AuthState = (props) => {


    const loginFunc = async (email, password) => {
        let result = await fetch(`http://localhost:5000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        })
        result = await result.json();
        return result
    }

    const registerFunc = async (name, email, password) => {
        let result = await fetch(`http://localhost:5000/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email, password: password })
        })
        result = await result.json();
        return result
    }

    const getUser = async ()=>{
        let result = await fetch("http://localhost:5000/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })
        result = await result.json();
        return result
    }


    return (
        <AuthContext.Provider value={{ loginFunc, registerFunc, getUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
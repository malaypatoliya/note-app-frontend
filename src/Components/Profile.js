import { useState } from "react";
import { useEffect, useContext } from "react";
import authContext from "../Context/auth/authContext";

const Profile = () => {
    const context = useContext(authContext);
    const { getUser } = context;

    const [user, setuser] = useState({});

    useEffect(()=>{
        getDetails();
    },[])

    const getDetails = async ()=>{
        const response = await getUser();
        setuser({name: response.name, email: response.email, id: response._id});
    }

    return (
        
        <>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </>
    )
}
export default Profile;
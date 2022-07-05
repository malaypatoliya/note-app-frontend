import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useEffect, useContext } from "react";
import authContext from "../Context/auth/authContext";

const Profile = () => {
    const context = useContext(authContext);
    const { getUser } = context;

    const [user, setuser] = useState({});

    useEffect(() => {
        getDetails();
        // eslint-disable-next-line
    }, [])

    const getDetails = async () => {
        const response = await getUser();
        setuser({ name: response.name, email: response.email, id: response._id });
    }

    return (

        <>
            <div className="main">

                <div className="containClass">

                <h2 className="formTitle ">User Profile</h2>
                    <h2 className="user"><i class="far fa-id-badge"></i>{user.id}</h2>
                    <h2 className="user"><i class="far fa-user"></i>{user.name}</h2>
                    <h2 className="user"><i class="far fa-envelope"></i>{user.email}</h2>
                    <div className="userContainer">
                        <NavLink className="btn" to="/" ><i class="fas fa-home"></i>Back to Home</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;
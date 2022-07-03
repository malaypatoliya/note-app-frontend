import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateComponent = () => {
    return (
        <div>
            {
                localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />
            }
        </div>
    )
}

export default PrivateComponent
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNav = () => {
    return (
        <nav className="nav bg-dark align-items-center">
            <NavLink className="fs-3 text-light nav-link active" to="/">Firebase</NavLink>
            <NavLink className="text-light nav-link active" aria-current="page" to="/resetpassword">
                Reset Password
            </NavLink>
            <NavLink className="text-light nav-link active" aria-current="page" to="/deleteaccount">
                Delete Acoount
            </NavLink>
            <NavLink className="text-light nav-link active" aria-current="page" to="/logout">
                Logout
            </NavLink>
        </nav>
    )
}

export default ProfileNav
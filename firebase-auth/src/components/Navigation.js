import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {


    return (
        <nav className="nav bg-dark align-items-center">
            <NavLink className="fs-3 text-light nav-link active" to="/">Firebase</NavLink>
            <NavLink className="text-light nav-link active" aria-current="page" to="/Signin">
                Signin
            </NavLink>
            <NavLink className="text-light nav-link active" aria-current="page" to="/Signup">
                Signup
            </NavLink>
        </nav>
    )
}

export default Navigation
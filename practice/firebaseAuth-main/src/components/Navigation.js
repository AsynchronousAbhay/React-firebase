import React from 'react'
import { NavLink } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import app from "../utility/Configuration";


function Navigation() {
    const auth = getAuth(app);

    const onSignout = (e) => {
        e.preventDefault();
        signOut(auth)
            .then((userSignedout) => {
                console.log(userSignedout);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <nav className="nav bg-dark align-items-center justify-content-between">
            <div className="nav bg-dark align-items-center">
                <NavLink className="fs-3 text-light nav-link active" to="/">Firebase</NavLink>
                <NavLink className="text-light nav-link active" aria-current="page" to="/Signin">
                    Signin
                </NavLink>
                <NavLink className="text-light nav-link active" aria-current="page" to="/Signup">
                    Signup
                </NavLink>
            </div>
            <form onSubmit={onSignout}>
                <button className='me-4 btn btn-danger'>Signout</button>
            </form>
        </nav>
    )
}

export default Navigation
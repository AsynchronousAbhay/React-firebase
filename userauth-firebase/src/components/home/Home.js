import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Navbar</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/signin">Signin</Link>
                            <Link className='nav-link' to="/signup">Signup</Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
            <br />
            <br />
            <br />

            <h2>
                {props.name ? `Welcome - ${props.name}` : "Login Please"}
            </h2>
        </div>
    )
}

export default Home
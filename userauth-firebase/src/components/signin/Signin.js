import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';

const Signin = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");

    const navigate = useNavigate();


    const onSubmitSignHandler = (e) => {
        e.preventDefault();
        if (!Email || !Password ) {
            setMessage("All Fields must not be Empty!")
            return;
        }
        setMessage("");

        signInWithEmailAndPassword(auth, Email, Password)
            .then(async (res) => {
        
                navigate("/");
            })
            .catch((err) => {
                setMessage(err.message);
            })
    };


    return (
        <form onSubmit={onSubmitSignHandler}>
            <h1>Signin User</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <p className='text-danger'>{Message}</p>
            <button type="submit" className="btn btn-primary">Singin</button>
            <br />
            <br />
            <Link className='text-dark text-decoration-none' to='/signup'>
                Doesn't have an account ? Signup.
            </Link>
        </form>
    )
}

export default Signin
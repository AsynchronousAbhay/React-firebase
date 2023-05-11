import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");
    const [Message, setMessage] = useState("");
    const navigate = useNavigate();


    const onSubmitHanlder = (e) => {
        e.preventDefault();
        if (!Email || !Password || !Username) {
            setMessage("All Fields must not be Empty!")
            return;
        }
        setMessage("");

        createUserWithEmailAndPassword(auth, Email, Password)
            .then(async (res) => {
                const user = res.user;
                await updateProfile(user, {
                    displayName: Username,
                });

                navigate("/");
            })
            .catch((err) => {
                setMessage(err.message);
            })
    };

    return (
        <div>
            <form onSubmit={onSubmitHanlder}>
                <h1>Signup User</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
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
                <button type="submit" className="btn btn-primary">Sign up</button>
                <br />
                <br />
                <Link className='text-dark text-decoration-none' to='/signin'>
                    Already have an account ? Signin.
                </Link>
            </form>
        </div>
    )
}

export default Signup
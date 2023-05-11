import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../utility/Configuration";

const Signup = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");
    const [Message, setMessage] = useState("");

    const auth = getAuth(app);


    const onSignupHanlder = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setMessage("Successfully Signed Up!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                setMessage(error.code);
            });
    }

    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <form
                className='w-50 mt-5 d-flex justify-content-center align-items-start flex-column' onSubmit={onSignupHanlder}
            >
                <h2 className='mb-4'>Singup User.</h2>
                {Message ? <p className='text-danger'>{Message}</p> : ""}
                <input
                    className='form-control mb-4'
                    type="text"
                    placeholder='username'
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className='form-control mb-4'
                    type="text"
                    placeholder='@gmail...'
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='form-control mb-4'
                    type="password"
                    placeholder='******'
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='mb-4 btn btn-success'>Signup</button>
                <Link className='text-dark text-decoration-none' to='/Signin'>
                    Already Have an account? Signin.
                </Link>
            </form>
        </div>
    )
}

export default Signup